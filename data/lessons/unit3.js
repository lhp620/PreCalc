// data/lessons/unit3.js — Unit 3: Exponential & Logarithmic Functions

export const lessons = [
  {
    id: '3.1',
    learn: `
      <div class="concept-card">
        <h2>Exponential Functions & Models</h2>

        <p>Exponential functions are among the most important functions in mathematics and science. An <strong>exponential function</strong> has the form:</p>

        <div class="formula-box">
          <div class="formula-label">Definition</div>
          $$f(x) = b^x$$
          where $b > 0$, $b \\neq 1$, and $x$ is any real number.
        </div>

        <p>The base $b$ determines the behavior of the function:</p>
        <ul>
          <li><strong>If $b > 1$:</strong> The function represents <em>exponential growth</em>. As $x$ increases, $f(x)$ increases rapidly.</li>
          <li><strong>If $0 < b < 1$:</strong> The function represents <em>exponential decay</em>. As $x$ increases, $f(x)$ approaches 0.</li>
        </ul>

        <p><strong>Key properties of exponential functions:</strong></p>
        <ul>
          <li>Domain: all real numbers $(-\\infty, \\infty)$</li>
          <li>Range: $(0, \\infty)$ (always positive)</li>
          <li>y-intercept: $(0, 1)$ because $b^0 = 1$</li>
          <li>Horizontal asymptote: $y = 0$ (the x-axis)</li>
          <li>One-to-one function: different inputs give different outputs</li>
        </ul>

        <p><strong>Transformations of exponential functions:</strong> If we have a base exponential function $f(x) = b^x$, we can apply transformations:</p>

        <div class="formula-box">
          <div class="formula-label">Transformed Exponential Function</div>
          $$f(x) = a \\cdot b^{c(x-h)} + k$$
          where:
          <ul style="margin-top: 10px;">
            <li>$a$ affects vertical stretch/compression and reflection</li>
            <li>$c$ affects horizontal compression/stretch</li>
            <li>$h$ is the horizontal shift (right if positive)</li>
            <li>$k$ is the vertical shift (up if positive)</li>
          </ul>
        </div>

        <p><strong>The number $e$:</strong> In many applications, we use the special base $e \\approx 2.71828...$, which is an irrational constant. The natural exponential function is:</p>

        <div class="formula-box">
          <div class="formula-label">Natural Exponential Function</div>
          $$f(x) = e^x$$
        </div>

        <p>This function appears naturally in calculus, finance, biology, and physics. The number $e$ is the base that makes the derivative equal to the function itself: if $f(x) = e^x$, then $f'(x) = e^x$.</p>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <strong>Tip:</strong> Remember that $e^x$ grows faster than any polynomial and is the most commonly used exponential function in applications involving continuous growth or decay.
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Sketch the graph of $f(x) = 2^x$ and identify whether it represents growth or decay.',
        steps: [
          'The base is $b = 2 > 1$, so this represents exponential growth.',
          'Calculate some key points: $f(-2) = 2^{-2} = 1/4 = 0.25$, $f(-1) = 2^{-1} = 0.5$, $f(0) = 2^0 = 1$, $f(1) = 2^1 = 2$, $f(2) = 2^2 = 4$.',
          'Plot these points: $(-2, 0.25)$, $(-1, 0.5)$, $(0, 1)$, $(1, 2)$, $(2, 4)$.',
          'The graph passes through $(0, 1)$, increases as we move right, and approaches 0 as we move left.',
          'The horizontal asymptote is $y = 0$.'
        ],
        answer: 'The graph of $f(x) = 2^x$ is an increasing curve that passes through $(0, 1)$, grows rapidly as $x$ increases, and approaches the x-axis from above as $x$ decreases. This is exponential growth.'
      },
      {
        problem: 'Apply transformations to write and graph $g(x) = 2^{x-1} - 3$. What is the domain and range?',
        steps: [
          'Start with the base function $f(x) = 2^x$.',
          'The exponent $(x-1)$ indicates a horizontal shift 1 unit to the right.',
          'The $-3$ indicates a vertical shift 3 units down.',
          'Transformed function: $g(x) = 2^{x-1} - 3$',
          'Domain: All real numbers remain, domain = $(-\\infty, \\infty)$.',
          'Range: Shift the original range $(0, \\infty)$ down by 3 units, giving range = $(-3, \\infty)$.',
          'The horizontal asymptote is now $y = -3$ (shifted down from $y = 0$).',
          'Key point: original $(0, 1)$ becomes $(1, 1-3) = (1, -2)$.'
        ],
        answer: 'The graph of $g(x) = 2^{x-1} - 3$ is the graph of $2^x$ shifted 1 unit right and 3 units down. Domain: $(-\\infty, \\infty)$; Range: $(-3, \\infty)$; Horizontal asymptote: $y = -3$.'
      },
      {
        problem: 'Compare the growth rates of $f(x) = 2^x$ and $g(x) = e^x$ by evaluating both at $x = 1$ and $x = 5$.',
        steps: [
          'For $f(x) = 2^x$: $f(1) = 2^1 = 2$ and $f(5) = 2^5 = 32$.',
          'For $g(x) = e^x$: $g(1) = e^1 \\approx 2.718$ and $g(5) = e^5 \\approx 148.41$.',
          'At $x = 1$: $e^1 \\approx 2.718 > 2 = 2^1$.',
          'At $x = 5$: $e^5 \\approx 148.41 > 32 = 2^5$.',
          'Since $e \\approx 2.718 > 2$, the function $e^x$ grows faster than $2^x$.'
        ],
        answer: 'At $x = 1$: $f(1) = 2$ while $g(1) \\approx 2.718$. At $x = 5$: $f(5) = 32$ while $g(5) \\approx 148.41$. The function $g(x) = e^x$ grows faster because the base $e > 2$.'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'Which of the following represents exponential decay?',
        choices: [
          '$f(x) = 3^x$',
          '$f(x) = (0.5)^x$',
          '$f(x) = e^x$',
          '$f(x) = 10^x$'
        ],
        correct: 1,
        explanation: 'Exponential decay occurs when the base $0 < b < 1$. Option B has base $0.5$, which satisfies this condition. All other options have bases greater than 1, representing growth.'
      },
      {
        type: 'fill',
        question: 'The y-intercept of $f(x) = 4 \\cdot 3^x$ is at the point (0, _____).',
        answer: '4',
        altAnswers: [],
        explanation: 'Substitute $x = 0$: $f(0) = 4 \\cdot 3^0 = 4 \\cdot 1 = 4$. So the y-intercept is at $(0, 4)$.'
      },
      {
        type: 'mc',
        question: 'What is the range of the function $h(x) = -2 \\cdot 3^x + 5$?',
        choices: [
          '$(0, \\infty)$',
          '$(-\\infty, 5)$',
          '$(5, \\infty)$',
          '$(-\\infty, \\infty)$'
        ],
        correct: 1,
        explanation: 'The base function $3^x$ has range $(0, \\infty)$. Multiplying by $-2$ reflects it over the x-axis, giving $(-\\infty, 0)$. Adding 5 shifts it up 5 units, giving range $(-\\infty, 5)$.'
      },
      {
        type: 'fill',
        question: 'If $f(x) = e^x$, find $f(0) + f(1)$ rounded to the nearest tenth. Your answer: _____ (format: 0.0)',
        answer: '3.7',
        altAnswers: ['3.718', '3.71'],
        explanation: '$f(0) = e^0 = 1$ and $f(1) = e^1 \\approx 2.718$. So $f(0) + f(1) \\approx 1 + 2.718 = 3.718 \\approx 3.7$.'
      },
      {
        type: 'mc',
        question: 'The function $g(x) = (1/2)^{x-2} + 1$ is obtained from $f(x) = (1/2)^x$ by which transformations?',
        choices: [
          'Shift right 2 units and up 1 unit',
          'Shift left 2 units and down 1 unit',
          'Shift right 2 units and down 1 unit',
          'Shift left 2 units and up 1 unit'
        ],
        correct: 0,
        explanation: 'The exponent $(x-2)$ represents a horizontal shift 2 units to the right (the minus sign means right). The $+1$ represents a vertical shift 1 unit up.'
      }
    ]
  },
  {
    id: '3.2',
    learn: `
      <div class="concept-card">
        <h2>Logarithmic Functions</h2>

        <p>A <strong>logarithm</strong> is the inverse of an exponential function. While exponential functions answer "what is $b$ raised to the power $x$?", logarithms answer "what power must we raise $b$ to in order to get $y$?"</p>

        <div class="formula-box">
          <div class="formula-label">Definition of Logarithm</div>
          $$y = \\log_b(x) \\iff b^y = x$$
          where $b > 0$, $b \\neq 1$, and $x > 0$.
        </div>

        <p>We read $\\log_b(x)$ as "log base $b$ of $x$". The key is that logarithms and exponentials are inverse operations: if you know the exponential form, you can write it as a logarithm, and vice versa.</p>

        <p><strong>Common logarithmic bases:</strong></p>
        <ul>
          <li><strong>Common logarithm:</strong> $\\log(x)$ or $\\log_{10}(x)$ — uses base 10</li>
          <li><strong>Natural logarithm:</strong> $\\ln(x)$ or $\\log_e(x)$ — uses base $e \\approx 2.718$</li>
          <li><strong>Binary logarithm:</strong> $\\log_2(x)$ — uses base 2 (common in computer science)</li>
        </ul>

        <p><strong>Key properties of logarithmic functions:</strong></p>
        <ul>
          <li>Domain: $(0, \\infty)$ (logarithms are only defined for positive numbers)</li>
          <li>Range: $(-\\infty, \\infty)$ (all real numbers)</li>
          <li>x-intercept: $(1, 0)$ because $\\log_b(1) = 0$ for any valid base</li>
          <li>Vertical asymptote: $x = 0$ (the y-axis)</li>
          <li>One-to-one function: different inputs give different outputs</li>
          <li>Inverse of exponential: $f(x) = b^x$ and $g(x) = \\log_b(x)$ are inverses</li>
        </ul>

        <p><strong>Graphical relationship:</strong> The graph of $y = \\log_b(x)$ is the reflection of the graph of $y = b^x$ across the line $y = x$. If the exponential graph is increasing and approaches a horizontal asymptote at $y = 0$, then the logarithmic graph is increasing and approaches a vertical asymptote at $x = 0$.</p>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <strong>Tip:</strong> Always remember that logarithms are only defined for positive arguments. If you see $\\log(x)$, the value $x$ must be greater than 0.
        </div>

        <p><strong>Evaluating logarithms:</strong> To evaluate $\\log_b(x)$, ask yourself: "What power do I raise $b$ to get $x$?" For example:</p>
        <ul>
          <li>$\\log_2(8) = 3$ because $2^3 = 8$</li>
          <li>$\\log_5(1) = 0$ because $5^0 = 1$</li>
          <li>$\\log_3(1/9) = -2$ because $3^{-2} = 1/9$</li>
        </ul>
      </div>
    `,
    examples: [
      {
        problem: 'Convert between exponential and logarithmic form: (a) $3^4 = 81$, (b) $\\log_5(125) = 3$',
        steps: [
          '(a) Starting with exponential form: $3^4 = 81$',
          'Using $b^y = x \\iff y = \\log_b(x)$, we have $b = 3$, $y = 4$, $x = 81$.',
          'Logarithmic form: $\\log_3(81) = 4$',
          '',
          '(b) Starting with logarithmic form: $\\log_5(125) = 3$',
          'Using $y = \\log_b(x) \\iff b^y = x$, we have $b = 5$, $y = 3$, $x = 125$.',
          'Exponential form: $5^3 = 125$',
          'We can verify: $5 \\times 5 \\times 5 = 125$ ✓'
        ],
        answer: '(a) $\\log_3(81) = 4$; (b) $5^3 = 125$'
      },
      {
        problem: 'Evaluate: (a) $\\log_2(32)$, (b) $\\log_4(1/16)$, (c) $\\ln(1)$',
        steps: [
          '(a) $\\log_2(32) = ?$ means "what power of 2 equals 32?"',
          '$2^5 = 32$, so $\\log_2(32) = 5$',
          '',
          '(b) $\\log_4(1/16) = ?$ means "what power of 4 equals 1/16?"',
          'Rewrite: $1/16 = 16^{-1} = (4^2)^{-1} = 4^{-2}$',
          'Therefore $\\log_4(1/16) = -2$',
          '',
          '(c) $\\ln(1) = ?$ means "what power of $e$ equals 1?"',
          '$e^0 = 1$ for any positive base, so $\\ln(1) = 0$'
        ],
        answer: '(a) $\\log_2(32) = 5$; (b) $\\log_4(1/16) = -2$; (c) $\\ln(1) = 0$'
      },
      {
        problem: 'Find the domain of $f(x) = \\log_3(x - 2)$.',
        steps: [
          'Logarithms are only defined when the argument (the input to the log) is positive.',
          'We need: $x - 2 > 0$',
          'Solving: $x > 2$',
          'In interval notation, the domain is $(2, \\infty)$.'
        ],
        answer: 'Domain: $(2, \\infty)$ or $\{x \\mid x > 2\}$'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'What is the domain of any logarithmic function $f(x) = \\log_b(x)$?',
        choices: [
          '$(0, \\infty)$',
          '$(-\\infty, \\infty)$',
          '$[0, \\infty)$',
          '$(-\\infty, 0)$'
        ],
        correct: 0,
        explanation: 'Logarithms are only defined for positive arguments. The domain of $\\log_b(x)$ is $(0, \\infty)$.'
      },
      {
        type: 'fill',
        question: 'Evaluate: $\\log_6(36) = $ _____',
        answer: '2',
        altAnswers: [],
        explanation: 'We need to find $y$ such that $6^y = 36$. Since $6^2 = 36$, we have $\\log_6(36) = 2$.'
      },
      {
        type: 'fill',
        question: 'Convert to exponential form: $\\log_7(x) = 2$ is equivalent to _____ = x',
        answer: '7^2',
        altAnswers: ['49'],
        explanation: 'Using $y = \\log_b(x) \\iff b^y = x$, if $\\log_7(x) = 2$, then $7^2 = x$. So $x = 49$.'
      },
      {
        type: 'mc',
        question: 'Which statement is equivalent to $10^{2.5} = 316.23$?',
        choices: [
          '$\\log_{10}(2.5) = 316.23$',
          '$\\log_{10}(316.23) = 2.5$',
          '$\\log_{2.5}(316.23) = 10$',
          '$\\log_{316.23}(10) = 2.5$'
        ],
        correct: 1,
        explanation: 'Using $b^y = x \\iff \\log_b(x) = y$ with $b = 10$, $y = 2.5$, and $x = 316.23$, we get $\\log_{10}(316.23) = 2.5$.'
      },
      {
        type: 'fill',
        question: 'Find the domain of $g(x) = \\log_2(5 - x)$. Write your answer as an inequality: _____ < x or x < _____',
        answer: 'x < 5',
        altAnswers: ['5'],
        explanation: 'We need $5 - x > 0$, which gives $5 > x$ or $x < 5$. Domain: $(-\\infty, 5)$.'
      }
    ]
  },
  {
    id: '3.3',
    learn: `
      <div class="concept-card">
        <h2>Properties of Logarithms</h2>

        <p>Logarithms have several important properties that make them powerful tools for simplifying expressions and solving equations. These properties follow directly from the properties of exponents, since logarithms are the inverse of exponentials.</p>

        <div class="formula-box">
          <div class="formula-label">Product Rule</div>
          $$\\log_b(MN) = \\log_b(M) + \\log_b(N)$$
          The logarithm of a product equals the sum of the logarithms.
        </div>

        <p><strong>Proof idea:</strong> If $M = b^p$ and $N = b^q$, then $MN = b^p \\cdot b^q = b^{p+q}$. Taking $\\log_b$ of both sides gives $\\log_b(MN) = p + q = \\log_b(M) + \\log_b(N)$.</p>

        <div class="formula-box">
          <div class="formula-label">Quotient Rule</div>
          $$\\log_b\\left(\\frac{M}{N}\\right) = \\log_b(M) - \\log_b(N)$$
          The logarithm of a quotient equals the difference of the logarithms.
        </div>

        <div class="formula-box">
          <div class="formula-label">Power Rule</div>
          $$\\log_b(M^n) = n \\cdot \\log_b(M)$$
          The logarithm of a power equals the exponent times the logarithm.
        </div>

        <p><strong>Special cases of the power rule:</strong></p>
        <ul>
          <li>$\\log_b(\\sqrt[n]{M}) = \\log_b(M^{1/n}) = \\frac{1}{n}\\log_b(M)$</li>
          <li>$\\log_b(1) = 0$ (since $b^0 = 1$)</li>
          <li>$\\log_b(b) = 1$ (since $b^1 = b$)</li>
          <li>$\\log_b(b^x) = x$ (the logarithm and exponential cancel)</li>
        </ul>

        <p><strong>Change of Base Formula:</strong> Sometimes we need to convert a logarithm with one base to a logarithm with a different base. This is useful because calculators typically only have natural log ($\\ln$) and common log ($\\log$).</p>

        <div class="formula-box">
          <div class="formula-label">Change of Base Formula</div>
          $$\\log_b(x) = \\frac{\\log_a(x)}{\\log_a(b)} = \\frac{\\ln(x)}{\\ln(b)}$$
          You can convert any logarithm to natural log by dividing the natural log of the argument by the natural log of the base.
        </div>

        <p><strong>Using these properties:</strong> We can "expand" logarithms (write them as sums/differences of simpler logs) or "condense" them (combine multiple logs into one). When expanding, apply the rules. When condensing, reverse the process.</p>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <strong>Tip:</strong> When applying logarithm properties, remember that the argument of each logarithm must be positive. For example, $\\log(x^2) = 2\\log(x)$ is only valid when $x > 0$, but we can write $\\log(x^2) = 2\\log(|x|)$ for all $x \\neq 0$.
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Expand: $\\log_2(8x^3)$',
        steps: [
          'Apply the product rule: $\\log_2(8x^3) = \\log_2(8) + \\log_2(x^3)$',
          'Apply the power rule to $\\log_2(x^3)$: $\\log_2(x^3) = 3\\log_2(x)$',
          'Evaluate $\\log_2(8)$: Since $2^3 = 8$, we have $\\log_2(8) = 3$',
          'Combine: $\\log_2(8x^3) = 3 + 3\\log_2(x)$'
        ],
        answer: '$3 + 3\\log_2(x)$'
      },
      {
        problem: 'Condense: $\\ln(x) + 2\\ln(y) - \\ln(z)$',
        steps: [
          'Apply the power rule in reverse: $2\\ln(y) = \\ln(y^2)$',
          'Now we have: $\\ln(x) + \\ln(y^2) - \\ln(z)$',
          'Apply the product rule: $\\ln(x) + \\ln(y^2) = \\ln(xy^2)$',
          'Apply the quotient rule: $\\ln(xy^2) - \\ln(z) = \\ln\\left(\\frac{xy^2}{z}\\right)$'
        ],
        answer: '$\\ln\\left(\\frac{xy^2}{z}\\right)$'
      },
      {
        problem: 'Use the change of base formula to evaluate $\\log_3(20)$ using natural logarithms.',
        steps: [
          'Apply the change of base formula: $\\log_3(20) = \\frac{\\ln(20)}{\\ln(3)}$',
          'Calculate using a calculator: $\\ln(20) \\approx 2.996$ and $\\ln(3) \\approx 1.099$',
          'Divide: $\\frac{2.996}{1.099} \\approx 2.727$',
          'Verify: $3^{2.727} \\approx 20$ ✓'
        ],
        answer: '$\\log_3(20) = \\frac{\\ln(20)}{\\ln(3)} \\approx 2.727$'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'Which expression is equivalent to $\\log_5(a) + \\log_5(b)$?',
        choices: [
          '$\\log_5(a + b)$',
          '$\\log_5(ab)$',
          '$\\log_5(a/b)$',
          '$\\log_5(a - b)$'
        ],
        correct: 1,
        explanation: 'This is the product rule: $\\log_b(M) + \\log_b(N) = \\log_b(MN)$. So $\\log_5(a) + \\log_5(b) = \\log_5(ab)$.'
      },
      {
        type: 'fill',
        question: 'Expand $\\log_3(27x)$. Your answer: $\\log_3(27x) = $ _____',
        answer: '3 + log_3(x)',
        altAnswers: ['3+log(x)/log(3)', '3 + \\log_3(x)'],
        explanation: 'Using the product rule: $\\log_3(27x) = \\log_3(27) + \\log_3(x) = 3 + \\log_3(x)$ (since $3^3 = 27$).'
      },
      {
        type: 'fill',
        question: 'Simplify: $\\log_b(b^5) = $ _____',
        answer: '5',
        altAnswers: [],
        explanation: 'Using the power rule: $\\log_b(b^5) = 5 \\log_b(b) = 5 \\cdot 1 = 5$.'
      },
      {
        type: 'mc',
        question: 'Use the quotient rule to simplify $\\log(100) - \\log(10)$.',
        choices: [
          '$\\log(90)$',
          '$\\log(10)$',
          '$1$',
          '$2$'
        ],
        correct: 2,
        explanation: 'Quotient rule: $\\log(100) - \\log(10) = \\log(100/10) = \\log(10) = 1$ (since $10^1 = 10$).'
      },
      {
        type: 'fill',
        question: 'Condense: $3\\log(x) - \\log(y) + 2\\log(z) = $ _____',
        answer: 'log(x^3*z^2/y)',
        altAnswers: ['log(x^3z^2/y)', '\\log\\left(\\frac{x^3z^2}{y}\\right)'],
        explanation: 'Using power rule: $3\\log(x) + 2\\log(z) = \\log(x^3) + \\log(z^2) = \\log(x^3z^2)$. Then quotient rule: $\\log(x^3z^2) - \\log(y) = \\log(x^3z^2/y)$.'
      }
    ]
  },
  {
    id: '3.4',
    learn: `
      <div class="concept-card">
        <h2>Solving Exponential Equations</h2>

        <p>An <strong>exponential equation</strong> is an equation in which the variable appears in an exponent. To solve these equations, we use the fact that exponential functions are one-to-one: if $b^x = b^y$, then $x = y$.</p>

        <div class="formula-box">
          <div class="formula-label">One-to-One Property of Exponentials</div>
          $$\\text{If } b^x = b^y \\text{ (where } b > 0, b \\neq 1\\text{), then } x = y$$
        </div>

        <p><strong>Strategy 1: Same Base Method</strong></p>
        <ol>
          <li>Express both sides with the same base</li>
          <li>Set the exponents equal</li>
          <li>Solve for the variable</li>
        </ol>
        <p>This works well when the equation can be rewritten with the same base on both sides.</p>

        <p><strong>Strategy 2: Taking Logarithms</strong></p>
        <ol>
          <li>If the bases cannot be made the same, take the logarithm of both sides</li>
          <li>Use logarithm properties to bring down the exponent</li>
          <li>Solve for the variable</li>
        </ol>
        <p>This is the general approach that works for any exponential equation of the form $a \\cdot b^{cx+d} = k$.</p>

        <div class="formula-box">
          <div class="formula-label">Key Property for Taking Logarithms</div>
          $$\\text{If } A = B \\text{ (both positive), then } \\log_b(A) = \\log_b(B)$$
          You can take the logarithm of both sides of an equation without changing the solution.
        </div>

        <p><strong>Important consideration: Extraneous Solutions</strong> When we manipulate equations, we must check our solutions. Logarithms are only defined for positive arguments, so we need to verify that our answer doesn't create a negative or zero logarithm.</p>

        <p><strong>Example process for $3 \\cdot 2^{2x} = 24$:</strong></p>
        <ol>
          <li>Divide by 3: $2^{2x} = 8$</li>
          <li>Express 8 as a power of 2: $2^{2x} = 2^3$</li>
          <li>Set exponents equal: $2x = 3$</li>
          <li>Solve: $x = 3/2$</li>
          <li>Check: $3 \\cdot 2^{2(3/2)} = 3 \\cdot 2^3 = 3 \\cdot 8 = 24$ ✓</li>
        </ol>

        <div class="warning-box">
          <div class="warning-icon">⚠️</div>
          <strong>Warning:</strong> When solving exponential equations involving logarithms, always check your solutions by substituting back into the original equation. Some solutions may be extraneous (don't satisfy the original equation).
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Solve $2^x = 32$ using the same base method.',
        steps: [
          'Express 32 as a power of 2: $32 = 2^5$',
          'Rewrite the equation: $2^x = 2^5$',
          'By the one-to-one property: $x = 5$',
          'Check: $2^5 = 32$ ✓'
        ],
        answer: '$x = 5$'
      },
      {
        problem: 'Solve $5^{x+1} = 17$ using logarithms.',
        steps: [
          'Take the natural logarithm of both sides: $\\ln(5^{x+1}) = \\ln(17)$',
          'Apply the power rule: $(x+1) \\ln(5) = \\ln(17)$',
          'Divide by $\\ln(5)$: $x + 1 = \\frac{\\ln(17)}{\\ln(5)}$',
          'Calculate: $\\frac{\\ln(17)}{\\ln(5)} \\approx \\frac{2.833}{1.609} \\approx 1.760$',
          'Solve for $x$: $x \\approx 1.760 - 1 = 0.760$',
          'Check: $5^{0.760 + 1} = 5^{1.760} \\approx 17$ ✓'
        ],
        answer: '$x = \\frac{\\ln(17)}{\\ln(5)} - 1 \\approx 0.760$'
      },
      {
        problem: 'Solve $e^{2x} - 3e^x + 2 = 0$.',
        steps: [
          'This is a quadratic equation in terms of $e^x$. Let $u = e^x$:',
          'Rewrite: $u^2 - 3u + 2 = 0$',
          'Factor: $(u - 1)(u - 2) = 0$',
          'Solve for $u$: $u = 1$ or $u = 2$',
          'Substitute back $u = e^x$: $e^x = 1$ or $e^x = 2$',
          'For $e^x = 1$: Taking $\\ln$, $x = \\ln(1) = 0$',
          'For $e^x = 2$: Taking $\\ln$, $x = \\ln(2) \\approx 0.693$',
          'Check $x = 0$: $e^{0} - 3e^0 + 2 = 1 - 3 + 2 = 0$ ✓',
          'Check $x = \\ln(2)$: $e^{2\\ln(2)} - 3e^{\\ln(2)} + 2 = 4 - 6 + 2 = 0$ ✓'
        ],
        answer: '$x = 0$ or $x = \\ln(2) \\approx 0.693$'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'Solve $3^x = 27$.',
        choices: [
          '$x = 3$',
          '$x = 9$',
          '$x = 81$',
          '$x = 1/3$'
        ],
        correct: 0,
        explanation: 'Express 27 as a power of 3: $27 = 3^3$. So $3^x = 3^3$ implies $x = 3$.'
      },
      {
        type: 'fill',
        question: 'Solve $4^{2x} = 64$. Your answer: $x = $ _____',
        answer: '1.5',
        altAnswers: ['3/2', '1.5'],
        explanation: 'Rewrite as the same base: $4^{2x} = 4^3$. Then $2x = 3$, so $x = 3/2 = 1.5$.'
      },
      {
        type: 'fill',
        question: 'Solve $e^x = 10$ for $x$ using natural log. Round to three decimal places: $x \\approx$ _____',
        answer: '2.303',
        altAnswers: ['2.30', 'ln(10)'],
        explanation: 'Taking natural log: $\\ln(e^x) = \\ln(10)$, so $x = \\ln(10) \\approx 2.303$.'
      },
      {
        type: 'mc',
        question: 'Which of the following is the first step in solving $2 \\cdot 5^x = 50$?',
        choices: [
          'Take the logarithm of both sides',
          'Divide both sides by 2',
          'Subtract 2 from both sides',
          'Take the exponential of both sides'
        ],
        correct: 1,
        explanation: 'The first step is to isolate the exponential term by dividing by 2: $5^x = 25$.'
      },
      {
        type: 'fill',
        question: 'Solve $e^{x} - 5e^{-x} = 0$. (Hint: Multiply by $e^x$). Your answer: $x = $ _____',
        answer: 'ln(5)',
        altAnswers: ['ln 5', '\\ln(5)'],
        explanation: 'Multiply by $e^x$: $e^{2x} - 5 = 0$, so $e^{2x} = 5$. Taking ln: $2x = \\ln(5)$, giving $x = \\frac{\\ln(5)}{2} \\approx 0.805$ or can also express as the coefficient.'
      }
    ]
  },
  {
    id: '3.5',
    learn: `
      <div class="concept-card">
        <h2>Solving Logarithmic Equations</h2>

        <p>A <strong>logarithmic equation</strong> is an equation that contains logarithmic expressions. To solve these, we use the one-to-one property of logarithms and convert between logarithmic and exponential forms.</p>

        <div class="formula-box">
          <div class="formula-label">One-to-One Property of Logarithms</div>
          $$\\text{If } \\log_b(x) = \\log_b(y) \\text{ (where } x, y > 0\\text{), then } x = y$$
        </div>

        <p><strong>General strategies for solving logarithmic equations:</strong></p>

        <p><strong>Strategy 1: Convert to Exponential Form</strong></p>
        <ol>
          <li>Isolate the logarithmic term</li>
          <li>Convert from logarithmic to exponential form: If $\\log_b(x) = y$, then $b^y = x$</li>
          <li>Solve the resulting exponential equation</li>
          <li>Check that all solutions are in the domain (argument of log must be positive)</li>
        </ol>

        <p><strong>Strategy 2: Combine Logarithms Using Properties</strong></p>
        <ol>
          <li>Use logarithm properties to combine multiple logs into a single logarithm</li>
          <li>Apply the one-to-one property: if $\\log_b(f(x)) = \\log_b(g(x))$, then $f(x) = g(x)$</li>
          <li>Solve the resulting equation</li>
          <li>Check solutions to ensure they don't make any logarithm undefined</li>
        </ol>

        <p><strong>Domain Restrictions:</strong> This is critical! Before we can evaluate a logarithm, its argument must be positive. So when solving logarithmic equations:</p>
        <ul>
          <li>The domain of $\\log(f(x))$ requires $f(x) > 0$</li>
          <li>Any solution that makes $f(x) \\leq 0$ is extraneous and must be rejected</li>
          <li>Always check your solutions by substituting back into the original equation</li>
        </ul>

        <p><strong>Example:</strong> For $\\ln(x) + \\ln(x-2) = \\ln(3)$, we need both $x > 0$ and $x - 2 > 0$, so $x > 2$. Any solution with $x \\leq 2$ must be rejected.</p>

        <div class="warning-box">
          <div class="warning-icon">⚠️</div>
          <strong>Warning:</strong> Always check solutions in the original equation! A solution that looks correct algebraically may be extraneous if it violates domain restrictions (making an argument of a logarithm non-positive).
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Solve $\\log_2(x) = 5$.',
        steps: [
          'This is in the form $\\log_b(x) = y$.',
          'Convert to exponential form: $2^5 = x$',
          'Calculate: $x = 32$',
          'Check domain: $x = 32 > 0$ ✓ (valid for logarithm)',
          'Verify: $\\log_2(32) = \\log_2(2^5) = 5$ ✓'
        ],
        answer: '$x = 32$'
      },
      {
        problem: 'Solve $\\ln(x+3) + \\ln(x-1) = \\ln(5)$.',
        steps: [
          'Combine logarithms on the left using the product rule: $\\ln[(x+3)(x-1)] = \\ln(5)$',
          'Apply the one-to-one property: $(x+3)(x-1) = 5$',
          'Expand: $x^2 + 2x - 3 = 5$',
          'Simplify: $x^2 + 2x - 8 = 0$',
          'Factor: $(x+4)(x-2) = 0$',
          'Solutions: $x = -4$ or $x = 2$',
          'Check domain: We need $x + 3 > 0$ AND $x - 1 > 0$, so $x > 1$.',
          '$x = -4$: Does not satisfy $x > 1$, so REJECTED (extraneous)',
          '$x = 2$: Satisfies $x > 1$ ✓',
          'Verify: $\\ln(2+3) + \\ln(2-1) = \\ln(5) + \\ln(1) = \\ln(5) + 0 = \\ln(5)$ ✓'
        ],
        answer: '$x = 2$'
      },
      {
        problem: 'Solve $\\log(x) - \\log(x-3) = 1$.',
        steps: [
          'Combine using the quotient rule: $\\log\\left(\\frac{x}{x-3}\\right) = 1$',
          'Convert to exponential form (base 10): $\\frac{x}{x-3} = 10^1 = 10$',
          'Multiply both sides by $(x-3)$: $x = 10(x-3)$',
          'Expand: $x = 10x - 30$',
          'Simplify: $-9x = -30$',
          'Solve: $x = \\frac{30}{9} = \\frac{10}{3} \\approx 3.33$',
          'Check domain: We need $x > 0$ AND $x - 3 > 0$, so $x > 3$.',
          'Since $\\frac{10}{3} \\approx 3.33 > 3$ ✓',
          'Verify: $\\log(10/3) - \\log(10/3 - 3) = \\log(10/3) - \\log(1/3) = \\log\\left(\\frac{10/3}{1/3}\\right) = \\log(10) = 1$ ✓'
        ],
        answer: '$x = \\frac{10}{3}$ or $x \\approx 3.33$'
      }
    ],
    practice: [
      {
        type: 'fill',
        question: 'Solve $\\log_5(x) = 2$. Your answer: $x = $ _____',
        answer: '25',
        altAnswers: [],
        explanation: 'Convert to exponential form: $5^2 = x$, so $x = 25$.'
      },
      {
        type: 'mc',
        question: 'Which step is correct when solving $\\ln(2x) = 3$?',
        choices: [
          '$2x = e^3$',
          '$2x = 3e$',
          '$x = e^{3/2}$',
          '$x = \\ln(3)/2$'
        ],
        correct: 0,
        explanation: 'Converting $\\ln(2x) = 3$ to exponential form gives $2x = e^3$. Then divide by 2 to get $x = e^3/2$.'
      },
      {
        type: 'fill',
        question: 'Solve $\\log(x) + \\log(2) = \\log(8)$. Your answer: $x = $ _____',
        answer: '4',
        altAnswers: [],
        explanation: 'Combine: $\\log(2x) = \\log(8)$. Apply one-to-one property: $2x = 8$, so $x = 4$.'
      },
      {
        type: 'mc',
        question: 'When solving $\\ln(x) + \\ln(x-2) = 1$, what is the domain restriction?',
        choices: [
          '$x > 0$',
          '$x > 2$',
          '$x > 1$',
          '$x > e$'
        ],
        correct: 1,
        explanation: 'We need $x > 0$ for $\\ln(x)$ and $x - 2 > 0$ for $\\ln(x-2)$. Combined: $x > 2$.'
      },
      {
        type: 'fill',
        question: 'Solve $2\\log_3(x) = \\log_3(16)$. Your answer: $x = $ _____',
        answer: '4',
        altAnswers: [],
        explanation: 'Use power rule: $\\log_3(x^2) = \\log_3(16)$. Apply one-to-one: $x^2 = 16$, so $x = 4$ (reject $x = -4$ since we need $x > 0$).'
      }
    ]
  },
  {
    id: '3.6',
    learn: `
      <div class="concept-card">
        <h2>Modeling with Exponential & Logarithmic Functions</h2>

        <p>Exponential and logarithmic functions are among the most important tools in applied mathematics. They model growth and decay in nature, finance, physics, and biology. Let's explore the main models.</p>

        <p><strong>1. Compound Interest</strong></p>
        <p>When money earns interest, we distinguish between simple and compound interest. In compound interest, interest is calculated on both the principal and accumulated interest.</p>

        <div class="formula-box">
          <div class="formula-label">Compound Interest Formula</div>
          $$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$
          where:
          <ul style="margin-top: 10px;">
            <li>$A$ = final amount</li>
            <li>$P$ = principal (initial amount)</li>
            <li>$r$ = annual interest rate (as a decimal)</li>
            <li>$n$ = number of times compounded per year</li>
            <li>$t$ = time in years</li>
          </ul>
        </div>

        <p>Special case: <strong>Continuous Compounding</strong> occurs when interest is compounded infinitely often:</p>

        <div class="formula-box">
          <div class="formula-label">Continuous Compound Interest</div>
          $$A = Pe^{rt}$$
        </div>

        <p><strong>2. Exponential Growth and Decay</strong></p>
        <p>Many natural processes follow exponential growth or decay models:</p>

        <div class="formula-box">
          <div class="formula-label">Exponential Growth/Decay</div>
          $$A(t) = A_0 e^{kt}$$
          where:
          <ul style="margin-top: 10px;">
            <li>$A(t)$ = amount at time $t$</li>
            <li>$A_0$ = initial amount</li>
            <li>$k$ = growth constant (positive for growth, negative for decay)</li>
            <li>$t$ = time</li>
          </ul>
        </div>

        <p><strong>3. Half-Life</strong></p>
        <p>For radioactive decay and similar processes, we often use the half-life model:</p>

        <div class="formula-box">
          <div class="formula-label">Half-Life Formula</div>
          $$A(t) = A_0\\left(\\frac{1}{2}\\right)^{t/h}$$
          where $h$ is the half-life (time for amount to reduce to half).
        </div>

        <p><strong>4. Logistic Growth</strong></p>
        <p>In reality, populations don't grow exponentially forever—they have carrying capacity. The logistic model describes growth that levels off:</p>

        <div class="formula-box">
          <div class="formula-label">Logistic Growth Model</div>
          $$f(t) = \\frac{L}{1 + be^{-kt}}$$
          where:
          <ul style="margin-top: 10px;">
            <li>$L$ = carrying capacity (limit as $t \\to \\infty$)</li>
            <li>$b$ = constant related to initial conditions</li>
            <li>$k$ = growth rate parameter</li>
            <li>$t$ = time</li>
          </ul>
        </div>

        <div class="tip-box">
          <div class="tip-icon">💡</div>
          <strong>Tip:</strong> When modeling real situations, always pay attention to units and what each parameter represents. Make sure your answer makes sense in context.
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'You invest $2,000 at 5% annual interest compounded quarterly. How much will you have after 5 years?',
        steps: [
          'Identify the parameters: $P = 2000$, $r = 0.05$, $n = 4$ (quarterly), $t = 5$',
          'Apply the compound interest formula: $A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$',
          'Substitute: $A = 2000\\left(1 + \\frac{0.05}{4}\\right)^{4 \\cdot 5}$',
          'Calculate: $A = 2000(1 + 0.0125)^{20} = 2000(1.0125)^{20}$',
          'Evaluate: $(1.0125)^{20} \\approx 1.2820$',
          'Final amount: $A \\approx 2000 \\times 1.2820 = 2564.00$',
          'You will have approximately $2,564.00 after 5 years.'
        ],
        answer: 'Approximately $2,564.00'
      },
      {
        problem: 'A sample of radioactive material has a half-life of 10 days. If you start with 200 grams, how much remains after 30 days?',
        steps: [
          'Identify: $A_0 = 200$ grams, $h = 10$ days, $t = 30$ days',
          'Use the half-life formula: $A(t) = A_0\\left(\\frac{1}{2}\\right)^{t/h}$',
          'Substitute: $A(30) = 200\\left(\\frac{1}{2}\\right)^{30/10}$',
          'Simplify the exponent: $A(30) = 200\\left(\\frac{1}{2}\\right)^3$',
          'Calculate: $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8} = 0.125$',
          'Final amount: $A(30) = 200 \\times 0.125 = 25$ grams',
          'After 30 days (3 half-lives), only 25 grams remain.'
        ],
        answer: '25 grams'
      },
      {
        problem: 'A bacterial culture grows according to $A(t) = 100e^{0.5t}$ where $t$ is time in hours. How many hours will it take for the population to reach 1,000 bacteria?',
        steps: [
          'Set up the equation: $1000 = 100e^{0.5t}$',
          'Divide by 100: $10 = e^{0.5t}$',
          'Take the natural logarithm of both sides: $\\ln(10) = \\ln(e^{0.5t})$',
          'Apply the logarithm property: $\\ln(10) = 0.5t$',
          'Solve for $t$: $t = \\frac{\\ln(10)}{0.5} = 2\\ln(10)$',
          'Calculate: $\\ln(10) \\approx 2.303$, so $t \\approx 2 \\times 2.303 = 4.606$ hours',
          'The population reaches 1,000 bacteria after approximately 4.6 hours.'
        ],
        answer: '$t = 2\\ln(10) \\approx 4.61$ hours'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'Which formula represents exponential decay with a decay constant?',
        choices: [
          '$A = P(1 + r/n)^{nt}$',
          '$A = A_0e^{kt}$ where $k > 0$',
          '$A = A_0e^{kt}$ where $k < 0$',
          '$A = L/(1 + be^{-kt})$'
        ],
        correct: 2,
        explanation: 'Exponential decay is represented by $A = A_0e^{kt}$ where $k < 0$ (negative). The negative exponent causes the exponential to decrease.'
      },
      {
        type: 'fill',
        question: 'You invest $1,000 at 6% annual interest compounded continuously. How much do you have after 2 years? Round to the nearest cent: $ _____',
        answer: '1127.50',
        altAnswers: ['1127.49', '\\$1127.50'],
        explanation: 'Using $A = Pe^{rt}$: $A = 1000e^{0.06 \\cdot 2} = 1000e^{0.12} \\approx 1000(1.1275) = 1127.50$.'
      },
      {
        type: 'fill',
        question: 'Carbon-14 has a half-life of 5,730 years. If a fossil initially contained 10 grams of C-14, how much remains after 11,460 years (2 half-lives)? _____',
        answer: '2.5',
        altAnswers: ['2.5 grams'],
        explanation: 'After 2 half-lives: $10 \\times (1/2)^2 = 10 \\times 1/4 = 2.5$ grams.'
      },
      {
        type: 'mc',
        question: 'A population follows logistic growth $f(t) = 100/(1 + 9e^{-0.2t})$. What is the carrying capacity?',
        choices: [
          '$9$',
          '$0.2$',
          '$100$',
          '$1$'
        ],
        correct: 2,
        explanation: 'In the logistic model $f(t) = L/(1 + be^{-kt})$, the carrying capacity $L$ is the numerator. Here $L = 100$.'
      },
      {
        type: 'fill',
        question: 'If a disease spreads with $A(t) = 50e^{0.3t}$ where $t$ is days and $A$ is number of infections, when will there be 500 infections? Round to 1 decimal place: $t \\approx $ _____ days',
        answer: '7.7',
        altAnswers: ['7.7 days', '7.68'],
        explanation: '$500 = 50e^{0.3t}$ gives $10 = e^{0.3t}$. Taking ln: $\\ln(10) = 0.3t$, so $t = \\ln(10)/0.3 \\approx 2.303/0.3 \\approx 7.68$ days.'
      }
    ]
  }
];

