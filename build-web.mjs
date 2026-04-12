/**
 * build-web.mjs — Pure Node.js single-file bundler (no native binaries)
 *
 * Produces dist-web/index.html — one fully self-contained HTML file.
 * Run: node build-web.mjs
 */

import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT     = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR  = path.join(ROOT, 'dist-web');
const OUT_FILE = path.join(OUT_DIR, 'index.html');

const read  = (...parts) => fs.readFileSync(path.join(ROOT, ...parts), 'utf-8');
const readB = (...parts) => fs.readFileSync(path.join(ROOT, ...parts));

// ─── Strip ES module syntax from a source file ─────────────────────────────
function stripModule(src) {
  return src
    // Remove all: import { ... } from '...'  /  import X from '...'
    .replace(/^import\s+[\s\S]*?from\s+['"][^'"]+['"];?\s*$/gm, '')
    // Remove: export const / export let / export var / export function / export async function
    .replace(/^export\s+(async\s+)?(function|const|let|var)\s+/gm, '$1$2 ')
    // Remove bare: export { ... };
    .replace(/^export\s+\{[^}]*\};?\s*$/gm, '');
}

// ─── KaTeX — inline JS; patch CSS to use CDN font URLs ────────────────────
const KATEX_VER    = '0.16.45';
const KATEX_DIST   = path.join(ROOT, 'node_modules', 'katex', 'dist');
const KATEX_CDN    = `https://cdn.jsdelivr.net/npm/katex@${KATEX_VER}/dist`;

const katexCSS = read('node_modules', 'katex', 'dist', 'katex.min.css')
  // Rewrite relative font paths → CDN absolute URLs so fonts load when online
  .replace(/url\((?:\.\.\/)?fonts\//g, `url(${KATEX_CDN}/fonts/`)
  .replace(/url\("(?:\.\.\/)?fonts\//g, `url("${KATEX_CDN}/fonts/`);

const katexJS   = read('node_modules', 'katex', 'dist', 'katex.min.js');
const autoRender = read('node_modules', 'katex', 'dist', 'contrib', 'auto-render.min.js');

// ─── App source files ──────────────────────────────────────────────────────
const appCSS        = read('index.css');
const curriculumJS  = stripModule(read('data', 'curriculum.js'));
const formulasJS    = stripModule(read('data', 'formulas.js'));
const mathRendererJS = stripModule(read('components', 'math-renderer.js'));
const headerJS      = stripModule(read('components', 'header.js'));
const quizJS        = stripModule(read('components', 'quiz.js'));
const grapherJS     = stripModule(read('components', 'grapher.js'));

// ─── Lesson registry ──────────────────────────────────────────────────────
// Each unit file exports `const lessons = [...]`. Wrap each in a block scope
// to avoid `const` redeclaration conflicts, then store in __unitLessons.
const unitCount = 11;
const lessonRegistryParts = ['const __unitLessons = {};'];

for (let i = 1; i <= unitCount; i++) {
  const unitSrc = stripModule(read('data', 'lessons', `unit${i}.js`));
  lessonRegistryParts.push(`
{
${unitSrc.trim()}
  __unitLessons['./data/lessons/unit${i}.js'] = { lessons };
}`);
}

const lessonRegistryJS = lessonRegistryParts.join('\n');

// ─── app.js — transform dynamic imports ──────────────────────────────────
let appJS = stripModule(read('app.js'));

// 1. Replace lesson dynamic import:
//    await import(`./data/lessons/unit${unitId}.js`)
//    → (__unitLessons[`./data/lessons/unit${unitId}.js`] || { lessons: [] })
appJS = appJS.replace(
  /await import\(`\.\/data\/lessons\/unit\$\{unitId\}\.js`\)/g,
  "(__unitLessons[`./data/lessons/unit${unitId}.js`] || { lessons: [] })"
);

// 2. Replace formulas dynamic import block:
//    const mod = await import('./data/formulas.js');  formulas = mod.FORMULAS || [];
//    → formulas = FORMULAS || [];
appJS = appJS.replace(
  /const mod = await import\('\.\/data\/formulas\.js'\);\s*\n\s*formulas = mod\.FORMULAS \|\| \[\];/g,
  'formulas = FORMULAS || [];'
);

// 3. Replace grapher dynamic import:
//    const { renderGrapher } = await import('./components/grapher.js');
//    → (renderGrapher is already in scope)
appJS = appJS.replace(
  /const \{ renderGrapher \} = await import\('\.\/components\/grapher\.js'\);\s*\n/g,
  ''
);

// ─── Assemble the full bundle ──────────────────────────────────────────────
const bundle = `(async () => {

// ── data/curriculum.js ──────────────────────────────────────────────────
${curriculumJS.trim()}

// ── components/math-renderer.js ─────────────────────────────────────────
${mathRendererJS.trim()}

// ── components/header.js ────────────────────────────────────────────────
${headerJS.trim()}

// ── components/quiz.js ──────────────────────────────────────────────────
${quizJS.trim()}

// ── components/grapher.js ───────────────────────────────────────────────
${grapherJS.trim()}

// ── data/formulas.js ────────────────────────────────────────────────────
${formulasJS.trim()}

// ── Lesson registry (all 11 units) ──────────────────────────────────────
${lessonRegistryJS}

// ── app.js ──────────────────────────────────────────────────────────────
${appJS.trim()}

})();`;

// ─── Build index.html ─────────────────────────────────────────────────────
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pre-Calculus — Interactive Learning</title>
  <meta name="description" content="Master Pre-Calculus with 11 units and 67 interactive lessons.">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📊</text></svg>">
  <style>
/* ── KaTeX ── */
${katexCSS}
  </style>
  <style>
/* ── App styles ── */
${appCSS}
  </style>
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <div id="app">
    <header id="site-header" class="site-header" role="banner"></header>
    <main id="main-content" role="main" aria-label="Page content"></main>
    <footer class="site-footer">
      <div class="container">
        <p>Pre-Calculus Interactive Learning &nbsp;·&nbsp; 11 Units &nbsp;·&nbsp; 67 Lessons &nbsp;·&nbsp; Progress saved in your browser</p>
      </div>
    </footer>
  </div>

  <!-- KaTeX runtime (inlined) -->
  <script>${katexJS}</script>
  <script>${autoRender}; window.__katexLoaded = true; if (window.__katexReady) window.__katexReady();</script>

  <!-- App bundle (inlined) -->
  <script>
${bundle}
  </script>
</body>
</html>`;

// ─── Write output ──────────────────────────────────────────────────────────
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_FILE, html, 'utf-8');

const sizeKB = Math.round(fs.statSync(OUT_FILE).size / 1024);
console.log(`✓ Built: dist-web/index.html  (${sizeKB} KB)`);
