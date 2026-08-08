// ---------------------------------------------------------
// Mobile nav toggle
// ---------------------------------------------------------
(function () {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('tabbarNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close the menu when a link is tapped
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// ---------------------------------------------------------
// Hero terminal line — types once on load, then stops.
// Respects prefers-reduced-motion by just showing the full line.
// ---------------------------------------------------------
(function () {
  const el = document.getElementById('heroTyped');
  if (!el) return;

  const line = 'whoami';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    el.textContent = line;
    return;
  }

  let i = 0;
  el.textContent = '';
  const cursor = document.createElement('span');
  cursor.className = 'cursor';

  function type() {
    if (i <= line.length) {
      el.textContent = line.slice(0, i);
      el.appendChild(cursor);
      i++;
      setTimeout(type, 70);
    }
  }
  type();
})();

// ---------------------------------------------------------
// Subtle scroll-reveal for section headings
// ---------------------------------------------------------
(function () {
  const targets = document.querySelectorAll('.section-heading, .section-eyebrow');
  if (!('IntersectionObserver' in window) || targets.length === 0) return;

  targets.forEach(function (t) { t.classList.add('reveal'); });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  targets.forEach(function (t) { observer.observe(t); });
})();
