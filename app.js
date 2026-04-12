// app.js — Pre-Calculus Interactive Learning SPA

import { UNITS, TOTAL_LESSONS } from './data/curriculum.js';
import { renderHeader } from './components/header.js';
import { renderQuiz } from './components/quiz.js';
import { renderMath } from './components/math-renderer.js';

// ============================================================
// PROGRESS MANAGEMENT
// ============================================================
const STORAGE_KEY = 'precalc_progress_v1';
const STREAK_KEY  = 'precalc_streak_v1';

function getProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
  catch { return {}; }
}

function getStreak() {
  try {
    const s = JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDay":""}');
    return s.count || 0;
  } catch { return 0; }
}

function updateStreak() {
  try {
    const s = JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDay":""}');
    const today = new Date().toDateString();
    if (s.lastDay !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      s.count = s.lastDay === yesterday ? s.count + 1 : 1;
      s.lastDay = today;
      localStorage.setItem(STREAK_KEY, JSON.stringify(s));
    }
  } catch {}
}

function setLessonMastered(lessonId, score, total) {
  const p = getProgress();
  const prev = p[lessonId] || {};
  p[lessonId] = {
    status: score / total >= 0.8 ? 'mastered' : 'attempted',
    score,
    total,
    bestScore: Math.max(score, prev.bestScore || 0),
    lastVisited: Date.now(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  updateStreak();
}

function markLessonVisited(lessonId) {
  const p = getProgress();
  if (!p[lessonId]) {
    p[lessonId] = { status: 'in-progress', score: 0, total: 0, lastVisited: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  }
}

function getLessonStatus(lessonId) {
  return getProgress()[lessonId]?.status || 'not-started';
}

function getUnitProgress(unitId) {
  const unit = UNITS.find(u => u.id === unitId);
  if (!unit) return { count: 0, total: 0, pct: 0 };
  const p = getProgress();
  const mastered = unit.lessons.filter(l => p[l.id]?.status === 'mastered').length;
  return { count: mastered, total: unit.lessons.length, pct: Math.round((mastered / unit.lessons.length) * 100) };
}

function getTotalProgress() {
  const p = getProgress();
  const mastered = Object.values(p).filter(v => v.status === 'mastered').length;
  return { count: mastered, total: TOTAL_LESSONS, pct: Math.round((mastered / TOTAL_LESSONS) * 100) };
}

// ============================================================
// UNIT ACCENT COLORS (matches CSS data-unit selectors)
// ============================================================
const ACCENTS = {
  1:  '#6366f1',
  2:  '#8b5cf6',
  3:  '#3b82f6',
  4:  '#06b6d4',
  5:  '#14b8a6',
  6:  '#10b981',
  7:  '#f59e0b',
  8:  '#f97316',
  9:  '#f43f5e',
  10: '#ec4899',
  11: '#a855f7',
};

// ============================================================
// HEADER
// ============================================================
function initHeader() {
  document.getElementById('site-header').innerHTML = renderHeader();
  updateHeaderProgress();

  // Mobile hamburger menu
  const menuBtn = document.getElementById('mobile-menu-btn');
  const nav     = document.getElementById('header-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuBtn.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuBtn.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

function updateHeaderProgress() {
  const { count, total, pct } = getTotalProgress();
  const textEl = document.getElementById('header-progress-text');
  if (textEl) textEl.textContent = `${count}/${total}`;
  const ring = document.getElementById('header-progress-ring-fill');
  if (ring) {
    const r = 8, circ = 2 * Math.PI * r;
    ring.style.strokeDasharray = `${circ}`;
    ring.style.strokeDashoffset = `${circ * (1 - pct / 100)}`;
  }
}

// ============================================================
// ROUTING
// ============================================================
async function handleRoute() {
  const hash  = location.hash.slice(1) || 'home';
  const parts = hash.split('/');
  const page  = parts[0];
  const param = parts[1];

  // Update active nav
  document.querySelectorAll('[data-nav]').forEach(a => {
    a.classList.toggle('active', a.dataset.nav === page || (page === 'home' && a.dataset.nav === 'home'));
  });

  // Snap out (no transition so there's no flash)
  const main = document.getElementById('main-content');
  main.style.transition = 'none';
  main.style.opacity    = '0';
  main.style.transform  = 'translateY(10px)';

  if (page === 'unit' && param) {
    await renderUnitPage(parseInt(param));
  } else if (page === 'lesson' && param) {
    await renderLessonPage(param);
  } else if (page === 'formulas') {
    await renderFormulasPage();
  } else if (page === 'graph') {
    await renderGraphPage();
  } else {
    renderHomePage();
  }

  // Animate in on next frame
  requestAnimationFrame(() => {
    main.style.transition = 'opacity 0.28s ease, transform 0.28s ease';
    main.style.opacity    = '1';
    main.style.transform  = 'translateY(0)';
  });

  updateHeaderProgress();
}

// ============================================================
// HOME PAGE
// ============================================================
function renderHomePage() {
  const { count, total, pct } = getTotalProgress();
  const streak = getStreak();

  document.getElementById('main-content').innerHTML = `
    <section class="hero">
      <div class="container">
        <div class="hero-badge">✦ Pre-Calculus Mastery</div>
        <h1>Learn Pre-Calculus<br>Step by Step</h1>
        <p class="hero-subtitle">
          11 units · 67 lessons · worked examples · practice problems with instant feedback
        </p>
        <div class="hero-stats">
          <div class="hero-stat">
            <div class="hero-stat-value violet">${count}</div>
            <div class="hero-stat-label">Lessons Mastered</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-value cyan">${total}</div>
            <div class="hero-stat-label">Total Lessons</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-value amber">${streak}</div>
            <div class="hero-stat-label">Day Streak</div>
          </div>
        </div>
      </div>
    </section>

    <section class="units-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">All Units</h2>
          <span class="section-subtitle">${pct}% complete</span>
        </div>
        <div class="units-grid">
          ${UNITS.map(unit => {
            const up = getUnitProgress(unit.id);
            const accent = ACCENTS[unit.id];
            return `
              <a href="#unit/${unit.id}" class="unit-card" data-unit="${unit.id}" style="--unit-accent:${accent}">
                <div class="unit-card-header">
                  <div class="unit-number">${unit.icon || unit.id}</div>
                  <span class="unit-lesson-count">${unit.lessons.length} lessons</span>
                </div>
                <h3>${unit.title}</h3>
                <p>${unit.description}</p>
                <div class="unit-progress-bar">
                  <div class="unit-progress-fill" style="width:${up.pct}%"></div>
                </div>
                <div style="display:flex;justify-content:space-between;margin-top:8px">
                  <span style="font-size:0.75rem;color:var(--color-text-muted)">${up.count}/${up.total} mastered</span>
                  <span style="font-size:0.75rem;color:var(--color-text-muted)">${up.pct}%</span>
                </div>
              </a>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}

// ============================================================
// UNIT PAGE
// ============================================================
async function renderUnitPage(unitId) {
  const unit = UNITS.find(u => u.id === unitId);
  if (!unit) { location.hash = '#home'; return; }

  const accent = ACCENTS[unitId];
  const up     = getUnitProgress(unitId);
  const p      = getProgress();

  document.getElementById('main-content').innerHTML = `
    <div class="unit-hero">
      <div class="container">
        <nav class="breadcrumb">
          <a href="#home">Home</a>
          <span class="sep">›</span>
          <span>Unit ${unitId}: ${unit.title}</span>
        </nav>
        <div class="unit-hero-header">
          <div class="unit-hero-icon" style="background:${accent}">${unit.icon || unitId}</div>
          <div>
            <h1>${unit.title}</h1>
          </div>
        </div>
        <p style="max-width:640px">${unit.description}</p>
        <div class="unit-progress-overview">
          <span class="unit-progress-text">${up.count}/${up.total} mastered</span>
          <div class="progress-bar-wide">
            <div class="progress-fill-wide" style="width:${up.pct}%;background:${accent}"></div>
          </div>
          <span class="unit-progress-text">${up.pct}%</span>
        </div>
      </div>
    </div>
    <div class="lessons-list">
      <div class="container">
        ${unit.lessons.map(lesson => {
          const status     = p[lesson.id]?.status || 'not-started';
          const isMastered = status === 'mastered';
          const isStarted  = status === 'in-progress' || status === 'attempted';
          return `
            <a href="#lesson/${lesson.id}" class="lesson-item ${isMastered ? 'completed' : ''}" style="--unit-accent:${accent}">
              <div class="lesson-number">${isMastered ? '✓' : lesson.id}</div>
              <div class="lesson-info">
                <h4>${lesson.title}</h4>
                <p>${lesson.desc}</p>
              </div>
              ${isStarted && !isMastered ? '<span style="font-size:0.75rem;padding:3px 10px;border-radius:12px;background:rgba(245,158,11,0.1);color:var(--color-amber);border:1px solid rgba(245,158,11,0.2);white-space:nowrap">In Progress</span>' : ''}
              ${isMastered ? '<span style="font-size:0.75rem;padding:3px 10px;border-radius:12px;background:rgba(16,185,129,0.1);color:var(--color-emerald);border:1px solid rgba(16,185,129,0.2);white-space:nowrap">Mastered ✓</span>' : ''}
              <span class="lesson-arrow">›</span>
            </a>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// ============================================================
// LESSON PAGE
// ============================================================
const LESSON_CACHE = {};

async function getLessonData(unitId, lessonId) {
  if (LESSON_CACHE[lessonId]) return LESSON_CACHE[lessonId];
  try {
    const mod = await import(`./data/lessons/unit${unitId}.js`);
    (mod.lessons || []).forEach(l => { LESSON_CACHE[l.id] = l; });
    return LESSON_CACHE[lessonId] || null;
  } catch (err) {
    console.error('Could not load lesson data for unit', unitId, err);
    return null;
  }
}

function getPrevNext(lessonId) {
  const all = UNITS.flatMap(u => u.lessons.map(l => ({ ...l, unitId: u.id })));
  const idx = all.findIndex(l => l.id === lessonId);
  return { prev: idx > 0 ? all[idx - 1] : null, next: idx < all.length - 1 ? all[idx + 1] : null };
}

async function renderLessonPage(lessonId) {
  const unitId     = parseInt(lessonId.split('.')[0]);
  const unit       = UNITS.find(u => u.id === unitId);
  const lessonMeta = unit?.lessons.find(l => l.id === lessonId);
  const accent     = ACCENTS[unitId] || '#6366f1';

  if (!unit || !lessonMeta) { location.hash = '#home'; return; }

  const [lesson] = await Promise.all([
    getLessonData(unitId, lessonId),
  ]);
  markLessonVisited(lessonId);

  const { prev, next } = getPrevNext(lessonId);
  const main = document.getElementById('main-content');

  if (!lesson) {
    main.innerHTML = `
      <div class="lesson-page">
        <div class="lesson-container">
          ${breadcrumb(unitId, unit.title, lessonMeta.title)}
          <div class="concept-card" style="margin-top:32px;text-align:center">
            <div style="font-size:3rem;margin-bottom:16px">🚧</div>
            <h2>Lesson Coming Soon</h2>
            <p>This lesson is being developed. Check back soon!</p>
            <a href="#unit/${unitId}" class="btn btn-secondary" style="margin-top:16px;display:inline-flex">← Back to Unit ${unitId}</a>
          </div>
        </div>
      </div>
    `;
    return;
  }

  main.innerHTML = `
    <div class="lesson-page">
      <div class="lesson-container">
        ${breadcrumb(unitId, unit.title, lessonMeta.title)}

        <div class="lesson-header">
          <div style="margin-bottom:8px">
            <span style="font-size:0.8rem;font-weight:600;color:${accent};background:${accent}22;padding:3px 12px;border-radius:12px;border:1px solid ${accent}44">Lesson ${lessonId}</span>
          </div>
          <h1>${lessonMeta.title}</h1>
          <p style="color:var(--color-text-muted);margin:0">${lessonMeta.desc}</p>
          <div class="lesson-nav" role="tablist">
            <button class="lesson-tab active" data-tab="learn">📖 Learn</button>
            <button class="lesson-tab" data-tab="examples">📝 Examples</button>
            <button class="lesson-tab" data-tab="practice">✅ Practice</button>
          </div>
        </div>

        <div id="tab-learn"    class="lesson-section active">${lesson.learn || '<p>Content coming soon.</p>'}</div>
        <div id="tab-examples" class="lesson-section">${renderExamples(lesson.examples)}</div>
        <div id="tab-practice" class="lesson-section"><div id="quiz-mount"></div></div>

        <div style="display:flex;justify-content:space-between;gap:16px;margin-top:48px;padding-top:24px;border-top:1px solid var(--color-border);flex-wrap:wrap">
          ${prev ? `<a href="#lesson/${prev.id}" class="btn btn-secondary">← ${prev.title}</a>` : '<span></span>'}
          <a href="#unit/${unitId}" class="btn btn-secondary">Unit ${unitId} Overview</a>
          ${next ? `<a href="#lesson/${next.id}" class="btn btn-primary">${next.title} →</a>` : '<span></span>'}
        </div>
      </div>
    </div>
  `;

  // Tab switching
  document.querySelectorAll('.lesson-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll('.lesson-tab').forEach(b => b.classList.toggle('active', b === btn));
      document.querySelectorAll('.lesson-section').forEach(s => s.classList.toggle('active', s.id === `tab-${tab}`));

      if (tab === 'practice') {
        const mount = document.getElementById('quiz-mount');
        if (!mount.dataset.initialized) {
          mount.dataset.initialized = 'true';
          renderQuiz(mount, lesson.practice || [], lessonId, accent, setLessonMastered, updateHeaderProgress);
        }
      }
      renderMath(document.getElementById(`tab-${tab}`));
    });
  });

  renderMath(main);
}

function breadcrumb(unitId, unitTitle, lessonTitle) {
  return `
    <nav class="breadcrumb">
      <a href="#home">Home</a>
      <span class="sep">›</span>
      <a href="#unit/${unitId}">Unit ${unitId}: ${unitTitle}</a>
      <span class="sep">›</span>
      <span>${lessonTitle}</span>
    </nav>
  `;
}

function renderExamples(examples) {
  if (!examples || examples.length === 0) {
    return '<div class="concept-card"><p style="color:var(--color-text-muted)">Examples coming soon.</p></div>';
  }
  return examples.map((ex, i) => `
    <div class="example-step">
      <h4><span class="step-number">${i + 1}</span>&nbsp; Example ${i + 1}</h4>
      <div style="padding:14px 18px;background:rgba(124,58,237,0.06);border-radius:8px;margin-bottom:16px;color:var(--color-text-primary);font-size:0.95rem">
        <strong>Problem:</strong> ${ex.problem}
      </div>
      ${ex.steps.map((step, si) => `
        <div style="display:flex;gap:12px;margin-bottom:12px;align-items:flex-start">
          <span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;min-width:22px;border-radius:50%;background:rgba(6,182,212,0.15);color:var(--color-cyan);font-size:0.72rem;font-weight:700;margin-top:2px">${si + 1}</span>
          <p style="margin:0;color:var(--color-text-secondary);font-size:0.93rem;line-height:1.7">${step}</p>
        </div>
      `).join('')}
      <div style="padding:10px 16px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;margin-top:8px">
        <strong style="color:var(--color-emerald)">Answer:</strong>
        <span style="color:var(--color-text-primary);margin-left:6px">${ex.answer}</span>
      </div>
    </div>
  `).join('');
}

// ============================================================
// FORMULAS PAGE
// ============================================================
async function renderFormulasPage() {
  const main = document.getElementById('main-content');
  let formulas = [];
  try {
    const mod = await import('./data/formulas.js');
    formulas = mod.FORMULAS || [];
  } catch { /* formulas empty */ }

  main.innerHTML = `
    <div style="padding:48px 0 80px">
      <div class="container">
        <nav class="breadcrumb">
          <a href="#home">Home</a>
          <span class="sep">›</span>
          <span>Formula Reference</span>
        </nav>
        <h1 style="margin:16px 0 8px">Formula Reference</h1>
        <p style="color:var(--color-text-muted);margin-bottom:32px">All key Pre-Calculus formulas. Search by topic, unit, or keyword.</p>
        <div class="formula-search">
          <span class="search-icon">🔍</span>
          <input type="text" id="formula-search-input"
                 placeholder="Search formulas… (e.g. sine, vector, limit)"
                 oninput="filterFormulas(this.value)" autocomplete="off">
        </div>
        <div id="formula-grid" class="formula-grid">
          ${formulas.map(f => `
            <div class="formula-card" data-keywords="${(f.name + ' ' + (f.tags || []).join(' ') + ' ' + f.unit).toLowerCase()}">
              <h4>${f.unit} — ${f.name}</h4>
              <div class="formula-box" style="margin:0;padding:16px">$$${f.formula}$$</div>
              ${f.notes ? `<p style="margin-top:8px;margin-bottom:0">${f.notes}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  window.filterFormulas = q => {
    const lq = q.toLowerCase().trim();
    document.querySelectorAll('.formula-card').forEach(card => {
      card.style.display = !lq || card.dataset.keywords.includes(lq) ? '' : 'none';
    });
  };

  renderMath(main);
}

// ============================================================
// GRAPH PAGE
// ============================================================
async function renderGraphPage() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div style="padding:48px 0 80px">
      <div class="container">
        <nav class="breadcrumb">
          <a href="#home">Home</a>
          <span class="sep">›</span>
          <span>Function Grapher</span>
        </nav>
        <h1 style="margin:16px 0 8px">Function Grapher</h1>
        <p style="color:var(--color-text-muted);margin-bottom:24px">
          Plot any function of x. Pan by dragging, zoom with scroll or buttons.
          Try <code style="color:var(--color-violet-light)">sin(x)</code>,
          <code style="color:var(--color-violet-light)">x^2</code>,
          <code style="color:var(--color-violet-light)">2^x</code>, and more.
        </p>
        <div id="grapher-mount"></div>
      </div>
    </div>
  `;
  try {
    const { renderGrapher } = await import('./components/grapher.js');
    renderGrapher(document.getElementById('grapher-mount'));
  } catch (err) {
    console.error('Grapher failed to load:', err);
    document.getElementById('grapher-mount').innerHTML = '<p style="color:var(--color-rose)">Could not load the grapher. Please refresh.</p>';
  }
}

// ============================================================
// INIT
// ============================================================
initHeader();
handleRoute();
window.addEventListener('hashchange', () => {
  handleRoute();
  window.scrollTo(0, 0);
});
