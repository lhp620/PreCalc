const lessons = [
  {
    id: '4.1',
    learn: `<div class="concept-card">
      <h3>Angles & Radian Measure</h3>
      <p>In trigonometry, we often work with angles measured in two ways: degrees and radians. Understanding how to convert between these systems and how to work with arc length and sector area is fundamental to studying trigonometric functions.</p>

      <h4>Degree and Radian Conversion</h4>
      <p>One complete rotation around a circle is 360° or $2\\pi$ radians. To convert between the two systems, use these conversion formulas:</p>
      <div class="formula-box">
        <span class="formula-label">Conversion Formulas</span>
        $$\\text{Radians} = \\text{Degrees} \\times \\frac{\\pi}{180}$$
        $$\\text{Degrees} = \\text{Radians} \\times \\frac{180}{\\pi}$$
      </div>

      <h4>Arc Length and Sector Area</h4>
      <p>When working with circles, we often need to find the arc length (the distance along the circle) or the area of a sector (a "pizza slice" of the circle). These formulas apply when the angle is measured in radians:</p>
      <div class="formula-box">
        <span class="formula-label">Arc Length and Sector Area</span>
        $$s = r\\theta$$
        $$A = \\frac{1}{2}r^2\\theta$$
        <p style="font-size: 0.9em; margin-top: 8px;">where $r$ is the radius and $\\theta$ is the angle in radians</p>
      </div>

      <h4>Coterminal Angles</h4>
      <p>Coterminal angles are angles that share the same terminal side. They differ by a full rotation. If $\\theta$ is an angle, then coterminal angles can be found by adding or subtracting multiples of 360° (or $2\\pi$ radians):</p>
      <div class="formula-box">
        <span class="formula-label">Coterminal Angles</span>
        $$\\text{Coterminal angles} = \\theta \\pm 360°n \\text{ or } \\theta \\pm 2\\pi n$$
        <p style="font-size: 0.9em; margin-top: 8px;">where $n$ is any positive integer</p>
      </div>

      <div class="tip-box">
        <span class="tip-icon">💡</span>
        <p><strong>Tip:</strong> Radians are often preferred in calculus and advanced mathematics because they make many formulas simpler. When an angle has no unit specified, it's usually assumed to be in radians.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Convert 225° to radians.',
        steps: [
          'Use the conversion formula: Radians = Degrees × π/180',
          '225° × (π/180) = 225π/180',
          'Simplify the fraction: 225π/180 = 5π/4',
          'Therefore, 225° = 5π/4 radians'
        ],
        answer: '5π/4 radians'
      },
      {
        problem: 'A circle has radius 8 cm. Find the arc length of a sector with a central angle of π/3 radians.',
        steps: [
          'Use the arc length formula: s = rθ',
          'Here, r = 8 cm and θ = π/3 radians',
          's = 8 × (π/3) = 8π/3 cm',
          'This is approximately 8.378 cm'
        ],
        answer: '8π/3 cm (or approximately 8.378 cm)'
      },
      {
        problem: 'Find a coterminal angle between 0° and 360° for 750°.',
        steps: [
          'Coterminal angles differ by 360°',
          'Since 750° is greater than 360°, subtract 360°: 750° - 360° = 390°',
          '390° is still greater than 360°, so subtract again: 390° - 360° = 30°',
          'The coterminal angle between 0° and 360° is 30°'
        ],
        answer: '30°'
      }
    ],
    practice: [
      {
        type: 'fill',
        question: 'Convert $\\frac{2\\pi}{3}$ radians to degrees.',
        answer: '120',
        altAnswers: ['120°'],
        explanation: 'Use the formula: Degrees = Radians × 180/π. So (2π/3) × (180/π) = 360/3 = 120°'
      },
      {
        type: 'mc',
        question: 'A sector of a circle with radius 6 m has a central angle of 2π/3 radians. What is the area of the sector?',
        choices: ['$4\\pi$ m²', '$6\\pi$ m²', '$12\\pi$ m²', '$36\\pi$ m²'],
        correct: 2,
        explanation: 'Use A = (1/2)r²θ. With r = 6 and θ = 2π/3: A = (1/2)(36)(2π/3) = 18(2π/3) = 12π m²'
      },
      {
        type: 'fill',
        question: 'Find a positive coterminal angle for $-\\frac{5\\pi}{6}$ by adding $2\\pi$.',
        answer: '7π/6',
        altAnswers: ['7π/6', '7π/6 radians'],
        explanation: 'Add 2π to the angle: -5π/6 + 2π = -5π/6 + 12π/6 = 7π/6'
      },
      {
        type: 'mc',
        question: 'Which angle is NOT coterminal with 45°?',
        choices: ['$405°$', '$-315°$', '$135°$', '$-675°$'],
        correct: 2,
        explanation: '405° = 45° + 360°, -315° = 45° - 360°, and -675° = 45° - 2(360°). However, 135° ≠ 45° ± n(360°), so 135° is not coterminal.'
      },
      {
        type: 'fill',
        question: 'A circle has radius 5. If the arc length is $2\\pi$, what is the central angle in radians?',
        answer: '2π/5',
        altAnswers: ['2π/5', '0.4π', '2π/5 radians'],
        explanation: 'Use s = rθ. We have 2π = 5θ, so θ = 2π/5 radians'
      }
    ]
  },
  {
    id: '4.2',
    learn: `<div class="concept-card">
      <h3>The Unit Circle</h3>
      <p>The unit circle is a circle with radius 1 centered at the origin of the coordinate plane. It is the foundation for defining trigonometric functions and understanding their values at key angles.</p>

      <h4>The Unit Circle Definition</h4>
      <p>The equation of the unit circle is:</p>
      <div class="formula-box">
        <span class="formula-label">Unit Circle Equation</span>
        $$x^2 + y^2 = 1$$
      </div>
      <p>For any angle $\\theta$ measured counterclockwise from the positive x-axis, the point on the unit circle at that angle has coordinates:</p>
      <div class="formula-box">
        <span class="formula-label">Trigonometric Coordinates</span>
        $$(\\cos\\theta, \\sin\\theta)$$
      </div>

      <h4>Special Angles and Their Coordinates</h4>
      <p>The special angles (0, π/6, π/4, π/3, π/2 and their equivalents in other quadrants) have exact trigonometric values that should be memorized:</p>
      <p style="font-size: 0.95em; margin: 12px 0;">
        <strong>First Quadrant:</strong><br>
        0: (1, 0) | π/6: (√3/2, 1/2) | π/4: (√2/2, √2/2) | π/3: (1/2, √3/2) | π/2: (0, 1)
      </p>

      <h4>Reference Angles</h4>
      <p>A reference angle is the acute angle formed between the terminal side of an angle and the x-axis. Reference angles allow us to find exact values for angles in any quadrant by using the special angle values from the first quadrant.</p>

      <h4>Sign Rules by Quadrant</h4>
      <p>The acronym "All Students Take Calculus" helps remember which trigonometric functions are positive in each quadrant:</p>
      <ul style="margin: 8px 0 8px 20px;">
        <li><strong>Quadrant I:</strong> All functions are positive</li>
        <li><strong>Quadrant II:</strong> Sine (and cosecant) are positive</li>
        <li><strong>Quadrant III:</strong> Tangent (and cotangent) are positive</li>
        <li><strong>Quadrant IV:</strong> Cosine (and secant) are positive</li>
      </ul>

      <div class="tip-box">
        <span class="tip-icon">💡</span>
        <p><strong>Tip:</strong> To find a trigonometric value in any quadrant, first identify the reference angle, find the value using that reference angle, then apply the appropriate sign based on the quadrant.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Find the exact values of sin(5π/6) and cos(5π/6).',
        steps: [
          '5π/6 is in Quadrant II (between π/2 and π)',
          'The reference angle is π - 5π/6 = π/6',
          'From the special angles, sin(π/6) = 1/2 and cos(π/6) = √3/2',
          'In Quadrant II, sine is positive and cosine is negative',
          'Therefore: sin(5π/6) = 1/2 and cos(5π/6) = -√3/2'
        ],
        answer: 'sin(5π/6) = 1/2, cos(5π/6) = -√3/2'
      },
      {
        problem: 'What are the coordinates of the point on the unit circle at angle 7π/4?',
        steps: [
          '7π/4 is in Quadrant IV (between 3π/2 and 2π)',
          'The reference angle is 2π - 7π/4 = π/4',
          'From the special angles, cos(π/4) = √2/2 and sin(π/4) = √2/2',
          'In Quadrant IV, cosine is positive and sine is negative',
          'The coordinates are (cos(7π/4), sin(7π/4)) = (√2/2, -√2/2)'
        ],
        answer: '(√2/2, -√2/2)'
      },
      {
        problem: 'Find tan(2π/3) using the unit circle.',
        steps: [
          '2π/3 is in Quadrant II',
          'The reference angle is π - 2π/3 = π/3',
          'From special angles, sin(π/3) = √3/2 and cos(π/3) = 1/2',
          'In Quadrant II, sin(2π/3) = √3/2 and cos(2π/3) = -1/2',
          'tan(2π/3) = sin(2π/3)/cos(2π/3) = (√3/2)/(-1/2) = -√3'
        ],
        answer: '-√3'
      }
    ],
    practice: [
      {
        type: 'fill',
        question: 'What is $\\cos(\\pi/3)$ using the unit circle?',
        answer: '1/2',
        altAnswers: ['0.5', '1/2'],
        explanation: 'The point on the unit circle at π/3 is (1/2, √3/2), so cos(π/3) = 1/2'
      },
      {
        type: 'mc',
        question: 'Which angle has a reference angle of π/6?',
        choices: ['$\\pi/6$', '$5\\pi/6$', '$7\\pi/6$', 'All of the above'],
        correct: 3,
        explanation: 'π/6 is in QI (reference angle π/6), 5π/6 is in QII (reference angle π/6), and 7π/6 is in QIII (reference angle π/6)'
      },
      {
        type: 'fill',
        question: 'Find $\\sin(3\\pi/4)$ exactly.',
        answer: '√2/2',
        altAnswers: ['√2/2', 'sqrt(2)/2', '√2/2'],
        explanation: '3π/4 is in QII with reference angle π/4. So sin(3π/4) = sin(π/4) = √2/2 (positive in QII)'
      },
      {
        type: 'mc',
        question: 'In which quadrant is cosine negative and sine positive?',
        choices: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
        correct: 1,
        explanation: 'In Quadrant II, sine is positive and cosine is negative (using ASTC rule)'
      },
      {
        type: 'fill',
        question: 'Find $\\cos(7\\pi/4)$ exactly.',
        answer: '√2/2',
        altAnswers: ['√2/2', 'sqrt(2)/2'],
        explanation: '7π/4 is in QIV with reference angle π/4. Cosine is positive in QIV, so cos(7π/4) = √2/2'
      }
    ]
  },
  {
    id: '4.3',
    learn: `<div class="concept-card">
      <h3>Sine & Cosine Functions</h3>
      <p>The sine and cosine functions are the most fundamental trigonometric functions. Understanding their transformations and key characteristics is essential for analyzing periodic phenomena.</p>

      <h4>The Transformed Sine and Cosine Functions</h4>
      <p>The general forms of the transformed sine and cosine functions are:</p>
      <div class="formula-box">
        <span class="formula-label">General Forms</span>
        $$y = A\\sin(Bx - C) + D$$
        $$y = A\\cos(Bx - C) + D$$
      </div>

      <h4>Interpreting the Parameters</h4>
      <p><strong>Amplitude ($|A|$):</strong> The maximum distance from the centerline. The function oscillates between $-|A|$ and $|A|$ around the centerline.</p>
      <p><strong>Period:</strong> The length of one complete cycle. The period is found using:</p>
      <div class="formula-box">
        <span class="formula-label">Period Formula</span>
        $$\\text{Period} = \\frac{2\\pi}{|B|}$$
      </div>

      <p><strong>Phase Shift:</strong> The horizontal displacement of the graph. A phase shift of $\\frac{C}{B}$ means the graph shifts right by $\\frac{C}{B}$ units (if positive) or left by $\\left|\\frac{C}{B}\\right|$ units (if negative).</p>
      <p><strong>Vertical Shift ($D$):</strong> The vertical displacement. The centerline of the function is at $y = D$ instead of $y = 0$.</p>

      <h4>Domain, Range, and Key Points</h4>
      <p><strong>Domain:</strong> For both sine and cosine, the domain is all real numbers: $(-\\infty, \\infty)$</p>
      <p><strong>Range:</strong> With vertical shift $D$ and amplitude $|A|$: $[D - |A|, D + |A|]$</p>
      <p><strong>Key Features:</strong> Identify zeros (where the function crosses the centerline), maximum values, and minimum values by analyzing the transformed function.</p>

      <div class="warning-box">
        <span class="warning-icon">⚠️</span>
        <p><strong>Common Mistake:</strong> The phase shift is $\\frac{C}{B}$, not $C$. For example, in $\\sin(2x - 4)$, the phase shift is $\\frac{4}{2} = 2$, not 4.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Identify the amplitude, period, phase shift, and vertical shift of $y = 2\\sin(3x - \\pi) + 1$.',
        steps: [
          'Write in standard form: $y = 2\\sin(3(x - \\pi/3)) + 1$',
          'Amplitude: $|A| = |2| = 2$',
          'Period: $\\frac{2\\pi}{|B|} = \\frac{2\\pi}{3}$',
          'Phase shift: $\\frac{C}{B} = \\frac{\\pi}{3}$ (shift right by $\\pi/3$)',
          'Vertical shift: $D = 1$ (centerline at $y = 1$)'
        ],
        answer: 'Amplitude: 2, Period: 2π/3, Phase shift: π/3 right, Vertical shift: 1 up'
      },
      {
        problem: 'Write the equation of a sine function with amplitude 3, period 4π, and vertical shift -2.',
        steps: [
          'Start with general form: $y = A\\sin(Bx - C) + D$',
          'Amplitude $|A| = 3$, so $A = 3$ or $A = -3$. Use $A = 3$.',
          'Period $= \\frac{2\\pi}{|B|} = 4\\pi$, so $|B| = \\frac{2\\pi}{4\\pi} = \\frac{1}{2}$',
          'Vertical shift $D = -2$',
          'Assuming no phase shift ($C = 0$): $y = 3\\sin(\\frac{1}{2}x) - 2$'
        ],
        answer: '$y = 3\\sin(\\frac{1}{2}x) - 2$ (or similar with different phase shift)'
      },
      {
        problem: 'Find the range of $y = -2\\cos(x) + 5$.',
        steps: [
          'Amplitude: $|A| = |-2| = 2$',
          'Vertical shift: $D = 5$',
          'Without shifts, cosine ranges from -1 to 1',
          'With amplitude 2: the function ranges from -2 to 2',
          'With vertical shift 5: add 5 to all values to get [5 - 2, 5 + 2] = [3, 7]'
        ],
        answer: '[3, 7]'
      }
    ],
    practice: [
      {
        type: 'mc',
        question: 'What is the period of $y = \\sin(4x)$?',
        choices: ['$\\pi/2$', '$\\pi$', '$2\\pi$', '$4\\pi$'],
        correct: 0,
        explanation: 'Period = 2π/|B| = 2π/4 = π/2'
      },
      {
        type: 'fill',
        question: 'What is the amplitude of $y = -\\frac{1}{3}\\cos(2x) + 7$?',
        answer: '1/3',
        altAnswers: ['1/3', '0.333...'],
        explanation: 'Amplitude = |A| = |-1/3| = 1/3'
      },
      {
        type: 'fill',
        question: 'For the function $y = \\sin(2x - \\pi/2)$, what is the phase shift?',
        answer: 'π/4',
        altAnswers: ['π/4', 'right π/4'],
        explanation: 'Phase shift = C/B = (π/2)/2 = π/4 to the right'
      },
      {
        type: 'mc',
        question: 'Which function has the same period as $y = \\cos(\\pi x)$?',
        choices: ['$y = \\sin(2\\pi x)$', '$y = \\cos(2x)$', '$y = \\sin(\\pi x)$', '$y = \\cos(\\pi x/2)$'],
        correct: 2,
        explanation: 'Period of $y = \\cos(\\pi x)$ is 2π/π = 2. For y = sin(πx), period is also 2π/π = 2.'
      },
      {
        type: 'fill',
        question: 'Write an equation for a cosine function with amplitude 2, period $\\pi$, and no phase or vertical shift.',
        answer: 'y = 2cos(2x)',
        altAnswers: ['y = 2cos(2x)', 'y=2cos(2x)'],
        explanation: 'Amplitude |A| = 2, so A = 2. Period = 2π/|B| = π gives |B| = 2. So y = 2cos(2x)'
      }
    ]
  },
  {
    id: '4.4',
    learn: `<div class="concept-card">
      <h3>Other Trigonometric Functions</h3>
      <p>Beyond sine and cosine, there are four additional trigonometric functions: tangent, cotangent, secant, and cosecant. These are defined in terms of sine and cosine and have unique characteristics and applications.</p>

      <h4>Definitions of the Trigonometric Functions</h4>
      <p>The six trigonometric functions are related as follows:</p>
      <div class="formula-box">
        <span class="formula-label">Trigonometric Function Definitions</span>
        $$\\tan x = \\frac{\\sin x}{\\cos x}$$
        $$\\cot x = \\frac{\\cos x}{\\sin x}$$
        $$\\sec x = \\frac{1}{\\cos x}$$
        $$\\csc x = \\frac{1}{\\sin x}$$
      </div>

      <h4>The Tangent Function</h4>
      <p>The tangent function has a period of $\\pi$ (not $2\\pi$ like sine and cosine). The graph has vertical asymptotes where cosine equals zero, which occurs at $x = \\frac{\\pi}{2} + n\\pi$ for any integer $n$. The function passes through the origin and increases throughout its domain.</p>

      <h4>The Cotangent Function</h4>
      <p>Cotangent is the reciprocal of tangent. It also has period $\\pi$, with vertical asymptotes at $x = n\\pi$ (where sine equals zero). Unlike tangent, cotangent decreases throughout its domain between asymptotes.</p>

      <h4>The Secant and Cosecant Functions</h4>
      <p>Secant (the reciprocal of cosine) and cosecant (the reciprocal of sine) both have period $2\\pi$. They have vertical asymptotes where their respective reciprocal functions equal zero, and their graphs have distinctive "U" shapes between asymptotes.</p>

      <h4>Reciprocal Function Relationship</h4>
      <p>Since sec and csc are reciprocals of cos and sin respectively:</p>
      <ul style="margin: 8px 0 8px 20px;">
        <li>Where $\\cos x$ reaches 1, $\\sec x$ reaches 1</li>
        <li>Where $\\sin x$ reaches 1, $\\csc x$ reaches 1</li>
        <li>As $\\cos x \\to 0$, $\\sec x \\to \\pm\\infty$ (vertical asymptotes)</li>
        <li>As $\\sin x \\to 0$, $\\csc x \\to \\pm\\infty$ (vertical asymptotes)</li>
      </ul>

      <div class="tip-box">
        <span class="tip-icon">💡</span>
        <p><strong>Tip:</strong> To evaluate tangent, cotangent, secant, or cosecant at a specific angle, first find the sine and cosine values using the unit circle, then apply the appropriate definition.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Find the exact value of tan(5π/6).',
        steps: [
          'From the unit circle, 5π/6 is in Quadrant II',
          'sin(5π/6) = 1/2 and cos(5π/6) = -√3/2',
          'tan(5π/6) = sin(5π/6)/cos(5π/6) = (1/2) / (-√3/2)',
          'Simplify: (1/2) × (-2/√3) = -1/√3 = -√3/3'
        ],
        answer: '-√3/3'
      },
      {
        problem: 'Find sec(π/3).',
        steps: [
          'From the special angles, cos(π/3) = 1/2',
          'sec(π/3) = 1/cos(π/3) = 1/(1/2) = 2'
        ],
        answer: '2'
      },
      {
        problem: 'Find the exact value of cot(π/4).',
        steps: [
          'From the special angles, sin(π/4) = √2/2 and cos(π/4) = √2/2',
          'cot(π/4) = cos(π/4)/sin(π/4) = (√2/2)/(√2/2) = 1'
        ],
        answer: '1'
      }
    ],
    practice: [
      {
        type: 'fill',
        question: 'Find the exact value of $\\tan(\\pi/3)$.',
        answer: '√3',
        altAnswers: ['√3', 'sqrt(3)'],
        explanation: 'sin(π/3) = √3/2 and cos(π/3) = 1/2, so tan(π/3) = (√3/2)/(1/2) = √3'
      },
      {
        type: 'mc',
        question: 'What is the period of the tangent function?',
        choices: ['$\\pi/2$', '$\\pi$', '$2\\pi$', '$4\\pi$'],
        correct: 1,
        explanation: 'The tangent function has period π, not 2π like sine and cosine'
      },
      {
        type: 'fill',
        question: 'Find $\\csc(\\pi/6)$.',
        answer: '2',
        altAnswers: ['2'],
        explanation: 'sin(π/6) = 1/2, so csc(π/6) = 1/sin(π/6) = 1/(1/2) = 2'
      },
      {
        type: 'mc',
        question: 'Where are the vertical asymptotes of $y = \\tan(x)$?',
        choices: ['At $x = n\\pi$', 'At $x = \\frac{\\pi}{2} + n\\pi$', 'At $x = \\frac{\\pi}{4} + n\\pi$', 'At $x = \\frac{3\\pi}{4} + n\\pi$'],
        correct: 1,
        explanation: 'Asymptotes occur where cos(x) = 0, which is at x = π/2 + nπ'
      },
      {
        type: 'fill',
        question: 'If $\\sin(\\theta) = 3/5$ and $\\theta$ is in Quadrant I, find $\\sec(\\theta)$.',
        answer: '5/4',
        altAnswers: ['5/4', '1.25'],
        explanation: 'If sin(θ) = 3/5, then cos²(θ) = 1 - 9/25 = 16/25, so cos(θ) = 4/5 (positive in QI). Therefore sec(θ) = 1/cos(θ) = 5/4'
      }
    ]
  },
  {
    id: '4.5',
    learn: `<div class="concept-card">
      <h3>Inverse Trigonometric Functions</h3>
      <p>Inverse trigonometric functions allow us to find the angle when given the trigonometric ratio. They are essential tools for solving trigonometric equations and real-world applications involving angle measurement.</p>

      <h4>The Arcsine Function</h4>
      <p>The arcsine function (written as $\\arcsin x$ or $\\sin^{-1} x$) finds the angle whose sine is a given value.</p>
      <div class="formula-box">
        <span class="formula-label">Arcsine Function</span>
        <p><strong>Domain:</strong> $[-1, 1]$</p>
        <p><strong>Range:</strong> $[-\\pi/2, \\pi/2]$</p>
        <p style="margin-top: 8px;">If $\\sin(\\theta) = a$ where $a \\in [-1,1]$ and $\\theta \\in [-\\pi/2, \\pi/2]$, then $\\arcsin(a) = \\theta$</p>
      </div>

      <h4>The Arccosine Function</h4>
      <p>The arccosine function (written as $\\arccos x$ or $\\cos^{-1} x$) finds the angle whose cosine is a given value.</p>
      <div class="formula-box">
        <span class="formula-label">Arccosine Function</span>
        <p><strong>Domain:</strong> $[-1, 1]$</p>
        <p><strong>Range:</strong> $[0, \\pi]$</p>
        <p style="margin-top: 8px;">If $\\cos(\\theta) = a$ where $a \\in [-1,1]$ and $\\theta \\in [0, \\pi]$, then $\\arccos(a) = \\theta$</p>
      </div>

      <h4>The Arctangent Function</h4>
      <p>The arctangent function (written as $\\arctan x$ or $\\tan^{-1} x$) finds the angle whose tangent is a given value.</p>
      <div class="formula-box">
        <span class="formula-label">Arctangent Function</span>
        <p><strong>Domain:</strong> $(-\\infty, \\infty)$</p>
        <p><strong>Range:</strong> $(-\\pi/2, \\pi/2)$</p>
        <p style="margin-top: 8px;">If $\\tan(\\theta) = a$ where $a \\in \\mathbb{R}$ and $\\theta \\in (-\\pi/2, \\pi/2)$, then $\\arctan(a) = \\theta$</p>
      </div>

      <h4>Compositions of Trigonometric and Inverse Functions</h4>
      <p>When working with compositions like $\\sin(\\arccos(3/5))$, use a right triangle or the Pythagorean identity to find the missing trigonometric values. For example, if $\\arccos(3/5) = \\theta$, then $\\cos(\\theta) = 3/5$ and we can find $\\sin(\\theta)$ using $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$.</p>

      <div class="warning-box">
        <span class="warning-icon">⚠️</span>
        <p><strong>Important:</strong> The range of the inverse function determines the output angle. For example, $\\arcsin(1/2) = \\pi/6$, not $5\\pi/6$, because $\\pi/6 \\in [-\\pi/2, \\pi/2]$.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Evaluate arcsin(√3/2).',
        steps: [
          'We need to find $\\theta$ where $\\sin(\\theta) = \\sqrt{3}/2$ and $\\theta \\in [-\\pi/2, \\pi/2]$',
          'From the unit circle, $\\sin(\\pi/3) = \\sqrt{3}/2$ and $\\pi/3 \\in [-\\pi/2, \\pi/2]$',
          'Therefore, $\\arcsin(\\sqrt{3}/2) = \\pi/3$'
        ],
        answer: 'π/3'
      },
      {
        problem: 'Find the exact value of sin(arccos(3/5)).',
        steps: [
          'Let $\\theta = \\arccos(3/5)$, so $\\cos(\\theta) = 3/5$ and $\\theta \\in [0, \\pi]$',
          'Use the Pythagorean identity: $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$',
          '$\\sin^2(\\theta) = 1 - (3/5)^2 = 1 - 9/25 = 16/25$',
          'So $\\sin(\\theta) = 4/5$ (positive because $\\theta \\in [0, \\pi]$)',
          'Therefore, $\\sin(\\arccos(3/5)) = 4/5$'
        ],
        answer: '4/5'
      },
      {
        problem: 'Evaluate arctan(1).',
        steps: [
          'We need $\\theta$ where $\\tan(\\theta) = 1$ and $\\theta \\in (-\\pi/2, \\pi/2)$',
          'From the unit circle, $\\tan(\\pi/4) = 1$ and $\\pi/4 \\in (-\\pi/2, \\pi/2)$',
          'Therefore, $\\arctan(1) = \\pi/4$'
        ],
        answer: 'π/4'
      }
    ],
    practice: [
      {
        type: 'fill',
        question: 'Evaluate $\\arccos(1/2)$.',
        answer: 'π/3',
        altAnswers: ['π/3', 'pi/3'],
        explanation: 'We need θ where cos(θ) = 1/2 and θ ∈ [0, π]. From the unit circle, cos(π/3) = 1/2, so arccos(1/2) = π/3'
      },
      {
        type: 'mc',
        question: 'What is the range of the arcsine function?',
        choices: ['$(0, \\pi)$', '$[-\\pi/2, \\pi/2]$', '$[0, \\pi]$', '$(-\\pi/2, \\pi/2)$'],
        correct: 1,
        explanation: 'The range of arcsin is [-π/2, π/2]'
      },
      {
        type: 'fill',
        question: 'Find $\\cos(\\arcsin(5/13))$ where the result is positive.',
        answer: '12/13',
        altAnswers: ['12/13'],
        explanation: 'Let θ = arcsin(5/13), so sin(θ) = 5/13. Using sin²θ + cos²θ = 1: cos²θ = 1 - 25/169 = 144/169, so cos(θ) = 12/13 (positive in the range of arcsin)'
      },
      {
        type: 'mc',
        question: 'What is $\\arctan(0)$?',
        choices: ['$0$', '$\\pi/4$', '$\\pi/2$', 'Undefined'],
        correct: 0,
        explanation: 'We need θ where tan(θ) = 0. tan(0) = 0 and 0 ∈ (-π/2, π/2), so arctan(0) = 0'
      },
      {
        type: 'fill',
        question: 'Find $\\sin(\\arctan(2))$.',
        answer: '2√5/5',
        altAnswers: ['2√5/5', '2/√5', '(2√5)/5'],
        explanation: 'Let θ = arctan(2), so tan(θ) = 2 and θ ∈ (-π/2, π/2). In a right triangle with opposite 2 and adjacent 1, hypotenuse = √5. So sin(θ) = 2/√5 = 2√5/5'
      }
    ]
  },
  {
    id: '4.6',
    learn: `<div class="concept-card">
      <h3>Transformations of Trigonometric Graphs</h3>
      <p>Understanding how to transform trigonometric graphs is crucial for modeling real-world phenomena and solving complex trigonometric problems. All the transformations we study for regular functions apply to trigonometric functions as well.</p>

      <h4>Combined Transformations</h4>
      <p>The general form incorporating all transformations is:</p>
      <div class="formula-box">
        <span class="formula-label">General Form of Transformed Sine</span>
        $$y = A\\sin(B(x - C)) + D$$
        <p style="margin-top: 8px;"><strong>or equivalently:</strong></p>
        $$y = A\\sin(Bx - BC) + D$$
      </div>

      <p>Each parameter represents a specific transformation:</p>
      <ul style="margin: 8px 0 8px 20px;">
        <li><strong>Amplitude $|A|$:</strong> Vertical stretch or compression, affects height</li>
        <li><strong>Period $\\frac{2\\pi}{|B|}$:</strong> Horizontal stretch or compression, affects width of one cycle</li>
        <li><strong>Phase Shift $C$:</strong> Horizontal translation left (if $C < 0$) or right (if $C > 0$)</li>
        <li><strong>Vertical Shift $D$:</strong> Vertical translation up (if $D > 0$) or down (if $D < 0$)</li>
      </ul>

      <h4>Order of Transformations</h4>
      <p>When graphing a transformed function, follow this order:</p>
      <ol style="margin: 8px 0 8px 20px;">
        <li>Identify the base period using $\\frac{2\\pi}{|B|}$</li>
        <li>Apply horizontal shift and compression/stretch</li>
        <li>Apply vertical stretch/compression by the amplitude</li>
        <li>Apply vertical shift</li>
        <li>Mark key points: the shifted zeros, maxima, and minima</li>
      </ol>

      <h4>Writing Equations from Graphs</h4>
      <p>To write an equation for a given graph or description:</p>
      <div class="formula-box">
        <span class="formula-label">Steps to Write Equations</span>
        <ol style="margin: 8px 0 8px 20px;">
          <li>Find the amplitude: $|A| = \\frac{\\text{max} - \\text{min}}{2}$</li>
          <li>Find the vertical shift: $D = \\frac{\\text{max} + \\text{min}}{2}$</li>
          <li>Find the period and thus $B$: Period $= \\frac{2\\pi}{|B|}$</li>
          <li>Find the phase shift by identifying where a key point (like a zero) occurs</li>
          <li>Write the equation: $y = A\\sin(B(x - C)) + D$ or use cosine if more convenient</li>
        </ol>
      </div>

      <div class="tip-box">
        <span class="tip-icon">💡</span>
        <p><strong>Tip:</strong> Sometimes it's easier to use cosine if the graph starts at a maximum (or minimum), and sine if it starts at a middle value ascending. Choose the form that minimizes the phase shift.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'Write an equation for a sine function that has been reflected over the x-axis, has amplitude 4, period 2π, phase shift π/2 to the right, and vertical shift 3 up.',
        steps: [
          'Reflected over x-axis and amplitude 4 gives $A = -4$',
          'Period $2\\pi$ gives: $\\frac{2\\pi}{|B|} = 2\\pi$, so $|B| = 1$, thus $B = 1$',
          'Phase shift π/2 to the right: $C = \\pi/2$',
          'Vertical shift 3 up: $D = 3$',
          'The equation is: $y = -4\\sin(x - \\pi/2) + 3$'
        ],
        answer: '$y = -4\\sin(x - \\pi/2) + 3$ or equivalent like $y = -4\\cos(x) + 3$'
      },
      {
        problem: 'A sinusoidal graph has a maximum of 8, minimum of 2, completes one cycle in $\\pi$ units, and crosses its centerline ascending at $x = 0$. Write an equation.',
        steps: [
          'Vertical shift: $D = \\frac{8 + 2}{2} = 5$',
          'Amplitude: $|A| = \\frac{8 - 2}{2} = 3$',
          'Period is $\\pi$: $\\frac{2\\pi}{|B|} = \\pi$, so $B = 2$',
          'At $x = 0$, the sine crosses centerline ascending, which is the standard sine behavior',
          'The equation is: $y = 3\\sin(2x) + 5$'
        ],
        answer: '$y = 3\\sin(2x) + 5$'
      },
      {
        problem: 'Describe all transformations in the equation $y = 2\\cos(\\frac{1}{2}x + \\pi) - 1$.',
        steps: [
          'Rewrite as: $y = 2\\cos(\\frac{1}{2}(x + 2\\pi)) - 1$',
          'Amplitude: $|A| = 2$ (vertical stretch by factor of 2)',
          'Period: $\\frac{2\\pi}{1/2} = 4\\pi$ (horizontal stretch by factor of 2)',
          'Phase shift: $-2\\pi$ (shift left by $2\\pi$)',
          'Vertical shift: $-1$ (shift down by 1 unit)',
          'Range: $[-1-2, -1+2] = [-3, 1]$'
        ],
        answer: 'Amplitude 2, Period 4π, Phase shift 2π left, Vertical shift 1 down, Range [-3, 1]'
      }
    ],
    practice: [
      {
        type: 'fill',
        question: 'Find the period of $y = \\sin(\\frac{3x}{2})$.',
        answer: '4π/3',
        altAnswers: ['4π/3', '(4π)/3'],
        explanation: 'Period = 2π/|B| = 2π/(3/2) = 2π · (2/3) = 4π/3'
      },
      {
        type: 'mc',
        question: 'What is the vertical shift of $y = \\cos(x) + 7$?',
        choices: ['$7$ up', '$7$ down', '$7$ right', '$7$ left'],
        correct: 0,
        explanation: 'The vertical shift D = 7 means shift 7 units up'
      },
      {
        type: 'fill',
        question: 'A graph has maximum 6 and minimum 0. What are the amplitude and vertical shift?',
        answer: 'amplitude: 3, shift: 3',
        altAnswers: ['3, 3', 'A=3, D=3', 'A = 3 and D = 3'],
        explanation: 'Vertical shift D = (6+0)/2 = 3. Amplitude |A| = (6-0)/2 = 3'
      },
      {
        type: 'mc',
        question: 'Which equation represents a cosine function with amplitude 2, period $\\pi$, and no shifts?',
        choices: ['$y = \\cos(2x)$', '$y = 2\\cos(2x)$', '$y = 2\\cos(\\pi x)$', '$y = \\cos(\\pi x)$'],
        correct: 1,
        explanation: 'Amplitude 2 gives |A|=2. Period π gives 2π/|B| = π, so |B|=2. Thus y = 2cos(2x)'
      },
      {
        type: 'fill',
        question: 'Write an equation for a sine function with amplitude 5, period $2\\pi$, and vertical shift 2 down (no phase shift).',
        answer: 'y = 5sin(x) - 2',
        altAnswers: ['y=5sin(x)-2', 'y = 5sin(x) - 2'],
        explanation: 'Amplitude 5: A=5. Period 2π: B=2π/(2π)=1. Vertical shift -2: D=-2. Equation: y = 5sin(x) - 2'
      }
    ]
  },
  {
    id: '4.7',
    learn: `<div class="concept-card">
      <h3>Applications of Trigonometry</h3>
      <p>Trigonometric functions model many real-world periodic phenomena. Understanding simple harmonic motion and sinusoidal modeling allows us to analyze and predict behaviors in physics, engineering, biology, and environmental science.</p>

      <h4>Simple Harmonic Motion</h4>
      <p>Simple harmonic motion describes oscillations around an equilibrium position. Common examples include pendulums, springs, and vibrating strings. The displacement from equilibrium can be modeled by:</p>
      <div class="formula-box">
        <span class="formula-label">Simple Harmonic Motion</span>
        $$d = A\\sin(\\omega t) \\text{ or } d = A\\cos(\\omega t)$$
        <p style="margin-top: 8px;">where:</p>
        <ul style="font-size: 0.95em; margin: 8px 0 8px 20px;">
          <li>$d$ = displacement from equilibrium</li>
          <li>$A$ = amplitude (maximum displacement)</li>
          <li>$\\omega$ = angular frequency (radians per unit time)</li>
          <li>$t$ = time</li>
        </ul>
      </div>

      <h4>Frequency and Period Relationships</h4>
      <p>The relationship between angular frequency and regular frequency is important for applications:</p>
      <div class="formula-box">
        <span class="formula-label">Frequency Relationships</span>
        $$\\omega = 2\\pi f$$
        $$\\text{Period} = \\frac{1}{f} = \\frac{2\\pi}{\\omega}$$
        <p style="margin-top: 8px;">where $f$ is frequency in Hz (cycles per second)</p>
      </div>

      <h4>Modeling Periodic Phenomena</h4>
      <p>Many natural phenomena exhibit periodic behavior that can be modeled with sinusoidal functions:</p>
      <ul style="margin: 8px 0 8px 20px;">
        <li><strong>Tides:</strong> Ocean tides follow approximately sinusoidal patterns with a period of about 12.4 hours</li>
        <li><strong>Temperature:</strong> Daily and annual temperature cycles can be modeled using sine or cosine functions</li>
        <li><strong>Daylight:</strong> Hours of daylight vary sinusoidally throughout the year</li>
        <li><strong>Electrical current:</strong> Alternating current (AC) is modeled as a sinusoidal function with respect to time</li>
        <li><strong>Sound waves:</strong> Pressure variations in sound waves follow sinusoidal patterns</li>
      </ul>

      <h4>Building a Sinusoidal Model</h4>
      <p>To create a sinusoidal model for real data:</p>
      <ol style="margin: 8px 0 8px 20px;">
        <li>Identify the amplitude: $A = \\frac{\\text{max value} - \\text{min value}}{2}$</li>
        <li>Identify the vertical shift: $D = \\frac{\\text{max value} + \\text{min value}}{2}$</li>
        <li>Find the period from the data pattern (e.g., annual data has period 365 days)</li>
        <li>Calculate $B = \\frac{2\\pi}{\\text{Period}}$</li>
        <li>Determine the phase shift $C$ by identifying a key point (like a maximum) in the data</li>
        <li>Write the model: $y = A\\sin(B(t - C)) + D$ or use cosine</li>
      </ol>

      <div class="tip-box">
        <span class="tip-icon">💡</span>
        <p><strong>Tip:</strong> When modeling real data, choose between sine and cosine based on what happens at time $t = 0$. If the value starts at the average (midline) and increases, use sine. If it starts at a maximum or minimum, use cosine.</p>
      </div>
    </div>`,
    examples: [
      {
        problem: 'A mass on a spring oscillates according to $d = 6\\sin(2\\pi t)$, where $d$ is displacement in cm and $t$ is time in seconds. Find the amplitude, period, and frequency.',
        steps: [
          'Amplitude: $|A| = 6$ cm',
          'Comparing to $d = A\\sin(\\omega t)$, we have $\\omega = 2\\pi$',
          'Period: $T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{2\\pi} = 1$ second',
          'Frequency: $f = \\frac{1}{T} = \\frac{1}{1} = 1$ Hz (one cycle per second)',
          'Verify: $\\omega = 2\\pi f = 2\\pi(1) = 2\\pi$ ✓'
        ],
        answer: 'Amplitude: 6 cm, Period: 1 second, Frequency: 1 Hz'
      },
      {
        problem: 'The height of the tide at a beach varies from 2 feet (low tide) to 8 feet (high tide) with a period of 12.4 hours. If high tide occurs at $t = 0$, write a sinusoidal model for the tide height.',
        steps: [
          'Vertical shift: $D = \\frac{8 + 2}{2} = 5$ feet (average water level)',
          'Amplitude: $A = \\frac{8 - 2}{2} = 3$ feet',
          'Period is 12.4 hours: $B = \\frac{2\\pi}{12.4}$',
          'High tide at $t = 0$ suggests using cosine (which starts at maximum)',
          'With cosine at its maximum: $h(t) = 3\\cos(\\frac{2\\pi}{12.4}t) + 5$'
        ],
        answer: '$h(t) = 3\\cos(\\frac{2\\pi}{12.4}t) + 5$ or $h(t) = 3\\cos(\\frac{5\\pi}{31}t) + 5$'
      },
      {
        problem: 'Write a sinusoidal model for average daily temperature that has a minimum of 45°F in January and a maximum of 85°F in July. Use $t$ in months from January.',
        steps: [
          'Vertical shift: $D = \\frac{85 + 45}{2} = 65$°F',
          'Amplitude: $A = \\frac{85 - 45}{2} = 20$°F',
          'Period is 12 months: $B = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$',
          'Minimum occurs in January ($t = 0$), suggesting negative cosine or sine with phase shift',
          'Model: $T(t) = -20\\cos(\\frac{\\pi}{6}t) + 65$ or $T(t) = 20\\sin(\\frac{\\pi}{6}(t - 3)) + 65$'
        ],
        answer: '$T(t) = -20\\cos(\\frac{\\pi}{6}t) + 65$ (or equivalent form)'
      }
    ],
    practice: [
      {
        type: 'fill',
        question: 'A pendulum oscillates according to $\\theta(t) = 0.5\\sin(\\pi t)$, where $\\theta$ is angle in radians and $t$ is time in seconds. What is the period?',
        answer: '2',
        altAnswers: ['2', '2 seconds'],
        explanation: 'Period = 2π/ω = 2π/π = 2 seconds'
      },
      {
        type: 'mc',
        question: 'An AC current is modeled as $I(t) = 10\\sin(120\\pi t)$, where $I$ is current in amps and $t$ is time in seconds. What is the frequency?',
        choices: ['$60$ Hz', '$120$ Hz', '$240$ Hz', '$120\\pi$ Hz'],
        correct: 0,
        explanation: 'ω = 120π, so f = ω/(2π) = 120π/(2π) = 60 Hz'
      },
      {
        type: 'fill',
        question: 'Water depth in a harbor varies from 20 feet to 40 feet with a period of 12 hours. At $t = 0$, the depth is at its minimum. Write a sinusoidal model.',
        answer: 'd = 10cos(πt/6) + 30',
        altAnswers: ['d=10cos(πt/6)+30', 'd = 10cos(πt/6) + 30', 'd=-10sin(πt/6)+30'],
        explanation: 'D=(20+40)/2=30, A=(40-20)/2=10, B=2π/12=π/6. Minimum at t=0 suggests cosine with negative amplitude or phase adjustment: d=10cos(πt/6)+30'
      },
      {
        type: 'mc',
        question: 'A oscillating system has displacement $d(t) = 4\\sin(3t)$ cm. At what time does it first reach its maximum displacement?',
        choices: ['$t = \\pi/6$', '$t = \\pi/3$', '$t = \\pi/2$', '$t = 2\\pi/3$'],
        correct: 0,
        explanation: 'Maximum occurs when sin(3t)=1, so 3t=π/2, giving t=π/6'
      },
      {
        type: 'fill',
        question: 'The number of daylight hours varies sinusoidally through the year with a minimum of 9 hours and maximum of 15 hours. Using $t$ in days (with $t=0$ on January 1), and knowing minimum daylight occurs around day 355, write a model.',
        answer: 'h = 3sin(2πt/365 - constant) + 12',
        altAnswers: ['h=3sin(2π(t-355)/365)+12', 'h = -3cos(2πt/365) + 12', 'h = 3cos(2π(t-80)/365) + 12'],
        explanation: 'D=(9+15)/2=12, A=(15-9)/2=3, Period=365, B=2π/365. Minimum at day 355 can be written as h=-3cos(2πt/365)+12 or phase-shifted sine'
      }
    ]
  }
];

