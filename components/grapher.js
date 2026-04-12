// components/grapher.js — Canvas-based interactive function plotter

const COLORS = ['#7c3aed', '#3b82f6', '#10b981', '#f97316', '#f43f5e', '#06b6d4', '#ec4899'];

/**
 * Safely evaluate a math expression at x.
 * Supports: +, -, *, /, ^, sin, cos, tan, sqrt, abs, log, ln, exp, pi, e
 */
function evalAt(expr, x) {
  const code = expr.trim()
    .replace(/\^/g,              '**')
    .replace(/(\d)(x)/g,         '$1*$2')
    .replace(/(x)(\d)/g,         '$1*$2')
    .replace(/(\d)\(/g,           '$1*(')
    .replace(/\bsin\b/g,          'Math.sin')
    .replace(/\bcos\b/g,          'Math.cos')
    .replace(/\btan\b/g,          'Math.tan')
    .replace(/\bsqrt\b/g,         'Math.sqrt')
    .replace(/\babs\b/g,          'Math.abs')
    .replace(/\bln\b/g,           'Math.log')
    .replace(/\blog\b/g,          'Math.log10')
    .replace(/\bexp\b/g,          'Math.exp')
    .replace(/\bpi\b/gi,          'Math.PI')
    .replace(/(?<![a-zA-Z])e(?![a-zA-Z])/g, 'Math.E');
  try {
    // eslint-disable-next-line no-new-func
    const y = new Function('x', '"use strict"; return (' + code + ');')(x);
    return typeof y === 'number' && isFinite(y) ? y : NaN;
  } catch {
    return NaN;
  }
}

function niceStep(rawRange, targetDivisions) {
  const raw  = rawRange / targetDivisions;
  const pow  = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / pow;
  if (norm < 1.5) return pow;
  if (norm < 3.5) return 2 * pow;
  if (norm < 7.5) return 5 * pow;
  return 10 * pow;
}

function fmt(n) {
  if (n === 0) return '0';
  const abs = Math.abs(n);
  if (abs >= 100) return n.toFixed(0);
  if (abs >= 10)  return parseFloat(n.toPrecision(3)).toString();
  if (abs >= 1)   return parseFloat(n.toPrecision(3)).toString();
  return parseFloat(n.toPrecision(2)).toString();
}

export function renderGrapher(container) {
  let colorCursor = 0;
  function nextColor() { return COLORS[colorCursor++ % COLORS.length]; }

  container.innerHTML = `
    <div class="grapher-wrap">
      <div class="grapher-sidebar">
        <p class="grapher-title">Functions</p>
        <div class="grapher-fn-list" id="grapher-fn-list"></div>
        <button class="btn btn-secondary btn-sm" id="add-fn-btn">+ Add Function</button>
        <div class="grapher-presets">
          <p class="grapher-presets-label">Quick examples:</p>
          ${['x^2', 'x^3 - x', 'sin(x)', 'cos(x)', 'sqrt(x)', '2^x', 'log(x)', '1/x', 'abs(x)', 'x^2 - 4'].map(fn =>
            `<button class="grapher-preset-btn" data-fn="${fn}">${fn}</button>`
          ).join('')}
        </div>
      </div>
      <div class="grapher-canvas-area">
        <canvas id="graph-canvas"></canvas>
        <div class="grapher-zoom-controls">
          <button class="grapher-ctrl-btn" id="zoom-in-btn"  title="Zoom in">+</button>
          <button class="grapher-ctrl-btn" id="zoom-out-btn" title="Zoom out">−</button>
          <button class="grapher-ctrl-btn" id="reset-btn"    title="Reset view">⊙</button>
        </div>
        <div id="coord-display" class="coord-display" aria-live="off"></div>
      </div>
    </div>
  `;

  const canvas  = document.getElementById('graph-canvas');
  const ctx     = canvas.getContext('2d');
  const fnList  = document.getElementById('grapher-fn-list');

  // ---- State ----
  let view = { xMin: -10, xMax: 10, yMin: -8, yMax: 8 };
  let fns  = [];   // { id, expr, color, error }
  let drag = null; // { startX, startY, viewAtStart }
  let pinch = null;

  // ---- Function management ----
  function addFn(expr) {
    fns.push({ id: Date.now() + Math.random(), expr: expr || '', color: nextColor(), error: false });
    rebuildFnList();
    draw();
  }

  function removeFn(id) {
    fns = fns.filter(f => f.id !== id);
    rebuildFnList();
    draw();
  }

  function setFnExpr(id, expr) {
    const f = fns.find(f => f.id === id);
    if (f) { f.expr = expr; f.error = false; }
    draw();
    updateErrorFlags();
  }

  function updateErrorFlags() {
    fnList.querySelectorAll('.grapher-fn-row').forEach(row => {
      const id  = Number(row.dataset.id);
      const f   = fns.find(f => f.id === id);
      const err = row.querySelector('.grapher-fn-error');
      if (err && f) err.style.display = f.error ? 'inline' : 'none';
    });
  }

  function rebuildFnList() {
    fnList.innerHTML = fns.map(f => `
      <div class="grapher-fn-row" data-id="${f.id}">
        <span class="grapher-fn-swatch" style="background:${f.color}" aria-hidden="true"></span>
        <span class="grapher-fn-prefix">y =</span>
        <input class="grapher-fn-input" type="text" value="${escHtml(f.expr)}"
               placeholder="e.g. x^2" spellcheck="false" autocomplete="off"
               aria-label="Function expression">
        <button class="grapher-fn-remove" aria-label="Remove this function">×</button>
        <span class="grapher-fn-error" style="display:none">invalid</span>
      </div>
    `).join('');

    fnList.querySelectorAll('.grapher-fn-input').forEach(input => {
      const id = Number(input.closest('.grapher-fn-row').dataset.id);
      input.addEventListener('input', () => setFnExpr(id, input.value));
    });
    fnList.querySelectorAll('.grapher-fn-remove').forEach(btn => {
      const id = Number(btn.closest('.grapher-fn-row').dataset.id);
      btn.addEventListener('click', () => removeFn(id));
    });
  }

  function escHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  }

  // ---- Resize ----
  function resize() {
    const area   = canvas.parentElement;
    canvas.width  = area.clientWidth;
    canvas.height = area.clientHeight;
    draw();
  }

  const ro = new ResizeObserver(resize);
  ro.observe(canvas.parentElement);

  // ---- Coordinate transforms ----
  function toCanvas(wx, wy) {
    return {
      cx: (wx - view.xMin) / (view.xMax - view.xMin) * canvas.width,
      cy: (1 - (wy - view.yMin) / (view.yMax - view.yMin)) * canvas.height,
    };
  }

  function toWorld(cx, cy) {
    return {
      wx: view.xMin + (cx / canvas.width)  * (view.xMax - view.xMin),
      wy: view.yMin + (1 - cy / canvas.height) * (view.yMax - view.yMin),
    };
  }

  // ---- Drawing ----
  function draw() {
    if (!canvas.width || !canvas.height) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    drawAxes();
    fns.forEach(f => { if (f.expr.trim()) drawFn(f); });
  }

  function drawGrid() {
    const xStep = niceStep(view.xMax - view.xMin, 10);
    const yStep = niceStep(view.yMax - view.yMin, 8);
    ctx.strokeStyle = 'rgba(148,163,184,0.09)';
    ctx.lineWidth   = 1;

    const xStart = Math.ceil(view.xMin / xStep) * xStep;
    for (let wx = xStart; wx <= view.xMax + xStep * 0.01; wx += xStep) {
      const { cx } = toCanvas(wx, 0);
      ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, canvas.height); ctx.stroke();
    }
    const yStart = Math.ceil(view.yMin / yStep) * yStep;
    for (let wy = yStart; wy <= view.yMax + yStep * 0.01; wy += yStep) {
      const { cy } = toCanvas(0, wy);
      ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(canvas.width, cy); ctx.stroke();
    }

    // Axis number labels
    ctx.fillStyle = 'rgba(148,163,184,0.55)';
    ctx.font      = '11px system-ui,sans-serif';
    const origin  = toCanvas(0, 0);
    const axisLabelY = Math.min(Math.max(origin.cy + 15, 14), canvas.height - 4);
    const axisLabelX = Math.min(Math.max(origin.cx - 6,  4), canvas.width  - 4);

    ctx.textAlign = 'center';
    for (let wx = xStart; wx <= view.xMax + xStep * 0.01; wx += xStep) {
      if (Math.abs(wx) < xStep * 0.01) continue;
      const { cx } = toCanvas(wx, 0);
      if (cx < 4 || cx > canvas.width - 4) continue;
      ctx.fillText(fmt(wx), cx, axisLabelY);
    }

    ctx.textAlign = 'right';
    for (let wy = yStart; wy <= view.yMax + yStep * 0.01; wy += yStep) {
      if (Math.abs(wy) < yStep * 0.01) continue;
      const { cy } = toCanvas(0, wy);
      if (cy < 10 || cy > canvas.height - 4) continue;
      ctx.fillText(fmt(wy), axisLabelX, cy + 4);
    }
  }

  function drawAxes() {
    ctx.strokeStyle = 'rgba(148,163,184,0.45)';
    ctx.lineWidth   = 1.5;
    const { cx: ox, cy: oy } = toCanvas(0, 0);

    if (view.yMin <= 0 && view.yMax >= 0) {
      ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(canvas.width, oy); ctx.stroke();
    }
    if (view.xMin <= 0 && view.xMax >= 0) {
      ctx.beginPath(); ctx.moveTo(ox, 0); ctx.lineTo(ox, canvas.height); ctx.stroke();
    }

    // Axis labels
    ctx.fillStyle   = 'rgba(148,163,184,0.6)';
    ctx.font        = 'italic 13px system-ui,sans-serif';
    const xLabelCx  = Math.min(Math.max(ox, 4), canvas.width - 16);
    const yLabelCy  = Math.min(Math.max(oy, 4), canvas.height - 16);
    ctx.textAlign   = 'left';
    ctx.fillText('x', canvas.width - 12, yLabelCy + 4);
    ctx.textAlign   = 'center';
    ctx.fillText('y', xLabelCx, 14);
  }

  function drawFn(f) {
    const steps = Math.min(canvas.width * 2, 2000);
    const dx    = (view.xMax - view.xMin) / steps;
    const range = view.yMax - view.yMin;

    ctx.strokeStyle = f.color;
    ctx.lineWidth   = 2.5;
    ctx.lineJoin    = 'round';
    ctx.lineCap     = 'round';
    ctx.beginPath();

    let penDown = false;
    let prevY   = NaN;
    let anyValid = false;

    for (let i = 0; i <= steps; i++) {
      const wx  = view.xMin + i * dx;
      const wy  = evalAt(f.expr, wx);
      const { cx, cy } = toCanvas(wx, wy);

      if (isNaN(wy)) {
        penDown = false; prevY = NaN;
        continue;
      }

      anyValid = true;

      // Discontinuity: large vertical jump → lift pen
      if (penDown && !isNaN(prevY) && Math.abs(wy - prevY) > range * 4) {
        penDown = false;
      }

      if (!penDown) { ctx.moveTo(cx, cy); penDown = true; }
      else          { ctx.lineTo(cx, cy); }

      prevY = wy;
    }
    ctx.stroke();

    f.error = !anyValid && f.expr.trim().length > 0;
    updateErrorFlags();
  }

  // ---- Pan & Zoom ----
  canvas.addEventListener('mousedown', e => {
    drag = { startX: e.clientX, startY: e.clientY, viewAtStart: { ...view } };
    canvas.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (drag) {
      const dx = e.clientX - drag.startX;
      const dy = e.clientY - drag.startY;
      const { xMin, xMax, yMin, yMax } = drag.viewAtStart;
      const wdx = -dx / canvas.width  * (xMax - xMin);
      const wdy =  dy / canvas.height * (yMax - yMin);
      view = { xMin: xMin + wdx, xMax: xMax + wdx, yMin: yMin + wdy, yMax: yMax + wdy };
      draw();
    }

    if (mx >= 0 && mx <= canvas.width && my >= 0 && my <= canvas.height) {
      const { wx, wy } = toWorld(mx, my);
      const el = document.getElementById('coord-display');
      if (el) el.textContent = `(${fmt(wx)}, ${fmt(wy)})`;
    }
  });

  window.addEventListener('mouseup', () => {
    drag = null;
    canvas.style.cursor = 'crosshair';
  });

  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const { wx, wy } = toWorld(e.clientX - rect.left, e.clientY - rect.top);
    const factor = e.deltaY > 0 ? 1.15 : 1 / 1.15;
    view = {
      xMin: wx + (view.xMin - wx) * factor,
      xMax: wx + (view.xMax - wx) * factor,
      yMin: wy + (view.yMin - wy) * factor,
      yMax: wy + (view.yMax - wy) * factor,
    };
    draw();
  }, { passive: false });

  // Touch: pan & pinch-zoom
  canvas.addEventListener('touchstart', e => {
    e.preventDefault();
    if (e.touches.length === 1) {
      drag = { startX: e.touches[0].clientX, startY: e.touches[0].clientY, viewAtStart: { ...view } };
      pinch = null;
    } else if (e.touches.length === 2) {
      const rect = canvas.getBoundingClientRect();
      const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
      const my = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;
      pinch = {
        d0: Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY),
        pivot: toWorld(mx, my),
        viewAtStart: { ...view },
      };
      drag = null;
    }
  }, { passive: false });

  canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    if (drag && e.touches.length === 1) {
      const dx = e.touches[0].clientX - drag.startX;
      const dy = e.touches[0].clientY - drag.startY;
      const { xMin, xMax, yMin, yMax } = drag.viewAtStart;
      view = {
        xMin: xMin - dx / canvas.width  * (xMax - xMin),
        xMax: xMax - dx / canvas.width  * (xMax - xMin),
        yMin: yMin + dy / canvas.height * (yMax - yMin),
        yMax: yMax + dy / canvas.height * (yMax - yMin),
      };
      draw();
    } else if (pinch && e.touches.length === 2) {
      const d      = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      const factor = pinch.d0 / d;
      const { wx, wy } = pinch.pivot;
      const { xMin, xMax, yMin, yMax } = pinch.viewAtStart;
      view = {
        xMin: wx + (xMin - wx) * factor, xMax: wx + (xMax - wx) * factor,
        yMin: wy + (yMin - wy) * factor, yMax: wy + (yMax - wy) * factor,
      };
      draw();
    }
  }, { passive: false });

  canvas.addEventListener('touchend', () => { drag = null; pinch = null; });

  function zoomAround(factor) {
    const cx = (view.xMin + view.xMax) / 2;
    const cy = (view.yMin + view.yMax) / 2;
    view = {
      xMin: cx + (view.xMin - cx) * factor, xMax: cx + (view.xMax - cx) * factor,
      yMin: cy + (view.yMin - cy) * factor, yMax: cy + (view.yMax - cy) * factor,
    };
    draw();
  }

  document.getElementById('zoom-in-btn').addEventListener('click',  () => zoomAround(0.75));
  document.getElementById('zoom-out-btn').addEventListener('click', () => zoomAround(1.33));
  document.getElementById('reset-btn').addEventListener('click', () => {
    view = { xMin: -10, xMax: 10, yMin: -8, yMax: 8 };
    draw();
  });

  document.getElementById('add-fn-btn').addEventListener('click', () => addFn(''));

  container.querySelectorAll('.grapher-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const empty = fns.find(f => !f.expr.trim());
      if (empty) {
        empty.expr = btn.dataset.fn;
        rebuildFnList();
        draw();
      } else {
        addFn(btn.dataset.fn);
      }
    });
  });

  // Initialize with x^2
  addFn('x^2');
  resize();
}
