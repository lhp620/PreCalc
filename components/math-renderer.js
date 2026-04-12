// components/math-renderer.js
// Wraps KaTeX auto-render to handle async CDN loading

let _resolvers = [];
let _ready = false;

window.__katexReady = function () {
  _ready = true;
  _resolvers.forEach(fn => fn());
  _resolvers = [];
};

// If KaTeX already loaded before this module ran
if (window.__katexLoaded) {
  _ready = true;
}

function waitForKaTeX() {
  if (_ready) return Promise.resolve();
  return new Promise(resolve => _resolvers.push(resolve));
}

export async function renderMath(container = document.body) {
  await waitForKaTeX();
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(container, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true },
      ],
      throwOnError: false,
    });
  }
}
