/* Shared child-page behavior. The parent remains responsible for composition. */
(() => {
  'use strict';
  const page = document.body.dataset.page;
  const framed = window.parent !== window;
  const origin = window.location.origin;
  if (framed) document.documentElement.classList.add('is-embedded');
  window.lucide?.createIcons();
  let lastHeight = 0;
  let scheduled = false;
  function reportHeight() {
    scheduled = false;
    const height = Math.ceil(document.body.getBoundingClientRect().height) + 2;
    if (height !== lastHeight && height > 0) {
      lastHeight = height;
      if (framed) window.parent.postMessage({ type: 'portfolio:resize', page, height }, origin);
    }
  }
  function scheduleHeight() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(reportHeight); }
  }
  new ResizeObserver(scheduleHeight).observe(document.body);
  window.addEventListener('message', event => {
    if (framed && event.origin === origin && event.source === window.parent && event.data?.type === 'portfolio:measure') { lastHeight = 0; scheduleHeight(); }
  });
  window.addEventListener('load', scheduleHeight);
  document.fonts?.ready.then(scheduleHeight);
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    let destination = link.dataset.navigate;
    let anchor = link.dataset.anchor;
    if (link.getAttribute('href') === '#work') { destination = page; anchor = 'work'; }
    if (framed && destination) {
      event.preventDefault();
      window.parent.postMessage({ type: 'portfolio:navigate', page: destination, anchor }, origin);
    }
  });
  const toggle = document.querySelector('#kernel-toggle');
  if (toggle) {
    let running = false;
    let step = 0;
    let timer;
    const stages = ['正在感知 · VISION', '正在理解 · REASON', '连接行动 · ACTION'];
    const status = document.querySelector('#kernel-status');
    const scene = document.querySelector('.kernel-stage');
    const updateStatus = () => { status.textContent = stages[step++ % stages.length]; };
    toggle.addEventListener('click', () => {
      running = !running;
      toggle.setAttribute('aria-pressed', String(running));
      toggle.setAttribute('aria-label', running ? '暂停 AI 核心交互演示' : '启动 AI 核心交互演示');
      toggle.querySelector('span').textContent = running ? '暂停核心' : '启动核心';
      scene.classList.toggle('is-running', running);
      clearInterval(timer);
      if (running) { step = 0; updateStatus(); timer = setInterval(updateStatus, 3200); }
      else status.textContent = '等待你的意图 _';
    });
    const observer = new IntersectionObserver(([entry]) => {
      scene.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      scene.querySelectorAll('.core-sphere, .orbit-c').forEach(el => { el.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused'; });
    });
    observer.observe(scene);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) clearInterval(timer);
      else if (running) { clearInterval(timer); timer = setInterval(updateStatus, 3200); }
    });
  }
  reportHeight();
})();
