// data/formulas.js — Key Pre-Calculus Formula Reference

export const FORMULAS = [
  // Unit 1: Functions
  { unit: 'Unit 1', name: 'Vertical Line Test', formula: '\\text{A graph is a function if every vertical line crosses it at most once.}', notes: 'Use to determine if a relation is a function.', tags: ['function', 'test'] },
  { unit: 'Unit 1', name: 'Composition of Functions', formula: '(f \\circ g)(x) = f(g(x))', notes: 'Apply g first, then f.', tags: ['composition', 'function'] },
  { unit: 'Unit 1', name: 'Inverse Function', formula: 'f(f^{-1}(x)) = f^{-1}(f(x)) = x', notes: 'f must be one-to-one; reflect graph over y = x.', tags: ['inverse', 'function'] },
  { unit: 'Unit 1', name: 'Even / Odd Functions', formula: '\\text{Even: } f(-x)=f(x) \\qquad \\text{Odd: } f(-x)=-f(x)', notes: 'Even → y-axis symmetry; Odd → origin symmetry.', tags: ['even', 'odd', 'symmetry'] },

  // Unit 2: Polynomial & Rational
  { unit: 'Unit 2', name: 'Remainder Theorem', formula: 'p(c) = \\text{remainder when } p(x) \\div (x - c)', notes: 'Evaluate the polynomial at x = c.', tags: ['remainder', 'polynomial'] },
  { unit: 'Unit 2', name: 'Rational Root Theorem', formula: '\\text{Possible rational zeros: } \\pm\\dfrac{p}{q}', notes: 'p = factors of constant term; q = factors of leading coefficient.', tags: ['rational root', 'zeros', 'polynomial'] },
  { unit: 'Unit 2', name: 'Horizontal Asymptote Rules', formula: '\\text{deg}(N)<\\text{deg}(D): y=0 \\quad \\text{deg}(N)=\\text{deg}(D): y=\\dfrac{a_n}{b_n}', notes: 'If deg(N) > deg(D): no horizontal asymptote (may have slant).', tags: ['asymptote', 'rational'] },
  { unit: 'Unit 2', name: 'Descartes\' Rule of Signs', formula: '\\text{pos. zeros} \\leq \\text{sign changes in } f(x)', notes: 'Count sign changes in f(x) for positive zeros; in f(−x) for negative zeros. Subtract even integers for other possibilities.', tags: ['descartes', 'zeros'] },

  // Unit 3: Exponential & Logarithmic
  { unit: 'Unit 3', name: 'Exponential Growth / Decay', formula: 'y = a \\cdot b^t, \\quad b = 1 + r', notes: 'a = initial amount, r = rate, t = time.', tags: ['exponential', 'growth', 'decay'] },
  { unit: 'Unit 3', name: 'Continuous Growth', formula: 'y = ae^{kt}', notes: 'k > 0: growth; k < 0: decay.', tags: ['exponential', 'e', 'continuous'] },
  { unit: 'Unit 3', name: 'Compound Interest', formula: 'A = P\\left(1 + \\dfrac{r}{n}\\right)^{nt}', notes: 'P = principal, r = rate, n = compounds per year, t = years.', tags: ['compound', 'interest', 'exponential'] },
  { unit: 'Unit 3', name: 'Logarithm Definition', formula: '\\log_b x = y \\iff b^y = x', notes: 'b > 0, b ≠ 1, x > 0.', tags: ['logarithm', 'definition'] },
  { unit: 'Unit 3', name: 'Log Product Rule', formula: '\\log_b(mn) = \\log_b m + \\log_b n', notes: null, tags: ['logarithm', 'properties'] },
  { unit: 'Unit 3', name: 'Log Quotient Rule', formula: '\\log_b\\!\\left(\\dfrac{m}{n}\\right) = \\log_b m - \\log_b n', notes: null, tags: ['logarithm', 'properties'] },
  { unit: 'Unit 3', name: 'Log Power Rule', formula: '\\log_b(m^p) = p\\log_b m', notes: null, tags: ['logarithm', 'properties'] },
  { unit: 'Unit 3', name: 'Change of Base', formula: '\\log_b x = \\dfrac{\\ln x}{\\ln b} = \\dfrac{\\log x}{\\log b}', notes: 'Use to evaluate logs with any base on a calculator.', tags: ['logarithm', 'change of base'] },

  // Unit 4: Trigonometric Functions
  { unit: 'Unit 4', name: 'Radian–Degree Conversion', formula: '\\text{radians} = \\text{degrees} \\times \\dfrac{\\pi}{180}', notes: null, tags: ['radian', 'degree', 'convert'] },
  { unit: 'Unit 4', name: 'Arc Length', formula: 's = r\\theta', notes: 'θ must be in radians.', tags: ['arc', 'length', 'radian'] },
  { unit: 'Unit 4', name: 'Sector Area', formula: 'A = \\dfrac{1}{2}r^2\\theta', notes: 'θ must be in radians.', tags: ['sector', 'area', 'radian'] },
  { unit: 'Unit 4', name: 'Unit Circle Definitions', formula: '\\sin\\theta = y, \\quad \\cos\\theta = x, \\quad \\tan\\theta = \\dfrac{y}{x}', notes: 'Point (x, y) on the unit circle at angle θ.', tags: ['unit circle', 'trig'] },
  { unit: 'Unit 4', name: 'Sine Graph Parameters', formula: 'y = A\\sin(Bx - C) + D', notes: 'Amplitude = |A|, Period = 2π/|B|, Phase shift = C/B, Vertical shift = D.', tags: ['sine', 'graph', 'amplitude', 'period'] },
  { unit: 'Unit 4', name: 'Inverse Trig Ranges', formula: '\\sin^{-1}: [-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}] \\quad \\cos^{-1}: [0, \\pi] \\quad \\tan^{-1}: (-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2})', notes: 'Restricted ranges ensure the inverse is a function.', tags: ['inverse', 'trig', 'domain'] },

  // Unit 5: Analytic Trigonometry
  { unit: 'Unit 5', name: 'Pythagorean Identity', formula: '\\sin^2\\theta + \\cos^2\\theta = 1', notes: 'Also: 1 + tan²θ = sec²θ and 1 + cot²θ = csc²θ.', tags: ['identity', 'pythagorean', 'trig'] },
  { unit: 'Unit 5', name: 'Sum Formula (Sine)', formula: '\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B', notes: null, tags: ['sum', 'difference', 'sine', 'identity'] },
  { unit: 'Unit 5', name: 'Sum Formula (Cosine)', formula: '\\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B', notes: 'Note the ∓ sign (opposite to ±).', tags: ['sum', 'difference', 'cosine', 'identity'] },
  { unit: 'Unit 5', name: 'Sum Formula (Tangent)', formula: '\\tan(A \\pm B) = \\dfrac{\\tan A \\pm \\tan B}{1 \\mp \\tan A\\tan B}', notes: null, tags: ['sum', 'difference', 'tangent', 'identity'] },
  { unit: 'Unit 5', name: 'Double-Angle (Sine)', formula: '\\sin 2\\theta = 2\\sin\\theta\\cos\\theta', notes: null, tags: ['double angle', 'sine', 'identity'] },
  { unit: 'Unit 5', name: 'Double-Angle (Cosine)', formula: '\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta', notes: 'Three equivalent forms.', tags: ['double angle', 'cosine', 'identity'] },
  { unit: 'Unit 5', name: 'Half-Angle (Sine)', formula: '\\sin\\dfrac{\\theta}{2} = \\pm\\sqrt{\\dfrac{1 - \\cos\\theta}{2}}', notes: 'Sign depends on the quadrant of θ/2.', tags: ['half angle', 'sine', 'identity'] },
  { unit: 'Unit 5', name: 'Half-Angle (Cosine)', formula: '\\cos\\dfrac{\\theta}{2} = \\pm\\sqrt{\\dfrac{1 + \\cos\\theta}{2}}', notes: 'Sign depends on the quadrant of θ/2.', tags: ['half angle', 'cosine', 'identity'] },

  // Unit 6: Vectors
  { unit: 'Unit 6', name: 'Vector Magnitude', formula: '|\\vec{v}| = \\sqrt{v_1^2 + v_2^2}', notes: 'In 3D: √(v₁² + v₂² + v₃²).', tags: ['vector', 'magnitude', 'length'] },
  { unit: 'Unit 6', name: 'Unit Vector', formula: '\\hat{u} = \\dfrac{\\vec{v}}{|\\vec{v}|}', notes: 'A vector with magnitude 1 in the same direction.', tags: ['unit vector', 'direction'] },
  { unit: 'Unit 6', name: 'Dot Product', formula: '\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 = |\\vec{a}||\\vec{b}|\\cos\\theta', notes: 'Result is a scalar. Perpendicular vectors have dot product = 0.', tags: ['dot product', 'scalar', 'angle'] },
  { unit: 'Unit 6', name: 'Vector Projection', formula: '\\text{proj}_{\\vec{b}}\\vec{a} = \\dfrac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2}\\vec{b}', notes: 'Projects vector a onto vector b.', tags: ['projection', 'vector'] },
  { unit: 'Unit 6', name: 'Cross Product (3D)', formula: '\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix}', notes: 'Result is a vector perpendicular to both a and b.', tags: ['cross product', '3d', 'vector'] },

  // Unit 7: Polar & Parametric
  { unit: 'Unit 7', name: 'Polar ↔ Rectangular', formula: 'x = r\\cos\\theta, \\quad y = r\\sin\\theta, \\quad r = \\sqrt{x^2+y^2}, \\quad \\theta = \\tan^{-1}\\!\\left(\\dfrac{y}{x}\\right)', notes: 'Adjust θ for correct quadrant.', tags: ['polar', 'rectangular', 'convert'] },
  { unit: 'Unit 7', name: 'Rose Curve', formula: 'r = a\\cos(n\\theta) \\text{ or } r = a\\sin(n\\theta)', notes: 'n petals if n is odd; 2n petals if n is even.', tags: ['polar', 'rose', 'graph'] },
  { unit: 'Unit 7', name: 'Cardioid', formula: 'r = a(1 + \\cos\\theta) \\text{ or } r = a(1 + \\sin\\theta)', notes: 'Heart-shaped curve passing through the origin.', tags: ['polar', 'cardioid', 'graph'] },
  { unit: 'Unit 7', name: 'Eliminating the Parameter', formula: '\\text{Solve } x = f(t) \\text{ for } t, \\text{ substitute into } y = g(t)', notes: 'Use trig identities when x and y involve sin/cos.', tags: ['parametric', 'eliminate'] },

  // Unit 8: Conic Sections
  { unit: 'Unit 8', name: 'Circle (Standard Form)', formula: '(x-h)^2 + (y-k)^2 = r^2', notes: 'Center (h, k), radius r.', tags: ['circle', 'conic'] },
  { unit: 'Unit 8', name: 'Ellipse (Standard Form)', formula: '\\dfrac{(x-h)^2}{a^2} + \\dfrac{(y-k)^2}{b^2} = 1', notes: 'a > b: horizontal major axis. c² = a² − b².', tags: ['ellipse', 'conic'] },
  { unit: 'Unit 8', name: 'Hyperbola (Standard Form)', formula: '\\dfrac{(x-h)^2}{a^2} - \\dfrac{(y-k)^2}{b^2} = 1', notes: 'Asymptotes: y − k = ±(b/a)(x − h). c² = a² + b².', tags: ['hyperbola', 'conic'] },
  { unit: 'Unit 8', name: 'Parabola (Conic Form)', formula: '(y-k)^2 = 4p(x-h) \\text{ or } (x-h)^2 = 4p(y-k)', notes: 'p = distance from vertex to focus; directrix is p on the other side.', tags: ['parabola', 'conic', 'focus'] },
  { unit: 'Unit 8', name: 'Eccentricity', formula: 'e = \\dfrac{c}{a}', notes: 'Circle: e = 0. Ellipse: 0 < e < 1. Parabola: e = 1. Hyperbola: e > 1.', tags: ['eccentricity', 'conic'] },

  // Unit 9: Sequences & Series
  { unit: 'Unit 9', name: 'Arithmetic nth Term', formula: 'a_n = a_1 + (n-1)d', notes: 'a₁ = first term, d = common difference.', tags: ['arithmetic', 'sequence'] },
  { unit: 'Unit 9', name: 'Arithmetic Series Sum', formula: 'S_n = \\dfrac{n}{2}(a_1 + a_n)', notes: null, tags: ['arithmetic', 'series', 'sum'] },
  { unit: 'Unit 9', name: 'Geometric nth Term', formula: 'a_n = a_1 \\cdot r^{n-1}', notes: 'r = common ratio.', tags: ['geometric', 'sequence'] },
  { unit: 'Unit 9', name: 'Geometric Series Sum (Finite)', formula: 'S_n = \\dfrac{a_1(1 - r^n)}{1 - r}, \\quad r \\ne 1', notes: null, tags: ['geometric', 'series', 'sum'] },
  { unit: 'Unit 9', name: 'Infinite Geometric Series', formula: 'S = \\dfrac{a_1}{1 - r}, \\quad |r| < 1', notes: 'Converges only when |r| < 1.', tags: ['geometric', 'infinite', 'series'] },
  { unit: 'Unit 9', name: 'Binomial Theorem', formula: '(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k}b^k', notes: 'C(n,k) = n! / (k!(n−k)!)', tags: ['binomial', 'expansion', 'pascal'] },
  { unit: 'Unit 9', name: 'Permutations & Combinations', formula: 'P(n,r) = \\dfrac{n!}{(n-r)!} \\qquad C(n,r) = \\dfrac{n!}{r!(n-r)!}', notes: 'Order matters for P; order doesn\'t matter for C.', tags: ['permutation', 'combination', 'counting'] },

  // Unit 10: Limits
  { unit: 'Unit 10', name: 'Limit Definition (Informal)', formula: '\\lim_{x \\to c} f(x) = L', notes: 'f(x) approaches L as x approaches c from both sides.', tags: ['limit', 'definition'] },
  { unit: 'Unit 10', name: 'Limit Laws', formula: '\\lim[f \\pm g] = \\lim f \\pm \\lim g, \\quad \\lim[f \\cdot g] = \\lim f \\cdot \\lim g', notes: 'Provided both individual limits exist.', tags: ['limit', 'laws', 'properties'] },
  { unit: 'Unit 10', name: 'Continuity Definition', formula: 'f \\text{ continuous at } c \\iff \\lim_{x \\to c} f(x) = f(c)', notes: 'f(c) exists, limit exists, and they are equal.', tags: ['continuity', 'definition'] },
  { unit: 'Unit 10', name: 'Derivative (Limit Definition)', formula: "f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}", notes: 'The slope of the tangent line at x.', tags: ['derivative', 'limit', 'tangent'] },

  // Unit 11: Matrices
  { unit: 'Unit 11', name: '2×2 Determinant', formula: '\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc', notes: null, tags: ['determinant', 'matrix'] },
  { unit: 'Unit 11', name: '2×2 Inverse', formula: 'A^{-1} = \\dfrac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}', notes: 'Exists only when det ≠ 0.', tags: ['inverse', 'matrix'] },
  { unit: 'Unit 11', name: 'Cramer\'s Rule (2×2)', formula: 'x = \\dfrac{\\det(A_x)}{\\det(A)}, \\quad y = \\dfrac{\\det(A_y)}{\\det(A)}', notes: 'Replace columns of A with the constants vector.', tags: ['cramer', 'system', 'determinant'] },
  { unit: 'Unit 11', name: 'Matrix Multiplication', formula: '(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}', notes: 'Number of columns of A must equal number of rows of B. AB ≠ BA in general.', tags: ['matrix', 'multiplication'] },
];
