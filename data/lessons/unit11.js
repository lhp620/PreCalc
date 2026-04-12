// data/lessons/unit11.js — Unit 11: Matrices & Systems

export const lessons = [
  // ── 11.1 ─────────────────────────────────────────────────────────────────
  {
    id: '11.1',
    learn: `
      <div class="concept-card">
        <h2>📖 Matrix Operations</h2>
        <p>A <strong>matrix</strong> is a rectangular array of numbers arranged in rows and columns. We describe its size as $m \\times n$ (m rows by n columns).</p>

        <div class="formula-box">
          <div class="formula-label">Matrix Notation</div>
          $$A = \\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix} \\quad \\text{is a } 2 \\times 2 \\text{ matrix}$$
        </div>

        <h3>Addition & Subtraction</h3>
        <p>Matrices can only be added or subtracted if they have the <strong>same dimensions</strong>. Add or subtract corresponding entries:</p>
        $$A + B = \\begin{bmatrix} a_{11}+b_{11} & a_{12}+b_{12} \\\\ a_{21}+b_{21} & a_{22}+b_{22} \\end{bmatrix}$$

        <h3>Scalar Multiplication</h3>
        <p>Multiply every entry by the scalar:</p>
        $$cA = \\begin{bmatrix} ca_{11} & ca_{12} \\\\ ca_{21} & ca_{22} \\end{bmatrix}$$

        <h3>Matrix Multiplication</h3>
        <p>To multiply $A_{m \\times n}$ by $B_{n \\times p}$, the number of <strong>columns of A must equal the number of rows of B</strong>. The result is $m \\times p$.</p>

        <div class="formula-box">
          <div class="formula-label">Entry (i, j) of AB</div>
          $$(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} \\cdot b_{kj}$$
          <p>Row $i$ of $A$ dotted with column $j$ of $B$.</p>
        </div>

        <h3>Identity Matrix</h3>
        <p>The identity matrix $I$ has 1s on the diagonal and 0s elsewhere. For any matrix $A$: $AI = IA = A$.</p>
        $$I_2 = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}, \\qquad I_3 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$

        <div class="warning-box">
          <span class="warning-icon">⚠️</span>
          <p>Matrix multiplication is <strong>not commutative</strong>: $AB \\neq BA$ in general. Always check the order!</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Let $A = \\begin{bmatrix} 2 & -1 \\\\ 3 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} 5 & 0 \\\\ -2 & 7 \\end{bmatrix}$. Find $A + B$ and $3A$.',
        steps: [
          '$A + B = \\begin{bmatrix} 2+5 & -1+0 \\\\ 3+(-2) & 4+7 \\end{bmatrix} = \\begin{bmatrix} 7 & -1 \\\\ 1 & 11 \\end{bmatrix}$',
          '$3A = \\begin{bmatrix} 3(2) & 3(-1) \\\\ 3(3) & 3(4) \\end{bmatrix} = \\begin{bmatrix} 6 & -3 \\\\ 9 & 12 \\end{bmatrix}$',
        ],
        answer: '$A+B = \\begin{bmatrix} 7 & -1 \\\\ 1 & 11 \\end{bmatrix}$, $3A = \\begin{bmatrix} 6 & -3 \\\\ 9 & 12 \\end{bmatrix}$',
      },
      {
        problem: 'Let $A = \\begin{bmatrix} 1 & 3 \\\\ 2 & 0 \\end{bmatrix}$ and $B = \\begin{bmatrix} 4 & -1 \\\\ 5 & 2 \\end{bmatrix}$. Find $AB$.',
        steps: [
          'Entry (1,1): $1(4) + 3(5) = 4 + 15 = 19$',
          'Entry (1,2): $1(-1) + 3(2) = -1 + 6 = 5$',
          'Entry (2,1): $2(4) + 0(5) = 8 + 0 = 8$',
          'Entry (2,2): $2(-1) + 0(2) = -2 + 0 = -2$',
          '$AB = \\begin{bmatrix} 19 & 5 \\\\ 8 & -2 \\end{bmatrix}$',
        ],
        answer: '$AB = \\begin{bmatrix} 19 & 5 \\\\ 8 & -2 \\end{bmatrix}$',
      },
      {
        problem: 'Can we multiply a $2 \\times 3$ matrix by a $3 \\times 4$ matrix? What about a $2 \\times 3$ by a $2 \\times 3$?',
        steps: [
          '$2 \\times 3$ times $3 \\times 4$: inner dimensions match (3 = 3), so YES. Result is $2 \\times 4$.',
          '$2 \\times 3$ times $2 \\times 3$: inner dimensions don\'t match (3 ≠ 2), so NO.',
        ],
        answer: 'First: yes ($2 \\times 4$ result). Second: not defined.',
      },
    ],
    practice: [
      {
        type: 'mc',
        question: 'If $A$ is $3 \\times 2$ and $B$ is $2 \\times 5$, what are the dimensions of $AB$?',
        choices: ['$2 \\times 3$', '$3 \\times 5$', '$2 \\times 2$', 'Not defined'],
        correct: 1,
        explanation: 'Inner dimensions match (2 = 2), so $AB$ is $3 \\times 5$ (outer dimensions).',
      },
      {
        type: 'fill',
        question: 'If $A = \\begin{bmatrix} 2 & 1 \\\\ 0 & 3 \\end{bmatrix}$ and $B = \\begin{bmatrix} 1 & 4 \\\\ 2 & 5 \\end{bmatrix}$, what is the entry in row 1, column 1 of $AB$?',
        answer: '4',
        altAnswers: ['4.0'],
        explanation: '$(AB)_{11} = 2(1) + 1(2) = 2 + 2 = 4$.',
      },
      {
        type: 'mc',
        question: 'Which property does matrix multiplication NOT have?',
        choices: ['Associativity: $(AB)C = A(BC)$', 'Distributivity: $A(B+C) = AB + AC$', 'Commutativity: $AB = BA$', 'Identity: $AI = A$'],
        correct: 2,
        explanation: 'Matrix multiplication is not commutative in general: $AB \\neq BA$.',
      },
      {
        type: 'fill',
        question: 'If $A = \\begin{bmatrix} 3 & -2 \\\\ 1 & 4 \\end{bmatrix}$, what is $2A$? Give the entry in row 2, column 2.',
        answer: '8',
        altAnswers: ['8.0'],
        explanation: '$2A$ multiplies every entry by 2. Entry (2,2): $2(4) = 8$.',
      },
      {
        type: 'mc',
        question: 'Which matrices can be added?',
        choices: ['A $2 \\times 3$ and a $3 \\times 2$', 'A $2 \\times 3$ and a $2 \\times 3$', 'A $2 \\times 2$ and a $3 \\times 3$', 'Any two matrices'],
        correct: 1,
        explanation: 'Matrix addition requires identical dimensions. Both must be $2 \\times 3$.',
      },
    ],
  },

  // ── 11.2 ─────────────────────────────────────────────────────────────────
  {
    id: '11.2',
    learn: `
      <div class="concept-card">
        <h2>📖 Determinants & Inverses</h2>
        <p>The <strong>determinant</strong> is a scalar value associated with a square matrix. It tells us whether the matrix is invertible and plays a key role in solving systems.</p>

        <h3>2×2 Determinant</h3>
        <div class="formula-box">
          <div class="formula-label">2×2 Determinant</div>
          $$\\det\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} = ad - bc$$
        </div>

        <h3>3×3 Determinant — Cofactor Expansion</h3>
        <p>Expand along the first row:</p>
        <div class="formula-box">
          <div class="formula-label">3×3 Cofactor Expansion (Row 1)</div>
          $$\\det(A) = a_{11}\\begin{vmatrix} a_{22} & a_{23} \\\\ a_{32} & a_{33} \\end{vmatrix} - a_{12}\\begin{vmatrix} a_{21} & a_{23} \\\\ a_{31} & a_{33} \\end{vmatrix} + a_{13}\\begin{vmatrix} a_{21} & a_{22} \\\\ a_{31} & a_{32} \\end{vmatrix}$$
        </div>

        <h3>Properties of Determinants</h3>
        <ul>
          <li>$\\det(AB) = \\det(A) \\cdot \\det(B)$</li>
          <li>If $\\det(A) = 0$, the matrix is <strong>singular</strong> (no inverse)</li>
          <li>Swapping two rows changes the sign of the determinant</li>
        </ul>

        <h3>2×2 Inverse</h3>
        <div class="formula-box">
          <div class="formula-label">Inverse of a 2×2 Matrix</div>
          $$A^{-1} = \\dfrac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$$
        </div>
        <p>Swap the diagonal entries, negate the off-diagonal entries, and divide by the determinant.</p>

        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>To verify: $A \\cdot A^{-1} = I$. If you get the identity matrix, your inverse is correct!</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Find the determinant of $A = \\begin{bmatrix} 3 & 7 \\\\ 1 & -4 \\end{bmatrix}$.',
        steps: [
          '$\\det(A) = (3)(-4) - (7)(1) = -12 - 7 = -19$',
        ],
        answer: '$\\det(A) = -19$',
      },
      {
        problem: 'Find the determinant of $B = \\begin{bmatrix} 2 & 1 & 3 \\\\ 0 & 4 & -1 \\\\ 5 & 2 & 1 \\end{bmatrix}$.',
        steps: [
          'Expand along row 1:',
          '$\\det(B) = 2\\begin{vmatrix} 4 & -1 \\\\ 2 & 1 \\end{vmatrix} - 1\\begin{vmatrix} 0 & -1 \\\\ 5 & 1 \\end{vmatrix} + 3\\begin{vmatrix} 0 & 4 \\\\ 5 & 2 \\end{vmatrix}$',
          '$= 2(4 \\cdot 1 - (-1) \\cdot 2) - 1(0 \\cdot 1 - (-1) \\cdot 5) + 3(0 \\cdot 2 - 4 \\cdot 5)$',
          '$= 2(4 + 2) - 1(0 + 5) + 3(0 - 20)$',
          '$= 2(6) - 1(5) + 3(-20) = 12 - 5 - 60 = -53$',
        ],
        answer: '$\\det(B) = -53$',
      },
      {
        problem: 'Find the inverse of $A = \\begin{bmatrix} 5 & 2 \\\\ 3 & 1 \\end{bmatrix}$.',
        steps: [
          '$\\det(A) = 5(1) - 2(3) = 5 - 6 = -1$',
          'Since $\\det(A) \\neq 0$, the inverse exists.',
          '$A^{-1} = \\dfrac{1}{-1}\\begin{bmatrix} 1 & -2 \\\\ -3 & 5 \\end{bmatrix} = \\begin{bmatrix} -1 & 2 \\\\ 3 & -5 \\end{bmatrix}$',
          'Check: $AA^{-1} = \\begin{bmatrix} 5(-1)+2(3) & 5(2)+2(-5) \\\\ 3(-1)+1(3) & 3(2)+1(-5) \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$ ✓',
        ],
        answer: '$A^{-1} = \\begin{bmatrix} -1 & 2 \\\\ 3 & -5 \\end{bmatrix}$',
      },
    ],
    practice: [
      {
        type: 'fill',
        question: 'Find the determinant of $\\begin{bmatrix} 4 & 6 \\\\ 2 & 3 \\end{bmatrix}$.',
        answer: '0',
        altAnswers: ['0.0'],
        explanation: '$\\det = 4(3) - 6(2) = 12 - 12 = 0$. This matrix is singular.',
      },
      {
        type: 'mc',
        question: 'If $\\det(A) = 0$, which statement is true?',
        choices: ['$A$ has a unique inverse', '$A$ is called singular and has no inverse', '$A$ must be the zero matrix', '$A$ is the identity matrix'],
        correct: 1,
        explanation: 'A matrix with determinant 0 is singular and non-invertible.',
      },
      {
        type: 'fill',
        question: 'Find the determinant of $\\begin{bmatrix} 2 & -3 \\\\ 4 & 5 \\end{bmatrix}$.',
        answer: '22',
        altAnswers: ['22.0'],
        explanation: '$\\det = 2(5) - (-3)(4) = 10 + 12 = 22$.',
      },
      {
        type: 'mc',
        question: 'The inverse of $\\begin{bmatrix} 1 & 2 \\\\ 3 & 7 \\end{bmatrix}$ is:',
        choices: [
          '$\\begin{bmatrix} 7 & -2 \\\\ -3 & 1 \\end{bmatrix}$',
          '$\\begin{bmatrix} -7 & 2 \\\\ 3 & -1 \\end{bmatrix}$',
          '$\\begin{bmatrix} 1 & -2 \\\\ -3 & 7 \\end{bmatrix}$',
          '$\\begin{bmatrix} 7 & 2 \\\\ 3 & 1 \\end{bmatrix}$'
        ],
        correct: 0,
        explanation: '$\\det = 1(7) - 2(3) = 1$. $A^{-1} = \\frac{1}{1}\\begin{bmatrix} 7 & -2 \\\\ -3 & 1 \\end{bmatrix}$.',
      },
      {
        type: 'mc',
        question: 'Which property is true for determinants?',
        choices: ['$\\det(A+B) = \\det(A) + \\det(B)$', '$\\det(AB) = \\det(A) \\cdot \\det(B)$', '$\\det(cA) = c \\cdot \\det(A)$', '$\\det(A^T) = -\\det(A)$'],
        correct: 1,
        explanation: 'The determinant of a product equals the product of determinants: $\\det(AB) = \\det(A)\\det(B)$.',
      },
    ],
  },

  // ── 11.3 ─────────────────────────────────────────────────────────────────
  {
    id: '11.3',
    learn: `
      <div class="concept-card">
        <h2>📖 Solving Systems with Matrices</h2>
        <p>A system of linear equations can be written in matrix form $Ax = b$, where $A$ is the coefficient matrix, $x$ is the variable vector, and $b$ is the constant vector. We solve using <strong>Gaussian elimination</strong> on the augmented matrix $[A|b]$.</p>

        <h3>Augmented Matrix</h3>
        <p>For the system $\\begin{cases} 2x + 3y = 7 \\\\ x - y = 1 \\end{cases}$, the augmented matrix is:</p>
        $$\\left[\\begin{array}{cc|c} 2 & 3 & 7 \\\\ 1 & -1 & 1 \\end{array}\\right]$$

        <h3>Elementary Row Operations</h3>
        <ol>
          <li><strong>Swap</strong> two rows: $R_i \\leftrightarrow R_j$</li>
          <li><strong>Scale</strong> a row by a nonzero constant: $cR_i \\to R_i$</li>
          <li><strong>Add</strong> a multiple of one row to another: $R_i + cR_j \\to R_i$</li>
        </ol>

        <h3>Row Echelon Form (REF)</h3>
        <p>The goal is to produce an upper-triangular form, then use <strong>back-substitution</strong>:</p>
        $$\\left[\\begin{array}{cc|c} 1 & * & * \\\\ 0 & 1 & * \\end{array}\\right]$$

        <h3>Types of Solutions</h3>
        <ul>
          <li><strong>Unique solution</strong>: one intersection point (consistent, independent)</li>
          <li><strong>No solution</strong>: a row like $[0\\ 0\\ |\\ c]$ with $c \\neq 0$ (inconsistent)</li>
          <li><strong>Infinitely many</strong>: a row of all zeros $[0\\ 0\\ |\\ 0]$ (dependent)</li>
        </ul>

        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>Keep fractions exact during elimination — rounding can propagate errors. Alternatively, choose row operations that minimize fractions.</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Solve using Gaussian elimination: $\\begin{cases} x + 2y = 5 \\\\ 3x - y = 1 \\end{cases}$',
        steps: [
          'Augmented matrix: $\\left[\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 3 & -1 & 1 \\end{array}\\right]$',
          '$R_2 - 3R_1 \\to R_2$: $\\left[\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 0 & -7 & -14 \\end{array}\\right]$',
          '$R_2 / (-7)$: $\\left[\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 0 & 1 & 2 \\end{array}\\right]$',
          'Back-substitute: $y = 2$, then $x + 2(2) = 5 \\implies x = 1$',
        ],
        answer: '$x = 1, \\; y = 2$',
      },
      {
        problem: 'Solve: $\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 3y - z = 4 \\end{cases}$',
        steps: [
          'Augmented matrix: $\\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 2 & -1 & 1 & 3 \\\\ 1 & 3 & -1 & 4 \\end{array}\\right]$',
          '$R_2 - 2R_1 \\to R_2$ and $R_3 - R_1 \\to R_3$: $\\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 0 & -3 & -1 & -9 \\\\ 0 & 2 & -2 & -2 \\end{array}\\right]$',
          '$R_2 / (-3)$: $\\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 0 & 1 & 1/3 & 3 \\\\ 0 & 2 & -2 & -2 \\end{array}\\right]$',
          '$R_3 - 2R_2 \\to R_3$: $\\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 0 & 1 & 1/3 & 3 \\\\ 0 & 0 & -8/3 & -8 \\end{array}\\right]$',
          'From $R_3$: $-\\frac{8}{3}z = -8 \\implies z = 3$',
          'From $R_2$: $y + \\frac{1}{3}(3) = 3 \\implies y = 2$',
          'From $R_1$: $x + 2 + 3 = 6 \\implies x = 1$',
        ],
        answer: '$x = 1, \\; y = 2, \\; z = 3$',
      },
      {
        problem: 'Solve: $\\begin{cases} x + y = 3 \\\\ 2x + 2y = 8 \\end{cases}$',
        steps: [
          'Augmented matrix: $\\left[\\begin{array}{cc|c} 1 & 1 & 3 \\\\ 2 & 2 & 8 \\end{array}\\right]$',
          '$R_2 - 2R_1 \\to R_2$: $\\left[\\begin{array}{cc|c} 1 & 1 & 3 \\\\ 0 & 0 & 2 \\end{array}\\right]$',
          'Row 2 reads $0 = 2$, which is impossible.',
        ],
        answer: 'No solution (the system is inconsistent).',
      },
    ],
    practice: [
      {
        type: 'mc',
        question: 'What does a row $[0 \\; 0 \\; | \\; 5]$ in an augmented matrix indicate?',
        choices: ['A unique solution', 'Infinitely many solutions', 'No solution', 'A free variable'],
        correct: 2,
        explanation: 'The row reads $0x + 0y = 5$, i.e. $0 = 5$, which is impossible — no solution.',
      },
      {
        type: 'fill',
        question: 'Solve by elimination: $\\begin{cases} x + y = 7 \\\\ x - y = 3 \\end{cases}$. What is $x$?',
        answer: '5',
        altAnswers: ['x=5', 'x = 5'],
        explanation: 'Add the equations: $2x = 10 \\implies x = 5$. Then $y = 2$.',
      },
      {
        type: 'mc',
        question: 'Which row operation is NOT valid?',
        choices: ['Swap $R_1$ and $R_2$', 'Multiply $R_1$ by 3', 'Add $2R_2$ to $R_1$', 'Multiply $R_1$ by 0'],
        correct: 3,
        explanation: 'Scaling a row by 0 destroys information and is not a valid elementary row operation.',
      },
      {
        type: 'fill',
        question: 'Solve: $\\begin{cases} 2x + y = 8 \\\\ x - y = 1 \\end{cases}$. What is $y$?',
        answer: '2',
        altAnswers: ['y=2', 'y = 2'],
        explanation: 'From equation 2: $x = y + 1$. Substitute: $2(y+1) + y = 8 \\implies 3y = 6 \\implies y = 2$.',
      },
      {
        type: 'mc',
        question: 'A $3 \\times 3$ system whose augmented matrix reduces to a row of all zeros has:',
        choices: ['No solution', 'Exactly one solution', 'Infinitely many solutions', 'Cannot be determined'],
        correct: 2,
        explanation: 'A row of all zeros means the system is dependent — infinitely many solutions (with at least one free variable).',
      },
    ],
  },

  // ── 11.4 ─────────────────────────────────────────────────────────────────
  {
    id: '11.4',
    learn: `
      <div class="concept-card">
        <h2>📖 Cramer's Rule</h2>
        <p><strong>Cramer's Rule</strong> uses determinants to solve a system of $n$ linear equations in $n$ unknowns, provided the coefficient matrix has a nonzero determinant.</p>

        <h3>For a 2×2 System</h3>
        <p>Given $\\begin{cases} a_1x + b_1y = c_1 \\\\ a_2x + b_2y = c_2 \\end{cases}$:</p>

        <div class="formula-box">
          <div class="formula-label">Cramer's Rule (2×2)</div>
          $$x = \\dfrac{D_x}{D} = \\dfrac{\\begin{vmatrix} c_1 & b_1 \\\\ c_2 & b_2 \\end{vmatrix}}{\\begin{vmatrix} a_1 & b_1 \\\\ a_2 & b_2 \\end{vmatrix}}, \\qquad y = \\dfrac{D_y}{D} = \\dfrac{\\begin{vmatrix} a_1 & c_1 \\\\ a_2 & c_2 \\end{vmatrix}}{\\begin{vmatrix} a_1 & b_1 \\\\ a_2 & b_2 \\end{vmatrix}}$$
        </div>

        <h3>For a 3×3 System</h3>
        <p>The same pattern extends. Replace column $i$ of the coefficient matrix with the constant column $b$ to form $D_{x_i}$:</p>
        $$x = \\frac{D_x}{D}, \\quad y = \\frac{D_y}{D}, \\quad z = \\frac{D_z}{D}$$

        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>Cramer's Rule is elegant for small systems but becomes computationally expensive for large ones. For 2×2 and 3×3 systems, it's a great tool!</p>
        </div>

        <div class="warning-box">
          <span class="warning-icon">⚠️</span>
          <p>Cramer's Rule only works when $D \\neq 0$ (the coefficient determinant is nonzero). If $D = 0$, the system either has no solution or infinitely many.</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Use Cramer\'s Rule to solve: $\\begin{cases} 3x + 2y = 16 \\\\ x - y = 2 \\end{cases}$',
        steps: [
          '$D = \\begin{vmatrix} 3 & 2 \\\\ 1 & -1 \\end{vmatrix} = 3(-1) - 2(1) = -3 - 2 = -5$',
          '$D_x = \\begin{vmatrix} 16 & 2 \\\\ 2 & -1 \\end{vmatrix} = 16(-1) - 2(2) = -16 - 4 = -20$',
          '$D_y = \\begin{vmatrix} 3 & 16 \\\\ 1 & 2 \\end{vmatrix} = 3(2) - 16(1) = 6 - 16 = -10$',
          '$x = \\dfrac{D_x}{D} = \\dfrac{-20}{-5} = 4, \\quad y = \\dfrac{D_y}{D} = \\dfrac{-10}{-5} = 2$',
        ],
        answer: '$x = 4, \\; y = 2$',
      },
      {
        problem: 'Use Cramer\'s Rule to solve: $\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 1 \\end{cases}$',
        steps: [
          '$D = \\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & -1 & 1 \\\\ 1 & 2 & -1 \\end{vmatrix} = 1(1-2) - 1(-2-1) + 1(4+1) = -1 + 3 + 5 = 7$',
          '$D_x = \\begin{vmatrix} 6 & 1 & 1 \\\\ 3 & -1 & 1 \\\\ 1 & 2 & -1 \\end{vmatrix} = 6(1-2) - 1(-3-1) + 1(6+1) = -6 + 4 + 7 = 5$',
          'Similarly, $D_y = 14$ and $D_z = 21$ (by replacing the appropriate columns)',
          '$x = \\frac{5}{7}, \\quad y = \\frac{14}{7} = 2, \\quad z = \\frac{21}{7} = 3$',
        ],
        answer: '$x = \\dfrac{5}{7}, \\; y = 2, \\; z = 3$',
      },
    ],
    practice: [
      {
        type: 'fill',
        question: 'Use Cramer\'s Rule for $\\begin{cases} 2x + y = 5 \\\\ x - y = 1 \\end{cases}$. Find $D$ (the determinant of the coefficient matrix).',
        answer: '-3',
        altAnswers: ['-3.0'],
        explanation: '$D = \\begin{vmatrix} 2 & 1 \\\\ 1 & -1 \\end{vmatrix} = 2(-1) - 1(1) = -3$.',
      },
      {
        type: 'mc',
        question: 'If the coefficient determinant $D = 0$ for a system, Cramer\'s Rule tells us:',
        choices: ['The solution is $(0, 0)$', 'The system has infinitely many solutions', 'The system has no solution', 'Cramer\'s Rule does not apply'],
        correct: 3,
        explanation: 'When $D = 0$, Cramer\'s Rule cannot be used. The system may have no solution or infinitely many.',
      },
      {
        type: 'fill',
        question: 'Use Cramer\'s Rule: $\\begin{cases} x + 3y = 7 \\\\ 2x + y = 4 \\end{cases}$. What is $x$?',
        answer: '1',
        altAnswers: ['x=1', 'x = 1', '1.0'],
        explanation: '$D = 1(1) - 3(2) = -5$, $D_x = 7(1) - 3(4) = -5$. $x = -5/-5 = 1$.',
      },
      {
        type: 'mc',
        question: 'In Cramer\'s Rule, $D_y$ is found by replacing which column of the coefficient matrix with the constants?',
        choices: ['The first column', 'The second column', 'The third column', 'The last row'],
        correct: 1,
        explanation: '$D_y$ replaces the $y$-column (second column) with the constant column.',
      },
    ],
  },

  // ── 11.5 ─────────────────────────────────────────────────────────────────
  {
    id: '11.5',
    learn: `
      <div class="concept-card">
        <h2>📖 Linear Programming</h2>
        <p><strong>Linear programming</strong> is a method for finding the maximum or minimum value of a linear function (called the <em>objective function</em>) subject to a set of linear inequality constraints.</p>

        <h3>Key Components</h3>
        <ul>
          <li><strong>Objective function:</strong> $z = ax + by$ (maximize or minimize)</li>
          <li><strong>Constraints:</strong> Linear inequalities like $x + 2y \\leq 10$, $x \\geq 0$, $y \\geq 0$</li>
          <li><strong>Feasible region:</strong> The set of all points $(x, y)$ satisfying all constraints</li>
          <li><strong>Corner points (vertices):</strong> Where boundary lines intersect</li>
        </ul>

        <div class="formula-box">
          <div class="formula-label">Fundamental Theorem of Linear Programming</div>
          <p>If the feasible region is bounded, then the objective function has both a maximum and a minimum, and they occur at <strong>corner points</strong> of the feasible region.</p>
        </div>

        <h3>Steps to Solve</h3>
        <ol>
          <li>Write the objective function and constraints</li>
          <li>Graph the constraints to find the feasible region</li>
          <li>Find all corner points (vertices) of the feasible region</li>
          <li>Evaluate the objective function at each corner point</li>
          <li>The largest value is the maximum; the smallest is the minimum</li>
        </ol>

        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>Don't forget non-negativity constraints ($x \\geq 0$, $y \\geq 0$) — they're often implied in real-world problems but must be included!</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Maximize $z = 3x + 4y$ subject to: $x + 2y \\leq 14$, $3x + 2y \\leq 18$, $x \\geq 0$, $y \\geq 0$.',
        steps: [
          'Graph the constraints. The feasible region is bounded by the axes and the two lines.',
          'Find corner points by solving intersections:',
          '$(0, 0)$: origin',
          '$(6, 0)$: intersection of $3x + 2y = 18$ with $x$-axis',
          '$(0, 7)$: intersection of $x + 2y = 14$ with $y$-axis',
          '$(2, 6)$: solve $x + 2y = 14$ and $3x + 2y = 18$ simultaneously → subtract: $2x = 4$, so $x = 2, y = 6$',
          'Evaluate $z = 3x + 4y$ at each corner:',
          '$(0,0): z = 0$, $(6,0): z = 18$, $(0,7): z = 28$, $(2,6): z = 6 + 24 = 30$',
        ],
        answer: 'Maximum $z = 30$ at $(2, 6)$.',
      },
      {
        problem: 'Minimize $z = 2x + 5y$ subject to: $x + y \\geq 6$, $2x + y \\geq 8$, $x \\geq 0$, $y \\geq 0$.',
        steps: [
          'Graph constraints. The feasible region is above both lines and in the first quadrant.',
          'Corner points: $(0, 8)$ from $2x + y = 8$ at $y$-axis; $(6, 0)$ from $x + y = 6$ at $x$-axis; $(2, 4)$ from solving $x + y = 6$ and $2x + y = 8$ → $x = 2, y = 4$',
          'Evaluate: $(0,8): z = 40$, $(6,0): z = 12$, $(2,4): z = 4 + 20 = 24$',
        ],
        answer: 'Minimum $z = 12$ at $(6, 0)$.',
      },
    ],
    practice: [
      {
        type: 'mc',
        question: 'In linear programming, the optimal value of the objective function always occurs at:',
        choices: ['The center of the feasible region', 'A corner point of the feasible region', 'The origin', 'The midpoint of a constraint boundary'],
        correct: 1,
        explanation: 'The Fundamental Theorem of Linear Programming states the optimum occurs at a corner point (vertex).',
      },
      {
        type: 'fill',
        question: 'Maximize $z = 2x + y$ subject to $x \\leq 4$, $y \\leq 3$, $x \\geq 0$, $y \\geq 0$. What is the maximum value of $z$?',
        answer: '11',
        altAnswers: ['11.0'],
        explanation: 'Corner points: $(0,0), (4,0), (4,3), (0,3)$. At $(4,3)$: $z = 8 + 3 = 11$.',
      },
      {
        type: 'mc',
        question: 'What is the feasible region in a linear programming problem?',
        choices: ['The set of all possible objective function values', 'The set of all points satisfying all constraints', 'The boundary of the constraints only', 'The set of corner points'],
        correct: 1,
        explanation: 'The feasible region is the set of all $(x,y)$ points that satisfy every constraint simultaneously.',
      },
      {
        type: 'mc',
        question: 'If the feasible region is unbounded, then:',
        choices: ['No solution exists', 'Both max and min always exist', 'A maximum may not exist (for maximization)', 'The problem is invalid'],
        correct: 2,
        explanation: 'An unbounded feasible region means the objective function may grow without bound in one direction.',
      },
      {
        type: 'fill',
        question: 'A feasible region has corner points $(0,0)$, $(5,0)$, $(3,4)$, $(0,6)$. If $z = x + 2y$, what is the maximum $z$?',
        answer: '12',
        altAnswers: ['12.0'],
        explanation: '$(0,0): 0$, $(5,0): 5$, $(3,4): 11$, $(0,6): 12$. Maximum is 12 at $(0,6)$.',
      },
    ],
  },

  // ── 11.6 ─────────────────────────────────────────────────────────────────
  {
    id: '11.6',
    learn: `
      <div class="concept-card">
        <h2>📖 Nonlinear Systems & Modeling</h2>
        <p>A <strong>nonlinear system</strong> contains at least one equation that is not linear (e.g., quadratic, exponential, rational). These systems can have 0, 1, 2, or more solutions.</p>

        <h3>Solving Methods</h3>
        <ul>
          <li><strong>Substitution:</strong> Solve one equation for a variable, substitute into the other</li>
          <li><strong>Elimination:</strong> Add/subtract equations to eliminate a variable (works well when equations share similar terms like $x^2 + y^2$)</li>
        </ul>

        <h3>Common Types</h3>
        <ul>
          <li><strong>Line + Parabola:</strong> 0, 1, or 2 intersection points</li>
          <li><strong>Line + Circle:</strong> 0, 1, or 2 points</li>
          <li><strong>Two Conics:</strong> 0, 1, 2, 3, or 4 points</li>
        </ul>

        <h3>Real-World Modeling</h3>
        <p>Nonlinear systems appear in:</p>
        <ul>
          <li><strong>Break-even analysis:</strong> Revenue = Cost, where one is nonlinear</li>
          <li><strong>Projectile intersection:</strong> Two paths crossing</li>
          <li><strong>Supply and demand:</strong> Equilibrium price where curves meet</li>
        </ul>

        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <p>Always check your solutions in <strong>both</strong> original equations. Substitution can introduce extraneous solutions!</p>
        </div>
      </div>
    `,
    examples: [
      {
        problem: 'Solve: $\\begin{cases} y = x^2 \\\\ y = x + 2 \\end{cases}$',
        steps: [
          'Substitute $y = x + 2$ into $y = x^2$: $x + 2 = x^2$',
          'Rearrange: $x^2 - x - 2 = 0$',
          'Factor: $(x - 2)(x + 1) = 0 \\implies x = 2$ or $x = -1$',
          'Find $y$: when $x = 2$, $y = 4$; when $x = -1$, $y = 1$',
          'Check both solutions in original equations ✓',
        ],
        answer: '$(2, 4)$ and $(-1, 1)$',
      },
      {
        problem: 'Solve: $\\begin{cases} x^2 + y^2 = 25 \\\\ x - y = 1 \\end{cases}$',
        steps: [
          'From the linear equation: $x = y + 1$',
          'Substitute into the circle: $(y+1)^2 + y^2 = 25$',
          '$y^2 + 2y + 1 + y^2 = 25 \\implies 2y^2 + 2y - 24 = 0$',
          '$y^2 + y - 12 = 0 \\implies (y+4)(y-3) = 0$',
          '$y = -4 \\implies x = -3$, or $y = 3 \\implies x = 4$',
        ],
        answer: '$(4, 3)$ and $(-3, -4)$',
      },
      {
        problem: 'A company\'s revenue is $R(x) = -x^2 + 12x$ and cost is $C(x) = 2x + 8$ (in thousands). Find the break-even points.',
        steps: [
          'Set $R(x) = C(x)$: $-x^2 + 12x = 2x + 8$',
          '$-x^2 + 10x - 8 = 0 \\implies x^2 - 10x + 8 = 0$',
          'Quadratic formula: $x = \\dfrac{10 \\pm \\sqrt{100 - 32}}{2} = \\dfrac{10 \\pm \\sqrt{68}}{2} = 5 \\pm \\sqrt{17}$',
          '$x \\approx 0.88$ or $x \\approx 9.12$ (thousands of units)',
        ],
        answer: 'Break-even at $x = 5 - \\sqrt{17} \\approx 0.88$ and $x = 5 + \\sqrt{17} \\approx 9.12$ thousand units.',
      },
    ],
    practice: [
      {
        type: 'mc',
        question: 'How many solutions can the system $\\begin{cases} y = x^2 \\\\ y = 3 \\end{cases}$ have?',
        choices: ['0', '1', '2', '3'],
        correct: 2,
        explanation: '$x^2 = 3 \\implies x = \\pm\\sqrt{3}$. The horizontal line intersects the parabola at 2 points.',
      },
      {
        type: 'fill',
        question: 'Solve: $\\begin{cases} y = x^2 \\\\ y = 4x - 3 \\end{cases}$. One solution is $(1, 1)$. What is the $x$-value of the other solution?',
        answer: '3',
        altAnswers: ['x=3', 'x = 3'],
        explanation: '$x^2 = 4x - 3 \\implies x^2 - 4x + 3 = 0 \\implies (x-1)(x-3) = 0$. The other solution has $x = 3$.',
      },
      {
        type: 'mc',
        question: 'Which method is generally best for solving a system with a circle and a line?',
        choices: ['Graphing only', 'Substitution (solve the line for one variable)', 'Cramer\'s Rule', 'Matrix elimination'],
        correct: 1,
        explanation: 'Substitute the linear expression into the circle equation to get a single quadratic.',
      },
      {
        type: 'fill',
        question: 'Solve: $\\begin{cases} x^2 + y^2 = 10 \\\\ y = x + 2 \\end{cases}$. How many solution points are there?',
        answer: '2',
        altAnswers: ['two'],
        explanation: 'Substitute: $x^2 + (x+2)^2 = 10 \\implies 2x^2 + 4x - 6 = 0 \\implies x^2 + 2x - 3 = 0 \\implies (x+3)(x-1) = 0$. Two solutions.',
      },
      {
        type: 'mc',
        question: 'A line and a circle can intersect in at most how many points?',
        choices: ['1', '2', '3', '4'],
        correct: 1,
        explanation: 'A line can intersect a circle in 0 (miss), 1 (tangent), or 2 (secant) points. Maximum is 2.',
      },
    ],
  },
];
