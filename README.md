# Pre-Calculus Interactive Learning

An interactive, self-paced Pre-Calculus learning site with 11 units and 67 lessons. Built with vanilla JavaScript, KaTeX for math rendering, and no external dependencies beyond KaTeX.

**Live site:** open `dist-web/index.html` in any browser — no server required.

---

## Features

- **67 lessons** across 11 units covering the full Pre-Calculus curriculum
- **Three-tab lesson format:** Learn → Examples → Practice
- **KaTeX math rendering** for all formulas and equations
- **Auto-graded practice problems** — multiple choice and fill-in-the-blank with instant feedback
- **Progress tracking** saved in browser localStorage (streak, mastery status per lesson)
- **Formula reference page** with search across ~60 formulas
- **Function grapher** — interactive canvas-based plotter
- **Single-file build** — the entire site bundles into one self-contained `dist-web/index.html`

---

## Curriculum

| Unit | Title | Lessons |
|------|-------|---------|
| 1 | Functions & Their Properties | 6 |
| 2 | Polynomial & Rational Functions | 7 |
| 3 | Exponential & Logarithmic Functions | 6 |
| 4 | Trigonometric Functions | 7 |
| 5 | Analytic Trigonometry | 6 |
| 6 | Vectors | 6 |
| 7 | Polar & Parametric Equations | 6 |
| 8 | Conic Sections | 5 |
| 9 | Sequences, Series & Induction | 6 |
| 10 | Limits & Introduction to Calculus | 6 |
| 11 | Matrices & Systems | 6 |

---

## Project Structure

```
PreCalc/
├── app.js                  # Main SPA — routing, progress, rendering
├── index.html              # HTML shell (dev)
├── index.css               # All styles
├── build-web.mjs           # Build script → dist-web/index.html
├── components/
│   ├── header.js           # Site header & progress ring
│   ├── quiz.js             # Practice quiz engine
│   ├── math-renderer.js    # KaTeX auto-render wrapper
│   └── grapher.js          # Canvas function grapher
├── data/
│   ├── curriculum.js       # Unit & lesson registry
│   ├── formulas.js         # Formula reference data
│   └── lessons/
│       ├── unit1.js        # Lesson content (learn, examples, practice)
│       ├── unit2.js
│       └── ...             # unit3.js through unit11.js
└── dist-web/
    └── index.html          # Bundled single-file output
```

---

## Getting Started

### Open directly
```
dist-web/index.html   ← open this in any browser
```

### Build from source
```bash
npm install
node build-web.mjs
# Output: dist-web/index.html
```

No bundler, no framework. The build script inlines KaTeX, all CSS, and all lesson data into a single portable HTML file (~785 KB).

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Language | Vanilla JavaScript (ES modules) |
| Math | [KaTeX](https://katex.org/) 0.16 |
| Routing | Hash-based SPA (`#home`, `#unit/1`, `#lesson/1.1`) |
| Storage | `localStorage` (no backend needed) |
| Build | Custom Node.js bundler (`build-web.mjs`) |
| Styling | Plain CSS with CSS custom properties |
