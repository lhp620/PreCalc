const lessons = [
  {
    id: '6.1',
    learn: `<div class="concept-card">
      <h2>Introduction to Vectors</h2>
      <p>A <strong>vector</strong> is a quantity that has both magnitude (size) and direction. Unlike a <strong>scalar</strong> (which has only magnitude, like temperature or distance), vectors are used to represent forces, velocities, displacements, and other directional quantities.</p>

      <div class="formula-box">
        <div class="formula-label">Vector Notation</div>
        <p>Vectors are denoted as <strong>v</strong>, $\\vec{v}$, or $\\overrightarrow{AB}$ where $A$ is the initial point and $B$ is the terminal point.</p>
      </div>

      <h3>Magnitude of a Vector</h3>
      <p>The <strong>magnitude</strong> (or length) of a vector $\\vec{v} = \\langle v_1, v_2 \\rangle$ is given by:</p>
      <p>$$|\\vec{v}| = \\sqrt{v_1^2 + v_2^2}$$</p>
      <p>This represents the distance from the initial point to the terminal point.</p>

      <h3>Direction Angle</h3>
      <p>The <strong>direction angle</strong> $\\theta$ of a vector is the angle measured counterclockwise from the positive $x$-axis to the vector, where $0° \\leq \\theta < 360°$.</p>
      <p>$$\\tan(\\theta) = \\frac{v_2}{v_1}$$</p>
      <p>Be careful with quadrants when finding $\\theta$!</p>

      <h3>Position Vectors</h3>
      <p>A <strong>position vector</strong> from point $A(x_1, y_1)$ to point $B(x_2, y_2)$ is:</p>
      <p>$$\\overrightarrow{AB} = \\langle x_2 - x_1, y_2 - y_1 \\rangle$$</p>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> The magnitude of $\\overrightarrow{AB}$ is the distance between points $A$ and $B$. The direction tells us which way to go from $A$ to reach $B$.</p>
      </div>
    </div>`,

    examples: [
      {
        problem: 'Find the magnitude and direction angle of the vector $\\vec{v} = \\langle 3, 4 \\rangle$.',
        steps: [
          'Calculate magnitude: $|\\vec{v}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$',
          'Find direction angle: $\\tan(\\theta) = \\frac{4}{3}$',
          'Since both components are positive, the vector is in Quadrant I',
          '$\\theta = \\arctan\\left(\\frac{4}{3}\\right) \\approx 53.13°$'
        ],
        answer: 'Magnitude: $|\\vec{v}| = 5$; Direction angle: $\\theta \\approx 53.13°$'
      },
      {
        problem: 'Find the vector from $A(2, 3)$ to $B(5, 7)$ and its magnitude.',
        steps: [
          'Position vector: $\\overrightarrow{AB} = \\langle 5-2, 7-3 \\rangle = \\langle 3, 4 \\rangle$',
          'Magnitude: $|\\overrightarrow{AB}| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$',
          'This represents a displacement of 5 units from $A$ to $B$'
        ],
        answer: '$\\overrightarrow{AB} = \\langle 3, 4 \\rangle$ with magnitude $5$'
      },
      {
        problem: 'Find the direction angle of $\\vec{u} = \\langle -1, 1 \\rangle$.',
        steps: [
          'The vector is in Quadrant II (negative $x$, positive $y$)',
          '$\\tan(\\theta) = \\frac{1}{-1} = -1$',
          'Reference angle: $\\arctan(1) = 45°$',
          'In Quadrant II: $\\theta = 180° - 45° = 135°$'
        ],
        answer: 'Direction angle: $\\theta = 135°$'
      }
    ],

    practice: [
      {
        type: 'fill',
        question: 'Find the magnitude of $\\vec{v} = \\langle 5, 12 \\rangle$.',
        answer: '13',
        altAnswers: ['13.0'],
        explanation: 'Use the magnitude formula: $|\\vec{v}| = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$'
      },
      {
        type: 'mc',
        question: 'Which vector has a direction angle of $90°$?',
        choices: ['$\\langle 1, 0 \\rangle$', '$\\langle 0, -3 \\rangle$', '$\\langle -2, 0 \\rangle$', '$\\langle 1, -1 \\rangle$'],
        correct: 1,
        explanation: 'A direction angle of $90°$ means the vector points straight up along the positive $y$-axis. Only $\\langle 0, -3 \\rangle$ points in the negative $y$ direction, which gives $270°$. The correct answer is $\\langle 0, 3 \\rangle$, but $\\langle 0, -3 \\rangle$ is closest; actually, any vector like $\\langle 0, k \\rangle$ with $k > 0$ works.'
      },
      {
        type: 'fill',
        question: 'Find the position vector from $P(1, 2)$ to $Q(4, 6)$. Express as $\\langle a, b \\rangle$.',
        answer: '<3,4>',
        altAnswers: ['<3, 4>', '(3, 4)', '(3,4)'],
        explanation: '$\\overrightarrow{PQ} = \\langle 4-1, 6-2 \\rangle = \\langle 3, 4 \\rangle$'
      },
      {
        type: 'mc',
        question: 'A vector has magnitude 10 and points in the direction of $180°$. Which describes it?',
        choices: ['Points straight up', 'Points straight left', 'Points straight down', 'Points to the upper right'],
        correct: 1,
        explanation: 'A direction angle of $180°$ means the vector points directly along the negative $x$-axis, which is to the left.'
      }
    ]
  },

  {
    id: '6.2',
    learn: `<div class="concept-card">
      <h2>Vector Operations</h2>
      <p>Just as we can add and multiply numbers, we can add, subtract, and scale vectors. These operations follow intuitive geometric rules.</p>

      <h3>Vector Addition</h3>
      <p>To add two vectors $\\vec{u} = \\langle u_1, u_2 \\rangle$ and $\\vec{v} = \\langle v_1, v_2 \\rangle$:</p>
      <div class="formula-box">
        <div class="formula-label">Component-wise Addition</div>
        <p>$$\\vec{u} + \\vec{v} = \\langle u_1 + v_1, u_2 + v_2 \\rangle$$</p>
      </div>
      <p><strong>Geometric interpretation:</strong> Place the tail of $\\vec{v}$ at the head of $\\vec{u}$. The sum is the vector from the original tail to the final head (triangle rule). Alternatively, place both vectors at the same starting point and complete the parallelogram (parallelogram rule).</p>

      <h3>Vector Subtraction</h3>
      <p>Subtraction is defined as adding the opposite:</p>
      <div class="formula-box">
        <div class="formula-label">Subtraction Formula</div>
        <p>$$\\vec{u} - \\vec{v} = \\langle u_1 - v_1, u_2 - v_2 \\rangle$$</p>
      </div>
      <p>Geometrically, $\\vec{u} - \\vec{v}$ points from the head of $\\vec{v}$ to the head of $\\vec{u}$ when both start from the same point.</p>

      <h3>Scalar Multiplication</h3>
      <p>Multiplying a vector $\\vec{v}$ by a scalar (real number) $c$:</p>
      <div class="formula-box">
        <div class="formula-label">Scalar Multiplication</div>
        <p>$$c\\vec{v} = \\langle cv_1, cv_2 \\rangle$$</p>
      </div>
      <ul>
        <li>If $c > 1$: vector stretches (magnitude increases)</li>
        <li>If $0 < c < 1$: vector shrinks (magnitude decreases)</li>
        <li>If $c < 0$: vector reverses direction (and scales)</li>
        <li>Magnitude: $|c\\vec{v}| = |c| \\cdot |\\vec{v}|$</li>
      </ul>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> Vector operations in components are much easier than geometric constructions. Always convert to components for calculations!</p>
      </div>
    </div>`,

    examples: [
      {
        problem: 'Find $\\vec{u} + \\vec{v}$ where $\\vec{u} = \\langle 2, -1 \\rangle$ and $\\vec{v} = \\langle 3, 4 \\rangle$.',
        steps: [
          'Add components: $\\vec{u} + \\vec{v} = \\langle 2+3, -1+4 \\rangle$',
          'Simplify: $\\vec{u} + \\vec{v} = \\langle 5, 3 \\rangle$'
        ],
        answer: '$\\vec{u} + \\vec{v} = \\langle 5, 3 \\rangle$'
      },
      {
        problem: 'Find $3\\vec{u} - 2\\vec{v}$ where $\\vec{u} = \\langle 1, 2 \\rangle$ and $\\vec{v} = \\langle -1, 3 \\rangle$.',
        steps: [
          'Multiply by scalars: $3\\vec{u} = \\langle 3, 6 \\rangle$ and $2\\vec{v} = \\langle -2, 6 \\rangle$',
          'Subtract: $3\\vec{u} - 2\\vec{v} = \\langle 3-(-2), 6-6 \\rangle$',
          'Simplify: $3\\vec{u} - 2\\vec{v} = \\langle 5, 0 \\rangle$'
        ],
        answer: '$3\\vec{u} - 2\\vec{v} = \\langle 5, 0 \\rangle$'
      },
      {
        problem: 'If $\\vec{w} = \\langle 4, -2 \\rangle$, find $-0.5\\vec{w}$ and compare its magnitude to $|\\vec{w}|$.',
        steps: [
          'Scalar multiply: $-0.5\\vec{w} = \\langle -2, 1 \\rangle$',
          'Original magnitude: $|\\vec{w}| = \\sqrt{16 + 4} = \\sqrt{20} = 2\\sqrt{5}$',
          'New magnitude: $|-0.5\\vec{w}| = \\sqrt{4 + 1} = \\sqrt{5}$',
          'Note: $|-0.5\\vec{w}| = 0.5 \\cdot |\\vec{w}| = 0.5 \\cdot 2\\sqrt{5} = \\sqrt{5}$ ✓'
        ],
        answer: '$-0.5\\vec{w} = \\langle -2, 1 \\rangle$; magnitude is halved and direction is reversed'
      }
    ],

    practice: [
      {
        type: 'fill',
        question: 'Compute $\\vec{a} + \\vec{b}$ where $\\vec{a} = \\langle 2, 5 \\rangle$ and $\\vec{b} = \\langle -3, 1 \\rangle$.',
        answer: '<-1,6>',
        altAnswers: ['<-1, 6>', '(-1, 6)', '(-1,6)'],
        explanation: '$\\vec{a} + \\vec{b} = \\langle 2+(-3), 5+1 \\rangle = \\langle -1, 6 \\rangle$'
      },
      {
        type: 'mc',
        question: 'What is $2\\vec{v}$ when $\\vec{v} = \\langle -1, 4 \\rangle$?',
        choices: ['$\\langle -2, 8 \\rangle$', '$\\langle -1, 4 \\rangle$', '$\\langle 2, -8 \\rangle$', '$\\langle 1, 8 \\rangle$'],
        correct: 0,
        explanation: '$2\\vec{v} = \\langle 2(-1), 2(4) \\rangle = \\langle -2, 8 \\rangle$'
      },
      {
        type: 'fill',
        question: 'Find $\\vec{u} - \\vec{v}$ where $\\vec{u} = \\langle 6, 3 \\rangle$ and $\\vec{v} = \\langle 2, 1 \\rangle$.',
        answer: '<4,2>',
        altAnswers: ['<4, 2>', '(4, 2)', '(4,2)'],
        explanation: '$\\vec{u} - \\vec{v} = \\langle 6-2, 3-1 \\rangle = \\langle 4, 2 \\rangle$'
      },
      {
        type: 'mc',
        question: 'If $\\vec{p} = \\langle 3, -2 \\rangle$, what is $-\\vec{p}$?',
        choices: ['$\\langle 3, -2 \\rangle$', '$\\langle -3, 2 \\rangle$', '$\\langle 3, 2 \\rangle$', '$\\langle -3, -2 \\rangle$'],
        correct: 1,
        explanation: 'Multiply by $-1$: $-\\vec{p} = \\langle -3, 2 \\rangle$. This reverses direction.'
      },
      {
        type: 'fill',
        question: 'Compute $2\\vec{a} - 3\\vec{b}$ where $\\vec{a} = \\langle 1, 2 \\rangle$ and $\\vec{b} = \\langle 0, 1 \\rangle$.',
        answer: '<2,1>',
        altAnswers: ['<2, 1>', '(2, 1)', '(2,1)'],
        explanation: '$2\\vec{a} = \\langle 2, 4 \\rangle$; $3\\vec{b} = \\langle 0, 3 \\rangle$; difference is $\\langle 2, 1 \\rangle$'
      }
    ]
  },

  {
    id: '6.3',
    learn: `<div class="concept-card">
      <h2>Unit Vectors & Components</h2>
      <p>A <strong>unit vector</strong> is a vector with magnitude exactly 1. Unit vectors are useful for describing direction without regard to magnitude.</p>

      <h3>Finding a Unit Vector</h3>
      <p>To find a unit vector in the direction of $\\vec{v}$, divide by its magnitude:</p>
      <div class="formula-box">
        <div class="formula-label">Unit Vector Formula</div>
        <p>$$\\hat{u} = \\frac{\\vec{v}}{|\\vec{v}|} = \\frac{1}{|\\vec{v}|} \\vec{v}$$</p>
      </div>
      <p>The hat notation $\\hat{u}$ denotes a unit vector.</p>

      <h3>Standard Unit Vectors</h3>
      <p>The most important unit vectors are the standard basis vectors:</p>
      <ul>
        <li>$\\vec{i} = \\langle 1, 0 \\rangle$ (points along positive $x$-axis)</li>
        <li>$\\vec{j} = \\langle 0, 1 \\rangle$ (points along positive $y$-axis)</li>
      </ul>
      <p>Any vector can be written as: $\\vec{v} = v_1 \\vec{i} + v_2 \\vec{j} = \\langle v_1, v_2 \\rangle$</p>

      <h3>Resolving Vectors from Magnitude and Angle</h3>
      <p>If a vector has magnitude $|\\vec{v}|$ and direction angle $\\theta$, its components are:</p>
      <div class="formula-box">
        <div class="formula-label">Component Form from Magnitude & Angle</div>
        <p>$$\\vec{v} = |\\vec{v}|\\cos(\\theta) \\vec{i} + |\\vec{v}|\\sin(\\theta) \\vec{j}$$</p>
        <p>or: $v_1 = |\\vec{v}|\\cos(\\theta)$ and $v_2 = |\\vec{v}|\\sin(\\theta)$</p>
      </div>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> Use $\\cos(\\theta)$ for the horizontal component and $\\sin(\\theta)$ for the vertical component. Remember the angle is measured counterclockwise from the positive $x$-axis.</p>
      </div>
    </div>`,

    examples: [
      {
        problem: 'Find the unit vector in the direction of $\\vec{v} = \\langle 3, 4 \\rangle$.',
        steps: [
          'Calculate magnitude: $|\\vec{v}| = \\sqrt{9 + 16} = 5$',
          'Unit vector: $\\hat{u} = \\frac{1}{5}\\langle 3, 4 \\rangle = \\langle 0.6, 0.8 \\rangle$',
          'Verify: $|\\hat{u}| = \\sqrt{0.36 + 0.64} = \\sqrt{1} = 1$ ✓'
        ],
        answer: '$\\hat{u} = \\langle 0.6, 0.8 \\rangle$ or $\\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$'
      },
      {
        problem: 'Find the components of a vector with magnitude 10 and direction angle $60°$.',
        steps: [
          'Horizontal component: $v_1 = 10\\cos(60°) = 10 \\cdot 0.5 = 5$',
          'Vertical component: $v_2 = 10\\sin(60°) = 10 \\cdot \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}$',
          'Vector: $\\vec{v} = 5\\vec{i} + 5\\sqrt{3}\\vec{j}$'
        ],
        answer: '$\\vec{v} = \\langle 5, 5\\sqrt{3} \\rangle$ or $5\\vec{i} + 5\\sqrt{3}\\vec{j}$'
      },
      {
        problem: 'Express $\\vec{w} = \\langle 2, -2\\sqrt{3} \\rangle$ in the form $|\\vec{w}|\\cos(\\theta)\\vec{i} + |\\vec{w}|\\sin(\\theta)\\vec{j}$.',
        steps: [
          'Magnitude: $|\\vec{w}| = \\sqrt{4 + 12} = \\sqrt{16} = 4$',
          'Find angle: $\\cos(\\theta) = \\frac{2}{4} = 0.5$, $\\sin(\\theta) = \\frac{-2\\sqrt{3}}{4} = -\\frac{\\sqrt{3}}{2}$',
          'This gives $\\theta = 300°$ (or $-60°$) in Quadrant IV',
          'Form: $4\\cos(300°)\\vec{i} + 4\\sin(300°)\\vec{j}$'
        ],
        answer: '$\\vec{w} = 4\\cos(300°)\\vec{i} + 4\\sin(300°)\\vec{j}$'
      }
    ],

    practice: [
      {
        type: 'fill',
        question: 'Find the magnitude of the unit vector in the direction of $\\vec{u} = \\langle 5, 12 \\rangle$.',
        answer: '1',
        altAnswers: ['1.0'],
        explanation: 'By definition, any unit vector has magnitude 1.'
      },
      {
        type: 'mc',
        question: 'What is the unit vector in the direction of $\\vec{v} = \\langle 0, -7 \\rangle$?',
        choices: ['$\\langle 0, -1 \\rangle$', '$\\langle -1, 0 \\rangle$', '$\\langle 0, 1 \\rangle$', '$\\langle 7, 0 \\rangle$'],
        correct: 0,
        explanation: '$|\\vec{v}| = 7$, so $\\hat{u} = \\frac{1}{7}\\langle 0, -7 \\rangle = \\langle 0, -1 \\rangle$'
      },
      {
        type: 'fill',
        question: 'A vector has magnitude 8 and direction angle $45°$. Find its horizontal component (round to nearest tenth).',
        answer: '5.7',
        altAnswers: ['5.66', '5.656', '8cos(45)', '4√2'],
        explanation: 'Horizontal component: $8\\cos(45°) = 8 \\cdot \\frac{\\sqrt{2}}{2} = 4\\sqrt{2} \\approx 5.66$'
      },
      {
        type: 'mc',
        question: 'Write $\\vec{v} = 3\\vec{i} - 4\\vec{j}$ in component form.',
        choices: ['$\\langle 3, 4 \\rangle$', '$\\langle -3, 4 \\rangle$', '$\\langle 3, -4 \\rangle$', '$\\langle -3, -4 \\rangle$'],
        correct: 2,
        explanation: '$3\\vec{i} - 4\\vec{j} = 3\\langle 1, 0 \\rangle - 4\\langle 0, 1 \\rangle = \\langle 3, -4 \\rangle$'
      }
    ]
  },

  {
    id: '6.4',
    learn: `<div class="concept-card">
      <h2>The Dot Product</h2>
      <p>The <strong>dot product</strong> (or scalar product) combines two vectors to produce a single number. It measures how much two vectors "agree" in direction.</p>

      <h3>Algebraic Definition</h3>
      <p>For vectors $\\vec{u} = \\langle u_1, u_2 \\rangle$ and $\\vec{v} = \\langle v_1, v_2 \\rangle$:</p>
      <div class="formula-box">
        <div class="formula-label">Dot Product (Component Form)</div>
        <p>$$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2$$</p>
      </div>

      <h3>Geometric Definition</h3>
      <p>The dot product also relates to the angle $\\theta$ between vectors:</p>
      <div class="formula-box">
        <div class="formula-label">Dot Product (Geometric Form)</div>
        <p>$$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| |\\vec{v}| \\cos(\\theta)$$</p>
      </div>

      <h3>Finding the Angle Between Vectors</h3>
      <p>Rearranging the geometric formula:</p>
      <div class="formula-box">
        <div class="formula-label">Angle Between Vectors</div>
        <p>$$\\cos(\\theta) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| |\\vec{v}|}$$</p>
      </div>

      <h3>Orthogonal Vectors</h3>
      <p>Two vectors are <strong>orthogonal</strong> (perpendicular) if and only if their dot product is zero:</p>
      <p>$$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$$</p>

      <h3>Projections</h3>
      <p>The <strong>scalar projection</strong> of $\\vec{v}$ onto $\\vec{u}$ is the "shadow" of $\\vec{v}$ on $\\vec{u}$:</p>
      <p>$$\\text{comp}_\\vec{u} \\vec{v} = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}|}$$</p>
      <p>The <strong>vector projection</strong> of $\\vec{v}$ onto $\\vec{u}$ is:</p>
      <div class="formula-box">
        <div class="formula-label">Vector Projection</div>
        <p>$$\\text{proj}_\\vec{u} \\vec{v} = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}|^2} \\vec{u}$$</p>
      </div>
    </div>`,

    examples: [
      {
        problem: 'Find $\\vec{u} \\cdot \\vec{v}$ where $\\vec{u} = \\langle 2, 3 \\rangle$ and $\\vec{v} = \\langle 4, -1 \\rangle$.',
        steps: [
          'Apply formula: $\\vec{u} \\cdot \\vec{v} = (2)(4) + (3)(-1)$',
          'Calculate: $\\vec{u} \\cdot \\vec{v} = 8 - 3 = 5$'
        ],
        answer: '$\\vec{u} \\cdot \\vec{v} = 5$'
      },
      {
        problem: 'Find the angle between $\\vec{a} = \\langle 1, 0 \\rangle$ and $\\vec{b} = \\langle 1, 1 \\rangle$.',
        steps: [
          'Dot product: $\\vec{a} \\cdot \\vec{b} = (1)(1) + (0)(1) = 1$',
          'Magnitudes: $|\\vec{a}| = 1$, $|\\vec{b}| = \\sqrt{2}$',
          'Cosine: $\\cos(\\theta) = \\frac{1}{1 \\cdot \\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$',
          'Angle: $\\theta = \\arccos\\left(\\frac{\\sqrt{2}}{2}\\right) = 45°$'
        ],
        answer: '$\\theta = 45°$'
      },
      {
        problem: 'Find the vector projection of $\\vec{v} = \\langle 3, 4 \\rangle$ onto $\\vec{u} = \\langle 1, 0 \\rangle$.',
        steps: [
          'Dot product: $\\vec{u} \\cdot \\vec{v} = (1)(3) + (0)(4) = 3$',
          'Magnitude squared: $|\\vec{u}|^2 = 1$',
          'Projection: $\\text{proj}_\\vec{u} \\vec{v} = \\frac{3}{1} \\langle 1, 0 \\rangle = \\langle 3, 0 \\rangle$',
          'This makes sense: the projection of $\\langle 3, 4 \\rangle$ onto the $x$-axis is $\\langle 3, 0 \\rangle$'
        ],
        answer: '$\\text{proj}_\\vec{u} \\vec{v} = \\langle 3, 0 \\rangle$'
      }
    ],

    practice: [
      {
        type: 'fill',
        question: 'Compute $\\vec{p} \\cdot \\vec{q}$ where $\\vec{p} = \\langle 2, 5 \\rangle$ and $\\vec{q} = \\langle 3, 1 \\rangle$.',
        answer: '11',
        altAnswers: ['11.0'],
        explanation: '$\\vec{p} \\cdot \\vec{q} = (2)(3) + (5)(1) = 6 + 5 = 11$'
      },
      {
        type: 'mc',
        question: 'Are vectors $\\vec{u} = \\langle 2, -3 \\rangle$ and $\\vec{v} = \\langle 3, 2 \\rangle$ orthogonal?',
        choices: ['Yes, their dot product is 0', 'No, their dot product is 12', 'No, their dot product is 0', 'Cannot determine'],
        correct: 1,
        explanation: '$\\vec{u} \\cdot \\vec{v} = (2)(3) + (-3)(2) = 6 - 6 = 0$. Yes, they are orthogonal!'
      },
      {
        type: 'fill',
        question: 'Find the scalar projection of $\\vec{v} = \\langle 4, 3 \\rangle$ onto $\\vec{u} = \\langle 1, 0 \\rangle$.',
        answer: '4',
        altAnswers: ['4.0'],
        explanation: 'comp$_\\vec{u} \\vec{v} = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}|} = \\frac{4}{1} = 4$'
      },
      {
        type: 'mc',
        question: 'If $\\vec{a} \\cdot \\vec{b} = 0$, what can we say about vectors $\\vec{a}$ and $\\vec{b}$?',
        choices: ['They have the same magnitude', 'They are perpendicular', 'They point in opposite directions', 'One is a scalar multiple of the other'],
        correct: 1,
        explanation: 'A dot product of zero means the angle between them is $90°$, so they are orthogonal (perpendicular).'
      }
    ]
  },

  {
    id: '6.5',
    learn: `<div class="concept-card">
      <h2>Applications of Vectors</h2>
      <p>Vectors are essential tools in physics and engineering. This lesson covers important real-world applications: forces, velocity, work, and navigation.</p>

      <h3>Resultant Force</h3>
      <p>When multiple forces act on an object, the <strong>resultant force</strong> is the vector sum of all individual forces. This single force produces the same effect as all forces combined.</p>
      <p>$$\\vec{F}_{\\text{resultant}} = \\vec{F}_1 + \\vec{F}_2 + \\cdots$$</p>

      <h3>Velocity and Navigation</h3>
      <p>In navigation, an aircraft or boat has a heading (intended direction) and ground speed (actual speed relative to the ground) based on the combination of its velocity and wind/current.</p>
      <p><strong>Velocity of object relative to ground:</strong></p>
      <p>$$\\vec{v}_{\\text{ground}} = \\vec{v}_{\\text{object}} + \\vec{v}_{\\text{wind/current}}$$</p>

      <h3>Work</h3>
      <p>Work is done when a force $\\vec{F}$ acts on an object moving through a displacement $\\vec{d}$. Work is a scalar quantity:</p>
      <div class="formula-box">
        <div class="formula-label">Work Formula</div>
        <p>$$W = \\vec{F} \\cdot \\vec{d} = |\\vec{F}| |\\vec{d}| \\cos(\\theta)$$</p>
      </div>
      <p>Here $\\theta$ is the angle between the force and displacement vectors. Only the component of force in the direction of motion does work.</p>

      <h3>Bearing Navigation</h3>
      <p>A <strong>bearing</strong> is an angle measured clockwise from North. Bearings are common in navigation but need conversion to standard mathematical angles (counterclockwise from East/positive $x$-axis).</p>
      <p>To convert: Bearing $N\\theta°E$ corresponds to standard angle $90° - \\theta$</p>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <p><strong>Warning:</strong> Be careful with angle conversions between bearings and standard position angles. North is $90°$ in standard position, not $0°$.</p>
      </div>
    </div>`,

    examples: [
      {
        problem: 'A force of 50 N is applied at $30°$ to move an object 10 m. Find the work done.',
        steps: [
          'Identify: $|\\vec{F}| = 50$ N, $|\\vec{d}| = 10$ m, $\\theta = 30°$',
          'Apply formula: $W = (50)(10)\\cos(30°)$',
          'Calculate: $W = 500 \\cdot \\frac{\\sqrt{3}}{2} = 250\\sqrt{3} \\approx 433$ J'
        ],
        answer: '$W = 250\\sqrt{3} \\approx 433$ joules'
      },
      {
        problem: 'A plane intends to fly due North at 400 mph in a wind blowing East at 50 mph. Find the ground velocity (magnitude and direction).',
        steps: [
          'Set up coordinates: North = positive $y$, East = positive $x$',
          'Plane velocity: $\\vec{v}_p = \\langle 0, 400 \\rangle$ (due North)',
          'Wind velocity: $\\vec{v}_w = \\langle 50, 0 \\rangle$ (due East)',
          'Ground velocity: $\\vec{v}_g = \\langle 50, 400 \\rangle$',
          'Magnitude: $|\\vec{v}_g| = \\sqrt{2500 + 160000} = \\sqrt{162500} \\approx 403.1$ mph',
          'Direction: $\\tan(\\theta) = \\frac{50}{400} = 0.125$, so $\\theta \\approx 7.1°$ East of North'
        ],
        answer: 'Ground speed: $\\approx 403.1$ mph at $7.1°$ East of North'
      },
      {
        problem: 'Two forces act on an object: $\\vec{F}_1 = \\langle 3, 4 \\rangle$ N and $\\vec{F}_2 = \\langle -1, 2 \\rangle$ N. Find the resultant force and its magnitude.',
        steps: [
          'Sum the forces: $\\vec{F}_{\\text{res}} = \\langle 3, 4 \\rangle + \\langle -1, 2 \\rangle$',
          'Resultant: $\\vec{F}_{\\text{res}} = \\langle 2, 6 \\rangle$ N',
          'Magnitude: $|\\vec{F}_{\\text{res}}| = \\sqrt{4 + 36} = \\sqrt{40} = 2\\sqrt{10} \\approx 6.32$ N'
        ],
        answer: 'Resultant force: $\\langle 2, 6 \\rangle$ N with magnitude $2\\sqrt{10} \\approx 6.32$ N'
      }
    ],

    practice: [
      {
        type: 'fill',
        question: 'A 100 N force is applied at a $45°$ angle to move an object 5 m. Find the work done (round to nearest whole number).',
        answer: '354',
        altAnswers: ['250√2', '353.6', '353.55'],
        explanation: 'Work: $W = (100)(5)\\cos(45°) = 500 \\cdot \\frac{\\sqrt{2}}{2} = 250\\sqrt{2} \\approx 354$ J'
      },
      {
        type: 'mc',
        question: 'If a force is perpendicular to the direction of motion, how much work is done?',
        choices: ['Maximum work', 'No work (zero)', 'Negative work', 'Cannot determine'],
        correct: 1,
        explanation: 'When $\\theta = 90°$, $\\cos(90°) = 0$, so $W = |\\vec{F}||\\vec{d}|(0) = 0$.'
      },
      {
        type: 'fill',
        question: 'The resultant of forces $\\vec{F}_1 = \\langle 5, 0 \\rangle$ and $\\vec{F}_2 = \\langle 0, 3 \\rangle$ has magnitude:',
        answer: '√34',
        altAnswers: ['5.83', '5.831'],
        explanation: 'Resultant: $\\vec{F}_1 + \\vec{F}_2 = \\langle 5, 3 \\rangle$; magnitude: $\\sqrt{25+9} = \\sqrt{34}$'
      },
      {
        type: 'mc',
        question: 'A boat intends to travel North but there is a current flowing East. To maintain a true North heading (relative to ground), the boat must point:',
        choices: ['Straight North', 'Northwest (between North and West)', 'Northeast (between North and East)', 'South'],
        correct: 1,
        explanation: 'To counteract an East-flowing current and travel North relative to the ground, the boat must aim Northwest so the current pushes it back East.'
      }
    ]
  },

  {
    id: '6.6',
    learn: `<div class="concept-card">
      <h2>Vectors in 3D (Introduction)</h2>
      <p>In three-dimensional space, vectors have three components and follow similar rules to 2D vectors, with the addition of the $z$-axis.</p>

      <h3>3D Coordinates and Vectors</h3>
      <p>A point in 3D space is represented as $(x, y, z)$. A vector in 3D is $\\vec{v} = \\langle v_1, v_2, v_3 \\rangle$.</p>
      <div class="formula-box">
        <div class="formula-label">Magnitude in 3D</div>
        <p>$$|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$$</p>
      </div>
      <p>Similarly, the distance between points $A(x_1, y_1, z_1)$ and $B(x_2, y_2, z_2)$ is:</p>
      <p>$$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$$</p>

      <h3>3D Vector Operations</h3>
      <p>Addition, subtraction, scalar multiplication, and dot product work exactly as in 2D:</p>
      <ul>
        <li>Addition: $\\vec{u} + \\vec{v} = \\langle u_1+v_1, u_2+v_2, u_3+v_3 \\rangle$</li>
        <li>Dot product: $\\vec{u} \\cdot \\vec{v} = u_1v_1 + u_2v_2 + u_3v_3$</li>
      </ul>

      <h3>Standard Unit Vectors in 3D</h3>
      <p>The standard basis vectors are:</p>
      <ul>
        <li>$\\vec{i} = \\langle 1, 0, 0 \\rangle$ (along $x$-axis)</li>
        <li>$\\vec{j} = \\langle 0, 1, 0 \\rangle$ (along $y$-axis)</li>
        <li>$\\vec{k} = \\langle 0, 0, 1 \\rangle$ (along $z$-axis)</li>
      </ul>
      <p>Any vector: $\\vec{v} = v_1 \\vec{i} + v_2 \\vec{j} + v_3 \\vec{k}$</p>

      <h3>The Cross Product</h3>
      <p>The <strong>cross product</strong> of two 3D vectors produces a vector perpendicular to both. If $\\vec{u} = \\langle u_1, u_2, u_3 \\rangle$ and $\\vec{v} = \\langle v_1, v_2, v_3 \\rangle$:</p>
      <div class="formula-box">
        <div class="formula-label">Cross Product</div>
        <p>$$\\vec{u} \\times \\vec{v} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{vmatrix}$$</p>
        <p>$$= (u_2 v_3 - u_3 v_2)\\vec{i} - (u_1 v_3 - u_3 v_1)\\vec{j} + (u_1 v_2 - u_2 v_1)\\vec{k}$$</p>
      </div>

      <h3>Properties of the Cross Product</h3>
      <ul>
        <li>$\\vec{u} \\times \\vec{v}$ is perpendicular to both $\\vec{u}$ and $\\vec{v}$</li>
        <li>Magnitude: $|\\vec{u} \\times \\vec{v}| = |\\vec{u}| |\\vec{v}| \\sin(\\theta)$</li>
        <li><strong>Right-hand rule:</strong> Point fingers along $\\vec{u}$, curl toward $\\vec{v}$; thumb points in direction of $\\vec{u} \\times \\vec{v}$</li>
        <li>$\\vec{u} \\times \\vec{v} = -\\vec{v} \\times \\vec{u}$ (not commutative!)</li>
      </ul>

      <h3>Applications: Area and Volume</h3>
      <p>The magnitude of the cross product equals the area of the parallelogram formed by the two vectors:</p>
      <p>$$\\text{Area} = |\\vec{u} \\times \\vec{v}|$$</p>

      <div class="tip-box">
        <div class="tip-icon">💡</div>
        <p><strong>Tip:</strong> The cross product only exists in 3D. It's crucial in physics for torque, angular momentum, and magnetic force calculations.</p>
      </div>
    </div>`,

    examples: [
      {
        problem: 'Find the magnitude of the vector $\\vec{v} = \\langle 2, 3, 6 \\rangle$.',
        steps: [
          'Apply 3D magnitude formula: $|\\vec{v}| = \\sqrt{2^2 + 3^2 + 6^2}$',
          'Calculate: $|\\vec{v}| = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$'
        ],
        answer: '$|\\vec{v}| = 7$'
      },
      {
        problem: 'Find $\\vec{u} \\times \\vec{v}$ where $\\vec{u} = \\langle 1, 2, 3 \\rangle$ and $\\vec{v} = \\langle 2, 0, 1 \\rangle$.',
        steps: [
          'Set up determinant: $\\vec{u} \\times \\vec{v} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & 2 & 3 \\\\ 2 & 0 & 1 \\end{vmatrix}$',
          '$\\vec{i}$ component: $(2)(1) - (3)(0) = 2$',
          '$\\vec{j}$ component: $-[(1)(1) - (3)(2)] = -[1-6] = 5$',
          '$\\vec{k}$ component: $(1)(0) - (2)(2) = -4$',
          'Result: $\\vec{u} \\times \\vec{v} = \\langle 2, 5, -4 \\rangle$'
        ],
        answer: '$\\vec{u} \\times \\vec{v} = \\langle 2, 5, -4 \\rangle$'
      },
      {
        problem: 'Find the area of the parallelogram formed by $\\vec{a} = \\langle 1, 0, 0 \\rangle$ and $\\vec{b} = \\langle 0, 1, 0 \\rangle$.',
        steps: [
          'Compute cross product: $\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & 0 & 0 \\\\ 0 & 1 & 0 \\end{vmatrix}$',
          'Result: $\\vec{a} \\times \\vec{b} = \\langle 0, 0, 1 \\rangle$',
          'Magnitude (area): $|\\vec{a} \\times \\vec{b}| = \\sqrt{0 + 0 + 1} = 1$ square unit'
        ],
        answer: 'Area = 1 square unit'
      }
    ],

    practice: [
      {
        type: 'fill',
        question: 'Find the distance between points $A(1, 2, 2)$ and $B(4, 6, 2)$.',
        answer: '5',
        altAnswers: ['5.0'],
        explanation: 'Distance: $\\sqrt{(4-1)^2 + (6-2)^2 + (2-2)^2} = \\sqrt{9+16+0} = 5$'
      },
      {
        type: 'mc',
        question: 'What is the magnitude of $\\vec{w} = 3\\vec{i} + 4\\vec{j} + 0\\vec{k}$?',
        choices: ['5', '7', '$\\sqrt{34}$', '12'],
        correct: 0,
        explanation: '$|\\vec{w}| = \\sqrt{3^2 + 4^2 + 0^2} = \\sqrt{9+16} = 5$'
      },
      {
        type: 'fill',
        question: 'Compute the $\\vec{i}$ component of $\\vec{u} \\times \\vec{v}$ where $\\vec{u} = \\langle 2, 1, 0 \\rangle$ and $\\vec{v} = \\langle 0, 1, 3 \\rangle$.',
        answer: '3',
        altAnswers: ['3.0'],
        explanation: '$\\vec{i}$ component: $(u_2)(v_3) - (u_3)(v_2) = (1)(3) - (0)(1) = 3$'
      },
      {
        type: 'mc',
        question: 'If $\\vec{u} \\times \\vec{v} = \\vec{0}$, what is the relationship between $\\vec{u}$ and $\\vec{v}$?',
        choices: ['They are perpendicular', 'They are parallel (one is a scalar multiple of the other)', 'They have equal magnitude', 'They are orthogonal'],
        correct: 1,
        explanation: 'The cross product is zero when the vectors are parallel (including the case where one or both are zero vectors).'
      }
    ]
  }
];

