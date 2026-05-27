export default function CaseStudy() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  .cs-root {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: var(--text);
    background: var(--bg);
    width: 100%;
  }

  /* ── HERO ── */
  .cs-hero {
    display: flex;
    min-height: 580px;
  }
  .cs-hero-visual {
    flex: 1;
    background: var(--violet-lt);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }
  .cs-hero-mockup {
    width: 78%;
    max-width: 760px;
    aspect-ratio: 16/10;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 24px 80px rgba(23,64,68,0.18);
    position: relative;
    overflow: hidden;
  }
  .cs-hero-mockup-bar {
    height: 36px;
    background: #f0f0f0;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 14px;
  }
  .cs-hero-mockup-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ddd;
  }
  .cs-hero-mockup-dot:nth-child(1) { background: #ff6b6b; }
  .cs-hero-mockup-dot:nth-child(2) { background: #ffc764; }
  .cs-hero-mockup-dot:nth-child(3) { background: #51d88a; }
  .cs-hero-mockup-url {
    flex: 1;
    height: 20px;
    background: #e8e8e8;
    border-radius: 4px;
    margin: 0 10px;
  }
  .cs-hero-mockup-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .cs-hero-mockup-row {
    height: 12px;
    border-radius: 4px;
    background: var(--border);
  }
  .cs-hero-mockup-row.short { width: 55%; }
  .cs-hero-mockup-row.med { width: 78%; }
  .cs-hero-mockup-accent {
    height: 40px;
    border-radius: 6px;
    background: var(--violet-md);
    width: 160px;
    margin-top: 6px;
  }
  .cs-hero-mockup-cards {
    display: flex;
    gap: 10px;
    margin-top: 8px;
  }
  .cs-hero-mockup-card {
    flex: 1;
    height: 80px;
    border-radius: 8px;
    background: var(--violet-lt);
    border: 1px solid var(--border);
  }

  .cs-hero-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 64px 72px;
    gap: 28px;
  }
  .cs-hero-title {
    font-size: 62px;
    font-weight: 800;
    line-height: 1.06;
    letter-spacing: -1.5px;
    color: var(--text);
    margin: 0;
  }
  .cs-hero-desc {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.65;
    color: var(--text);
    max-width: 480px;
    margin: 0;
  }
  .cs-hero-meta {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    color: var(--muted);
    font-weight: 400;
  }
  .cs-hero-meta svg {
    width: 18px;
    height: 18px;
    opacity: 0.7;
    flex-shrink: 0;
  }
  .cs-hero-meta-dot {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: var(--muted);
    flex-shrink: 0;
  }
  .cs-hero-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px 36px;
  }
  .cs-hero-detail {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .cs-hero-detail-icon {
    width: 38px;
    height: 38px;
    border-radius: 8px;
    background: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .cs-hero-detail-icon svg {
    width: 18px;
    height: 18px;
    opacity: 0.7;
    color: var(--violet);
  }
  .cs-detail-label {
    font-size: 13px;
    font-weight: 600;
    color: var(--muted);
    line-height: 1;
    letter-spacing: 0.01em;
  }
  .cs-detail-value {
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
    line-height: 1.3;
    margin-top: 4px;
  }

  /* ── STATS ── */
  .cs-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 1px solid var(--border);
    border-top: none;
  }
  .cs-stat {
    padding: 44px 48px;
    background: #fff;
    position: relative;
  }
  .cs-stat + .cs-stat {
    border-left: 1px solid var(--border);
  }
  .cs-stat-value {
    font-size: 28px;
    font-weight: 700;
    color: var(--text);
    line-height: 1.4;
    margin-bottom: 24px;
  }
  .cs-stat-label {
    font-size: 17px;
    font-weight: 700;
    color: var(--text);
    line-height: 1.4;
  }

  /* ── MAIN LAYOUT ── */
  .cs-layout {
    display: flex;
    align-items: flex-start;
    gap: 56px;
    padding: 0 0 80px;
  }

  /* ── SIDEBAR ── */
  .cs-sidebar {
    width: 220px;
    flex-shrink: 0;
    position: sticky;
    top: 0;
    padding: 48px 0 48px 48px;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  .cs-nav-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .cs-nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .cs-nav-btn {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0;
    width: 100%;
    text-align: left;
  }
  .cs-nav-bar {
    width: 4px;
    height: 22px;
    border-radius: 3px;
    background: var(--border);
    flex-shrink: 0;
    transition: background 0.2s;
  }
  .cs-nav-btn:hover .cs-nav-bar {
    background: var(--violet-md);
  }
  .cs-nav-text {
    font-size: 14px;
    font-weight: 600;
    color: var(--text);
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  .cs-nav-btn:hover .cs-nav-text {
    color: var(--violet-md);
  }
  .cs-back-link {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 700;
    color: var(--muted);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .cs-back-link:hover { color: var(--text); }
  .cs-back-link svg {
    width: 14px;
    height: 12px;
    flex-shrink: 0;
  }

  /* ── CONTENT ── */
  .cs-content {
    flex: 1;
    min-width: 0;
    padding: 0 100px 0 0;
  }

  /* ── OVERVIEW INTRO ── */
  .cs-overview-intro {
    padding: 40px 0 20px;
  }
  .cs-section-heading {
    font-size: 52px;
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -1.2px;
    color: var(--text);
    margin: 0 0 20px;
  }
  .cs-body-text {
    font-size: 17px;
    font-weight: 400;
    line-height: 1.7;
    color: var(--text);
    margin: 0;
  }
  .cs-sub-heading {
    font-size: 21px;
    font-weight: 700;
    color: var(--text);
    margin: 0 0 8px;
    line-height: 1.4;
  }
  .cs-content-block {
    padding-bottom: 8px;
  }
  .cs-content-block + .cs-content-block {
    padding-top: 24px;
  }

  /* ── LIST ── */
  .cs-list {
    list-style: none;
    margin: 12px 0 20px;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .cs-list-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.65;
    color: var(--text);
  }
  .cs-list-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    margin-top: 3px;
    color: var(--violet-md);
  }
  .cs-list-icon-x {
    color: #c0392b;
  }

  /* ── SECTION DIVIDERS ── */
  .cs-section-divider {
    border: none;
    border-top: 1px solid var(--border);
    margin: 40px 0 0;
  }
  .cs-section-block {
    padding: 40px 0 0;
  }

  /* ── PLACEHOLDER IMAGES ── */
  .cs-img-placeholder {
    width: 100%;
    border-radius: var(--radius);
    background: var(--violet-lt);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
    color: var(--violet-md);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.04em;
  }
  .cs-img-placeholder svg {
    width: 32px;
    height: 32px;
    opacity: 0.5;
  }
  .cs-img-sm { height: 280px; }
  .cs-img-lg { height: 320px; }
  .cs-img-xl { height: 440px; }

  .cs-img-mt { margin-top: 24px; }
  .cs-img-mb { margin-bottom: 16px; }
  .cs-img-my { margin-top: 24px; margin-bottom: 16px; }
  .cs-img-my-lg { margin-top: 20px; margin-bottom: 20px; }

  .cs-img-row {
    display: flex;
    gap: 16px;
    margin-top: 16px;
    margin-bottom: 8px;
  }
  .cs-img-row .cs-img-placeholder {
    flex: 1;
  }

  /* ── SOLUTION CARDS ── */
  .cs-solution-cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 8px;
  }
  .cs-solution-card {
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 24px 28px;
    background: #fff;
  }
  .cs-solution-card-title {
    font-size: 16px;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 8px;
  }
  .cs-solution-card-desc {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.65;
    color: var(--muted);
  }
  .cs-solution-badge {
    display: inline-flex;
    align-items: center;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 20px;
    margin-bottom: 10px;
  }
  .cs-solution-badge.good {
    background: var(--violet-lt);
    color: var(--violet);
  }
  .cs-solution-badge.mid {
    background: #fff8e1;
    color: #7d5c00;
  }
  .cs-solution-badge.alt {
    background: #f0f0f0;
    color: #555;
  }

  /* ── CALLOUT ── */
  .cs-callout {
    background: var(--violet-lt);
    border-left: 3px solid var(--violet-md);
    border-radius: 0 var(--radius) var(--radius) 0;
    padding: 20px 24px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.65;
    color: var(--violet);
  }
  .cs-callout strong {
    font-weight: 700;
  }

  /* ── OUTCOMES ── */
  .cs-outcomes-list {
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 28px 0;
    margin-top: 12px;
    margin-bottom: 24px;
  }
  .cs-outcome-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    color: var(--muted);
    padding: 8px 0;
  }
  .cs-outcome-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: var(--violet-md);
    margin-top: 2px;
  }

  /* ── TESTIMONIALS ── */
  .cs-testimonials {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 8px;
    margin-bottom: 16px;
  }
  .cs-testimonial {
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 32px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 160px;
  }
  .cs-testimonial-quote {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    color: var(--text);
    margin-bottom: 20px;
  }
  .cs-testimonial-author {
    font-size: 14px;
    color: var(--muted);
    font-weight: 400;
  }

  /* ── LEARNINGS ── */
  .cs-learnings-list {
    padding: 16px 0 4px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* ── SPACERS ── */
  .cs-spacer-sm { height: 12px; }
  .cs-spacer { height: 24px; }
  .cs-spacer-lg { height: 40px; }

  /* ── FOOTER ── */
  .cs-footer {
    background: #1a1714;
    padding: 80px 48px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
  }
  .cs-footer-heading-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }
  .cs-footer-heading {
    font-size: 34px;
    font-weight: 800;
    color: #fff;
    letter-spacing: 0.025em;
    margin: 0;
  }
  .cs-footer-underline {
    display: block;
    width: 200px;
    height: 6px;
    background: #ffd32c;
    border-radius: 2px;
  }
  .cs-footer-sub {
    font-size: 17px;
    font-weight: 400;
    color: rgba(255,255,255,0.65);
    letter-spacing: 0.02em;
    margin: 0;
    line-height: 1.55;
  }
  .cs-social-links {
    display: flex;
    gap: 16px;
    margin-top: 16px;
    align-items: center;
  }
  .cs-social-link {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,0.75);
    text-decoration: none;
    transition: background 0.2s;
    flex-shrink: 0;
  }
  .cs-social-link:hover { background: rgba(255,255,255,0.2); }
  .cs-social-link svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
  }
</style>

<section class="cs-root">

  <!-- HERO -->
  <div class="cs-hero">
    <div class="cs-hero-visual">
      <div class="cs-hero-mockup">
        <div class="cs-hero-mockup-bar">
          <div class="cs-hero-mockup-dot"></div>
          <div class="cs-hero-mockup-dot"></div>
          <div class="cs-hero-mockup-dot"></div>
          <div class="cs-hero-mockup-url"></div>
        </div>
        <div class="cs-hero-mockup-body">
          <div class="cs-hero-mockup-row med"></div>
          <div class="cs-hero-mockup-row short"></div>
          <div class="cs-hero-mockup-accent"></div>
          <div class="cs-hero-mockup-cards">
            <div class="cs-hero-mockup-card"></div>
            <div class="cs-hero-mockup-card"></div>
            <div class="cs-hero-mockup-card"></div>
          </div>
          <div class="cs-hero-mockup-row med"></div>
          <div class="cs-hero-mockup-row short"></div>
        </div>
      </div>
    </div>
    <div class="cs-hero-content">
      <h1 class="cs-hero-title">Boosting order<br>value by 37%</h1>
      <p class="cs-hero-desc">Through cross-team collaboration, we released a feature that boosted average order value by 37% and improved the experience for clients and freelancers alike.</p>
      <div class="cs-hero-meta">
        <svg viewBox="0 0 20 20" fill="currentColor"><path d="M7 0V2H13V0H15V2H19C19.552 2 20 2.448 20 3V19C20 19.552 19.552 20 19 20H1C.448 20 0 19.552 0 19V3C0 2.448.448 2 1 2H5V0H7ZM18 7H2V18H18V7ZM13.035 9.136L14.45 10.55 9.5 15.5 5.964 11.964 7.379 10.55 9.5 12.672 13.035 9.136Z"/></svg>
        <span>Q2 - 2022</span>
        <div class="cs-hero-meta-dot"></div>
        <svg viewBox="0 0 16 21" fill="currentColor"><path d="M16 21H14V19C14 17.343 12.657 16 11 16H5C3.343 16 2 17.343 2 19V21H0V19C0 16.239 2.239 14 5 14H11C13.761 14 16 16.239 16 19V21ZM8 12C4.686 12 2 9.314 2 6C2 2.686 4.686 0 8 0C11.314 0 14 2.686 14 6C14 9.314 11.314 12 8 12ZM8 10C10.209 10 12 8.209 12 6C12 3.791 10.209 2 8 2C5.791 2 4 3.791 4 6C4 8.209 5.791 10 8 10Z"/></svg>
        <span>Senior Product Designer</span>
        <div class="cs-hero-meta-dot"></div>
        <span>Product Manager</span>
      </div>
      <div class="cs-hero-details">
        <div class="cs-hero-detail">
          <div class="cs-hero-detail-icon">
            <svg viewBox="0 0 20 20" fill="currentColor"><path d="M7 0V2H13V0H15V2H19C19.552 2 20 2.448 20 3V7H0V3C0 2.448.448 2 1 2H5V0H7ZM0 9H20V19C20 19.552 19.552 20 19 20H1C.448 20 0 19.552 0 19V9Z"/></svg>
          </div>
          <div>
            <div class="cs-detail-label">Project Timeframe</div>
            <div class="cs-detail-value">3 weeks</div>
          </div>
        </div>
        <div class="cs-hero-detail">
          <div class="cs-hero-detail-icon">
            <svg viewBox="0 0 20 20" fill="currentColor"><path d="M13 10a4 4 0 100-8 4 4 0 000 0zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zM5 10a3 3 0 100-6 3 3 0 000 6zm0 2c-.9 0-1.9.2-2.75.5C1.18 13.07 0 14 0 15v1h5v-1c0-.97.47-1.83 1.18-2.41C5.8 12.22 5.4 12 5 12z"/></svg>
          </div>
          <div>
            <div class="cs-detail-label">Team size</div>
            <div class="cs-detail-value">10 members</div>
          </div>
        </div>
        <div class="cs-hero-detail">
          <div class="cs-hero-detail-icon">
            <svg viewBox="0 0 22 16" fill="currentColor"><path d="M11 0C4.48 0 0 3.58 0 8s4.48 8 11 8 11-3.58 11-8-4.48-8-11-8zm0 14c-4.96 0-9-2.69-9-6s4.04-6 9-6 9 2.69 9 6-4.04 6-9 6zm0-10a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z"/></svg>
          </div>
          <div>
            <div class="cs-detail-label">Platform</div>
            <div class="cs-detail-value">Responsive Web Design</div>
          </div>
        </div>
        <div class="cs-hero-detail">
          <div class="cs-hero-detail-icon">
            <svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-1 17.93V16a1 1 0 112 0v1.93c3.95-.49 7-3.85 7-7.93h-2a1 1 0 110-2h2C19 3.85 15.95.49 12 .07V2a1 1 0 11-2 0V.07C6.05.56 3 3.85 3 8h2a1 1 0 110 2H3c0 4.08 3.05 7.44 7 7.93z"/></svg>
          </div>
          <div>
            <div class="cs-detail-label">Product</div>
            <div class="cs-detail-value">Marketplace — B2B &amp; B2C</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- STATS -->
  <div class="cs-stats">
    <div class="cs-stat">
      <div class="cs-stat-value">+15k</div>
      <div class="cs-stat-label">Business partners</div>
    </div>
    <div class="cs-stat">
      <div class="cs-stat-value">13K</div>
      <div class="cs-stat-label">Freelancers</div>
    </div>
    <div class="cs-stat">
      <div class="cs-stat-value">+50</div>
      <div class="cs-stat-label">Types of categories</div>
    </div>
    <div class="cs-stat">
      <div class="cs-stat-value">5</div>
      <div class="cs-stat-label">Languages in the platform</div>
    </div>
  </div>

  <!-- MAIN LAYOUT -->
  <div class="cs-layout">

    <!-- SIDEBAR NAV -->
    <nav class="cs-sidebar">
      <span class="cs-nav-label">Dive into</span>
      <ul class="cs-nav-list">
        <li>
          <button class="cs-nav-btn" onclick="document.getElementById('cs-overview').scrollIntoView({behavior:'smooth'})">
            <span class="cs-nav-bar"></span>
            <span class="cs-nav-text">Overview</span>
          </button>
        </li>
        <li>
          <button class="cs-nav-btn" onclick="document.getElementById('cs-discover').scrollIntoView({behavior:'smooth'})">
            <span class="cs-nav-bar"></span>
            <span class="cs-nav-text">Discover</span>
          </button>
        </li>
        <li>
          <button class="cs-nav-btn" onclick="document.getElementById('cs-define').scrollIntoView({behavior:'smooth'})">
            <span class="cs-nav-bar"></span>
            <span class="cs-nav-text">Define</span>
          </button>
        </li>
        <li>
          <button class="cs-nav-btn" onclick="document.getElementById('cs-development').scrollIntoView({behavior:'smooth'})">
            <span class="cs-nav-bar"></span>
            <span class="cs-nav-text">Development</span>
          </button>
        </li>
        <li>
          <button class="cs-nav-btn" onclick="document.getElementById('cs-delivery').scrollIntoView({behavior:'smooth'})">
            <span class="cs-nav-bar"></span>
            <span class="cs-nav-text">Delivery</span>
          </button>
        </li>
        <li>
          <button class="cs-nav-btn" onclick="document.getElementById('cs-outcomes').scrollIntoView({behavior:'smooth'})">
            <span class="cs-nav-bar"></span>
            <span class="cs-nav-text">Outcomes</span>
          </button>
        </li>
        <li>
          <button class="cs-nav-btn" onclick="document.getElementById('cs-learnings').scrollIntoView({behavior:'smooth'})">
            <span class="cs-nav-bar"></span>
            <span class="cs-nav-text">Learnings</span>
          </button>
        </li>
      </ul>
      <a href="#" class="cs-back-link">
        <svg viewBox="0 0 13 11" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6 5.414a.675.675 0 01-.675.675H2.35l3.742 3.564a.675.675 0 11-.927.982L.207 5.9A.675.675 0 010 5.414c0-.09.018-.18.054-.263a.675.675 0 01.152-.22L5.157.203A.675.675 0 016.09 1.175L2.35 4.739h9.575a.675.675 0 01.675.675z"/></svg>
        <span>Home</span>
      </a>
    </nav>

    <!-- CONTENT -->
    <div class="cs-content">

      <!-- OVERVIEW -->
      <div id="cs-overview" class="cs-overview-intro">
        <h2 class="cs-section-heading">Overview</h2>
        <p class="cs-body-text">Bunny Studio connects businesses with pre-vetted freelancers across 50 creative services. For voice-over projects, clients often request 'takes'—alternative recordings of the same script. This project focused on improving that workflow, boosting efficiency and fairness for freelancers.</p>
      </div>

      <div class="cs-spacer"></div>

      <div class="cs-content-block">
        <h3 class="cs-sub-heading">Senior Designer &amp; Product Manager</h3>
        <p class="cs-body-text">As Product Designer and Product Manager for the Storefront squad, I drove the redesign of the conversion flow from discovery to launch. The project required close collaboration with research, data, engineering, customer experience, marketing, and operations to balance business goals with user needs.</p>
      </div>

      <div class="cs-spacer"></div>

      <div class="cs-content-block">
        <h3 class="cs-sub-heading">Problem &amp; Challenges</h3>
        <ul class="cs-list">
          <li class="cs-list-item">
            <svg class="cs-list-icon cs-list-icon-x" viewBox="0 0 16 16" fill="none"><path d="M2 2L14 14M14 2L2 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            The platform's rigid fulfillment flow made any changes to 'takes' high-risk.
          </li>
          <li class="cs-list-item">
            <svg class="cs-list-icon cs-list-icon-x" viewBox="0 0 16 16" fill="none"><path d="M2 2L14 14M14 2L2 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            Clients struggled to request "takes" (alternative recordings).
          </li>
          <li class="cs-list-item">
            <svg class="cs-list-icon cs-list-icon-x" viewBox="0 0 16 16" fill="none"><path d="M2 2L14 14M14 2L2 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            Workarounds created operational inefficiencies.
          </li>
          <li class="cs-list-item">
            <svg class="cs-list-icon cs-list-icon-x" viewBox="0 0 16 16" fill="none"><path d="M2 2L14 14M14 2L2 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            Both freelancers and the business were losing revenue.
          </li>
        </ul>
      </div>

      <div class="cs-content-block">
        <h3 class="cs-sub-heading">Goals</h3>
        <p class="cs-body-text">How might we offer takes as a small experiment?</p>
        <ul class="cs-list">
          <li class="cs-list-item">
            <svg class="cs-list-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Launch a lightweight MVP to test "takes."
          </li>
          <li class="cs-list-item">
            <svg class="cs-list-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Understand workflows when multiple takes were involved.
          </li>
          <li class="cs-list-item">
            <svg class="cs-list-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Validate the pricing model and gauge client demand.
          </li>
        </ul>
      </div>

      <!-- DISCOVER -->
      <hr class="cs-section-divider">
      <div id="cs-discover" class="cs-section-block">
        <h2 class="cs-section-heading">Discover</h2>
        <h3 class="cs-sub-heading">Validating the opportunity</h3>
        <p class="cs-body-text">To understand the challenges around "takes", I gathered insights from:</p>
        <ul class="cs-list">
          <li class="cs-list-item">
            <svg class="cs-list-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            User Survey: to gather firsthand perspectives on their needs and pain points.
          </li>
          <li class="cs-list-item">
            <svg class="cs-list-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Support team: they are the voice of the users and had great knowledge of user behavior and challenges.
          </li>
          <li class="cs-list-item">
            <svg class="cs-list-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Data team: to analyze current projects data.
          </li>
        </ul>

        <div class="cs-img-placeholder cs-img-xl cs-img-my">
          <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          User journey &amp; survey findings
        </div>

        <h3 class="cs-sub-heading">Key insights</h3>
        <ul class="cs-list">
          <li class="cs-list-item">
            <svg class="cs-list-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Clients created workarounds to request takes.
          </li>
          <li class="cs-list-item">
            <svg class="cs-list-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            About 0.66% of projects included take requests.
          </li>
          <li class="cs-list-item">
            <svg class="cs-list-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Freelancers often weren't compensated unless they flagged it.
          </li>
          <li class="cs-list-item">
            <svg class="cs-list-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Freelancers expected 10–50% higher pay for takes.
          </li>
          <li class="cs-list-item">
            <svg class="cs-list-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Most requests were for 2–3 takes.
          </li>
          <li class="cs-list-item">
            <svg class="cs-list-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Lack of a proper feature led to more revisions and back-and-forth.
          </li>
        </ul>
      </div>

      <!-- DEFINE -->
      <hr class="cs-section-divider">
      <div id="cs-define" class="cs-section-block">
        <h2 class="cs-section-heading">Define</h2>
        <p class="cs-body-text">We learned the issues affected:</p>
        <ul class="cs-list">
          <li class="cs-list-item">
            <svg class="cs-list-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <strong>Freelancers:</strong>&nbsp;Unpaid work if takes weren't explicitly flagged.
          </li>
          <li class="cs-list-item">
            <svg class="cs-list-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <strong>Clients:</strong>&nbsp;Workarounds and multiple revisions to achieve desired results.
          </li>
          <li class="cs-list-item">
            <svg class="cs-list-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <strong>Operations:</strong>&nbsp;Increased costs and slower turnaround times, impacting the company's ability to deliver projects quickly (85% of projects completed in 12 hours, 56% in 2 hours).
          </li>
        </ul>
      </div>

      <!-- DEVELOPMENT -->
      <hr class="cs-section-divider">
      <div id="cs-development" class="cs-section-block">
        <h2 class="cs-section-heading">Development</h2>
        <p class="cs-body-text">Two main user stories emerged, which we explored through three design directions—each with distinct trade-offs.</p>

        <div class="cs-img-placeholder cs-img-lg cs-img-my">
          <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 8v4l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          User stories &amp; flow diagram
        </div>

        <div class="cs-img-placeholder cs-img-xl">
          <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M3 9h18M9 21V9" stroke="currentColor" stroke-width="1.5"/></svg>
          Design directions — wireframe explorations
        </div>

        <div class="cs-spacer"></div>
        <p class="cs-body-text">Once we understood the user stories, we created three potential solutions, each with a clear trade-off:</p>

        <div class="cs-solution-cards">
          <div class="cs-solution-card">
            <div class="cs-solution-badge good">Solution 1 — Best UX</div>
            <div class="cs-solution-card-title">Integrated Takes Section</div>
            <div class="cs-solution-card-desc">Adding a dedicated section for specifying takes directly below the script input area. While intuitive, it presented potential development challenges and could impact other workflows.</div>
          </div>
          <div class="cs-solution-card">
            <div class="cs-solution-badge mid">Solution 2 — Easy implementation</div>
            <div class="cs-solution-card-title">Leveraging the Remarks Section</div>
            <div class="cs-solution-card-desc">Utilizing the existing "remarks" section for specifying takes, offering a simpler implementation. However, it risked being less user-friendly and could lead to clients overlooking the feature.</div>
          </div>
          <div class="cs-solution-card">
            <div class="cs-solution-badge alt">Solution 3 — Future validation</div>
            <div class="cs-solution-card-title">Contextual Takes Fields</div>
            <div class="cs-solution-card-desc">Dynamically adding "takes" fields below each script part—highly contextual and user-friendly, but required more development effort and was deemed unnecessary for initial launch.</div>
          </div>
        </div>

        <div class="cs-spacer"></div>
        <h3 class="cs-sub-heading">The strategic decision</h3>
        <p class="cs-body-text">I presented the options to developers and stakeholders from both my squad and the impacted squad.</p>

        <div class="cs-img-placeholder cs-img-xl cs-img-my-lg">
          <svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8ZM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Stakeholder alignment — hybrid solution matrix
        </div>

        <div class="cs-callout">
          <strong>By weighing usability against implementation risk</strong>, we aligned on a hybrid approach. This collaboration turned a potential blocker into a breakthrough.
        </div>

        <div class="cs-img-placeholder cs-img-lg">
          <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 4v16M2 10h6M2 16h6" stroke="currentColor" stroke-width="1.5"/></svg>
          Final solution wireframes — hybrid design
        </div>
      </div>

      <!-- DELIVERY -->
      <hr class="cs-section-divider">
      <div id="cs-delivery" class="cs-section-block">
        <h2 class="cs-section-heading">Delivery</h2>
        <p class="cs-body-text">With alignment in place, I finalized specs and handed the design to development.</p>

        <div class="cs-img-placeholder cs-img-xl cs-img-my">
          <svg viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          Final design specs &amp; component annotations
        </div>

        <h3 class="cs-sub-heading">Feature announcement</h3>
        <p class="cs-body-text">For the rollout, I collaborated with marketing and CX to plan communications for clients, freelancers, and operations.</p>

        <div class="cs-img-row">
          <div class="cs-img-placeholder cs-img-lg">
            <svg viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="1.5"/><path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="1.5"/></svg>
            Client communications
          </div>
          <div class="cs-img-placeholder cs-img-lg">
            <svg viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="1.5"/><path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="1.5"/></svg>
            Freelancer email
          </div>
        </div>
      </div>

      <!-- OUTCOMES -->
      <hr class="cs-section-divider">
      <div id="cs-outcomes" class="cs-section-block">
        <h2 class="cs-section-heading">Outcomes</h2>
        <h3 class="cs-sub-heading">Impact and insights</h3>
        <div class="cs-outcomes-list">
          <div class="cs-outcome-item">
            <svg class="cs-outcome-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            +53% more projects requesting takes.
          </div>
          <div class="cs-outcome-item">
            <svg class="cs-outcome-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            +37% higher average order value.
          </div>
          <div class="cs-outcome-item">
            <svg class="cs-outcome-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Freelancers &amp; ops — Fair pay for freelancers, lighter operational load.
          </div>
        </div>

        <div class="cs-testimonials">
          <div class="cs-testimonial">
            <div class="cs-testimonial-quote">"Thank you. This is what we needed!"</div>
            <div class="cs-testimonial-author">— Freelancer</div>
          </div>
          <div class="cs-testimonial">
            <div class="cs-testimonial-quote">"This is a big time saver, thank you for the feature."</div>
            <div class="cs-testimonial-author">— Satisfied Client</div>
          </div>
          <div class="cs-testimonial">
            <div class="cs-testimonial-quote">"The workflow is so much cleaner now. No more back-and-forth."</div>
            <div class="cs-testimonial-author">— Power User</div>
          </div>
        </div>
      </div>

      <!-- LEARNINGS -->
      <hr class="cs-section-divider">
      <div id="cs-learnings" class="cs-section-block">
        <h2 class="cs-section-heading">Learnings</h2>
        <h3 class="cs-sub-heading">Embracing constraints through collaboration</h3>
        <div class="cs-learnings-list">
          <div class="cs-outcome-item">
            <svg class="cs-outcome-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Collaborated early with developers and stakeholders to unlock creative solutions and accelerate alignment.
          </div>
          <div class="cs-outcome-item">
            <svg class="cs-outcome-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Balanced trade-offs in the MVP to validate impact quickly without compromising user experience.
          </div>
          <div class="cs-outcome-item">
            <svg class="cs-outcome-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Acted on strong signals instead of waiting for perfect data or future migrations, ensuring faster impact.
          </div>
        </div>

        <div class="cs-spacer"></div>
        <h3 class="cs-sub-heading">Shoutouts &amp; Credits</h3>
        <div class="cs-learnings-list">
          <div class="cs-outcome-item">
            <svg class="cs-outcome-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Marina (UX Designer/Researcher): for exploring use cases and shaping solutions, and for supporting the research that surfaced freelancer insights.
          </div>
          <div class="cs-outcome-item">
            <svg class="cs-outcome-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Data &amp; Pricing Team: for defining the pricing model, analyzing adoption, and proving data that gave us a clear view of impact.
          </div>
          <div class="cs-outcome-item">
            <svg class="cs-outcome-icon" viewBox="0 0 15 11" fill="none"><path d="M1 5.3L5.3 9.6 13.6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Rodrigo (CRM Specialist): for crafting clear, timely communications that ensured a smooth rollout to both clients and freelancers.
          </div>
        </div>
      </div>

      <div class="cs-spacer-lg"></div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="cs-footer">
    <div class="cs-footer-heading-wrap">
      <h2 class="cs-footer-heading">Let's connect.</h2>
      <span class="cs-footer-underline"></span>
    </div>
    <p class="cs-footer-sub">Feel free to reach out for collaborations or just a friendly hello.</p>
    <div class="cs-social-links">
      <a href="#" class="cs-social-link" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
      <a href="#" class="cs-social-link" aria-label="GitHub">
        <svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>
      </a>
      <a href="#" class="cs-social-link" aria-label="Medium">
        <svg viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
      </a>
      <a href="#" class="cs-social-link" aria-label="Behance">
        <svg viewBox="0 0 24 24"><path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.938.19.387.286.871.286 1.443 0 .619-.14 1.138-.421 1.551-.283.414-.7.753-1.256 1.018.757.216 1.317.601 1.68 1.152.362.551.544 1.216.544 1.993 0 .623-.12 1.162-.358 1.617-.239.456-.571.836-.993 1.136-.423.3-.919.524-1.487.673-.565.148-1.162.223-1.792.223H1.5V5.731h6.303zm-.34 4.613c.513 0 .932-.122 1.257-.365.322-.243.484-.622.484-1.138 0-.29-.054-.532-.162-.724-.109-.193-.252-.347-.432-.46-.178-.11-.38-.191-.609-.236-.228-.045-.462-.067-.7-.067H4.019v2.99h3.444zm.16 4.795c.26 0 .51-.025.747-.076.239-.05.45-.135.633-.254.182-.12.328-.282.439-.491.11-.208.167-.47.167-.785 0-.624-.176-1.073-.529-1.349-.355-.276-.825-.415-1.411-.415H4.019v3.37h3.604zM15.547 15.717c.329.319.805.479 1.43.479.445 0 .83-.113 1.154-.339.323-.226.521-.466.595-.72h2.173c-.348 1.075-.879 1.844-1.596 2.308-.716.464-1.584.696-2.601.696-.707 0-1.342-.113-1.906-.341-.565-.228-1.041-.546-1.432-.957-.39-.41-.687-.904-.895-1.481-.206-.578-.31-1.207-.31-1.89 0-.661.108-1.279.324-1.853.217-.574.526-1.068.929-1.483.404-.415.886-.739 1.445-.974.562-.236 1.179-.354 1.854-.354.757 0 1.42.143 1.99.431.572.288 1.044.672 1.415 1.153.371.48.638 1.031.802 1.648.163.618.222 1.265.177 1.942H13.98c.037.71.252 1.225.58 1.535l.987-.001zm2.46-4.084c-.264-.29-.677-.435-1.241-.435-.36 0-.659.06-.897.18-.237.12-.43.27-.578.449-.148.18-.254.371-.318.574-.063.202-.1.393-.11.572h3.633c-.097-.593-.326-1.05-.489-1.34zM14.5 7h5v1.5h-5V7z"/></svg>
      </a>
    </div>
  </footer>

</section>
`,
      }}
    />
  );
}
