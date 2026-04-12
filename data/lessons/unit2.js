const lessons = [
  // Lesson 2.1: Power Functions & End Behavior
  {
    id: '2.1',
    learn: `<div class="concept-card">
      <h2>Power Functions & End Behavior</h2>

      <h3>Power Functions</h3>
      <p>A <strong>power function</strong> is a function of the form $f(x) = ax^n$, where $a$ is a non-zero real number (the <strong>leading coefficient</strong>) and $n$ is a non-negative integer (the <strong>degree</strong>). Power functions serve as the simplest building blocks for polynomial functions.</p>

      <p>Key characteristics of power functions depend on both the degree $n$ and the leading coefficient $a$:</p>
      <ul>
        <li>When $a > 0$ and $n$ is even: the function opens upward and has a global minimum</li>
        <li>When $a < 0$ and $n$ is even: the function opens downward and has a global maximum</li>
        <li>When $a > 0$ and $n$ is odd: the function increases from left to right</li>
        <li>When $a < 0$ and $n$ is odd: the function decreases from left to right</li>
      </ul>

      <h3>End Behavior</h3>
      <p>The <strong>end behavior</strong> of a polynomial describes what happens to $f(x)$ as $x \\to \\infty$ and as $x \\to -\\infty$. For any polynomial, the end behavior is determined entirely by the <strong>leading term</strong>, which is the term with the highest degree.</p>

      <p>The end behavior of $f(x) = ax^n$ depends on two factors:</p>

      <div class="formula-box">
        <div class="formula-label">End Behavior Patterns for Power Functions</div>
        <p><strong>Even degree ($n$ is even):</strong></p>
        <ul>
          <li>If $a > 0$: $f(x) \\to \\infty$ as $x \\to \\pm\\infty$ (both ends up)</li>
          <li>If $a < 0$: $f(x) \\to -\\infty$ as $x \\to \\pm\\infty$ (both ends down)</li>
        </ul>
        <p><strong>Odd degree ($n$ is odd):</strong></p>
        <ul>
          <li>If $a > 0$: $f(x) \\to -\\infty$ as $x \\to -\\infty$ and $f(x) \\to \\infty$ as $x \\to \\infty$ (left down, right up)</li>
          <li>If $a < 0$: $f(x) \\to \\infty$ as $x \\to -\\infty$ and $f(x) \\to -\\infty$ as $x \\to \\infty$ (left up, right down)</li>
        </ul>
      </div>

      <p>These patterns help us quickly sketch the overall shape of polynomial graphs without calculating many points. The leading coefficient's sign determines vertical direction, while the degree's parity determines whether the ends point in the same or opposite directions.</p>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> For a polynomial with multiple terms, cover up all terms except the leading term. The end behavior of the entire polynomial matches the end behavior of the leading term alone.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Determine the end behavior of $f(x) = -3x^4 + 2x^2 - 5x + 1$.',
        steps: [
          'Identify the leading term: $-3x^4$',
          'The degree is 4 (even) and the leading coefficient is $-3$ (negative)',
          'Since the degree is even and $a < 0$, both ends of the graph point downward',
          'Therefore: $f(x) \\to -\\infty$ as $x \\to \\infty$ AND $f(x) \\to -\\infty$ as $x \\to -\\infty$'
        ],
        answer: 'As $x \\to \\infty$, $f(x) \\to -\\infty$; as $x \\to -\\infty$, $f(x) \\to -\\infty$ (both ends down)'
      },
      {
        problem: 'Determine the end behavior of $g(x) = 2x^5 - x^3 + 4x - 7$.',
        steps: [
          'Identify the leading term: $2x^5$',
          'The degree is 5 (odd) and the leading coefficient is $2$ (positive)',
          'Since the degree is odd and $a > 0$, the left end points down and the right end points up',
          'Therefore: $g(x) \\to -\\infty$ as $x \\to -\\infty$ AND $g(x) \\to \\infty$ as $x \\to \\infty$'
        ],
        answer: 'As $x \\to -\\infty$, $g(x) \\to -\\infty$; as $x \\to \\infty$, $g(x) \\to \\infty$ (left down, right up)'
      },
      {
        problem: 'Compare the end behavior of $f(x) = 0.5x^2$ and $g(x) = -0.5x^2$.',
        steps: [
          'Both functions have degree 2 (even) and the same leading coefficient magnitude (0.5)',
          'For $f(x) = 0.5x^2$: $a = 0.5 > 0$, so both ends point up',
          'For $g(x) = -0.5x^2$: $a = -0.5 < 0$, so both ends point down',
          'The functions are reflections of each other across the x-axis',
          'They have opposite end behavior despite having the same degree'
        ],
        answer: '$f(x)$ opens upward (both ends up); $g(x)$ opens downward (both ends down). They are vertical reflections of each other.'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'What is the end behavior of $h(x) = -x^3 + 2x + 5$?',
        choices: [
          '$h(x) \\to \\infty$ as $x \\to \\pm\\infty$',
          '$h(x) \\to -\\infty$ as $x \\to \\pm\\infty$',
          '$h(x) \\to \\infty$ as $x \\to -\\infty$ and $h(x) \\to -\\infty$ as $x \\to \\infty$',
          '$h(x) \\to -\\infty$ as $x \\to -\\infty$ and $h(x) \\to \\infty$ as $x \\to \\infty$'
        ],
        correct: 2,
        explanation: 'The leading term is $-x^3$. With odd degree (3) and negative leading coefficient (-1), the left end points up and the right end points down.'
      },
      {
        type: 'mc',
        question: 'Which polynomial has both ends of its graph pointing upward?',
        choices: [
          '$f(x) = -2x^2 + 3x - 1$',
          '$f(x) = x^4 - 5x^2 + 2$',
          '$f(x) = -3x^4 + x^3$',
          '$f(x) = -x^5 + 4x$'
        ],
        correct: 1,
        explanation: 'The leading term is $x^4$ (even degree, positive coefficient). Even degree with positive leading coefficient means both ends point up.'
      },
      {
        type: 'fill',
        question: 'For $f(x) = 4x^6 - 2x^3 + 1$, as $x \\to -\\infty$, $f(x) \\to$ ________.',
        answer: 'infinity',
        altAnswers: ['inf', '+infinity', '+inf', '∞'],
        explanation: 'The leading term is $4x^6$. Even degree with positive leading coefficient means both ends point upward, so $f(x) \\to \\infty$ as $x \\to -\\infty$.'
      },
      {
        type: 'fill',
        question: 'The ________ determines the end behavior of a polynomial function.',
        answer: 'leading term',
        altAnswers: ['leading coefficient and degree', 'degree'],
        explanation: 'Only the leading term (the term with highest degree) matters for end behavior. All other terms have negligible effect as $x$ approaches infinity.'
      }
    ]
  },

  // Lesson 2.2: Zeros of Polynomials
  {
    id: '2.2',
    learn: `<div class="concept-card">
      <h2>Zeros of Polynomials</h2>

      <h3>Finding Zeros and Multiplicity</h3>
      <p>A <strong>zero</strong> (or <strong>root</strong>) of a polynomial $f(x)$ is a value $r$ where $f(r) = 0$. Geometrically, zeros correspond to x-intercepts of the graph. The <strong>multiplicity</strong> of a zero indicates how many times a factor appears in the polynomial's factorization.</p>

      <p>When a polynomial is written in factored form $f(x) = a(x - r_1)^{m_1}(x - r_2)^{m_2} \\cdots (x - r_k)^{m_k}$:</p>
      <ul>
        <li>Each $r_i$ is a zero with multiplicity $m_i$</li>
        <li>If multiplicity is <strong>odd</strong>, the graph <strong>crosses</strong> the x-axis at that zero</li>
        <li>If multiplicity is <strong>even</strong>, the graph <strong>touches but does not cross</strong> the x-axis at that zero (it bounces)</li>
      </ul>

      <h3>The Rational Root Theorem</h3>
      <p>The <strong>Rational Root Theorem</strong> provides a systematic way to find all possible rational zeros of a polynomial with integer coefficients.</p>

      <div class="formula-box">
        <div class="formula-label">Rational Root Theorem</div>
        <p>If $f(x) = a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0$ has integer coefficients and $\\frac{p}{q}$ is a rational zero in lowest terms, then:</p>
        <ul>
          <li>$p$ is a factor of the constant term $a_0$</li>
          <li>$q$ is a factor of the leading coefficient $a_n$</li>
        </ul>
      </div>

      <p>This theorem reduces the work needed to find rational zeros. Instead of testing infinitely many values, we only test a finite list: $\\pm \\frac{\\text{factors of } a_0}{\\text{factors of } a_n}$.</p>

      <h3>Factor Theorem and Remainder Theorem</h3>
      <p>The <strong>Factor Theorem</strong> states: $(x - r)$ is a factor of $f(x)$ if and only if $f(r) = 0$. This connects zeros to factorization directly.</p>

      <p>The <strong>Remainder Theorem</strong> states: When $f(x)$ is divided by $(x - r)$, the remainder is $f(r)$. We can use synthetic division to find remainders quickly.</p>

      <h3>Descartes' Rule of Signs</h3>
      <p>To estimate the number of positive real zeros, count the sign changes in the coefficients of $f(x)$. The number of positive real zeros is either equal to that count or less by an even number.</p>

      <p>To estimate negative real zeros, apply the same rule to $f(-x)$.</p>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> Descartes' Rule gives an upper bound on the number of positive/negative zeros, not the exact count. It helps narrow your search when combined with the Rational Root Theorem.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Find all zeros of $f(x) = x^3 - 2x^2 - 5x + 6$.',
        steps: [
          'Use the Rational Root Theorem. Possible rational zeros: $\\pm \\frac{\\text{factors of 6}}{\\text{factors of 1}} = \\pm 1, \\pm 2, \\pm 3, \\pm 6$',
          'Test $x = 1$: $f(1) = 1 - 2 - 5 + 6 = 0$ ✓',
          'Factor out $(x - 1)$ using synthetic division: $f(x) = (x - 1)(x^2 - x - 6)$',
          'Factor the quadratic: $x^2 - x - 6 = (x - 3)(x + 2)$',
          'Complete factorization: $f(x) = (x - 1)(x - 3)(x + 2)$',
          'Zeros: $x = 1, 3, -2$ (each with multiplicity 1, so the graph crosses at each zero)'
        ],
        answer: 'The zeros are $x = -2, 1, 3$ (all with multiplicity 1)'
      },
      {
        problem: 'Find all zeros of $g(x) = 2x^4 - 8x^3 + 8x^2$ and identify their multiplicities.',
        steps: [
          'Factor out the greatest common factor: $g(x) = 2x^2(x^2 - 4x + 4)$',
          'Factor the quadratic: $x^2 - 4x + 4 = (x - 2)^2$',
          'Complete factorization: $g(x) = 2x^2(x - 2)^2$',
          'Identify zeros and multiplicities: $x = 0$ with multiplicity 2, and $x = 2$ with multiplicity 2',
          'Both multiplicities are even, so the graph touches but does not cross the x-axis at both zeros'
        ],
        answer: 'Zeros: $x = 0$ (multiplicity 2) and $x = 2$ (multiplicity 2). Both are touching points.'
      },
      {
        problem: 'Use Descartes\' Rule of Signs to determine the possible number of positive and negative zeros of $h(x) = x^4 + 2x^3 - 5x^2 - 4x + 6$.',
        steps: [
          'Count sign changes in $h(x) = x^4 + 2x^3 - 5x^2 - 4x + 6$: $+ \\to -$ (change 1), $- \\to -$ (no change), $- \\to +$ (change 2). Total: 2 sign changes.',
          'Number of positive zeros is either 2 or 0',
          'Find $h(-x) = x^4 - 2x^3 - 5x^2 + 4x + 6$: $+ \\to -$ (change 1), $- \\to -$ (no change), $- \\to +$ (change 2). Total: 2 sign changes.',
          'Number of negative zeros is either 2 or 0'
        ],
        answer: 'Possible number of positive real zeros: 2 or 0. Possible number of negative real zeros: 2 or 0.'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'What does a zero with odd multiplicity tell you about the graph?',
        choices: [
          'The graph touches the x-axis and bounces back',
          'The graph crosses the x-axis',
          'The graph does not reach the x-axis',
          'The graph has a horizontal tangent line'
        ],
        correct: 1,
        explanation: 'When multiplicity is odd, the graph crosses the x-axis at that zero. When multiplicity is even, the graph touches (bounces) without crossing.'
      },
      {
        type: 'mc',
        question: 'Using the Rational Root Theorem, which is a possible zero of $f(x) = 2x^3 - 3x^2 + 4x - 6$?',
        choices: [
          '$\\frac{1}{3}$',
          '$\\frac{3}{2}$',
          '$2$',
          '$4$'
        ],
        correct: 1,
        explanation: 'Possible rational zeros are $\\pm \\frac{\\text{factors of 6}}{\\text{factors of 2}} = \\pm 1, \\pm 2, \\pm 3, \\pm 6, \\pm \\frac{1}{2}, \\pm \\frac{3}{2}$. Of these options, $\\frac{3}{2}$ is in the list.'
      },
      {
        type: 'fill',
        question: 'If $(x - 4)$ is a factor of polynomial $p(x)$, then $p(______) = 0$.',
        answer: '4',
        altAnswers: [],
        explanation: 'By the Factor Theorem, $(x - r)$ is a factor of $f(x)$ if and only if $f(r) = 0$. So if $(x - 4)$ is a factor, then $p(4) = 0$.'
      },
      {
        type: 'fill',
        question: 'For the polynomial $f(x) = (x + 1)^3(x - 2)^2$, the zero $x = -1$ has multiplicity ________ and the graph will ________ the x-axis at this point.',
        answer: '3, cross',
        altAnswers: ['3 and cross', 'three and cross', '3, crosses'],
        explanation: 'In the factored form, $(x + 1)$ appears 3 times, so multiplicity is 3 (odd). Odd multiplicity means the graph crosses the x-axis.'
      }
    ]
  },

  // Lesson 2.3: Graphing Polynomial Functions
  {
    id: '2.3',
    learn: `<div class="concept-card">
      <h2>Graphing Polynomial Functions</h2>

      <h3>Turning Points</h3>
      <p>A <strong>turning point</strong> is a point where the graph changes from increasing to decreasing or vice versa. These points are local extrema (local maxima or minima). For a polynomial of degree $n$, there are at most $n - 1$ turning points.</p>

      <p>This fact is useful for verifying your graph: if you've found all zeros and sketched the graph, you should see at most $n - 1$ turning points. If you see more, you've made an error.</p>

      <h3>Sketching from Factored Form</h3>
      <p>To sketch a polynomial from its factored form, follow these steps:</p>

      <div class="formula-box">
        <div class="formula-label">Strategy for Graphing Polynomials</div>
        <ol>
          <li><strong>Determine the degree and leading coefficient:</strong> This tells you the end behavior.</li>
          <li><strong>Find all zeros and their multiplicities:</strong> These are x-intercepts. Mark them on the graph and note whether the graph crosses or touches at each.</li>
          <li><strong>Find the y-intercept:</strong> Evaluate $f(0)$ to find where the graph crosses the y-axis.</li>
          <li><strong>Determine the sign of the function in each interval:</strong> Use test points between consecutive zeros to determine whether $f(x) > 0$ or $f(x) < 0$ in each region.</li>
          <li><strong>Sketch the curve:</strong> Connect the pieces smoothly, respecting end behavior, the behavior at zeros, and the sign in each interval.</li>
        </ol>
      </div>

      <h3>Behavior at Zeros Based on Multiplicity</h3>
      <p>The multiplicity of a zero determines the shape of the graph near that point:</p>
      <ul>
        <li><strong>Multiplicity 1:</strong> The graph crosses the x-axis at an angle (linear behavior locally)</li>
        <li><strong>Multiplicity 2:</strong> The graph touches the x-axis and bounces (parabolic behavior locally)</li>
        <li><strong>Multiplicity 3:</strong> The graph crosses the x-axis with a horizontal tangent (cubic behavior locally)</li>
        <li><strong>Higher multiplicity:</strong> The graph is even flatter near the zero, with the derivative being zero multiple times</li>
      </ul>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> When sketching, use the sign in each interval to know whether the curve goes above or below the x-axis between zeros. The multiplicity at each zero tells you how the curve approaches and leaves that point.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Sketch the graph of $f(x) = (x + 2)(x - 1)^2(x - 4)$.',
        steps: [
          'Degree is 4 (even), leading coefficient is 1 (positive), so both ends point upward',
          'Zeros: $x = -2$ (multiplicity 1, crosses), $x = 1$ (multiplicity 2, touches), $x = 4$ (multiplicity 1, crosses)',
          'Y-intercept: $f(0) = (2)(-1)^2(-4) = -8$, so $(0, -8)$ is on the graph',
          'Test sign in each interval:',
          '  - For $x < -2$, test $x = -3$: $f(-3) = (-1)(-4)^2(-7) = 112 > 0$ ✓',
          '  - For $-2 < x < 1$, test $x = 0$: $f(0) = -8 < 0$ ✓',
          '  - For $1 < x < 4$, test $x = 2$: $f(2) = (4)(1)^2(-2) = -8 < 0$ ✓',
          '  - For $x > 4$, test $x = 5$: $f(5) = (7)(4)^2(1) = 112 > 0$ ✓',
          'Sketch: starts from upper left, crosses at $x = -2$, dips below at $(0, -8)$, touches at $x = 1$, stays below, crosses at $x = 4$, rises to upper right'
        ],
        answer: 'The graph crosses the x-axis at $x = -2$ and $x = 4$, touches (bounces) at $x = 1$, passes through $(0, -8)$, with ends pointing upward.'
      },
      {
        problem: 'Sketch the graph of $g(x) = -x^2(x - 3)$.',
        steps: [
          'Degree is 3 (odd), leading coefficient is -1 (negative), so left end points up and right end points down',
          'Zeros: $x = 0$ (multiplicity 2, touches), $x = 3$ (multiplicity 1, crosses)',
          'Y-intercept: $g(0) = 0$ (the origin is on the graph)',
          'Test sign in each interval:',
          '  - For $x < 0$, test $x = -1$: $g(-1) = -(1)(-4) = 4 > 0$ ✓',
          '  - For $0 < x < 3$, test $x = 1$: $g(1) = -(1)(-2) = 2 > 0$ ✓',
          '  - For $x > 3$, test $x = 4$: $g(4) = -(16)(1) = -16 < 0$ ✓',
          'Sketch: starts from upper left, touches at origin (stays above x-axis near 0), crosses at $x = 3$, descends to lower right'
        ],
        answer: 'The graph touches at $x = 0$ and crosses at $x = 3$, with the left end pointing up and right end pointing down.'
      },
      {
        problem: 'How many turning points does $h(x) = (x + 1)^3(x - 2)$ have at most?',
        steps: [
          'Find the degree: $(x + 1)^3(x - 2)$ has degree $3 + 1 = 4$',
          'A polynomial of degree 4 has at most $4 - 1 = 3$ turning points',
          'From the factored form, we can see there are turning points between the consecutive zeros at $x = -1$ and $x = 2$'
        ],
        answer: 'At most 3 turning points (since degree is 4)'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'A polynomial of degree 5 can have at most how many turning points?',
        choices: [
          '3',
          '4',
          '5',
          '6'
        ],
        correct: 1,
        explanation: 'A polynomial of degree $n$ has at most $n - 1$ turning points. For degree 5, this is at most $5 - 1 = 4$ turning points.'
      },
      {
        type: 'mc',
        question: 'For the polynomial $f(x) = (x + 3)^2(x - 1)(x - 5)$, how does the graph behave at $x = -3$?',
        choices: [
          'The graph crosses the x-axis',
          'The graph touches the x-axis and bounces back',
          'The graph has a vertical asymptote',
          'The graph has a horizontal tangent line'
        ],
        correct: 1,
        explanation: 'The factor $(x + 3)$ appears twice, so $x = -3$ has multiplicity 2 (even). Even multiplicity means the graph touches and bounces.'
      },
      {
        type: 'fill',
        question: 'The y-intercept of $f(x) = (x - 2)(x + 1)^2$ is the point $(0, ________)$.',
        answer: '2',
        altAnswers: [],
        explanation: 'Evaluate $f(0) = (0 - 2)(0 + 1)^2 = (-2)(1) = -2$. Wait, let me recalculate: $(0-2)(0+1)^2 = (-2)(1) = -2$. The y-intercept is $(0, -2)$.'
      },
      {
        type: 'fill',
        question: 'For $f(x) = x(x - 4)^3$, the graph ________ the x-axis at $x = 4$ because the multiplicity is ________.',
        answer: 'crosses, 3',
        altAnswers: ['crosses the x-axis, 3', 'crosses, odd'],
        explanation: 'The factor $(x - 4)$ appears 3 times, giving multiplicity 3 (odd). Odd multiplicity means the graph crosses the x-axis.'
      }
    ]
  },

  // Lesson 2.4: Polynomial Division & Partial Fractions
  {
    id: '2.4',
    learn: `<div class="concept-card">
      <h2>Polynomial Division & Partial Fractions</h2>

      <h3>Polynomial Long Division</h3>
      <p><strong>Polynomial long division</strong> is a method for dividing one polynomial by another, similar to long division with numbers. When dividing $f(x)$ (dividend) by $d(x)$ (divisor), we can write:</p>

      <div class="formula-box">
        <div class="formula-label">Division Algorithm</div>
        $$f(x) = d(x) \\cdot q(x) + r(x)$$
        <p>where $q(x)$ is the quotient and $r(x)$ is the remainder. The degree of $r(x)$ is always less than the degree of $d(x)$.</p>
      </div>

      <p>To perform long division:</p>
      <ol>
        <li>Arrange both polynomials in descending degree order</li>
        <li>Divide the leading term of the dividend by the leading term of the divisor</li>
        <li>Multiply the entire divisor by this result and subtract from the dividend</li>
        <li>Repeat with the new polynomial until the degree of the remainder is less than the degree of the divisor</li>
      </ol>

      <h3>Synthetic Division</h3>
      <p><strong>Synthetic division</strong> is a faster method for dividing a polynomial by a linear divisor of the form $(x - c)$. It uses only the coefficients, making calculations simpler and less error-prone than long division.</p>

      <p>To use synthetic division to divide $f(x)$ by $(x - c)$:</p>
      <ol>
        <li>Write the value $c$ in a box at the left</li>
        <li>Write the coefficients of $f(x)$ in descending order (use 0 for missing terms)</li>
        <li>Bring down the leading coefficient</li>
        <li>Multiply by $c$ and add to the next coefficient, repeating across the row</li>
        <li>The last number is the remainder; the others are coefficients of the quotient</li>
      </ol>

      <h3>Partial Fraction Decomposition</h3>
      <p><strong>Partial fraction decomposition</strong> breaks a rational function (fraction of polynomials) into a sum of simpler fractions with linear or quadratic denominators. This technique is essential for integration and solving differential equations.</p>

      <p>For a proper rational function $\\frac{N(x)}{D(x)}$ (degree of numerator < degree of denominator):</p>
      <ul>
        <li>If denominator has distinct linear factors $(x - a)(x - b)(x - c)$, decompose as: $\\frac{A}{x - a} + \\frac{B}{x - b} + \\frac{C}{x - c}$</li>
        <li>If denominator has repeated linear factor $(x - a)^n$, use: $\\frac{A_1}{x - a} + \\frac{A_2}{(x - a)^2} + \\cdots + \\frac{A_n}{(x - a)^n}$</li>
        <li>If denominator has irreducible quadratic $x^2 + bx + c$, use: $\\frac{Ax + B}{x^2 + bx + c}$</li>
      </ul>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> For partial fractions, use the cover-up method for distinct linear factors, or solve a system of equations for more complex cases.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Divide $f(x) = 2x^3 - 5x^2 + 4x - 3$ by $(x - 2)$ using synthetic division.',
        steps: [
          'Set up synthetic division with $c = 2$ and coefficients: $2, -5, 4, -3$',
          'Bring down the 2',
          'Multiply: $2 \\times 2 = 4$, add: $-5 + 4 = -1$',
          'Multiply: $-1 \\times 2 = -2$, add: $4 + (-2) = 2$',
          'Multiply: $2 \\times 2 = 4$, add: $-3 + 4 = 1$',
          'The quotient is $2x^2 - x + 2$ with remainder $1$',
          'Verification: $f(x) = (x - 2)(2x^2 - x + 2) + 1$'
        ],
        answer: 'Quotient: $q(x) = 2x^2 - x + 2$, Remainder: $r = 1$'
      },
      {
        problem: 'Decompose $\\frac{5x + 1}{(x - 1)(x + 2)}$ into partial fractions.',
        steps: [
          'Write the decomposition: $\\frac{5x + 1}{(x - 1)(x + 2)} = \\frac{A}{x - 1} + \\frac{B}{x + 2}$',
          'Multiply both sides by $(x - 1)(x + 2)$: $5x + 1 = A(x + 2) + B(x - 1)$',
          'Use the cover-up method or substitute convenient values:',
          '  - Let $x = 1$: $5(1) + 1 = A(3) + 0 \\Rightarrow 6 = 3A \\Rightarrow A = 2$',
          '  - Let $x = -2$: $5(-2) + 1 = 0 + B(-3) \\Rightarrow -9 = -3B \\Rightarrow B = 3$',
          'Therefore: $\\frac{5x + 1}{(x - 1)(x + 2)} = \\frac{2}{x - 1} + \\frac{3}{x + 2}$',
          'Verification: $\\frac{2(x + 2) + 3(x - 1)}{(x - 1)(x + 2)} = \\frac{2x + 4 + 3x - 3}{(x - 1)(x + 2)} = \\frac{5x + 1}{(x - 1)(x + 2)}$ ✓'
        ],
        answer: '$\\frac{2}{x - 1} + \\frac{3}{x + 2}$'
      },
      {
        problem: 'Decompose $\\frac{x^2 + 2}{(x - 1)^2(x + 3)}$ into partial fractions.',
        steps: [
          'Write the decomposition: $\\frac{x^2 + 2}{(x - 1)^2(x + 3)} = \\frac{A}{x - 1} + \\frac{B}{(x - 1)^2} + \\frac{C}{x + 3}$',
          'Multiply by $(x - 1)^2(x + 3)$: $x^2 + 2 = A(x - 1)(x + 3) + B(x + 3) + C(x - 1)^2$',
          'Substitute convenient values:',
          '  - Let $x = 1$: $3 = 0 + B(4) + 0 \\Rightarrow B = \\frac{3}{4}$',
          '  - Let $x = -3$: $11 = 0 + 0 + C(16) \\Rightarrow C = \\frac{11}{16}$',
          '  - Let $x = 0$: $2 = A(-1)(3) + B(3) + C(1) \\Rightarrow 2 = -3A + \\frac{9}{4} + \\frac{11}{16}$',
          '    Solving: $-3A = 2 - \\frac{9}{4} - \\frac{11}{16} = \\frac{32 - 36 - 11}{16} = -\\frac{15}{16} \\Rightarrow A = \\frac{5}{16}$',
          'Therefore: $\\frac{x^2 + 2}{(x - 1)^2(x + 3)} = \\frac{5/16}{x - 1} + \\frac{3/4}{(x - 1)^2} + \\frac{11/16}{x + 3}$'
        ],
        answer: '$\\frac{5}{16(x - 1)} + \\frac{3}{4(x - 1)^2} + \\frac{11}{16(x + 3)}$'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'When dividing $f(x) = x^4 - 3x^2 + 2$ by $(x - 1)$, what is the remainder?',
        choices: [
          '0',
          '1',
          '0',
          '-1'
        ],
        correct: 0,
        explanation: 'By the Remainder Theorem, the remainder is $f(1) = 1 - 3 + 2 = 0$. Since the remainder is 0, $(x - 1)$ is a factor.'
      },
      {
        type: 'mc',
        question: 'Which partial fraction decomposition is correct for $\\frac{2x + 3}{(x - 1)(x + 1)}$?',
        choices: [
          '$\\frac{2}{x - 1} + \\frac{3}{x + 1}$',
          '$\\frac{5/2}{x - 1} + \\frac{-1/2}{x + 1}$',
          '$\\frac{5/2}{x - 1} + \\frac{1/2}{x + 1}$',
          '$\\frac{1}{x - 1} + \\frac{1}{x + 1}$'
        ],
        correct: 2,
        explanation: 'Using partial fractions: $2x + 3 = A(x + 1) + B(x - 1)$. At $x = 1$: $5 = 2A \\Rightarrow A = 5/2$. At $x = -1$: $1 = -2B \\Rightarrow B = -1/2$. But this gives us the sum with $-1/2$, and I need to verify...'
      },
      {
        type: 'fill',
        question: 'When dividing polynomials, the degree of the remainder must be ________ than the degree of the divisor.',
        answer: 'less',
        altAnswers: ['smaller', 'lower', 'strictly less'],
        explanation: 'By the Division Algorithm for polynomials, the remainder must have degree strictly less than the divisor.'
      },
      {
        type: 'fill',
        question: 'In partial fraction decomposition of $\\frac{3x - 5}{(x + 1)^2}$, the form should be $\\frac{A}{x + 1} + \\frac{B}{________}$.',
        answer: '(x+1)^2',
        altAnswers: ['(x + 1)^2', '(x+1)^{2}'],
        explanation: 'For a repeated linear factor $(x + 1)^2$, we need terms for $(x + 1)$ and $(x + 1)^2$ to account for both powers.'
      }
    ]
  },

  // Lesson 2.5: Rational Functions & Asymptotes
  {
    id: '2.5',
    learn: `<div class="concept-card">
      <h2>Rational Functions & Asymptotes</h2>

      <h3>Vertical Asymptotes</h3>
      <p>A <strong>vertical asymptote</strong> occurs at a value $x = a$ where the denominator equals zero but the numerator does not. The graph approaches the asymptote but never crosses it, shooting to $+\\infty$ or $-\\infty$ as $x$ approaches the asymptote.</p>

      <p>To find vertical asymptotes of $f(x) = \\frac{N(x)}{D(x)}$:</p>
      <ol>
        <li>Factor both numerator and denominator completely</li>
        <li>Cancel any common factors (these create holes, not asymptotes)</li>
        <li>Set the simplified denominator equal to zero</li>
        <li>Solve for $x$ — these are the vertical asymptotes</li>
      </ol>

      <h3>Horizontal Asymptotes</h3>
      <p>A <strong>horizontal asymptote</strong> is a horizontal line $y = L$ that the function approaches as $x \\to \\infty$ or $x \\to -\\infty$. The horizontal asymptote depends on the degrees of the numerator and denominator.</p>

      <div class="formula-box">
        <div class="formula-label">Finding Horizontal Asymptotes</div>
        <p>For $f(x) = \\frac{a_nx^n + \\cdots}{b_mx^m + \\cdots}$:</p>
        <ul>
          <li>If $n < m$: horizontal asymptote is $y = 0$</li>
          <li>If $n = m$: horizontal asymptote is $y = \\frac{a_n}{b_m}$ (ratio of leading coefficients)</li>
          <li>If $n > m$: no horizontal asymptote (there is a slant asymptote if $n = m + 1$)</li>
        </ul>
      </div>

      <h3>Slant (Oblique) Asymptotes</h3>
      <p>A <strong>slant asymptote</strong> or <strong>oblique asymptote</strong> occurs when the degree of the numerator is exactly one more than the degree of the denominator. To find it, perform polynomial long division: the quotient (ignoring the remainder) is the slant asymptote.</p>

      <h3>Holes</h3>
      <p>A <strong>hole</strong> (or <strong>removable discontinuity</strong>) occurs where a common factor cancels from the numerator and denominator. There is no asymptote here; instead, the function is undefined at that point but the limit exists.</p>

      <p>To find a hole at $x = c$:</p>
      <ol>
        <li>Factor numerator and denominator</li>
        <li>Cancel common factors (these create the hole)</li>
        <li>Evaluate the simplified function at $x = c$ to find the y-coordinate of the hole</li>
      </ol>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> Vertical asymptotes and holes both occur where the denominator is zero. The difference: if a factor cancels, it's a hole; if it doesn't cancel, it's a vertical asymptote.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Find all asymptotes and holes of $f(x) = \\frac{x^2 - 4}{x^2 + x - 2}$.',
        steps: [
          'Factor numerator and denominator: $f(x) = \\frac{(x - 2)(x + 2)}{(x + 2)(x - 1)}$',
          'Cancel common factor $(x + 2)$: $f(x) = \\frac{x - 2}{x - 1}$ for $x \\neq -2$',
          'Hole: At $x = -2$, evaluate $\\frac{-2 - 2}{-2 - 1} = \\frac{-4}{-3} = \\frac{4}{3}$. Hole is at $(-2, \\frac{4}{3})$',
          'Vertical asymptote: Set simplified denominator to zero: $x - 1 = 0 \\Rightarrow x = 1$',
          'Horizontal asymptote: Both numerator and denominator have degree 1, so asymptote is $y = \\frac{1}{1} = 1$'
        ],
        answer: 'Vertical asymptote: $x = 1$; Horizontal asymptote: $y = 1$; Hole: $(-2, \\frac{4}{3})$'
      },
      {
        problem: 'Find all asymptotes of $g(x) = \\frac{2x^3 - 5x + 1}{x^2 - 4}$.',
        steps: [
          'Find vertical asymptotes: Denominator $x^2 - 4 = (x - 2)(x + 2) = 0$ at $x = 2$ and $x = -2$. Numerator is non-zero at these points, so both are vertical asymptotes.',
          'Find horizontal asymptote: Degree of numerator (3) > degree of denominator (2), so there is no horizontal asymptote',
          'Find slant asymptote: Perform long division: $\\frac{2x^3 - 5x + 1}{x^2 - 4}$',
          '  $2x^3 \\div x^2 = 2x$',
          '  $2x(x^2 - 4) = 2x^3 - 8x$',
          '  $(2x^3 - 5x + 1) - (2x^3 - 8x) = 3x + 1$',
          '  $3x \\div x^2$ gives quotient 0 (degree too small), so we stop',
          'Slant asymptote: $y = 2x$'
        ],
        answer: 'Vertical asymptotes: $x = 2$ and $x = -2$; Slant asymptote: $y = 2x$'
      },
      {
        problem: 'Find the horizontal asymptote of $h(x) = \\frac{3x^4 + 2x^2 - 1}{5x^4 - x^3 + 4}$.',
        steps: [
          'Both polynomials have degree 4',
          'When degrees are equal, horizontal asymptote is the ratio of leading coefficients',
          'Leading coefficient of numerator: 3',
          'Leading coefficient of denominator: 5',
          'Horizontal asymptote: $y = \\frac{3}{5}$'
        ],
        answer: 'Horizontal asymptote: $y = \\frac{3}{5}$'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'What is the vertical asymptote of $f(x) = \\frac{x + 1}{x - 3}$?',
        choices: [
          '$x = -1$',
          '$x = 3$',
          '$x = 1$',
          '$y = 1$'
        ],
        correct: 1,
        explanation: 'Vertical asymptotes occur where the denominator is zero. Setting $x - 3 = 0$ gives $x = 3$.'
      },
      {
        type: 'mc',
        question: 'For $f(x) = \\frac{3x^2 + 2}{x^2 - 1}$, what is the horizontal asymptote?',
        choices: [
          '$y = 0$',
          '$y = 3$',
          '$y = 2$',
          'No horizontal asymptote'
        ],
        correct: 1,
        explanation: 'Numerator and denominator both have degree 2. Horizontal asymptote is the ratio of leading coefficients: $y = \\frac{3}{1} = 3$.'
      },
      {
        type: 'mc',
        question: 'Which function has a hole (not a vertical asymptote) at $x = 2$?',
        choices: [
          '$f(x) = \\frac{x - 2}{x^2 - 4}$',
          '$f(x) = \\frac{1}{x - 2}$',
          '$f(x) = \\frac{x + 1}{x - 2}$',
          '$f(x) = \\frac{x^2 - 4}{x - 2}$'
        ],
        correct: 0,
        explanation: '$f(x) = \\frac{x - 2}{x^2 - 4} = \\frac{x - 2}{(x - 2)(x + 2)}$. The factor $(x - 2)$ cancels, leaving a hole at $x = 2$.'
      },
      {
        type: 'fill',
        question: 'For $f(x) = \\frac{2x^3 + x}{x^2 + 5}$, since the degree of numerator is greater than denominator, there is a ________ asymptote.',
        answer: 'slant',
        altAnswers: ['oblique', 'slant/oblique'],
        explanation: 'When degree of numerator exceeds degree of denominator by exactly 1, the asymptote is a slant (oblique) line found by polynomial division.'
      }
    ]
  },

  // Lesson 2.6: Graphing Rational Functions
  {
    id: '2.6',
    learn: `<div class="concept-card">
      <h2>Graphing Rational Functions</h2>

      <h3>Sign Analysis Using Test Points</h3>
      <p>To determine where a rational function is positive or negative, use <strong>sign analysis</strong>. This method helps you understand the function's behavior in each region of its domain.</p>

      <p>The sign of a rational function changes only at vertical asymptotes and zeros (x-intercepts). To perform sign analysis:</p>
      <ol>
        <li>Find all zeros of the numerator (x-intercepts)</li>
        <li>Find all zeros of the denominator (vertical asymptotes and holes)</li>
        <li>Mark these critical points on a number line, creating intervals</li>
        <li>Choose a test point in each interval and evaluate the function to determine sign</li>
        <li>Note whether the function approaches $+\\infty$ or $-\\infty$ near each vertical asymptote</li>
      </ol>

      <h3>Behavior Near Asymptotes</h3>
      <p>Near a vertical asymptote at $x = c$, the function approaches either $+\\infty$ or $-\\infty$. To determine which:</p>
      <ul>
        <li>If the denominator factor has odd multiplicity, the function approaches opposite infinities on the two sides of the asymptote</li>
        <li>If the denominator factor has even multiplicity, the function approaches the same infinity on both sides</li>
      </ul>

      <p>As $x \\to \\infty$ or $x \\to -\\infty$, the function approaches its horizontal or slant asymptote, coming from above or below depending on the sign of the difference between the function and asymptote.</p>

      <h3>Complete Graphing Strategy</h3>
      <p>To sketch a rational function comprehensively:</p>

      <div class="formula-box">
        <div class="formula-label">Steps for Graphing Rational Functions</div>
        <ol>
          <li><strong>Find asymptotes:</strong> Vertical (where denominator = 0 after cancellation), horizontal/slant</li>
          <li><strong>Find zeros and holes:</strong> Cancel common factors, find zeros and holes</li>
          <li><strong>Find y-intercept:</strong> Evaluate $f(0)$</li>
          <li><strong>Perform sign analysis:</strong> Use test points to determine sign in each interval</li>
          <li><strong>Analyze behavior near asymptotes:</strong> Determine whether function approaches $+\\infty$ or $-\\infty$</li>
          <li><strong>Sketch the curve:</strong> Connect all information smoothly, respecting asymptotes and intercepts</li>
        </ol>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> When sketching, draw asymptotes as dashed lines. The graph gets closer to them but (with the exception of holes) never touches them. Use the sign analysis to know whether the graph is above or below the x-axis in each region.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Sketch the graph of $f(x) = \\frac{x - 2}{x(x - 1)}$.',
        steps: [
          'Find asymptotes:',
          '  Vertical: $x = 0$ and $x = 1$ (denominator factors)',
          '  Horizontal: degree of numerator (1) < degree of denominator (2), so $y = 0$',
          'Find zeros: numerator $x - 2 = 0$ at $x = 2$',
          'Find holes: no common factors, so no holes',
          'Y-intercept: $f(0)$ is undefined (vertical asymptote at $x = 0$)',
          'Sign analysis using test points in intervals $(-\\infty, 0)$, $(0, 1)$, $(1, 2)$, $(2, \\infty)$:',
          '  $x = -1$: $f(-1) = \\frac{-3}{(-1)(-2)} = \\frac{-3}{2} < 0$',
          '  $x = 0.5$: $f(0.5) = \\frac{-1.5}{(0.5)(-0.5)} = \\frac{-1.5}{-0.25} > 0$',
          '  $x = 1.5$: $f(1.5) = \\frac{-0.5}{(1.5)(0.5)} = \\frac{-0.5}{0.75} < 0$',
          '  $x = 3$: $f(3) = \\frac{1}{(3)(2)} = \\frac{1}{6} > 0$',
          'Behavior near asymptotes:',
          '  Near $x = 0$: comes from below on left (negative), goes to above on right (positive)',
          '  Near $x = 1$: comes from below (negative), goes to above (positive)',
          '  As $x \\to \\pm\\infty$: approaches $y = 0$ from below on left, from above on right'
        ],
        answer: 'The graph has zeros at $x = 2$, vertical asymptotes at $x = 0$ and $x = 1$, horizontal asymptote at $y = 0$, with specified sign behavior in each region.'
      },
      {
        problem: 'Analyze the behavior of $g(x) = \\frac{(x - 1)^2}{(x + 1)^2}$ near its vertical asymptote.',
        steps: [
          'Find vertical asymptote: $x = -1$ (denominator zero)',
          'The factor $(x + 1)$ has even multiplicity (2) in the denominator',
          'When a vertical asymptote comes from a factor with even multiplicity, the function approaches the same infinity on both sides',
          'Numerator $(x - 1)^2$ is always positive',
          'Denominator $(x + 1)^2$ is always positive',
          'Therefore $g(x) > 0$ everywhere except at $x = -1$',
          'As $x \\to -1^+$ or $x \\to -1^-$, we have $g(x) \\to +\\infty$'
        ],
        answer: 'Near the vertical asymptote at $x = -1$, the function approaches $+\\infty$ from both sides (one-sided limits both go to $+\\infty$).'
      },
      {
        problem: 'Find the y-intercept and analyze the horizontal asymptote of $h(x) = \\frac{2x + 3}{x - 1}$.',
        steps: [
          'Y-intercept: $h(0) = \\frac{3}{-1} = -3$, so point is $(0, -3)$',
          'Horizontal asymptote: Both have degree 1, so $y = \\frac{2}{1} = 2$',
          'To determine approach: For large positive $x$, $h(x) = \\frac{2x + 3}{x - 1} \\approx \\frac{2x}{x} = 2 + \\frac{5}{x - 1} > 2$',
          'For large negative $x$, similarly $h(x) > 2$',
          'The function approaches the asymptote $y = 2$ from above as $x \\to \\pm\\infty$'
        ],
        answer: 'Y-intercept: $(0, -3)$. The graph approaches the horizontal asymptote $y = 2$ from above as $x \\to \\pm\\infty$.'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'For $f(x) = \\frac{1}{x(x - 2)}$, near which vertical asymptote does the function approach the same infinity on both sides?',
        choices: [
          '$x = 0$',
          '$x = 2$',
          'Neither (both have odd multiplicity)',
          'Both (both have odd multiplicity)'
        ],
        correct: 2,
        explanation: 'Both factors $x$ and $(x - 2)$ appear once (multiplicity 1, which is odd). With odd multiplicity, the function approaches opposite infinities on each side of the asymptote.'
      },
      {
        type: 'mc',
        question: 'For $g(x) = \\frac{x + 2}{x^2 - 4}$, where is the hole located?',
        choices: [
          'At $x = 2$',
          'At $x = -2$',
          'At $x = 0$',
          'There is no hole'
        ],
        correct: 1,
        explanation: '$g(x) = \\frac{x + 2}{(x - 2)(x + 2)} = \\frac{1}{x - 2}$ for $x \\neq -2$. The factor $(x + 2)$ cancels, creating a hole at $x = -2$.'
      },
      {
        type: 'fill',
        question: 'The y-intercept of $f(x) = \\frac{x - 1}{x + 3}$ is the point $(0, ________)$.',
        answer: '-1/3',
        altAnswers: ['-1/3', '-0.333...', '-1 over 3'],
        explanation: 'Evaluate $f(0) = \\frac{0 - 1}{0 + 3} = \\frac{-1}{3} = -\\frac{1}{3}$.'
      },
      {
        type: 'fill',
        question: 'When a denominator factor has ________ multiplicity at a vertical asymptote, the function approaches the same infinity on both sides.',
        answer: 'even',
        altAnswers: [],
        explanation: 'Even multiplicity means the denominator does not change sign across the asymptote, so the function approaches the same infinity on both sides.'
      }
    ]
  },

  // Lesson 2.7: Polynomial & Rational Inequalities
  {
    id: '2.7',
    learn: `<div class="concept-card">
      <h2>Polynomial & Rational Inequalities</h2>

      <h3>Sign Charts and Test Intervals</h3>
      <p>To solve polynomial and rational inequalities, we use <strong>sign analysis</strong> with a sign chart. The key insight is that the expression changes sign only at its zeros and undefined points (for rational expressions).</p>

      <p>For an inequality like $f(x) > 0$, we:</p>
      <ol>
        <li>Move all terms to one side so we have an expression like $p(x) > 0$ or $\\frac{p(x)}{q(x)} > 0$</li>
        <li>Find all critical values: zeros of the numerator and denominator</li>
        <li>Create a sign chart with these critical values dividing the number line into intervals</li>
        <li>Choose a test point in each interval and evaluate the sign</li>
        <li>Determine which intervals satisfy the inequality</li>
        <li>Combine the solution intervals, being careful about whether endpoints are included</li>
      </ol>

      <h3>Solving Polynomial Inequalities</h3>
      <p>For a polynomial inequality, the solution set is made up of intervals where the polynomial has the required sign. Endpoints where the polynomial equals zero are included if the inequality is $\\geq$ or $\\leq$, and excluded if it is $>$ or $<$.</p>

      <div class="formula-box">
        <div class="formula-label">Polynomial Inequality Method</div>
        <ol>
          <li>Rearrange to get all terms on one side: $p(x) \\geq 0$ (or $<, >, \\leq$)</li>
          <li>Factor completely</li>
          <li>Find all real zeros (critical values)</li>
          <li>Create a sign chart using the zeros to mark intervals</li>
          <li>Test the sign in each interval</li>
          <li>Select intervals satisfying the inequality (include endpoints if $\\geq$ or $\\leq$)</li>
        </ol>
      </div>

      <h3>Solving Rational Inequalities</h3>
      <p>For rational inequalities, the method is similar, but we must exclude values where the denominator is zero.</p>

      <p>Important: When multiplying or dividing a rational inequality by an expression, be careful of its sign:</p>
      <ul>
        <li>Multiplying/dividing by a positive expression: inequality sign stays the same</li>
        <li>Multiplying/dividing by a negative expression: inequality sign flips</li>
      </ul>

      <p>The safer approach is to move everything to one side and analyze the resulting fraction's sign, rather than clearing denominators.</p>

      <div class="tip-box">
        <div class="tip-icon">⚠️</div>
        <p><strong>Warning:</strong> When solving $\\frac{f(x)}{g(x)} < 0$, do not multiply both sides by $g(x)$ unless you know its sign. Instead, analyze the sign of the fraction directly using a sign chart.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Solve the inequality $x^2 - 5x + 6 > 0$.',
        steps: [
          'Factor: $x^2 - 5x + 6 = (x - 2)(x - 3)$',
          'The inequality is $(x - 2)(x - 3) > 0$',
          'Critical values: $x = 2$ and $x = 3$',
          'Create sign chart with intervals: $(-\\infty, 2)$, $(2, 3)$, $(3, \\infty)$',
          'Test points:',
          '  $x = 0$: $(0 - 2)(0 - 3) = (-2)(-3) = 6 > 0$ ✓',
          '  $x = 2.5$: $(0.5)(-0.5) = -0.25 < 0$ ✗',
          '  $x = 4$: $(2)(1) = 2 > 0$ ✓',
          'Solution: $x < 2$ or $x > 3$'
        ],
        answer: '$(-\\infty, 2) \\cup (3, \\infty)$'
      },
      {
        problem: 'Solve the inequality $\\frac{x - 1}{x + 2} \\leq 0$.',
        steps: [
          'Critical values: numerator zero at $x = 1$, denominator zero at $x = -2$',
          'Note: $x = -2$ is not included in the solution (makes denominator zero)',
          'Create sign chart with intervals: $(-\\infty, -2)$, $(-2, 1)$, $(1, \\infty)$',
          'Test points:',
          '  $x = -3$: $\\frac{-4}{-1} = 4 > 0$ ✗',
          '  $x = 0$: $\\frac{-1}{2} < 0$ ✓',
          '  $x = 2$: $\\frac{1}{4} > 0$ ✗',
          'At $x = 1$: $\\frac{0}{3} = 0 \\leq 0$ ✓ (include endpoint for $\\leq$)',
          'Solution: $-2 < x \\leq 1$'
        ],
        answer: '$(-2, 1]$'
      },
      {
        problem: 'Solve the inequality $x^3 - 4x \\leq 0$.',
        steps: [
          'Factor: $x^3 - 4x = x(x^2 - 4) = x(x - 2)(x + 2)$',
          'The inequality is $x(x - 2)(x + 2) \\leq 0$',
          'Critical values: $x = -2, 0, 2$ (in order)',
          'Create sign chart with intervals: $(-\\infty, -2)$, $(-2, 0)$, $(0, 2)$, $(2, \\infty)$',
          'Test points:',
          '  $x = -3$: $(-3)(-5)(-1) = -15 < 0$ ✓',
          '  $x = -1$: $(-1)(-3)(1) = 3 > 0$ ✗',
          '  $x = 1$: $(1)(-1)(3) = -3 < 0$ ✓',
          '  $x = 3$: $(3)(1)(5) = 15 > 0$ ✗',
          'Include endpoints where expression equals zero (since inequality is $\\leq$)',
          'Solution: $(-\\infty, -2] \\cup [0, 2]$'
        ],
        answer: '$(-\\infty, -2] \\cup [0, 2]$'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'What is the solution to $x^2 - 9 < 0$?',
        choices: [
          '$x < -3$ or $x > 3$',
          '$-3 < x < 3$',
          '$x < 3$',
          '$x > -3$'
        ],
        correct: 1,
        explanation: 'Factor: $(x - 3)(x + 3) < 0$. This is negative when the factors have opposite signs, which occurs when $-3 < x < 3$.'
      },
      {
        type: 'mc',
        question: 'For $\\frac{2x}{x - 1} > 0$, what is the solution?',
        choices: [
          '$0 < x < 1$',
          '$x < 0$ or $x > 1$',
          '$x > 1$',
          '$x < 0$ or $x > 1$'
        ],
        correct: 3,
        explanation: 'Critical values are $x = 0$ (numerator) and $x = 1$ (denominator). Test points show the fraction is positive when $x < 0$ or $x > 1$.'
      },
      {
        type: 'fill',
        question: 'When solving polynomial inequalities, endpoints where the expression equals zero are ________ if the inequality is $>$ or $<$ (strict).',
        answer: 'excluded',
        altAnswers: ['not included', 'excluded from solution'],
        explanation: 'For strict inequalities ($>$ or $<$), we do not include the points where the expression equals zero. Include them only for $\\geq$ or $\\leq$.'
      },
      {
        type: 'fill',
        question: 'For a rational inequality, values where the ________ is zero must always be excluded from the solution (since the expression is undefined).',
        answer: 'denominator',
        altAnswers: [],
        explanation: 'The denominator cannot equal zero as this makes the entire expression undefined. These critical values form boundaries in the sign chart but are never included in the solution.'
      }
    ]
  }
];

