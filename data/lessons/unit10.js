// data/lessons/unit10.js — Unit 10: Limits & Introduction to Calculus

export const lessons = [
  {
    id: '10.1',
    learn: `
      <div class="concept-card">
        <h2>Intuitive Concept of Limits</h2>
        <p>A <strong>limit</strong> describes the value that a function approaches as the input approaches some value. Unlike simply evaluating a function, a limit asks: "What does $f(x)$ get closer and closer to as $x$ gets closer and closer to some number?"</p>

        <div class="formula-box">
          <div class="formula-label">Limit Notation</div>
          $$\\lim_{x \\to a} f(x) = L$$
          <p style="font-size: 0.9em; margin-top: 8px;">This reads: "The limit of $f(x)$ as $x$ approaches $a$ is $L$"</p>
        </div>

        <h3>Approaching from Both Sides</h3>
        <p>For a limit to exist at $x = a$, the function must approach the same value whether we approach $a$ from the left (values less than $a$) or from the right (values greater than $a$). This is crucial—we never actually plug in $x = a$!</p>

        <p><strong>Why?</strong> The limit might exist even if $f(a)$ is undefined, or even if $f(a) \\neq L$. We only care about the behavior <em>near</em> $a$, not <em>at</em> $a$.</p>

        <h3>Estimating Limits Using Tables</h3>
        <p>One practical method is to create a table of $x$ values approaching our target value from both sides, and observe what $f(x)$ approaches:</p>
        <p style="text-align: center; font-family: monospace; font-size: 0.9em;">
          $x$ approaching 2 from left: 1.9, 1.99, 1.999, ... $\\rightarrow$ $f(x)$ approaches some value<br>
          $x$ approaching 2 from right: 2.1, 2.01, 2.001, ... $\\rightarrow$ $f(x)$ approaches the same value
        </p>

        <h3>Limits That Don't Exist</h3>
        <p>A limit <strong>does not exist</strong> when:</p>
        <ul>
          <li><strong>Left and right limits differ:</strong> If $\\lim_{x \\to a^-} f(x) \\neq \\lim_{x \\to a^+} f(x)$</li>
          <li><strong>Function oscillates:</strong> The function bounces back and forth (like $\\sin(1/x)$ near $x=0$)</li>
          <li><strong>Function is unbounded:</strong> $f(x)$ grows infinitely large or small as $x \\to a$</li>
        </ul>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <p><strong>Key Insight:</strong> $\\lim_{x \\to a} f(x) = L$ does NOT require $f(a) = L$. The limit is only about what happens near $a$, not at $a$.</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: `Estimate $\\lim_{x \\to 2} (3x - 1)$ using a table of values.`,
        steps: [
          `Create a table approaching $x = 2$ from both sides:`,
          `<table style="margin: 10px auto; border-collapse: collapse;"><tr><th style="border: 1px solid #ccc; padding: 8px;">$x$</th><td style="border: 1px solid #ccc; padding: 8px;">1.9</td><td style="border: 1px solid #ccc; padding: 8px;">1.99</td><td style="border: 1px solid #ccc; padding: 8px;">1.999</td><td style="border: 1px solid #ccc; padding: 8px;">→ 2</td><td style="border: 1px solid #ccc; padding: 8px;">2.001</td><td style="border: 1px solid #ccc; padding: 8px;">2.01</td><td style="border: 1px solid #ccc; padding: 8px;">2.1</td></tr><tr><th style="border: 1px solid #ccc; padding: 8px;">$f(x) = 3x-1$</th><td style="border: 1px solid #ccc; padding: 8px;">4.7</td><td style="border: 1px solid #ccc; padding: 8px;">4.97</td><td style="border: 1px solid #ccc; padding: 8px;">4.997</td><td style="border: 1px solid #ccc; padding: 8px;">?</td><td style="border: 1px solid #ccc; padding: 8px;">5.003</td><td style="border: 1px solid #ccc; padding: 8px;">5.03</td><td style="border: 1px solid #ccc; padding: 8px;">5.3</td></tr></table>`,
          `From the left ($x \\to 2^-$): values approach 5`,
          `From the right ($x \\to 2^+$): values approach 5`,
          `Both one-sided limits are equal, and they equal 5.`
        ],
        answer: `$$\\lim_{x \\to 2} (3x - 1) = 5$$`
      },
      {
        problem: `Does $\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$ exist? Use algebraic insight (don't just compute).`,
        steps: [
          `Notice that if we substitute $x = 1$ directly: $\\frac{1^2 - 1}{1 - 1} = \\frac{0}{0}$, which is indeterminate.`,
          `However, the limit can still exist! The function is defined and well-behaved for all $x \\neq 1$.`,
          `For $x$ near but not equal to 1, we can factor: $\\frac{x^2 - 1}{x - 1} = \\frac{(x-1)(x+1)}{x-1} = x + 1$ (for $x \\neq 1$)`,
          `As $x \\to 1$, the simplified form $x + 1 \\to 2$`,
          `So the limit exists even though $f(1)$ is undefined.`
        ],
        answer: `$$\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = 2$$`
      },
      {
        problem: `Consider $f(x) = \\begin{cases} x + 1 & \\text{if } x < 2 \\\\ 4 & \\text{if } x = 2 \\\\ 3x - 3 & \\text{if } x > 2 \\end{cases}$. Find $\\lim_{x \\to 2} f(x)$ if it exists.`,
        steps: [
          `Left-hand limit: As $x \\to 2^-$, use the first piece $f(x) = x + 1$, so $\\lim_{x \\to 2^-} f(x) = 2 + 1 = 3$`,
          `Right-hand limit: As $x \\to 2^+$, use the third piece $f(x) = 3x - 3$, so $\\lim_{x \\to 2^+} f(x) = 3(2) - 3 = 3$`,
          `Note: $f(2) = 4$, but this doesn't affect the limit!`,
          `Since both one-sided limits equal 3, the limit exists and equals 3.`
        ],
        answer: `$$\\lim_{x \\to 2} f(x) = 3 \\text{ (even though } f(2) = 4\\text{)}$$`
      }
    ],
    practice: [
      {
        type: 'mc',
        question: `Based on the table below, estimate $\\lim_{x \\to 3} g(x)$:<br><table style="margin: 10px auto; border-collapse: collapse;"><tr><th style="border: 1px solid #ccc; padding: 8px;">$x$</th><td style="border: 1px solid #ccc; padding: 8px;">2.9</td><td style="border: 1px solid #ccc; padding: 8px;">2.99</td><td style="border: 1px solid #ccc; padding: 8px;">3.01</td><td style="border: 1px solid #ccc; padding: 8px;">3.1</td></tr><tr><th style="border: 1px solid #ccc; padding: 8px;">$g(x)$</th><td style="border: 1px solid #ccc; padding: 8px;">7.1</td><td style="border: 1px solid #ccc; padding: 8px;">7.01</td><td style="border: 1px solid #ccc; padding: 8px;">6.99</td><td style="border: 1px solid #ccc; padding: 8px;">6.9</td></tr></table>`,
        choices: ['$6$', '$7$', '$8$', 'The limit does not exist'],
        correct: 1,
        explanation: `From the left, $g(x)$ approaches 7; from the right, $g(x)$ also approaches 7. The limit is 7.`
      },
      {
        type: 'fill',
        question: `If $\\lim_{x \\to -1} f(x) = 5$ and $f(-1) = 2$, does the limit equal the function value? Answer yes or no.`,
        answer: 'no',
        altAnswers: ['No'],
        explanation: `A limit can exist and be different from the function value at that point. The limit describes the behavior near the point, not at it.`
      },
      {
        type: 'mc',
        question: `Which scenario guarantees that a limit does NOT exist at $x = a$?`,
        choices: ['$\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x)$', '$\\lim_{x \\to a^-} f(x) \\neq \\lim_{x \\to a^+} f(x)$', '$f(a)$ is undefined', 'The function is continuous'],
        correct: 1,
        explanation: `If the left-hand and right-hand limits are not equal, the overall limit does not exist. Options A and C don't guarantee the limit fails to exist.`
      },
      {
        type: 'fill',
        question: `For the piecewise function $f(x) = \\begin{cases} 2x & \\text{if } x < 0 \\\\ x^2 & \\text{if } x \\geq 0 \\end{cases}$, what is $\\lim_{x \\to 0} f(x)$?`,
        answer: '0',
        altAnswers: ['0.0'],
        explanation: `Left limit: $\\lim_{x \\to 0^-} 2x = 0$. Right limit: $\\lim_{x \\to 0^+} x^2 = 0$. Both equal 0, so the limit is 0.`
      },
      {
        type: 'mc',
        question: `What does it mean if $\\lim_{x \\to a} f(x)$ involves different behaviors from left and right?`,
        choices: ['The limit equals the average of the two sides', 'The limit does not exist', 'We take the limit from the right by default', 'The function has a vertical asymptote'],
        correct: 1,
        explanation: `When left-hand and right-hand limits differ, the overall limit does not exist. A limit must have a unique value.`
      }
    ]
  },
  {
    id: '10.2',
    learn: `
      <div class="concept-card">
        <h2>Evaluating Limits Algebraically</h2>
        <p>We can often evaluate limits using algebra, rather than just tables or graphs. Several techniques work depending on the form of the expression.</p>

        <h3>Direct Substitution</h3>
        <p>For many functions, we can simply plug in the value:</p>

        <div class="formula-box">
          <div class="formula-label">Direct Substitution</div>
          $$\\lim_{x \\to a} f(x) = f(a) \\quad \\text{(if $f$ is defined and continuous at $a$)}$$
        </div>

        <p><strong>Example:</strong> $\\lim_{x \\to 2} (3x - 1) = 3(2) - 1 = 5$ ✓</p>

        <p>Direct substitution <strong>fails</strong> when we get an indeterminate form like $\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$, $0 \\cdot \\infty$, etc.</p>

        <h3>Indeterminate Form $\\frac{0}{0}$: Factor and Cancel</h3>
        <p>When substitution gives $\\frac{0}{0}$, try factoring and canceling:</p>

        <p><strong>Strategy:</strong> Factor the numerator and denominator, cancel the common factor, then evaluate.</p>

        <p><strong>Example:</strong> $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = \\lim_{x \\to 3} (x+3) = 6$</p>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <p>We can cancel $(x-3)$ even though $x \\neq 3$, because the limit is about values <em>near</em> 3, not at 3.</p>
        </div>

        <h3>Rationalization (Multiply by Conjugate)</h3>
        <p>For limits involving square roots, rationalize by multiplying by the conjugate:</p>

        <p><strong>Strategy:</strong> Multiply numerator and denominator by the conjugate to eliminate radicals, then simplify.</p>

        <p><strong>Example:</strong> $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$</p>

        <p>Multiply by $\\frac{\\sqrt{x} + 2}{\\sqrt{x} + 2}$:</p>

        $$\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4} \\cdot \\frac{\\sqrt{x} + 2}{\\sqrt{x} + 2} = \\lim_{x \\to 4} \\frac{(\\sqrt{x})^2 - 4}{(x-4)(\\sqrt{x}+2)} = \\lim_{x \\to 4} \\frac{x - 4}{(x-4)(\\sqrt{x}+2)}$$

        $$= \\lim_{x \\to 4} \\frac{1}{\\sqrt{x}+2} = \\frac{1}{2+2} = \\frac{1}{4}$$

        <h3>Special Limit: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$</h3>
        <p>This is a famous limit that appears frequently in calculus:</p>

        <div class="formula-box">
          <div class="formula-label">Sine Limit (in radians)</div>
          $$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$
        </div>

        <p><strong>Note:</strong> This limit is fundamental and you should memorize it. It's often used in more complex limits involving trigonometric functions.</p>
      </div>
    `,
    examples: [
      {
        problem: 'Evaluate $\\\\lim_{x \\\\to 5} \\\\frac{x^2 - 25}{x - 5}$ using factoring.',
        steps: [
          `Substitute $x = 5$: $\\frac{25 - 25}{5 - 5} = \\frac{0}{0}$ ✗ (indeterminate)`,
          `Factor the numerator: $x^2 - 25 = (x-5)(x+5)$`,
          `Rewrite: $\\lim_{x \\to 5} \\frac{(x-5)(x+5)}{x-5}$`,
          `Cancel: $\\lim_{x \\to 5} (x+5)$`,
          `Now substitute: $5 + 5 = 10$`
        ],
        answer: `$$\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5} = 10$$`
      },
      {
        problem: `Evaluate $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$.`,
        steps: [
          `Rewrite: $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x} = \\lim_{x \\to 0} \\frac{\\sin(3x)}{x} \\cdot \\frac{3}{3}$`,
          `Rearrange: $\\lim_{x \\to 0} 3 \\cdot \\frac{\\sin(3x)}{3x}$`,
          `Let $u = 3x$. As $x \\to 0$, we have $u \\to 0$`,
          `Apply the special limit: $3 \\cdot \\lim_{u \\to 0} \\frac{\\sin u}{u} = 3 \\cdot 1 = 3$`
        ],
        answer: `$$\\lim_{x \\to 0} \\frac{\\sin(3x)}{x} = 3$$`
      },
      {
        problem: `Evaluate $\\lim_{h \\to 0} \\frac{\\sqrt{h+4} - 2}{h}$ using rationalization.`,
        steps: [
          `Multiply numerator and denominator by the conjugate $\\sqrt{h+4} + 2$:`,
          `$$\\frac{\\sqrt{h+4} - 2}{h} \\cdot \\frac{\\sqrt{h+4} + 2}{\\sqrt{h+4} + 2}$$`,
          `Numerator: $(\\sqrt{h+4} - 2)(\\sqrt{h+4} + 2) = (h+4) - 4 = h$`,
          `Result: $\\frac{h}{h(\\sqrt{h+4} + 2)} = \\frac{1}{\\sqrt{h+4} + 2}$ (for $h \\neq 0$)`,
          `Now evaluate: $\\lim_{h \\to 0} \\frac{1}{\\sqrt{h+4} + 2} = \\frac{1}{\\sqrt{4} + 2} = \\frac{1}{4}$`
        ],
        answer: `$$\\lim_{h \\to 0} \\frac{\\sqrt{h+4} - 2}{h} = \\frac{1}{4}$$`
      }
    ],
    practice: [
      {
        type: 'mc',
        question: `What is $\\lim_{x \\to 2} (x^2 + 3x - 1)$?`,
        choices: ['$5$', '$9$', '$7$', '$11$'],
        correct: 1,
        explanation: `Direct substitution works: $(2)^2 + 3(2) - 1 = 4 + 6 - 1 = 9$.`
      },
      {
        type: 'fill',
        question: `Evaluate $\\lim_{x \\to 3} \\frac{x^2 - 9}{x^2 - x - 6}$. (Hint: factor both numerator and denominator.)`,
        answer: '6/5',
        altAnswers: ['1.2', '6 / 5'],
        explanation: 'Factor: $x^2 - 9 = (x-3)(x+3)$ and $x^2 - x - 6 = (x-3)(x+2)$. Cancel $(x-3)$: $\\\\frac{x+3}{x+2}$. Evaluate at $x = 3$: $\\\\frac{6}{5}$.'
      },
      {
        type: 'mc',
        question: `When evaluating $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$, the first step should be:`,
        choices: ['Divide by $(x-1)$ on both numerator and denominator', 'Factor $x^3 - 1 = (x-1)(x^2+x+1)$', 'Use the special sine limit', 'Multiply by the conjugate'],
        correct: 1,
        explanation: `$x^3 - 1$ factors as $(x-1)(x^2+x+1)$, allowing cancellation. Factoring is the right approach.`
      },
      {
        type: 'fill',
        question: `What is $\\lim_{x \\to 0} \\frac{\\sin(5x)}{x}$?`,
        answer: '5',
        altAnswers: ['5.0'],
        explanation: `Rewrite as $\\lim_{x \\to 0} 5 \\cdot \\frac{\\sin(5x)}{5x} = 5 \\cdot 1 = 5$ using the special limit.`
      }
    ]
  },
  {
    id: '10.3',
    learn: `
      <div class="concept-card">
        <h2>One-Sided Limits & Limits at Infinity</h2>

        <h3>One-Sided Limits</h3>
        <p>A <strong>one-sided limit</strong> examines the behavior as we approach a point from only one direction.</p>

        <div class="formula-box">
          <div class="formula-label">One-Sided Limit Notation</div>
          $$\\lim_{x \\to a^-} f(x) = L_1 \\quad \\text{(left-hand limit)}$$
          $$\\lim_{x \\to a^+} f(x) = L_2 \\quad \\text{(right-hand limit)}$$
        </div>

        <p>The overall limit $\\lim_{x \\to a} f(x)$ exists and equals $L$ if and only if both one-sided limits exist and are equal: $L_1 = L_2 = L$.</p>

        <p><strong>Use case:</strong> One-sided limits are essential for piecewise functions, absolute values, and understanding jump discontinuities.</p>

        <h3>Limits at Infinity</h3>
        <p>As $x$ gets arbitrarily large (or small), what does $f(x)$ approach? These limits describe the <strong>end behavior</strong> of a function and lead to <strong>horizontal asymptotes</strong>.</p>

        <div class="formula-box">
          <div class="formula-label">Limits at Infinity</div>
          $$\\lim_{x \\to \\infty} f(x) = L \\quad \\text{or} \\quad \\lim_{x \\to -\\infty} f(x) = L$$
        </div>

        <p>If either limit equals $L$, the horizontal line $y = L$ is a horizontal asymptote.</p>

        <h3>Degree Dominance for Rational Functions</h3>
        <p>For rational functions $\\frac{P(x)}{Q(x)}$ where $P$ and $Q$ are polynomials, the behavior at infinity depends on comparing degrees:</p>

        <ul>
          <li><strong>Degree of numerator < degree of denominator:</strong> $\\lim_{x \\to \\pm\\infty} \\frac{P(x)}{Q(x)} = 0$</li>
          <li><strong>Degree of numerator = degree of denominator:</strong> $\\lim_{x \\to \\pm\\infty} \\frac{P(x)}{Q(x)} = \\frac{\\text{leading coefficient of } P}{\\text{leading coefficient of } Q}$</li>
          <li><strong>Degree of numerator > degree of denominator:</strong> $\\lim_{x \\to \\pm\\infty} \\frac{P(x)}{Q(x)} = \\pm\\infty$ (sign depends on leading coefficients and direction)</li>
        </ul>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <p><strong>Quick Rule:</strong> For large $|x|$, a rational function is dominated by the ratio of the leading terms. Divide numerator and denominator by the highest power of $x$ that appears.</p>
        </div>

        <h3>Example: Finding Horizontal Asymptotes</h3>
        <p>For $f(x) = \\frac{2x^2 + 3x - 1}{5x^2 - 7}$:</p>
        <p>Since the numerator and denominator both have degree 2, the limit is the ratio of leading coefficients: $\\frac{2}{5}$</p>
        <p>Thus, $y = \\frac{2}{5}$ is a horizontal asymptote.</p>

        <p>For $f(x) = \\frac{x^3}{x^2 + 1}$:</p>
        <p>Numerator has degree 3, denominator has degree 2, so the degree of numerator is greater. As $x \\to \\infty$, $f(x) \\to \\infty$; as $x \\to -\\infty$, $f(x) \\to -\\infty$.</p>
      </div>
    `,
    examples: [
      {
        problem: `For $f(x) = \\begin{cases} x^2 & \\text{if } x < 1 \\\\ 2x & \\text{if } x \\geq 1 \\end{cases}$, find $\\lim_{x \\to 1^-}$ and $\\lim_{x \\to 1^+}$.`,
        steps: [
          `For $\\lim_{x \\to 1^-}$: We approach from the left, so $x < 1$, using $f(x) = x^2$`,
          `$$\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^-} x^2 = 1^2 = 1$$`,
          `For $\\lim_{x \\to 1^+}$: We approach from the right, so $x > 1$, using $f(x) = 2x$`,
          `$$\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^+} 2x = 2(1) = 2$$`,
          `Since $1 \\neq 2$, the overall limit does not exist.`
        ],
        answer: `$$\\lim_{x \\to 1^-} f(x) = 1, \\quad \\lim_{x \\to 1^+} f(x) = 2, \\quad \\lim_{x \\to 1} f(x) \\text{ does not exist}$$`
      },
      {
        problem: `Find all horizontal asymptotes of $f(x) = \\frac{3x^2 - 5x}{-2x^2 + 4x + 1}$.`,
        steps: [
          `The numerator has degree 2 (leading term $3x^2$)`,
          `The denominator has degree 2 (leading term $-2x^2$)`,
          `Since degrees are equal, find the ratio of leading coefficients: $\\frac{3}{-2} = -\\frac{3}{2}$`,
          `Therefore: $\\lim_{x \\to \\infty} f(x) = -\\frac{3}{2}$ and $\\lim_{x \\to -\\infty} f(x) = -\\frac{3}{2}$`
        ],
        answer: `The horizontal asymptote is $y = -\\frac{3}{2}$`
      },
      {
        problem: `Find $\\lim_{x \\to \\infty} \\frac{5x^4 - 2x^2 + 1}{x^3 + 7x}$.`,
        steps: [
          `Numerator degree: 4 (leading term $5x^4$)`,
          `Denominator degree: 3`,
          `Since degree of numerator > degree of denominator, the limit is $\\pm\\infty$`,
          `For large positive $x$: $\\frac{5x^4}{x^3} = 5x \\to \\infty$`,
          'For large negative $x$: $\\\\frac{5x^4}{x^3} = 5x \\\\to -\\\\infty$, so no horizontal asymptote exists.'
        ],
        answer: `$$\\lim_{x \\to \\infty} \\frac{5x^4 - 2x^2 + 1}{x^3 + 7x} = \\infty$$`
      }
    ],
    practice: [
      {
        type: 'mc',
        question: `For $f(x) = |x - 2|$, what is $\\lim_{x \\to 2^-} f(x)$?`,
        choices: ['$-2$', '$0$', '$2$', 'Does not exist'],
        correct: 1,
        explanation: `As $x \\to 2^-$ (from the left), $x < 2$, so $|x - 2| = -(x-2) = 2 - x \\to 0$.`
      },
      {
        type: 'fill',
        question: `What is $\\lim_{x \\to \\infty} \\frac{4x^3}{2x^3 + 5}$?`,
        answer: '2',
        altAnswers: ['2.0'],
        explanation: `Equal degree (3): ratio of leading coefficients is $\\frac{4}{2} = 2$.`
      },
      {
        type: 'mc',
        question: `The function $f(x) = \\frac{x}{x^2 + 1}$ has horizontal asymptotes:`,
        choices: ['$y = 0$ only', '$y = 1$ only', '$y = 1$ and $y = -1$', 'No horizontal asymptotes'],
        correct: 0,
        explanation: `Degree of numerator (1) < degree of denominator (2), so the limit as $x \\to \\pm\\infty$ is 0. Horizontal asymptote: $y = 0$.`
      },
      {
        type: 'fill',
        question: `If $g(x) = \\frac{2x - 1}{x + 3}$, what is $\\lim_{x \\to -\\infty} g(x)$?`,
        answer: '2',
        altAnswers: ['2.0'],
        explanation: `Equal degree (1): ratio of leading coefficients is $\\frac{2}{1} = 2$.`
      },
      {
        type: 'mc',
        question: `Which of the following has a horizontal asymptote at $y = 0$?`,
        choices: ['$f(x) = \\frac{x^2}{x+1}$', '$f(x) = \\frac{1}{x+1}$', '$f(x) = \\frac{x}{x^2+1}$', 'Both B and C'],
        correct: 3,
        explanation: `B: degree 0 < degree 1, so limit is 0. C: degree 1 < degree 2, so limit is 0. A has limit $\\infty$.`
      }
    ]
  },
  {
    id: '10.4',
    learn: `
      <div class="concept-card">
        <h2>Continuity</h2>
        <p>A function is <strong>continuous</strong> at a point if there's no "break" in the graph at that point—the function is connected. Continuity requires three conditions:</p>

        <div class="formula-box">
          <div class="formula-label">Definition of Continuity at $x = a$</div>
          <p>A function $f$ is continuous at $x = a$ if and only if:</p>
          <ol style="margin: 10px 0;">
            <li>$f(a)$ exists (the function is defined at $a$)</li>
            <li>$\\lim_{x \\to a} f(x)$ exists</li>
            <li>$\\lim_{x \\to a} f(x) = f(a)$</li>
          </ol>
        </div>

        <p>If any of these three conditions fails, the function is <strong>discontinuous</strong> at $a$.</p>

        <h3>Types of Discontinuities</h3>

        <p><strong>Removable Discontinuity (Hole):</strong></p>
        <ul>
          <li>The limit exists but either $f(a)$ is undefined or $f(a) \\neq \\lim_{x \\to a} f(x)$</li>
          <li>The "hole" can be "filled" by redefining $f(a) = \\lim_{x \\to a} f(x)$</li>
          <li>Example: $f(x) = \\frac{x^2 - 1}{x - 1}$ has a hole at $x = 1$</li>
        </ul>

        <p><strong>Jump Discontinuity:</strong></p>
        <ul>
          <li>The one-sided limits exist but are not equal: $\\lim_{x \\to a^-} f(x) \\neq \\lim_{x \\to a^+} f(x)$</li>
          <li>Cannot be removed; the function truly "jumps"</li>
          <li>Common in piecewise functions</li>
        </ul>

        <p><strong>Infinite Discontinuity (Asymptote):</strong></p>
        <ul>
          <li>The function grows unbounded: $\\lim_{x \\to a} f(x) = \\pm\\infty$</li>
          <li>Occurs at vertical asymptotes</li>
          <li>Example: $f(x) = \\frac{1}{x}$ at $x = 0$</li>
        </ul>

        <h3>The Intermediate Value Theorem (IVT)</h3>
        <p>IVT is a powerful consequence of continuity:</p>

        <div class="formula-box">
          <div class="formula-label">Intermediate Value Theorem</div>
          <p>If $f$ is continuous on $[a, b]$ and $N$ is any value between $f(a)$ and $f(b)$, then there exists at least one point $c$ in $(a, b)$ where $f(c) = N$.</p>
        </div>

        <p><strong>Intuition:</strong> A continuous function must pass through every $y$-value between its starting and ending heights.</p>

        <p><strong>Practical use:</strong> To show that an equation $f(x) = 0$ has a solution in an interval $[a, b]$, show that $f(a)$ and $f(b)$ have opposite signs (and $f$ is continuous). By IVT, there must be a root in between.</p>
      </div>
    `,
    examples: [
      {
        problem: `Classify the discontinuity at $x = 2$ for $f(x) = \\frac{x^2 - 4}{x - 2}$.`,
        steps: [
          `First, check if $f(2)$ is defined: $\\frac{4 - 4}{2 - 2} = \\frac{0}{0}$ ✗ (undefined)`,
          `Find the limit: $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x+2) = 4$`,
          `The limit exists (equals 4) but $f(2)$ is undefined.`,
          `This is a <strong>removable discontinuity</strong> (a hole at $(2, 4)$).`,
          `We could "remove" it by redefining: $f(2) = 4$`
        ],
        answer: `Removable discontinuity (hole) at $x = 2$. The limit is 4, but the function is undefined there.`
      },
      {
        problem: `Classify the discontinuity at $x = 1$ for $f(x) = \\begin{cases} x + 2 & \\text{if } x < 1 \\\\ 5 & \\text{if } x = 1 \\\\ 3x & \\text{if } x > 1 \\end{cases}$`,
        steps: [
          `$f(1) = 5$ ✓ (defined)`,
          `Left-hand limit: $\\lim_{x \\to 1^-} (x+2) = 3$`,
          `Right-hand limit: $\\lim_{x \\to 1^+} 3x = 3$`,
          `Overall limit: $\\lim_{x \\to 1} f(x) = 3$`,
          `Check continuity: $f(1) = 5 \\neq 3 = \\lim_{x \\to 1} f(x)$`,
          `This is a <strong>removable discontinuity</strong> because the limit exists but doesn't equal $f(1)$.`
        ],
        answer: `Removable discontinuity at $x = 1$. The limit is 3, but $f(1) = 5$.`
      },
      {
        problem: `Use the Intermediate Value Theorem to show that $x^3 - 2x - 5 = 0$ has a solution in the interval $[2, 3]$.`,
        steps: [
          `Let $f(x) = x^3 - 2x - 5$. This is a polynomial, so it's continuous everywhere.`,
          `Evaluate at the endpoints:`,
          `$f(2) = 8 - 4 - 5 = -1 < 0$`,
          `$f(3) = 27 - 6 - 5 = 16 > 0$`,
          `Since $f$ is continuous on $[2, 3]$ and $f(2) < 0 < f(3)$, by IVT there exists $c \\in (2, 3)$ where $f(c) = 0$.`,
          `Therefore, the equation has at least one solution in $[2, 3]$.`
        ],
        answer: `By IVT: $f(2) = -1 < 0$ and $f(3) = 16 > 0$, so there exists $c \\in (2,3)$ with $f(c) = 0$.`
      }
    ],
    practice: [
      {
        type: 'mc',
        question: `For $f(x) = \\begin{cases} 2x & \\text{if } x \\neq 3 \\\\ 10 & \\text{if } x = 3 \\end{cases}$, is $f$ continuous at $x = 3$?`,
        choices: ['Yes', 'No, removable discontinuity', 'No, jump discontinuity', 'No, infinite discontinuity'],
        correct: 1,
        explanation: `$f(3) = 10$ but $\\lim_{x \\to 3} 2x = 6$. The limit exists but doesn't equal $f(3)$, so it's removable.`
      },
      {
        type: 'fill',
        question: `Identify the type of discontinuity at $x = 0$ for $f(x) = \\frac{1}{x^2}$. Answer with one word.`,
        answer: 'infinite',
        altAnswers: ['Infinite'],
        explanation: `As $x \\to 0$, $\\frac{1}{x^2} \\to \\infty$. This is an infinite discontinuity (vertical asymptote).`
      },
      {
        type: 'mc',
        question: `Which function is continuous at $x = 2$?`,
        choices: ['$f(x) = \\frac{1}{x-2}$', '$f(x) = \\frac{x^2-4}{x-2}$', '$f(x) = x^3 - 5x + 1$', '$f(x) = |x-2|/( x-2)$'],
        correct: 2,
        explanation: `A: vertical asymptote at $x=2$. B: hole at $x=2$. D: jump discontinuity. C: polynomial, continuous everywhere.`
      },
      {
        type: 'fill',
        question: `If $g(x) = x^2$ on $[-1, 2]$, use IVT to confirm that there exists a value where $g(x) = 2$. What is that value?`,
        answer: 'sqrt(2)',
        altAnswers: ['√2', 'Sqrt(2)'],
        explanation: `$g(-1) = 1 < 2$ and $g(2) = 4 > 2$. By IVT, there exists $c \\in (-1,2)$ with $g(c) = 2$. Since $x^2 = 2$, we have $x = \\sqrt{2} \\approx 1.414$.`
      }
    ]
  },
  {
    id: '10.5',
    learn: `
      <div class="concept-card">
        <h2>Rates of Change</h2>
        <p>A <strong>rate of change</strong> measures how fast a quantity changes. In calculus, we study both average and instantaneous rates of change.</p>

        <h3>Average Rate of Change</h3>
        <p>The <strong>average rate of change</strong> of a function over an interval $[a, b]$ is the slope of the line connecting two points on the graph.</p>

        <div class="formula-box">
          <div class="formula-label">Average Rate of Change</div>
          $$\\text{Average Rate} = \\frac{\\Delta f}{\\Delta x} = \\frac{f(b) - f(a)}{b - a}$$
          <p style="font-size: 0.9em; margin-top: 8px;">This is the slope of the <strong>secant line</strong> through points $(a, f(a))$ and $(b, f(b))$.</p>
        </div>

        <p><strong>Interpretation:</strong> It tells us how much, on average, the output changes per unit change in input over the interval.</p>

        <p><strong>Example:</strong> If a car travels 200 miles in 4 hours, the average speed is $\\frac{200 \\text{ mi}}{4 \\text{ hr}} = 50 \\text{ mph}$.</p>

        <h3>Instantaneous Rate of Change</h3>
        <p>The <strong>instantaneous rate of change</strong> at a specific point $x = a$ is the slope of the line <em>tangent</em> to the curve at that point.</p>

        <p>We find it by taking the limit of average rates as the interval shrinks to zero:</p>

        <div class="formula-box">
          <div class="formula-label">Instantaneous Rate of Change</div>
          $$\\text{Instantaneous Rate at } a = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$
          <p style="font-size: 0.9em; margin-top: 8px;">This is the slope of the <strong>tangent line</strong> at $(a, f(a))$. This limit is called the <strong>derivative</strong> of $f$ at $a$, denoted $f'(a)$.</p>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <p><strong>Intuition:</strong> To find the instantaneous rate at one point, we squeeze the interval smaller and smaller. The secant line becomes the tangent line as the interval vanishes.</p>
        </div>

        <h3>Geometric Interpretation</h3>
        <p><strong>Average rate:</strong> Slope of secant line (connects two points)</p>
        <p><strong>Instantaneous rate:</strong> Slope of tangent line (touches at one point)</p>

        <p>The derivative is the instantaneous rate of change—a foundational concept in calculus.</p>
      </div>
    `,
    examples: [
      {
        problem: `A ball is dropped from a height, and its height after $t$ seconds is $h(t) = 100 - 5t^2$ feet. Find the average rate of change from $t = 1$ to $t = 3$.`,
        steps: [
          `Use the formula: $\\frac{\\Delta h}{\\Delta t} = \\frac{h(3) - h(1)}{3 - 1}$`,
          `Calculate $h(3) = 100 - 5(3)^2 = 100 - 45 = 55$ feet`,
          `Calculate $h(1) = 100 - 5(1)^2 = 100 - 5 = 95$ feet`,
          `Average rate: $\\frac{55 - 95}{3 - 1} = \\frac{-40}{2} = -20$ feet per second`,
          `The negative sign indicates the height is decreasing on average.`
        ],
        answer: `The average rate of change is $-20$ feet per second.`
      },
      {
        problem: `For $f(x) = x^2$, estimate the instantaneous rate of change at $x = 2$ using smaller and smaller intervals.`,
        steps: [
          `Calculate the average rate from $x = 2$ to $x = 2.1$: $\\frac{(2.1)^2 - 2^2}{0.1} = \\frac{4.41 - 4}{0.1} = \\frac{0.41}{0.1} = 4.1$`,
          `From $x = 2$ to $x = 2.01$: $\\frac{(2.01)^2 - 4}{0.01} = \\frac{4.0401 - 4}{0.01} = \\frac{0.0401}{0.01} = 4.01$`,
          `From $x = 2$ to $x = 2.001$: $\\frac{(2.001)^2 - 4}{0.001} = \\frac{4.004001 - 4}{0.001} \\approx 4.001$`,
          `As the interval shrinks, the rate approaches 4.`,
          `The instantaneous rate of change at $x = 2$ is approximately 4.`
        ],
        answer: `The instantaneous rate of change at $x = 2$ is approximately $4$ (exactly 4, which we'll verify in Lesson 10.6).`
      },
      {
        problem: `Use the formal limit definition to find the instantaneous rate of change of $f(x) = 2x + 3$ at $x = 5$.`,
        steps: [
          `Apply the limit definition: $\\lim_{h \\to 0} \\frac{f(5+h) - f(5)}{h}$`,
          `Calculate $f(5+h) = 2(5+h) + 3 = 10 + 2h + 3 = 13 + 2h$`,
          `Calculate $f(5) = 2(5) + 3 = 13$`,
          `Substitute: $\\lim_{h \\to 0} \\frac{(13 + 2h) - 13}{h} = \\lim_{h \\to 0} \\frac{2h}{h} = \\lim_{h \\to 0} 2 = 2$`,
          `The instantaneous rate is 2, which makes sense because $f(x) = 2x + 3$ is linear with slope 2.`
        ],
        answer: `The instantaneous rate of change at $x = 5$ is $2$.`
      }
    ],
    practice: [
      {
        type: 'fill',
        question: `A function $f(x) = x^2 - 3x$ changes from $x = 1$ to $x = 4$. What is the average rate of change?`,
        answer: '2',
        altAnswers: ['2.0'],
        explanation: `$f(4) = 16 - 12 = 4$ and $f(1) = 1 - 3 = -2$. Average rate: $\\frac{4 - (-2)}{4 - 1} = \\frac{6}{3} = 2$.`
      },
      {
        type: 'mc',
        question: `What does a negative average rate of change indicate?`,
        choices: ['The function is always negative', 'The function is decreasing on average over the interval', 'The function has no real values', 'The input must be negative'],
        correct: 1,
        explanation: `A negative rate means the output is decreasing relative to the input over that interval.`
      },
      {
        type: 'fill',
        question: `For $f(x) = 3x$, what is the instantaneous rate of change at any point? (Hint: use the limit definition.)`,
        answer: '3',
        altAnswers: ['3.0'],
        explanation: `$\\lim_{h \\to 0} \\frac{3(a+h) - 3a}{h} = \\lim_{h \\to 0} \\frac{3h}{h} = 3$ for any $a$.`
      },
      {
        type: 'mc',
        question: `The instantaneous rate of change is most closely related to:`,
        choices: ['The average of all function values', 'The slope of the secant line', 'The slope of the tangent line', 'The y-intercept of the function'],
        correct: 2,
        explanation: `The instantaneous rate of change is the slope of the tangent line at a point, not the secant line.`
      }
    ]
  },
  {
    id: '10.6',
    learn: `
      <div class="concept-card">
        <h2>Preview of the Derivative</h2>
        <p>The <strong>derivative</strong> is one of the central concepts in calculus. It formalizes the idea of the instantaneous rate of change and the slope of a tangent line.</p>

        <div class="formula-box">
          <div class="formula-label">Definition of the Derivative</div>
          $$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$
          <p style="font-size: 0.9em; margin-top: 8px;">$f'(a)$ (read "$f$ prime of $a$") is the derivative of $f$ at $x = a$, representing the instantaneous rate of change.</p>
        </div>

        <p><strong>Alternative form:</strong> $f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$ (approaching $a$ instead of using a small step $h$)</p>

        <h3>Geometric Meaning</h3>
        <p>The derivative $f'(a)$ is the <strong>slope of the tangent line</strong> to the curve $y = f(x)$ at the point $(a, f(a))$.</p>

        <h3>The Tangent Line Equation</h3>
        <p>Once we have the slope $m = f'(a)$ and a point $(a, f(a))$, we can write the equation of the tangent line using point-slope form:</p>

        <div class="formula-box">
          <div class="formula-label">Equation of the Tangent Line</div>
          $$y - f(a) = f'(a)(x - a)$$
          <p style="font-size: 0.9em; margin-top: 8px;">Or in slope-intercept form: $y = f'(a)x + [f(a) - a \\cdot f'(a)]$</p>
        </div>

        <h3>Derivatives of Basic Functions</h3>
        <p>Though we focus on computing derivatives from first principles here, you'll eventually learn shortcuts:</p>
        <ul>
          <li>Derivative of a constant: $f(x) = c \\Rightarrow f'(x) = 0$</li>
          <li>Derivative of a linear function: $f(x) = mx + b \\Rightarrow f'(x) = m$</li>
          <li>Power rule (preview): $f(x) = x^n \\Rightarrow f'(x) = nx^{n-1}$</li>
        </ul>

        <p>But here, we compute derivatives directly from the limit definition.</p>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <p><strong>Key Insight:</strong> The derivative tells us the <em>rate at which</em> a function is changing at a specific instant. It's like the speedometer reading (instantaneous speed) vs. average speed over a trip.</p>
        </div>

        <h3>When Does a Derivative Exist?</h3>
        <p>A function has a derivative at $x = a$ if:</p>
        <ul>
          <li>The function is continuous at $a$</li>
          <li>The left-hand and right-hand limits of $\\frac{f(x) - f(a)}{x - a}$ are equal (the tangent line doesn't have a "sharp corner")</li>
        </ul>

        <p>A sharp corner, cusp, or vertical tangent means the derivative doesn't exist at that point.</p>
      </div>
    `,
    examples: [
      {
        problem: `Find the derivative of $f(x) = x^2 - 5x$ at $x = 3$ using the limit definition.`,
        steps: [
          `Use: $f'(3) = \\lim_{h \\to 0} \\frac{f(3+h) - f(3)}{h}$`,
          `Calculate $f(3+h) = (3+h)^2 - 5(3+h) = 9 + 6h + h^2 - 15 - 5h = h^2 + h - 6$`,
          `Calculate $f(3) = 9 - 15 = -6$`,
          `Substitute: $f'(3) = \\lim_{h \\to 0} \\frac{(h^2 + h - 6) - (-6)}{h} = \\lim_{h \\to 0} \\frac{h^2 + h}{h}$`,
          `Factor: $\\lim_{h \\to 0} \\frac{h(h + 1)}{h} = \\lim_{h \\to 0} (h + 1) = 1$`
        ],
        answer: `$$f'(3) = 1$$`
      },
      {
        problem: `Find the equation of the tangent line to $f(x) = x^2 + 2$ at the point where $x = 1$.`,
        steps: [
          `First, find $f(1) = 1^2 + 2 = 3$, so the point is $(1, 3)$`,
          `Find the derivative at $x = 1$: $f'(1) = \\lim_{h \\to 0} \\frac{f(1+h) - f(1)}{h}$`,
          `$f(1+h) = (1+h)^2 + 2 = 1 + 2h + h^2 + 2 = 3 + 2h + h^2$`,
          `$f'(1) = \\lim_{h \\to 0} \\frac{(3 + 2h + h^2) - 3}{h} = \\lim_{h \\to 0} \\frac{2h + h^2}{h} = \\lim_{h \\to 0} (2 + h) = 2$`,
          `Use point-slope form with slope $m = 2$ and point $(1, 3)$:`,
          `$y - 3 = 2(x - 1)$`,
          `$y - 3 = 2x - 2$`,
          `$y = 2x + 1$`
        ],
        answer: `The tangent line is $y = 2x + 1$.`
      },
      {
        problem: `Use the limit definition to find $f'(2)$ for $f(x) = \\frac{1}{x}$.`,
        steps: [
          `$f'(2) = \\lim_{h \\to 0} \\frac{f(2+h) - f(2)}{h} = \\lim_{h \\to 0} \\frac{\\frac{1}{2+h} - \\frac{1}{2}}{h}$`,
          `Find a common denominator for the numerator: $\\frac{1}{2+h} - \\frac{1}{2} = \\frac{2 - (2+h)}{2(2+h)} = \\frac{-h}{2(2+h)}$`,
          `Substitute: $\\lim_{h \\to 0} \\frac{\\frac{-h}{2(2+h)}}{h} = \\lim_{h \\to 0} \\frac{-h}{h \\cdot 2(2+h)} = \\lim_{h \\to 0} \\frac{-1}{2(2+h)}$`,
          `Evaluate: $\\frac{-1}{2(2+0)} = \\frac{-1}{4}$`
        ],
        answer: `$$f'(2) = -\\frac{1}{4}$$`
      }
    ],
    practice: [
      {
        type: 'fill',
        question: `If $f(x) = 5x$ (a linear function), what is $f'(3)$?`,
        answer: '5',
        altAnswers: ['5.0'],
        explanation: `For a linear function $f(x) = mx + b$, the derivative is always $m$. Here, $f'(3) = 5$ (and $f'(x) = 5$ everywhere).`
      },
      {
        type: 'mc',
        question: `What is the meaning of $f'(a) = 0$?`,
        choices: ['The function is zero at $x = a$', 'The function is undefined at $x = a$', 'The tangent line at $x = a$ is horizontal', 'The function is decreasing at $x = a$'],
        correct: 2,
        explanation: `A derivative of zero means the slope of the tangent line is zero, so the tangent is horizontal.`
      },
      {
        type: 'fill',
        question: `Find the derivative of $f(x) = 7$ (a constant function) at $x = 2$ using the limit definition.`,
        answer: '0',
        altAnswers: ['0.0'],
        explanation: `$f'(2) = \\lim_{h \\to 0} \\frac{f(2+h) - f(2)}{h} = \\lim_{h \\to 0} \\frac{7 - 7}{h} = \\lim_{h \\to 0} \\frac{0}{h} = 0$.`
      },
      {
        type: 'mc',
        question: `If the tangent line to $y = f(x)$ at $x = 5$ is $y = 3x - 2$, what is $f'(5)$?`,
        choices: ['$-2$', '$2$', '$3$', '$5$'],
        correct: 2,
        explanation: `The tangent line has slope 3, so $f'(5) = 3$.`
      },
      {
        type: 'fill',
        question: `Write the equation of the tangent line to $f(x) = x^2$ at the point $(1, 1)$. (Hint: You'll need $f'(1)$.)`,
        answer: 'y = 2x - 1',
        altAnswers: ['y=2x-1', 'Y = 2X - 1'],
        explanation: `For $f(x) = x^2$, $f'(1) = \\lim_{h \\to 0} \\frac{(1+h)^2 - 1}{h} = \\lim_{h \\to 0} (2 + h) = 2$. Tangent line: $y - 1 = 2(x - 1) \\Rightarrow y = 2x - 1$.`
      }
    ]
  }
];

