// Shared by toad-road.html and tongue-time.html: the start screen shows two
// leaderboards, all-time and "This week", that slide back and forth.
//
// The weekly board comes from the same Worker URL with ?range=week (top 10 of
// scores saved in the last 7 days, one per name). If it can't be loaded, the
// page hides it and only the all-time board shows.

const WEEK_SIZE = 10;

// Returns the raw weekly list, or throws. The `range` check means an older
// Worker (which ignores ?range=week) is treated as "no weekly board".
async function fetchWeekBoard(url) {
  const res = await fetch(url + (url.includes('?') ? '&' : '?') + 'range=week', { cache: 'no-store' });
  if (!res.ok) throw new Error('week ' + res.status);
  const data = await res.json();
  if (data.range !== 'week' || !Array.isArray(data.scores)) throw new Error('no weekly board');
  return data.scores;
}

// root: an element holding .boards-track (with one .board-slide per board,
// each with data-label) and an empty .board-tabs. Auto-slides every
// `interval` ms; pauses while hovered, touched or focused. Slides instantly
// for people who prefer reduced motion (the CSS turns the transition off).
function boardCarousel(root, interval) {
  const track = root.querySelector('.boards-track');
  const slides = [...track.querySelectorAll('.board-slide')];
  const tabs = root.querySelector('.board-tabs');
  let index = 0, hovered = false, touching = false, focused = false, timer = null, startX = null;

  const buttons = slides.map((slide, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.textContent = slide.dataset.label;
    b.addEventListener('click', () => { show(i); restart(); });
    tabs.appendChild(b);
    return b;
  });
  tabs.setAttribute('role', 'tablist');

  const visible = () => slides.map((s, i) => i).filter(i => !slides[i].hidden);

  function show(i) {
    const vis = visible();
    if (!vis.includes(i)) i = vis[0] || 0;
    index = i;
    track.style.transform = 'translateX(' + (-100 * vis.indexOf(i)) + '%)';
    slides.forEach((s, k) => {
      const on = k === i;
      s.setAttribute('aria-hidden', on ? 'false' : 'true');
      s.inert = !on;
    });
    buttons.forEach((b, k) => {
      b.setAttribute('aria-selected', k === i ? 'true' : 'false');
      b.hidden = slides[k].hidden;
    });
    tabs.hidden = vis.length < 2;
  }

  function step(dir) {
    const vis = visible();
    if (vis.length < 2) return;
    const pos = vis.indexOf(index);
    show(vis[(pos + dir + vis.length) % vis.length]);
  }

  function tick() {
    if (hovered || touching || focused || document.hidden || !root.offsetParent) return;
    step(1);
  }
  function restart() {
    clearInterval(timer);
    timer = setInterval(tick, interval || 6000);
  }

  root.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') hovered = true; });
  root.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') hovered = false; });
  root.addEventListener('pointerdown', e => {
    startX = e.clientX;
    if (e.pointerType !== 'mouse') touching = true;
  });
  const release = e => {
    // A sideways swipe switches boards
    if (startX !== null && e.type === 'pointerup') {
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
    }
    startX = null;
    if (touching) { touching = false; restart(); }
  };
  root.addEventListener('pointerup', release);
  root.addEventListener('pointercancel', release);
  root.addEventListener('focusin', () => { focused = true; });
  root.addEventListener('focusout', () => { focused = false; });

  show(0);
  restart();

  return {
    // Show or hide one board (e.g. hide "This week" if it failed to load)
    setAvailable(i, on) {
      slides[i].hidden = !on;
      show(index);
    },
    show,
  };
}
