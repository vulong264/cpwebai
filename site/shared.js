// Shared helpers: nav rendering + footer + small enhancements
(function () {
  const NAV = [
    { label: "Home", href: "index.html" },
    { label: "Services", href: "services.html" },
    { label: "Industries", href: "industries.html" },
    { label: "Work", href: "work.html" },
    { label: "Writing", href: "writing.html" },
    { label: "About", href: "about.html" },
  ];

  const LOGO_HTML = `
    <img src="cp-logo-white.png" alt="CoderPush" class="cp-logo-img cp-logo-full" />
    <img src="cp-icon-white.png" alt="CoderPush" class="cp-logo-img cp-logo-icon" />
  `;

  function renderNav(activePage) {
    const here = activePage || (location.pathname.split("/").pop() || "index.html");
    return `
      <nav class="nav">
        <div class="wrap nav-inner">
          <a class="nav-logo" href="index.html" aria-label="CoderPush home">
            ${LOGO_HTML}
          </a>
          <div class="nav-links">
            ${NAV.map(n => `<a href="${n.href}" class="${n.href === here ? "active" : ""}">${n.label}</a>`).join("")}
          </div>
          <div class="nav-meta">
            <span class="status"><span class="dot"></span>HCMC · HAN · 80 ENG</span>
          </div>
          <a class="nav-cta" href="contact.html">BOOK A CALL →</a>
          <div class="nav-burger" id="burger"><span></span><span></span><span></span></div>
        </div>
      </nav>
    `;
  }

  function renderFooter() {
    return `
      <footer class="foot">
        <div class="wrap">
          <div class="foot-grid">
            <div class="foot-col">
              <a class="nav-logo foot-logo" href="index.html" aria-label="CoderPush home">
                ${LOGO_HTML}
              </a>
              <p style="color: var(--text-3); font-size: 13px; line-height: 1.6; max-width: 320px; margin-top: 12px;">
                AI-native engineering studio. Production AI for banking, capital markets, energy, and Web3.
              </p>
              <div style="margin-top: 24px; display: flex; gap: 8px; flex-wrap: wrap;">
                <span class="tag">AWS · ADVANCED PARTNER</span>
                <span class="tag">GENAI COMPETENCY</span>
                <span class="tag">CLUTCH · ★★★★★</span>
              </div>
            </div>
            <div class="foot-col">
              <h5>Services</h5>
              <ul>
                <li><a href="services.html">AI Product Development</a></li>
                <li><a href="service-hire.html">Hire AI Engineers</a></li>
                <li><a href="services.html">AI Data Analyst</a></li>
                <li><a href="services.html">Agentic Development</a></li>
                <li><a href="services.html">Cloud Transformation</a></li>
              </ul>
            </div>
            <div class="foot-col">
              <h5>Industries</h5>
              <ul>
                <li><a href="industry-banking.html">Banking &amp; Fintech</a></li>
                <li><a href="industries.html">Capital Markets</a></li>
                <li><a href="industries.html">Energy &amp; Industrial</a></li>
                <li><a href="industries.html">Web3</a></li>
                <li><a href="industries.html">All industries →</a></li>
              </ul>
            </div>
            <div class="foot-col">
              <h5>Products</h5>
              <ul>
                <li><a href="https://presight.io" target="_blank" rel="noopener">Presight ↗</a></li>
                <li><a href="https://promvis.io" target="_blank" rel="noopener">Promvis ↗</a></li>
              </ul>
              <h5 style="margin-top: 28px;">Company</h5>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html#hire">Careers</a></li>
                <li><a href="writing.html">Writing</a></li>
              </ul>
            </div>
            <div class="foot-col">
              <h5>Contact</h5>
              <ul>
                <li><a href="mailto:hello@coderpush.com">hello@coderpush.com</a></li>
                <li><a href="#">Hanoi · Vietnam</a></li>
                <li><a href="#">Ho Chi Minh City</a></li>
              </ul>
              <h5 style="margin-top: 28px;">Social</h5>
              <ul>
                <li><a href="#">LinkedIn ↗</a></li>
                <li><a href="#">GitHub ↗</a></li>
              </ul>
            </div>
          </div>
          <div class="foot-bottom">
            <span>© 2026 CODERPUSH JSC · ALL RIGHTS RESERVED</span>
            <span><span style="color: var(--green);">●</span> SYS.STATUS · OPERATIONAL</span>
          </div>
        </div>
      </footer>
    `;
  }

  // expose
  window.CP = {
    renderNav,
    renderFooter,
    LOGO_HTML,
    mount: (activePage) => {
      const navHost = document.getElementById("cp-nav");
      const footHost = document.getElementById("cp-foot");
      if (navHost) navHost.innerHTML = renderNav(activePage);
      if (footHost) footHost.innerHTML = renderFooter();
    },
  };
})();
