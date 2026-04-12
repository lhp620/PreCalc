// components/header.js

export function renderHeader() {
  return `
    <div class="header-inner">
      <a href="#home" class="logo">
        <div class="logo-icon">P</div>
        Pre-Calculus
      </a>
      <nav class="header-nav" id="header-nav" role="navigation" aria-label="Main navigation">
        <a href="#home"     class="nav-link active" data-nav="home">Units</a>
        <a href="#formulas" class="nav-link"         data-nav="formulas">Formulas</a>
        <a href="#graph"    class="nav-link"         data-nav="graph">Grapher</a>
      </nav>
      <div class="header-right">
        <div class="nav-progress" title="Overall Progress" aria-label="Overall progress">
          <svg class="nav-progress-ring" viewBox="0 0 20 20" aria-hidden="true">
            <circle cx="10" cy="10" r="8" fill="none" stroke="rgba(124,58,237,0.25)" stroke-width="2.5"/>
            <circle id="header-progress-ring-fill" cx="10" cy="10" r="8" fill="none"
                    stroke="var(--color-violet-light)" stroke-width="2.5"
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)"
                    style="transition: stroke-dashoffset 0.6s ease"/>
          </svg>
          <span id="header-progress-text" aria-label="Lessons mastered">0/67</span>
        </div>
        <button class="mobile-menu-btn" id="mobile-menu-btn"
                aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="header-nav">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  `;
}
