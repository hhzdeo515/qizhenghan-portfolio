(() => {
  'use strict';
  window.lucide?.createIcons();
  const frames = new Map([...document.querySelectorAll('[data-frame]')].map(frame => [frame.dataset.frame, frame]));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const measured = new Set();
  let initialHashPending = Boolean(location.hash);
  history.scrollRestoration = 'manual';
  function navigate(page, anchor, changeHash = true, immediate = false) {
    const frame = frames.get(page);
    if (!frame) return;
    const localTarget = anchor ? frame.contentDocument?.getElementById(anchor) : null;
    const headerHeight = document.querySelector('.site-header').getBoundingClientRect().height;
    const y = frame.getBoundingClientRect().top + window.scrollY + (localTarget?.getBoundingClientRect().top || 0) - headerHeight;
    window.scrollTo({ top: Math.max(0, y), behavior: immediate || reducedMotion.matches ? 'instant' : 'smooth' });
    if (changeHash) history.pushState(null, '', `#${anchor || page}`);
    const heading = (localTarget || frame.contentDocument?.body)?.querySelector('h1,h2');
    if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); }
  }
  window.addEventListener('message', (event) => {
    if (event.origin !== window.location.origin) return;
    const sender = [...frames.values()].find(frame => frame.contentWindow === event.source);
    if (!sender || !event.data || typeof event.data !== 'object') return;
    const { type, page, height, anchor } = event.data;
    if (type === 'portfolio:resize' && sender.dataset.frame === page && Number.isFinite(height) && height > 0 && height < 30000) {
      sender.style.height = `${height}px`;
      measured.add(page);
      if (initialHashPending && measured.size === frames.size) { initialHashPending = false; requestAnimationFrame(() => navigateHash(true)); }
    }
    if (type === 'portfolio:navigate' && frames.has(page) && (anchor === undefined || anchor === 'work')) navigate(page, anchor);
  });
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (link.dataset.shellLink || link.getAttribute('href') === '#home') {
      event.preventDefault(); navigate(link.dataset.shellLink || 'home', link.dataset.anchor);
    }
  });
  function navigateHash(immediate = false) { const hash = location.hash.slice(1); if (hash === 'work') navigate('home', 'work', false, immediate); else if (frames.has(hash)) navigate(hash, undefined, false, immediate); }
  function requestMeasure(frame) { frame.contentWindow?.postMessage({ type: 'portfolio:measure' }, location.origin); }
  frames.forEach(frame => frame.addEventListener('load', () => requestMeasure(frame)));
  window.addEventListener('popstate', () => navigateHash(true));
  window.addEventListener('load', () => frames.forEach(requestMeasure));
})();
