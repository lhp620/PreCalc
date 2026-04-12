// ============================================================
// PRE-CALCULUS CURRICULUM DATA
// Complete data for all 11 units and 67 knowledge points
// ============================================================

export const UNITS = [
  {
    id: 1,
    title: "Functions & Their Properties",
    description: "Master function notation, transformations, inverses, and composition — the foundation of all Pre-Calculus.",
    icon: "f(x)",
    lessons: [
      { id: "1.1", title: "Function Notation & Evaluation", desc: "Defining functions, evaluating, piecewise functions", file: "1.1-function-notation" },
      { id: "1.2", title: "Domain & Range", desc: "Algebraic & graphical approaches, interval notation", file: "1.2-domain-range" },
      { id: "1.3", title: "Transformations of Functions", desc: "Shifts, stretches, reflections, combining transformations", file: "1.3-transformations" },
      { id: "1.4", title: "Inverse Functions", desc: "Finding inverses, one-to-one, horizontal line test", file: "1.4-inverse-functions" },
      { id: "1.5", title: "Composition of Functions", desc: "(f ∘ g)(x), decomposing composite functions", file: "1.5-composition" },
      { id: "1.6", title: "Even, Odd & Symmetry", desc: "Algebraic tests, graphical symmetry", file: "1.6-even-odd" },
    ]
  },
  {
    id: 2,
    title: "Polynomial & Rational Functions",
    description: "Analyze higher-degree polynomials and rational functions: zeros, asymptotes, end behavior, and inequalities.",
    icon: "xⁿ",
    lessons: [
      { id: "2.1", title: "Power Functions & End Behavior", desc: "Leading term analysis, end behavior patterns", file: "2.1-power-functions" },
      { id: "2.2", title: "Zeros of Polynomials", desc: "Multiplicity, Rational Root Theorem, Descartes' Rule", file: "2.2-zeros" },
      { id: "2.3", title: "Graphing Polynomial Functions", desc: "Turning points, sketching from factored form", file: "2.3-graphing-polynomials" },
      { id: "2.4", title: "Polynomial Division & Partial Fractions", desc: "Long division, synthetic division, decomposition", file: "2.4-division" },
      { id: "2.5", title: "Rational Functions & Asymptotes", desc: "Vertical, horizontal, slant asymptotes, holes", file: "2.5-rational-asymptotes" },
      { id: "2.6", title: "Graphing Rational Functions", desc: "Sign analysis, behavior near asymptotes", file: "2.6-graphing-rational" },
      { id: "2.7", title: "Polynomial & Rational Inequalities", desc: "Sign charts, test intervals", file: "2.7-inequalities" },
    ]
  },
  {
    id: 3,
    title: "Exponential & Logarithmic Functions",
    description: "Deep dive into exponential growth/decay, logarithmic properties, and real-world modeling with e and ln.",
    icon: "eˣ",
    lessons: [
      { id: "3.1", title: "Exponential Functions & Models", desc: "Growth, decay, transformations, the number e", file: "3.1-exponential" },
      { id: "3.2", title: "Logarithmic Functions", desc: "Definition, graphs, common & natural logs", file: "3.2-logarithmic" },
      { id: "3.3", title: "Properties of Logarithms", desc: "Product, quotient, power rules, change of base", file: "3.3-log-properties" },
      { id: "3.4", title: "Solving Exponential Equations", desc: "Using logarithms, extraneous solutions", file: "3.4-solving-exponential" },
      { id: "3.5", title: "Solving Logarithmic Equations", desc: "Converting forms, domain restrictions", file: "3.5-solving-logarithmic" },
      { id: "3.6", title: "Modeling with Exp & Log", desc: "Compound interest, half-life, logistic growth", file: "3.6-modeling" },
    ]
  },
  {
    id: 4,
    title: "Trigonometric Functions",
    description: "Build mastery of trig functions from the unit circle through graphing, inverses, and real-world applications.",
    icon: "sin",
    lessons: [
      { id: "4.1", title: "Angles & Radian Measure", desc: "Degree-radian conversion, arc length, sector area", file: "4.1-angles-radians" },
      { id: "4.2", title: "The Unit Circle", desc: "Coordinates, reference angles, special angles", file: "4.2-unit-circle" },
      { id: "4.3", title: "Sine & Cosine Functions", desc: "Graphs, amplitude, period, phase shift", file: "4.3-sine-cosine" },
      { id: "4.4", title: "Other Trig Functions", desc: "Tangent, cotangent, secant, cosecant graphs", file: "4.4-other-trig" },
      { id: "4.5", title: "Inverse Trigonometric Functions", desc: "arcsin, arccos, arctan, restricted domains", file: "4.5-inverse-trig" },
      { id: "4.6", title: "Transformations of Trig Graphs", desc: "Combined transformations, sinusoidal modeling", file: "4.6-trig-transformations" },
      { id: "4.7", title: "Applications of Trigonometry", desc: "Harmonic motion, periodic phenomena", file: "4.7-trig-applications" },
    ]
  },
  {
    id: 5,
    title: "Analytic Trigonometry",
    description: "Master trig identities, sum/difference formulas, double/half-angle formulas, and equation solving.",
    icon: "≡",
    lessons: [
      { id: "5.1", title: "Fundamental Identities", desc: "Pythagorean, reciprocal, quotient identities", file: "5.1-fundamental-identities" },
      { id: "5.2", title: "Proving Trigonometric Identities", desc: "Strategies and techniques for proofs", file: "5.2-proving-identities" },
      { id: "5.3", title: "Sum & Difference Formulas", desc: "sin(A±B), cos(A±B), tan(A±B)", file: "5.3-sum-difference" },
      { id: "5.4", title: "Double-Angle & Half-Angle Formulas", desc: "Deriving and applying key formulas", file: "5.4-double-half-angle" },
      { id: "5.5", title: "Product-to-Sum & Sum-to-Product", desc: "Converting between product and sum forms", file: "5.5-product-sum" },
      { id: "5.6", title: "Solving Trigonometric Equations", desc: "General solutions, multiple-angle equations", file: "5.6-solving-trig-equations" },
    ]
  },
  {
    id: 6,
    title: "Vectors",
    description: "Learn vector operations, dot products, projections, and real-world applications in physics and navigation.",
    icon: "→",
    lessons: [
      { id: "6.1", title: "Introduction to Vectors", desc: "Notation, magnitude, direction", file: "6.1-intro-vectors" },
      { id: "6.2", title: "Vector Operations", desc: "Addition, subtraction, scalar multiplication", file: "6.2-vector-operations" },
      { id: "6.3", title: "Unit Vectors & Components", desc: "i/j notation, resolving into components", file: "6.3-unit-vectors" },
      { id: "6.4", title: "The Dot Product", desc: "Definition, angle between vectors, projections", file: "6.4-dot-product" },
      { id: "6.5", title: "Applications of Vectors", desc: "Force, velocity, work, navigation", file: "6.5-vector-applications" },
      { id: "6.6", title: "Vectors in 3D (Intro)", desc: "3D coordinates, cross product basics", file: "6.6-vectors-3d" },
    ]
  },
  {
    id: 7,
    title: "Polar & Parametric Equations",
    description: "Explore alternative coordinate systems: polar graphing, parametric curves, and conversions.",
    icon: "r,θ",
    lessons: [
      { id: "7.1", title: "Polar Coordinate System", desc: "Plotting points, multiple representations", file: "7.1-polar-coordinates" },
      { id: "7.2", title: "Converting Rectangular & Polar", desc: "Equations and coordinates conversion", file: "7.2-converting" },
      { id: "7.3", title: "Polar Graphs", desc: "Roses, cardioids, limaçons, lemniscates", file: "7.3-polar-graphs" },
      { id: "7.4", title: "Parametric Equations", desc: "Defining curves, eliminating the parameter", file: "7.4-parametric" },
      { id: "7.5", title: "Parametric Graphs & Motion", desc: "Particle motion, direction of travel", file: "7.5-parametric-graphs" },
      { id: "7.6", title: "Conic Sections in Polar Form", desc: "Eccentricity, focus-directrix equations", file: "7.6-conics-polar" },
    ]
  },
  {
    id: 8,
    title: "Conic Sections",
    description: "Study circles, ellipses, hyperbolas, and parabolas in standard form with geometric properties.",
    icon: "◯",
    lessons: [
      { id: "8.1", title: "Circles", desc: "Standard & general form, completing the square", file: "8.1-circles" },
      { id: "8.2", title: "Ellipses", desc: "Major/minor axes, foci, eccentricity", file: "8.2-ellipses" },
      { id: "8.3", title: "Hyperbolas", desc: "Transverse/conjugate axes, asymptotes", file: "8.3-hyperbolas" },
      { id: "8.4", title: "Parabolas (Conic Form)", desc: "Focus, directrix, axis of symmetry", file: "8.4-parabolas" },
      { id: "8.5", title: "Systems of Nonlinear Equations", desc: "Intersections of conics, substitution method", file: "8.5-nonlinear-systems" },
    ]
  },
  {
    id: 9,
    title: "Sequences, Series & Induction",
    description: "Explore arithmetic and geometric patterns, the binomial theorem, mathematical induction, and counting.",
    icon: "Σ",
    lessons: [
      { id: "9.1", title: "Sequences & Notation", desc: "Explicit vs recursive, sigma notation", file: "9.1-sequences" },
      { id: "9.2", title: "Arithmetic Sequences & Series", desc: "nth term, partial sums", file: "9.2-arithmetic" },
      { id: "9.3", title: "Geometric Sequences & Series", desc: "nth term, partial & infinite sums", file: "9.3-geometric" },
      { id: "9.4", title: "The Binomial Theorem", desc: "Pascal's triangle, binomial expansion", file: "9.4-binomial" },
      { id: "9.5", title: "Mathematical Induction", desc: "Principle of induction, proof technique", file: "9.5-induction" },
      { id: "9.6", title: "Counting & Probability", desc: "Permutations, combinations, basic probability", file: "9.6-counting" },
    ]
  },
  {
    id: 10,
    title: "Limits & Introduction to Calculus",
    description: "Preview calculus: understand limits, continuity, rates of change, and the derivative concept.",
    icon: "lim",
    lessons: [
      { id: "10.1", title: "Intuitive Concept of Limits", desc: "Tables, graphs, approaching a value", file: "10.1-limits-intro" },
      { id: "10.2", title: "Evaluating Limits Algebraically", desc: "Direct substitution, factoring, rationalization", file: "10.2-limits-algebraic" },
      { id: "10.3", title: "One-Sided Limits & Limits at Infinity", desc: "Left/right limits, horizontal asymptotes", file: "10.3-one-sided-limits" },
      { id: "10.4", title: "Continuity", desc: "Definition, types of discontinuity, IVT", file: "10.4-continuity" },
      { id: "10.5", title: "Rates of Change", desc: "Average vs instantaneous, secant vs tangent", file: "10.5-rates-of-change" },
      { id: "10.6", title: "Preview of the Derivative", desc: "Limit definition, tangent line slope", file: "10.6-derivative-preview" },
    ]
  },
  {
    id: 11,
    title: "Matrices & Systems",
    description: "Use matrices to solve systems of equations, explore determinants, inverses, and linear programming.",
    icon: "[ ]",
    lessons: [
      { id: "11.1", title: "Matrix Operations", desc: "Addition, scalar multiplication, matrix multiplication", file: "11.1-matrix-operations" },
      { id: "11.2", title: "Determinants & Inverses", desc: "2×2 and 3×3 determinants, finding inverses", file: "11.2-determinants" },
      { id: "11.3", title: "Solving Systems with Matrices", desc: "Gaussian elimination, row echelon form", file: "11.3-systems-matrices" },
      { id: "11.4", title: "Cramer's Rule", desc: "Solving systems with determinants", file: "11.4-cramers-rule" },
      { id: "11.5", title: "Linear Programming", desc: "Constraints, feasible regions, optimization", file: "11.5-linear-programming" },
      { id: "11.6", title: "Nonlinear Systems & Modeling", desc: "Mixed systems, real-world applications", file: "11.6-nonlinear-systems" },
    ]
  },
];

export const TOTAL_LESSONS = UNITS.reduce((sum, u) => sum + u.lessons.length, 0);
