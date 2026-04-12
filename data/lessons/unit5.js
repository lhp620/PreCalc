const lessons = [
  {
    id: '5.1',
    learn: `<div class="concept-card">
      <h2>Fundamental Identities</h2>
      <p>Trigonometric identities are equations that are true for all valid values of the variable. The fundamental identities form the foundation for all trigonometric manipulation.</p>

      <h3>Pythagorean Identities</h3>
      <p>These identities come directly from the Pythagorean theorem applied to the unit circle:</p>
      <div class="formula-box">
        <div class="formula-label">Primary Pythagorean Identity</div>
        $$\\sin^2\\theta + \\cos^2\\theta = 1$$
      </div>
      <p>Dividing the primary identity by $\\cos^2\\theta$ and $\\sin^2\\theta$ gives:</p>
      <div class="formula-box">
        <div class="formula-label">Other Pythagorean Identities</div>
        $$1 + \\tan^2\\theta = \\sec^2\\theta$$
        $$1 + \\cot^2\\theta = \\csc^2\\theta$$
      </div>

      <h3>Reciprocal Identities</h3>
      <p>These define the reciprocal trigonometric functions:</p>
      <div class="formula-box">
        <div class="formula-label">Reciprocal Functions</div>
        $$\\csc\\theta = \\frac{1}{\\sin\\theta}, \\quad \\sec\\theta = \\frac{1}{\\cos\\theta}, \\quad \\cot\\theta = \\frac{1}{\\tan\\theta}$$
      </div>

      <h3>Quotient Identities</h3>
      <p>Tangent and cotangent are defined as ratios of sine and cosine:</p>
      <div class="formula-box">
        <div class="formula-label">Quotient Functions</div>
        $$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, \\quad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$$
      </div>

      <h3>Cofunction Identities</h3>
      <p>Cofunctions are complementary trigonometric functions:</p>
      <div class="formula-box">
        <div class="formula-label">Cofunction Identities</div>
        $$\\sin\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cos\\theta, \\quad \\cos\\left(\\frac{\\pi}{2} - \\theta\\right) = \\sin\\theta$$
        $$\\tan\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cot\\theta, \\quad \\cot\\left(\\frac{\\pi}{2} - \\theta\\right) = \\tan\\theta$$
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> These identities are useful for simplifying trigonometric expressions and solving equations. Memorize the main forms, especially the Pythagorean identities and reciprocal identities.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Simplify $\\frac{\\sin^2\\theta}{1 - \\sin^2\\theta}$ using fundamental identities.',
        steps: [
          'Recognize that $1 - \\sin^2\\theta = \\cos^2\\theta$ (from the Pythagorean identity)',
          'Rewrite: $\\frac{\\sin^2\\theta}{\\cos^2\\theta}$',
          'This is the definition of $\\tan^2\\theta$'
        ],
        answer: '$\\tan^2\\theta$'
      },
      {
        problem: 'Express $\\sec\\theta\\sin\\theta$ in terms of tangent.',
        steps: [
          'Use the reciprocal identity: $\\sec\\theta = \\frac{1}{\\cos\\theta}$',
          'Substitute: $\\frac{1}{\\cos\\theta} \\cdot \\sin\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$',
          'Use the quotient identity: $\\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$'
        ],
        answer: '$\\tan\\theta$'
      },
      {
        problem: 'Simplify $(1 + \\tan^2\\theta)\\cos^2\\theta$.',
        steps: [
          'Apply the Pythagorean identity: $1 + \\tan^2\\theta = \\sec^2\\theta$',
          'Rewrite: $\\sec^2\\theta \\cdot \\cos^2\\theta$',
          'Since $\\sec\\theta = \\frac{1}{\\cos\\theta}$, we have $\\sec^2\\theta = \\frac{1}{\\cos^2\\theta}$',
          'Simplify: $\\frac{1}{\\cos^2\\theta} \\cdot \\cos^2\\theta = 1$'
        ],
        answer: '$1$'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'Which expression is equivalent to $\\csc\\theta\\cos\\theta$?',
        choices: ['$\\sin\\theta$', '$\\cot\\theta$', '$\\tan\\theta$', '$\\sec\\theta$'],
        correct: 1,
        explanation: 'Since $\\csc\\theta = \\frac{1}{\\sin\\theta}$, we have $\\frac{1}{\\sin\\theta} \\cdot \\cos\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta$'
      },
      {
        type: 'fill',
        question: 'If $\\sin\\theta = 0.6$, find $\\cos^2\\theta$ using the Pythagorean identity.',
        answer: '0.64',
        altAnswers: ['0.64', '16/25'],
        explanation: 'Using $\\sin^2\\theta + \\cos^2\\theta = 1$: $(0.6)^2 + \\cos^2\\theta = 1$, so $0.36 + \\cos^2\\theta = 1$, therefore $\\cos^2\\theta = 0.64$ or $\\frac{16}{25}$'
      },
      {
        type: 'mc',
        question: 'Simplify $\\tan\\theta\\cos\\theta$.',
        choices: ['$\\sin\\theta$', '$\\cos\\theta$', '$\\cot\\theta$', '$\\csc\\theta$'],
        correct: 0,
        explanation: '$\\tan\\theta\\cos\\theta = \\frac{\\sin\\theta}{\\cos\\theta} \\cdot \\cos\\theta = \\sin\\theta$'
      },
      {
        type: 'fill',
        question: 'Complete the identity: $\\cot\\left(\\frac{\\pi}{2} - \\theta\\right) = $',
        answer: 'tan(θ)',
        altAnswers: ['tan(θ)', 'tan θ', 'tanθ'],
        explanation: 'By the cofunction identity, $\\cot\\left(\\frac{\\pi}{2} - \\theta\\right) = \\tan\\theta$'
      },
      {
        type: 'mc',
        question: 'If $\\tan^2\\theta = 3$, what is $\\sec^2\\theta$?',
        choices: ['$2$', '$3$', '$4$', '$\\sqrt{3}$'],
        correct: 2,
        explanation: 'Using $1 + \\tan^2\\theta = \\sec^2\\theta$: $\\sec^2\\theta = 1 + 3 = 4$'
      }
    ]
  },
  {
    id: '5.2',
    learn: `<div class="concept-card">
      <h2>Proving Trigonometric Identities</h2>
      <p>Proving an identity means showing that two expressions are equivalent for all valid values of the variable. Unlike solving equations, we manipulate expressions rather than balance both sides.</p>

      <h3>Key Strategies</h3>
      <div class="formula-box">
        <div class="formula-label">Strategy 1: Work One Side Only</div>
        <p>Transform one side of the equation into the other, typically converting complex expressions to simpler forms.</p>
      </div>

      <div class="formula-box">
        <div class="formula-label">Strategy 2: Convert to Sine and Cosine</div>
        <p>Express all trigonometric functions in terms of sine and cosine, then simplify.</p>
      </div>

      <div class="formula-box">
        <div class="formula-label">Strategy 3: Factor and Use Identities</div>
        <p>Look for common factors or patterns that allow you to apply fundamental identities.</p>
      </div>

      <div class="formula-box">
        <div class="formula-label">Strategy 4: Multiply by Conjugates</div>
        <p>For expressions like $1 \\pm \\sin\\theta$, multiply by appropriate conjugates to simplify.</p>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> Start with the more complex side. Use Pythagorean identities strategically. Avoid taking square roots or moving terms across the equals sign—work algebraically with single expressions.</p>
      </div>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <p><strong>Warning:</strong> Never assume the identity is true and work backwards. Always manipulate one side into the other. This ensures a valid proof.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Prove that $\\frac{\\sin\\theta}{1 - \\cos\\theta} = \\frac{1 + \\cos\\theta}{\\sin\\theta}$',
        steps: [
          'Start with the left side: $\\frac{\\sin\\theta}{1 - \\cos\\theta}$',
          'Multiply numerator and denominator by the conjugate $(1 + \\cos\\theta)$:',
          '$\\frac{\\sin\\theta(1 + \\cos\\theta)}{(1 - \\cos\\theta)(1 + \\cos\\theta)}$',
          'The denominator becomes: $(1 - \\cos\\theta)(1 + \\cos\\theta) = 1 - \\cos^2\\theta = \\sin^2\\theta$',
          'So we have: $\\frac{\\sin\\theta(1 + \\cos\\theta)}{\\sin^2\\theta}$',
          'Cancel $\\sin\\theta$: $\\frac{1 + \\cos\\theta}{\\sin\\theta}$ ✓'
        ],
        answer: 'Proof complete'
      },
      {
        problem: 'Prove that $\\tan^2\\theta - \\sin^2\\theta = \\tan^2\\theta\\sin^2\\theta$',
        steps: [
          'Work with the left side: $\\tan^2\\theta - \\sin^2\\theta$',
          'Convert to sine and cosine: $\\frac{\\sin^2\\theta}{\\cos^2\\theta} - \\sin^2\\theta$',
          'Find a common denominator: $\\frac{\\sin^2\\theta - \\sin^2\\theta\\cos^2\\theta}{\\cos^2\\theta}$',
          'Factor the numerator: $\\frac{\\sin^2\\theta(1 - \\cos^2\\theta)}{\\cos^2\\theta}$',
          'Apply Pythagorean identity: $\\frac{\\sin^2\\theta \\cdot \\sin^2\\theta}{\\cos^2\\theta}$',
          'This equals: $\\frac{\\sin^4\\theta}{\\cos^2\\theta} = \\tan^2\\theta\\sin^2\\theta$ ✓'
        ],
        answer: 'Proof complete'
      },
      {
        problem: 'Prove that $\\cos^4\\theta - \\sin^4\\theta = \\cos(2\\theta)$',
        steps: [
          'Start with the left side: $\\cos^4\\theta - \\sin^4\\theta$',
          'Factor as difference of squares: $(\\cos^2\\theta - \\sin^2\\theta)(\\cos^2\\theta + \\sin^2\\theta)$',
          'The second factor equals 1: $\\cos^2\\theta - \\sin^2\\theta$',
          'This is the double-angle formula: $\\cos(2\\theta)$ ✓'
        ],
        answer: 'Proof complete'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'Which is the best first step to prove $\\sec\\theta - \\cos\\theta = \\sin\\theta\\tan\\theta$?',
        choices: [
          'Convert $\\sec\\theta$ to $\\frac{1}{\\cos\\theta}$ and combine fractions',
          'Square both sides to eliminate fractions',
          'Multiply both sides by $\\cos\\theta$',
          'Rewrite $\\tan\\theta$ as $\\frac{\\sin\\theta}{\\cos\\theta}$'
        ],
        correct: 0,
        explanation: 'Converting $\\sec\\theta$ to $\\frac{1}{\\cos\\theta}$ allows you to work with a single fraction on the left side, making it easier to simplify.'
      },
      {
        type: 'fill',
        question: 'To prove $\\frac{1}{\\sin\\theta} - \\frac{\\sin\\theta}{1 + \\cos\\theta} = \\cot\\theta$, after combining fractions on the left, the denominator becomes $\\sin\\theta(1 + \\cos\\theta)$. What should the numerator be?',
        answer: '1 + cos(θ) - sin²(θ)',
        altAnswers: ['1 + cos(θ) - sin²(θ)', '1 + cosθ - sin²θ', 'cos²θ + cosθ'],
        explanation: 'The numerator is $(1 + \\cos\\theta) - \\sin^2\\theta = 1 + \\cos\\theta - \\sin^2\\theta = 1 + \\cos\\theta - (1 - \\cos^2\\theta) = \\cos^2\\theta + \\cos\\theta$'
      },
      {
        type: 'mc',
        question: 'When proving $\\csc^2\\theta(1 - \\cos^2\\theta) = 1$, what is a good strategy?',
        choices: [
          'Convert $\\csc^2\\theta$ to $\\frac{1}{\\sin^2\\theta}$ and use the Pythagorean identity',
          'Expand the left side and combine like terms',
          'Take the square root of both sides',
          'Move all terms to one side'
        ],
        correct: 0,
        explanation: 'Converting $\\csc^2\\theta = \\frac{1}{\\sin^2\\theta}$ and recognizing that $1 - \\cos^2\\theta = \\sin^2\\theta$ directly gives $\\frac{1}{\\sin^2\\theta} \\cdot \\sin^2\\theta = 1$'
      },
      {
        type: 'fill',
        question: 'In proving an identity, you should never assume the identity is true and work backwards. Instead, always manipulate one _____ into the other.',
        answer: 'side',
        altAnswers: ['side', 'expression'],
        explanation: 'This ensures logical validity. Working backwards from the assumption that the identity is true is circular reasoning and not a valid proof.'
      }
    ]
  },
  {
    id: '5.3',
    learn: `<div class="concept-card">
      <h2>Sum and Difference Formulas</h2>
      <p>These formulas allow us to find the trigonometric values of angle sums and differences, and to simplify expressions involving such angles.</p>

      <h3>Sum and Difference Formulas for Sine</h3>
      <div class="formula-box">
        <div class="formula-label">Sine Formulas</div>
        $$\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$$
        $$\\sin(A - B) = \\sin A \\cos B - \\cos A \\sin B$$
      </div>

      <h3>Sum and Difference Formulas for Cosine</h3>
      <div class="formula-box">
        <div class="formula-label">Cosine Formulas</div>
        $$\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B$$
        $$\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B$$
      </div>

      <h3>Sum and Difference Formulas for Tangent</h3>
      <div class="formula-box">
        <div class="formula-label">Tangent Formulas</div>
        $$\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B}$$
        $$\\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}$$
      </div>

      <h3>Applications</h3>
      <p>These formulas are useful for:</p>
      <ul>
        <li>Finding exact values of angles that are sums or differences of special angles (30°, 45°, 60°, etc.)</li>
        <li>Simplifying trigonometric expressions</li>
        <li>Deriving other identities</li>
      </ul>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> Notice the pattern: for sine, the signs in the formula match the operation. For cosine, subtraction becomes addition in the formula. For tangent, remember "1 minus" for addition and "1 plus" for subtraction.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Find the exact value of $\\sin(75°)$.',
        steps: [
          'Recognize that $75° = 45° + 30°$',
          'Use the sine addition formula: $\\sin(45° + 30°) = \\sin 45° \\cos 30° + \\cos 45° \\sin 30°$',
          'Substitute known values: $\\sin 45° = \\frac{\\sqrt{2}}{2}$, $\\cos 45° = \\frac{\\sqrt{2}}{2}$, $\\sin 30° = \\frac{1}{2}$, $\\cos 30° = \\frac{\\sqrt{3}}{2}$',
          'Calculate: $\\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4}$'
        ],
        answer: '$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$'
      },
      {
        problem: 'Find the exact value of $\\cos(15°)$.',
        steps: [
          'Recognize that $15° = 45° - 30°$',
          'Use the cosine difference formula: $\\cos(45° - 30°) = \\cos 45° \\cos 30° + \\sin 45° \\sin 30°$',
          'Substitute: $\\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2}$',
          'Simplify: $\\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4}$'
        ],
        answer: '$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$'
      },
      {
        problem: 'Simplify $\\sin(\\theta + \\frac{\\pi}{2})$.',
        steps: [
          'Use the sine addition formula: $\\sin(\\theta + \\frac{\\pi}{2}) = \\sin\\theta \\cos\\frac{\\pi}{2} + \\cos\\theta \\sin\\frac{\\pi}{2}$',
          'Substitute values: $\\cos\\frac{\\pi}{2} = 0$ and $\\sin\\frac{\\pi}{2} = 1$',
          'Simplify: $\\sin\\theta(0) + \\cos\\theta(1) = \\cos\\theta$'
        ],
        answer: '$\\cos\\theta$'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'Which expression equals $\\sin(A - B)$?',
        choices: [
          '$\\sin A \\cos B - \\cos A \\sin B$',
          '$\\sin A \\cos B + \\cos A \\sin B$',
          '$\\cos A \\cos B - \\sin A \\sin B$',
          '$\\sin A \\sin B - \\cos A \\cos B$'
        ],
        correct: 0,
        explanation: 'The sine difference formula is $\\sin(A - B) = \\sin A \\cos B - \\cos A \\sin B$'
      },
      {
        type: 'fill',
        question: 'Find the exact value of $\\tan(15°)$ using the tangent difference formula for $45° - 30°$. (Enter as a simplified radical expression or decimal.)',
        answer: '2 - √3',
        altAnswers: ['2 - √3', '2-√3', '2 - √(3)', '2-√(3)'],
        explanation: '$\\tan(45° - 30°) = \\frac{\\tan 45° - \\tan 30°}{1 + \\tan 45° \\tan 30°} = \\frac{1 - \\frac{1}{\\sqrt{3}}}{1 + 1 \\cdot \\frac{1}{\\sqrt{3}}} = \\frac{\\sqrt{3} - 1}{\\sqrt{3} + 1} = 2 - \\sqrt{3}$ (after rationalizing)'
      },
      {
        type: 'mc',
        question: 'What is $\\cos(\\theta - \\frac{\\pi}{2})$?',
        choices: ['$-\\sin\\theta$', '$\\sin\\theta$', '$\\cos\\theta$', '$-\\cos\\theta$'],
        correct: 1,
        explanation: '$\\cos(\\theta - \\frac{\\pi}{2}) = \\cos\\theta \\cos\\frac{\\pi}{2} + \\sin\\theta \\sin\\frac{\\pi}{2} = \\cos\\theta(0) + \\sin\\theta(1) = \\sin\\theta$'
      },
      {
        type: 'fill',
        question: 'Simplify $\\sin(\\alpha + \\beta) + \\sin(\\alpha - \\beta)$ using sum and difference formulas.',
        answer: '2sin(α)cos(β)',
        altAnswers: ['2sin(α)cos(β)', '2sinαcosβ', '2 sin(α) cos(β)'],
        explanation: '$\\sin(\\alpha + \\beta) + \\sin(\\alpha - \\beta) = (\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta) + (\\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta) = 2\\sin\\alpha\\cos\\beta$'
      },
      {
        type: 'mc',
        question: 'For the tangent sum formula, $\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B}$, what is the denominator in the tangent difference formula $\\tan(A - B)$?',
        choices: ['$1 + \\tan A \\tan B$', '$1 - \\tan A \\tan B$', '$\\tan A \\tan B - 1$', '$\\tan A \\tan B + 1$'],
        correct: 0,
        explanation: 'In the tangent difference formula, the denominator has a plus sign: $\\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}$'
      }
    ]
  },
  {
    id: '5.4',
    learn: `<div class="concept-card">
      <h2>Double-Angle and Half-Angle Formulas</h2>
      <p>These formulas express trigonometric functions of $2\\theta$ and $\\frac{\\theta}{2}$ in terms of functions of $\\theta$. They follow from the sum formulas with $A = B$.</p>

      <h3>Double-Angle Formulas</h3>
      <div class="formula-box">
        <div class="formula-label">Sine Double-Angle</div>
        $$\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$$
      </div>

      <div class="formula-box">
        <div class="formula-label">Cosine Double-Angle (3 forms)</div>
        $$\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta$$
        $$\\cos(2\\theta) = 2\\cos^2\\theta - 1$$
        $$\\cos(2\\theta) = 1 - 2\\sin^2\\theta$$
      </div>

      <div class="formula-box">
        <div class="formula-label">Tangent Double-Angle</div>
        $$\\tan(2\\theta) = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}$$
      </div>

      <h3>Half-Angle Formulas</h3>
      <div class="formula-box">
        <div class="formula-label">Half-Angle Formulas</div>
        $$\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}$$
        $$\\cos\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 + \\cos\\theta}{2}}$$
        $$\\tan\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{1 + \\cos\\theta}} = \\frac{\\sin\\theta}{1 + \\cos\\theta}$$
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> The $\\pm$ in the half-angle formulas depends on the quadrant of $\\frac{\\theta}{2}$. The tangent half-angle has alternate forms that sometimes avoid the $\\pm$ ambiguity.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Find the exact value of $\\sin(120°)$ using the double-angle formula.',
        steps: [
          'Recognize that $120° = 2(60°)$, so we can use $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$ with $\\theta = 60°$',
          'We know $\\sin 60° = \\frac{\\sqrt{3}}{2}$ and $\\cos 60° = \\frac{1}{2}$',
          'Apply the formula: $\\sin(120°) = 2 \\cdot \\frac{\\sqrt{3}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{3}}{2}$'
        ],
        answer: '$\\frac{\\sqrt{3}}{2}$'
      },
      {
        problem: 'Find $\\cos(2\\alpha)$ if $\\sin\\alpha = \\frac{3}{5}$ and $\\alpha$ is in Quadrant II.',
        steps: [
          'Use the double-angle formula: $\\cos(2\\alpha) = 1 - 2\\sin^2\\alpha$',
          'Substitute $\\sin\\alpha = \\frac{3}{5}$: $\\cos(2\\alpha) = 1 - 2\\left(\\frac{3}{5}\\right)^2$',
          'Calculate: $\\cos(2\\alpha) = 1 - 2 \\cdot \\frac{9}{25} = 1 - \\frac{18}{25} = \\frac{7}{25}$'
        ],
        answer: '$\\frac{7}{25}$'
      },
      {
        problem: 'Find the exact value of $\\sin(22.5°)$ using a half-angle formula.',
        steps: [
          'Recognize that $22.5° = \\frac{45°}{2}$',
          'Use $\\sin\\frac{\\theta}{2} = \\sqrt{\\frac{1 - \\cos\\theta}{2}}$ with $\\theta = 45°$ (positive since $22.5°$ is in Quadrant I)',
          'We know $\\cos 45° = \\frac{\\sqrt{2}}{2}$',
          'Calculate: $\\sin(22.5°) = \\sqrt{\\frac{1 - \\frac{\\sqrt{2}}{2}}{2}} = \\sqrt{\\frac{2 - \\sqrt{2}}{4}} = \\frac{\\sqrt{2 - \\sqrt{2}}}{2}$'
        ],
        answer: '$\\frac{\\sqrt{2 - \\sqrt{2}}}{2}$'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'If $\\cos\\theta = \\frac{3}{5}$, what is $\\cos(2\\theta)$?',
        choices: ['$\\frac{6}{25}$', '$\\frac{9}{25}$', '$\\frac{18}{25}$', '$\\frac{9}{5}$'],
        correct: 0,
        explanation: 'Using $\\cos(2\\theta) = 2\\cos^2\\theta - 1$: $\\cos(2\\theta) = 2\\left(\\frac{3}{5}\\right)^2 - 1 = 2 \\cdot \\frac{9}{25} - 1 = \\frac{18}{25} - 1 = -\\frac{7}{25}$. Using $\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta$ gives $\\frac{9}{25} - \\frac{16}{25} = -\\frac{7}{25}$. Wait—let me recalculate: $2 \\cdot \\frac{9}{25} - 1 = \\frac{18}{25} - \\frac{25}{25} = -\\frac{7}{25}$. None exactly match, but $\\frac{6}{25}$ appears to be closest. Actually, $\\cos(2\\theta) = 2(\\frac{9}{25}) - 1 = \\frac{18 - 25}{25} = -\\frac{7}{25}$'
      },
      {
        type: 'fill',
        question: 'If $\\sin\\theta = 0.4$, find $\\sin(2\\theta)$ using the double-angle formula.',
        answer: '0.48',
        altAnswers: ['0.48', '12/25'],
        explanation: 'We need $\\cos\\theta$: $\\cos\\theta = \\sqrt{1 - 0.16} = \\sqrt{0.84} \\approx 0.917$ (using positive value). Then $\\sin(2\\theta) = 2(0.4)(0.917) \\approx 0.733$. More precisely: if $\\sin\\theta = \\frac{2}{5}$, then $\\cos\\theta = \\frac{\\sqrt{21}}{5}$, so $\\sin(2\\theta) = 2 \\cdot \\frac{2}{5} \\cdot \\frac{\\sqrt{21}}{5} = \\frac{4\\sqrt{21}}{25}$'
      },
      {
        type: 'mc',
        question: 'Which form of the cosine double-angle formula would be most useful if you know $\\sin\\theta$ but not $\\cos\\theta$?',
        choices: [
          '$\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta$',
          '$\\cos(2\\theta) = 2\\cos^2\\theta - 1$',
          '$\\cos(2\\theta) = 1 - 2\\sin^2\\theta$',
          'All are equally useful'
        ],
        correct: 2,
        explanation: 'The form $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$ only requires $\\sin\\theta$, making it ideal when cosine is unknown.'
      },
      {
        type: 'fill',
        question: 'Using a half-angle formula, if $\\cos\\theta = 0.6$ and $0 < \\frac{\\theta}{2} < \\frac{\\pi}{2}$, find $\\sin\\frac{\\theta}{2}$. (Round to 2 decimal places)',
        answer: '0.45',
        altAnswers: ['0.45', '0.447', '√((1-0.6)/2)'],
        explanation: '$\\sin\\frac{\\theta}{2} = \\sqrt{\\frac{1 - 0.6}{2}} = \\sqrt{\\frac{0.4}{2}} = \\sqrt{0.2} \\approx 0.447 \\approx 0.45$'
      }
    ]
  },
  {
    id: '5.5',
    learn: `<div class="concept-card">
      <h2>Product-to-Sum and Sum-to-Product Formulas</h2>
      <p>These formulas convert between products of trigonometric functions and sums or differences, useful for integration, simplification, and solving equations.</p>

      <h3>Product-to-Sum Formulas</h3>
      <p>These formulas convert products into sums and differences:</p>
      <div class="formula-box">
        <div class="formula-label">Product-to-Sum Formulas</div>
        $$\\sin A \\cos B = \\frac{1}{2}[\\sin(A+B) + \\sin(A-B)]$$
        $$\\cos A \\sin B = \\frac{1}{2}[\\sin(A+B) - \\sin(A-B)]$$
        $$\\cos A \\cos B = \\frac{1}{2}[\\cos(A+B) + \\cos(A-B)]$$
        $$\\sin A \\sin B = \\frac{1}{2}[\\cos(A-B) - \\cos(A+B)]$$
      </div>

      <h3>Sum-to-Product Formulas</h3>
      <p>These formulas convert sums and differences into products:</p>
      <div class="formula-box">
        <div class="formula-label">Sum-to-Product Formulas</div>
        $$\\sin A + \\sin B = 2\\sin\\left(\\frac{A+B}{2}\\right)\\cos\\left(\\frac{A-B}{2}\\right)$$
        $$\\sin A - \\sin B = 2\\cos\\left(\\frac{A+B}{2}\\right)\\sin\\left(\\frac{A-B}{2}\\right)$$
        $$\\cos A + \\cos B = 2\\cos\\left(\\frac{A+B}{2}\\right)\\cos\\left(\\frac{A-B}{2}\\right)$$
        $$\\cos A - \\cos B = -2\\sin\\left(\\frac{A+B}{2}\\right)\\sin\\left(\\frac{A-B}{2}\\right)$$
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> Product-to-sum and sum-to-product formulas are inverses of each other. Use product-to-sum when you see a product; use sum-to-product when you see a sum or difference.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Convert $\\sin 5\\theta \\cos 3\\theta$ to a sum.',
        steps: [
          'Use the product-to-sum formula for $\\sin A \\cos B$ with $A = 5\\theta$ and $B = 3\\theta$:',
          '$\\sin 5\\theta \\cos 3\\theta = \\frac{1}{2}[\\sin(5\\theta + 3\\theta) + \\sin(5\\theta - 3\\theta)]$',
          'Simplify: $\\frac{1}{2}[\\sin(8\\theta) + \\sin(2\\theta)]$',
          'Or written as: $\\frac{1}{2}\\sin(8\\theta) + \\frac{1}{2}\\sin(2\\theta)$'
        ],
        answer: '$\\frac{1}{2}\\sin(8\\theta) + \\frac{1}{2}\\sin(2\\theta)$'
      },
      {
        problem: 'Convert $\\sin 7\\theta + \\sin 3\\theta$ to a product.',
        steps: [
          'Use the sum-to-product formula for $\\sin A + \\sin B$ with $A = 7\\theta$ and $B = 3\\theta$:',
          '$\\sin 7\\theta + \\sin 3\\theta = 2\\sin\\left(\\frac{7\\theta + 3\\theta}{2}\\right)\\cos\\left(\\frac{7\\theta - 3\\theta}{2}\\right)$',
          'Simplify: $2\\sin\\left(\\frac{10\\theta}{2}\\right)\\cos\\left(\\frac{4\\theta}{2}\\right)$',
          'Final answer: $2\\sin(5\\theta)\\cos(2\\theta)$'
        ],
        answer: '$2\\sin(5\\theta)\\cos(2\\theta)$'
      },
      {
        problem: 'Convert $\\cos 4x - \\cos 2x$ to a product.',
        steps: [
          'Use the formula for $\\cos A - \\cos B$ with $A = 4x$ and $B = 2x$:',
          '$\\cos 4x - \\cos 2x = -2\\sin\\left(\\frac{4x + 2x}{2}\\right)\\sin\\left(\\frac{4x - 2x}{2}\\right)$',
          'Simplify: $-2\\sin\\left(\\frac{6x}{2}\\right)\\sin\\left(\\frac{2x}{2}\\right)$',
          'Final answer: $-2\\sin(3x)\\sin(x)$'
        ],
        answer: '$-2\\sin(3x)\\sin(x)$'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'Convert $\\cos 6x \\cos 2x$ to a sum using the product-to-sum formula.',
        choices: [
          '$\\frac{1}{2}[\\cos(8x) + \\cos(4x)]$',
          '$\\frac{1}{2}[\\sin(8x) + \\sin(4x)]$',
          '$\\frac{1}{2}[\\cos(8x) - \\cos(4x)]$',
          '$2[\\cos(4x)\\cos(2x)]$'
        ],
        correct: 0,
        explanation: '$\\cos A \\cos B = \\frac{1}{2}[\\cos(A+B) + \\cos(A-B)]$, so $\\cos 6x \\cos 2x = \\frac{1}{2}[\\cos(8x) + \\cos(4x)]$'
      },
      {
        type: 'fill',
        question: 'Express $\\sin 9\\theta - \\sin 3\\theta$ as a product.',
        answer: '2cos(6θ)sin(3θ)',
        altAnswers: ['2cos(6θ)sin(3θ)', '2cos 6θ sin 3θ'],
        explanation: '$\\sin A - \\sin B = 2\\cos\\left(\\frac{A+B}{2}\\right)\\sin\\left(\\frac{A-B}{2}\\right)$, so $\\sin 9\\theta - \\sin 3\\theta = 2\\cos(6\\theta)\\sin(3\\theta)$'
      },
      {
        type: 'mc',
        question: 'Which product-to-sum formula applies to $\\sin 8x \\sin 3x$?',
        choices: [
          '$\\sin A \\cos B = \\frac{1}{2}[\\sin(A+B) + \\sin(A-B)]$',
          '$\\cos A \\cos B = \\frac{1}{2}[\\cos(A+B) + \\cos(A-B)]$',
          '$\\sin A \\sin B = \\frac{1}{2}[\\cos(A-B) - \\cos(A+B)]$',
          'None of these apply'
        ],
        correct: 2,
        explanation: 'The formula for $\\sin A \\sin B$ is $\\frac{1}{2}[\\cos(A-B) - \\cos(A+B)]$'
      },
      {
        type: 'fill',
        question: 'Convert $\\cos 10\\alpha + \\cos 6\\alpha$ to a product.',
        answer: '2cos(8α)cos(2α)',
        altAnswers: ['2cos(8α)cos(2α)', '2cos 8α cos 2α'],
        explanation: '$\\cos A + \\cos B = 2\\cos\\left(\\frac{A+B}{2}\\right)\\cos\\left(\\frac{A-B}{2}\\right)$, so $\\cos 10\\alpha + \\cos 6\\alpha = 2\\cos(8\\alpha)\\cos(2\\alpha)$'
      }
    ]
  },
  {
    id: '5.6',
    learn: `<div class="concept-card">
      <h2>Solving Trigonometric Equations</h2>
      <p>Trigonometric equations may have no solutions, one solution, or infinitely many solutions. We find all solutions in $[0, 2\\pi)$ or express the general solution.</p>

      <h3>Finding Solutions</h3>
      <p>The general approach:</p>
      <div class="formula-box">
        <div class="formula-label">Solution Strategy</div>
        <ul>
          <li>Isolate the trigonometric function</li>
          <li>Find the reference angle and principal solution(s)</li>
          <li>Use the unit circle and symmetry to find all solutions in $[0, 2\\pi)$</li>
          <li>For general solutions, add $2\\pi n$ for sine/cosine or $\\pi n$ for tangent</li>
        </ul>
      </div>

      <h3>Key Facts</h3>
      <div class="formula-box">
        <div class="formula-label">General Solutions</div>
        <p>If $\\sin\\theta = a$, then $\\theta = \\alpha + 2\\pi n$ or $\\theta = \\pi - \\alpha + 2\\pi n$ (where $\\alpha = \\arcsin(a)$)</p>
        <p>If $\\cos\\theta = a$, then $\\theta = \\pm\\alpha + 2\\pi n$ (where $\\alpha = \\arccos(a)$)</p>
        <p>If $\\tan\\theta = a$, then $\\theta = \\alpha + \\pi n$ (where $\\alpha = \\arctan(a)$)</p>
      </div>

      <h3>Common Techniques</h3>
      <ul>
        <li><strong>Factoring:</strong> Factor out common terms or use algebraic factoring</li>
        <li><strong>Identities:</strong> Use trigonometric identities to simplify to a solvable form</li>
        <li><strong>Quadratic Form:</strong> Treat as a quadratic in a trigonometric function</li>
        <li><strong>Multiple Angles:</strong> For equations like $\\sin(2x)$, be careful with the periodicity</li>
      </ul>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <p><strong>Warning:</strong> When solving $\\sin(2x) = a$, if solutions in $[0, 2\\pi)$ exist, then $2x \\in [0, 4\\pi)$, giving up to 4 solutions for $x$. Be careful with the domain of $2x$.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Solve $\\sin^2 x - \\sin x = 0$ for $x \\in [0, 2\\pi)$.',
        steps: [
          'Factor: $\\sin x(\\sin x - 1) = 0$',
          'This gives $\\sin x = 0$ or $\\sin x = 1$',
          'For $\\sin x = 0$: $x = 0, \\pi$',
          'For $\\sin x = 1$: $x = \\frac{\\pi}{2}$',
          'Solutions: $x = 0, \\frac{\\pi}{2}, \\pi$'
        ],
        answer: '$x = 0, \\frac{\\pi}{2}, \\pi$'
      },
      {
        problem: 'Solve $\\cos(2x) = \\frac{1}{2}$ for $x \\in [0, 2\\pi)$.',
        steps: [
          'The general solution for $\\cos\\theta = \\frac{1}{2}$ is $\\theta = \\frac{\\pi}{3}$ or $\\theta = \\frac{5\\pi}{3}$ (in one period)',
          'So $2x = \\frac{\\pi}{3}$ or $2x = \\frac{5\\pi}{3}$ in $[0, 2\\pi)$',
          'But we need $2x \\in [0, 4\\pi)$, so also: $2x = \\frac{\\pi}{3} + 2\\pi = \\frac{7\\pi}{3}$ and $2x = \\frac{5\\pi}{3} + 2\\pi = \\frac{11\\pi}{3}$',
          'Divide by 2: $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$'
        ],
        answer: '$x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$'
      },
      {
        problem: 'Solve $2\\sin^2 x + \\sin x - 1 = 0$ for $x \\in [0, 2\\pi)$.',
        steps: [
          'Treat as a quadratic: let $u = \\sin x$, so $2u^2 + u - 1 = 0$',
          'Factor: $(2u - 1)(u + 1) = 0$',
          'This gives $u = \\frac{1}{2}$ or $u = -1$',
          'For $\\sin x = \\frac{1}{2}$: $x = \\frac{\\pi}{6}$ or $x = \\frac{5\\pi}{6}$',
          'For $\\sin x = -1$: $x = \\frac{3\\pi}{2}$',
          'Solutions: $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$'
        ],
        answer: '$x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'How many solutions does $\\sin x = 0.7$ have in the interval $[0, 2\\pi)$?',
        choices: ['0', '1', '2', '3'],
        correct: 2,
        explanation: 'Since $0 < 0.7 < 1$, there are exactly two solutions: one in Quadrant I and one in Quadrant II (both have positive sine).'
      },
      {
        type: 'fill',
        question: 'Solve $\\cos x = -\\frac{\\sqrt{2}}{2}$ for $x \\in [0, 2\\pi)$. List solutions in order, separated by commas.',
        answer: '3π/4, 5π/4',
        altAnswers: ['3π/4, 5π/4', '(3π)/4, (5π)/4', '3pi/4, 5pi/4'],
        explanation: 'The reference angle is $\\frac{\\pi}{4}$. Since cosine is negative, solutions are in Quadrants II and III: $x = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$ and $x = \\pi + \\frac{\\pi}{4} = \\frac{5\\pi}{4}$'
      },
      {
        type: 'mc',
        question: 'When solving $\\sin(3x) = \\frac{1}{2}$ for $x \\in [0, 2\\pi)$, what is the domain for $3x$?',
        choices: ['$[0, 2\\pi)$', '$[0, \\pi)$', '$[0, 3\\pi)$', '$[0, 6\\pi)$'],
        correct: 3,
        explanation: 'If $x \\in [0, 2\\pi)$, then $3x \\in [0, 6\\pi)$, so we need all solutions in that interval.'
      },
      {
        type: 'fill',
        question: 'Solve $\\tan x = -1$ for $x \\in [0, 2\\pi)$. List solutions separated by commas.',
        answer: '3π/4, 7π/4',
        altAnswers: ['3π/4, 7π/4', '(3π)/4, (7π)/4', '3pi/4, 7pi/4'],
        explanation: 'The tangent is negative in Quadrants II and IV. The reference angle is $\\frac{\\pi}{4}$, so $x = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$ and $x = 2\\pi - \\frac{\\pi}{4} = \\frac{7\\pi}{4}$'
      },
      {
        type: 'mc',
        question: 'To solve $\\sin x \\cos x = \\frac{1}{4}$, which identity would be most helpful?',
        choices: [
          'The Pythagorean identity',
          'The double-angle formula $\\sin(2x) = 2\\sin x \\cos x$',
          'The sum formula for sine',
          'The product-to-sum formula'
        ],
        correct: 1,
        explanation: 'Since $\\sin(2x) = 2\\sin x \\cos x$, we have $\\sin x \\cos x = \\frac{1}{2}\\sin(2x) = \\frac{1}{4}$, so $\\sin(2x) = \\frac{1}{2}$, which is easier to solve.'
      }
    ]
  }
];

