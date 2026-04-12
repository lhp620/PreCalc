// components/quiz.js — Interactive Quiz Engine

import { renderMath } from './math-renderer.js';

/**
 * Render a quiz into a mount element.
 * @param {HTMLElement} mount - Container element
 * @param {Array} problems - Array of problem objects
 * @param {string} lessonId - Lesson ID for progress saving
 * @param {string} accent - CSS color for styling
 * @param {Function} onComplete - Called with (lessonId, score, total) on finish
 * @param {Function} onUpdate - Called after progress saved (e.g. refresh header)
 */
export function renderQuiz(mount, problems, lessonId, accent, onComplete, onUpdate) {
  let current = 0;
  let score = 0;
  const results = []; // {answered: bool, correct: bool}

  function render() {
    if (current >= problems.length) {
      showScore();
      return;
    }
    const q = problems[current];
    const diffLabel = current < 2 ? 'Easy' : current < 4 ? 'Medium' : 'Hard';
    const diffColor = current < 2 ? 'var(--color-emerald)' : current < 4 ? 'var(--color-amber)' : 'var(--color-rose)';
    const diffBg    = current < 2 ? 'rgba(16,185,129,0.1)' : current < 4 ? 'rgba(245,158,11,0.1)' : 'rgba(244,63,94,0.1)';
    const diffBorder= current < 2 ? 'rgba(16,185,129,0.25)' : current < 4 ? 'rgba(245,158,11,0.25)' : 'rgba(244,63,94,0.25)';
    mount.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-progress">
          <div class="quiz-progress-bar">
            <div class="quiz-progress-fill" style="width:${(current / problems.length) * 100}%"></div>
          </div>
          <div style="display:flex;align-items:center;gap:10px">
            <span class="quiz-progress-text">Question ${current + 1} of ${problems.length}</span>
            <span style="font-size:0.72rem;font-weight:600;padding:2px 8px;border-radius:10px;background:${diffBg};color:${diffColor};border:1px solid ${diffBorder}">${diffLabel}</span>
          </div>
        </div>
        <div class="quiz-question" role="group" aria-label="Question ${current + 1}">
          <div class="question-text">${q.question}</div>
          ${q.type === 'mc' ? renderMC(q) : renderFill(q)}
          <div class="quiz-feedback" id="feedback" role="alert" aria-live="polite"></div>
          <div class="quiz-actions">
            <button class="btn btn-primary" id="check-btn">Check Answer</button>
            <button class="btn btn-secondary" id="next-btn" style="display:none">
              ${current < problems.length - 1 ? 'Next Question →' : 'See Results'}
            </button>
          </div>
        </div>
      </div>
    `;

    renderMath(mount);

    document.getElementById('check-btn').addEventListener('click', checkAnswer);
    document.getElementById('next-btn').addEventListener('click', () => {
      current++;
      render();
    });

    if (q.type === 'fill') {
      const input = document.getElementById('fill-input');
      if (input) input.addEventListener('keydown', e => { if (e.key === 'Enter') checkAnswer(); });
    }
  }

  function renderMC(q) {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    return `
      <div class="quiz-options" id="options">
        ${q.choices.map((c, i) => `
          <div class="quiz-option" data-idx="${i}" style="cursor:pointer">
            <span class="option-letter">${letters[i]}</span>
            <span>${c}</span>
          </div>
        `).join('')}
      </div>
      <input type="hidden" id="selected-option" value="">
    `;
  }

  function renderFill(q) {
    return `
      <div class="quiz-input-group">
        <input type="text" class="quiz-input" id="fill-input"
               placeholder="Type your answer here…" autocomplete="off">
      </div>
    `;
  }

  function setupMCListeners() {
    const options = mount.querySelectorAll('.quiz-option');
    options.forEach(opt => {
      opt.addEventListener('click', () => {
        if (mount.querySelector('#selected-option').value !== '') return; // already answered
        options.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        mount.querySelector('#selected-option').value = opt.dataset.idx;
      });
    });
  }

  function checkAnswer() {
    const q = problems[current];
    const checkBtn = document.getElementById('check-btn');
    const nextBtn = document.getElementById('next-btn');
    const feedback = document.getElementById('feedback');
    let isCorrect = false;

    if (q.type === 'mc') {
      setupMCListeners(); // ensure listeners on re-render
      const selected = mount.querySelector('#selected-option')?.value;
      if (selected === '') {
        feedback.textContent = 'Please select an answer first.';
        feedback.className = 'quiz-feedback show incorrect';
        return;
      }
      isCorrect = parseInt(selected) === q.correct;
      const options = mount.querySelectorAll('.quiz-option');
      options.forEach((opt, i) => {
        if (i === q.correct) opt.classList.add('correct');
        else if (i === parseInt(selected) && !isCorrect) opt.classList.add('incorrect');
        opt.style.cursor = 'default';
        opt.style.pointerEvents = 'none';
      });
    } else {
      const input = document.getElementById('fill-input');
      const userAnswer = normalizeAnswer(input?.value || '');
      const correctAnswers = [q.answer, ...(q.altAnswers || [])].map(normalizeAnswer);
      isCorrect = correctAnswers.includes(userAnswer);
      if (input) {
        input.classList.add(isCorrect ? 'correct' : 'incorrect');
        input.disabled = true;
      }
    }

    if (isCorrect) score++;

    feedback.innerHTML = isCorrect
      ? `✓ Correct! ${q.explanation}`
      : `✗ Not quite. ${q.explanation}`;
    feedback.className = `quiz-feedback show ${isCorrect ? 'correct' : 'incorrect'}`;

    checkBtn.style.display = 'none';
    nextBtn.style.display = '';

    renderMath(feedback);
  }

  function normalizeAnswer(str) {
    return str.trim().toLowerCase()
      .replace(/\s+/g, '')
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/[−–]/g, '-');
  }

  function showScore() {
    const pct = Math.round((score / problems.length) * 100);
    const mastered = pct >= 80;
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '⭐' : pct >= 60 ? '👍' : '📚';
    const message = pct === 100 ? 'Perfect score! Outstanding!' :
                    pct >= 80 ? 'Great job! Lesson mastered!' :
                    pct >= 60 ? 'Good effort! Review and try again.' :
                    'Keep practicing — you\'ve got this!';

    mount.innerHTML = `
      <div class="quiz-score concept-card">
        <div style="font-size:3.5rem;margin-bottom:16px">${emoji}</div>
        <h2>${pct}% — ${mastered ? 'Mastered!' : 'Keep Going!'}</h2>
        <p>${message}</p>
        <p style="font-size:0.9rem;margin-top:4px;color:var(--color-text-muted)">${score} out of ${problems.length} correct</p>
        <div style="margin-top:24px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-secondary" id="retry-btn">Try Again</button>
          ${mastered ? `<div style="padding:10px 20px;background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.3);border-radius:8px;color:var(--color-emerald);font-weight:600;font-size:0.9rem">✓ Lesson Mastered!</div>` : ''}
        </div>
      </div>
    `;

    onComplete(lessonId, score, problems.length);
    if (onUpdate) onUpdate();

    document.getElementById('retry-btn').addEventListener('click', () => {
      current = 0;
      score = 0;
      render();
    });
  }

  // Attach MC listeners after initial render using event delegation
  mount.addEventListener('click', e => {
    const opt = e.target.closest('.quiz-option');
    if (!opt) return;
    const selected = mount.querySelector('#selected-option');
    if (!selected || selected.value !== '') return;
    mount.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    selected.value = opt.dataset.idx;
  });

  render();
}
