(function () {
  const { products, categories, services, gallery, visit } = window.ANGY;
  const $ = (s, r = document) => r.querySelector(s);
  const byId = (id) => products.find((p) => p.id === id);
  const eur = (v) => v.toFixed(2).replace('.', ',') + '€';
  const isMobile = () => window.matchMedia('(max-width: 760px)').matches;

  buildDrips();
  $('#year').textContent = new Date().getFullYear();

  /* ---------------- Loader ---------------- */
  window.addEventListener('load', () => setTimeout(() => $('#loader').classList.add('is-done'), 500));
  setTimeout(() => $('#loader').classList.add('is-done'), 3500);

  /* ---------------- Tema dinâmico ---------------- */
  function setAccent(color, deep) {
    const root = document.documentElement.style;
    root.setProperty('--accent', color);
    root.setProperty('--accent-deep', deep || shade(color, -28));
    document.querySelector('meta[name="theme-color"]').setAttribute('content', color);
  }
  function shade(hex, pct) {
    const n = parseInt(hex.slice(1), 16);
    const f = (c) => Math.max(0, Math.min(255, Math.round(c + (pct / 100) * (pct < 0 ? c : 255 - c))));
    return '#' + [f(n >> 16), f((n >> 8) & 255), f(n & 255)].map((v) => v.toString(16).padStart(2, '0')).join('');
  }

  /* ---------------- HERO: troca de produto ---------------- */
  const heroItems = window.ANGY.hero.map(byId).filter(Boolean);
  const thumbs = $('#heroThumbs');
  const heroImg = $('#heroProduct');
  const copyEls = ['#heroTitle', '#heroPrice', '#heroDesc'].map((s) => $(s));
  let heroIndex = 0, heroTimer;

  heroItems.forEach((p, i) => {
    const b = document.createElement('button');
    b.className = 'thumb';
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', p.name);
    b.style.setProperty('--c', p.color);
    b.innerHTML = `<img src="${p.img}" alt=""><span>${eur(p.price)}</span>`;
    b.addEventListener('click', () => { showHero(i); restartHeroTimer(); });
    thumbs.appendChild(b);
  });

  const FLOATER_SVGS = {
    sprinkle: (c) => `<svg viewBox="0 0 40 12"><rect width="40" height="12" rx="6" fill="${c}"/><rect x="4" y="2" width="16" height="3" rx="1.5" fill="#fff" opacity=".45"/></svg>`,
    choco: () => `<svg viewBox="0 0 60 60"><rect x="6" y="6" width="48" height="48" rx="8" fill="#4a2516"/><rect x="10" y="10" width="18" height="18" rx="4" fill="#5d3020"/><rect x="32" y="10" width="18" height="18" rx="4" fill="#5d3020"/><rect x="10" y="32" width="18" height="18" rx="4" fill="#5d3020"/><rect x="32" y="32" width="18" height="18" rx="4" fill="#5d3020"/><path d="M12 12h14" stroke="#8a5438" stroke-width="2" stroke-linecap="round"/></svg>`,
    berry: () => `<svg viewBox="0 0 60 64"><path d="M30 14c16 0 26 8 24 20-2 14-14 28-24 28S8 48 6 34C4 22 14 14 30 14z" fill="#e0304f"/><g fill="#ffd9a0"><circle cx="20" cy="28" r="1.6"/><circle cx="32" cy="26" r="1.6"/><circle cx="42" cy="30" r="1.6"/><circle cx="26" cy="38" r="1.6"/><circle cx="38" cy="40" r="1.6"/><circle cx="30" cy="50" r="1.6"/><circle cx="18" cy="42" r="1.6"/></g><path d="M30 16c-6-10-16-8-18-6 6 0 10 2 14 6-6-2-12 0-14 4 8-2 14-2 18-4 4 2 10 2 18 4-2-4-8-6-14-4 4-4 8-6 14-6-2-2-12-4-18 6z" fill="#3bb273"/></svg>`,
    cone: () => `<svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="24" fill="#f3c98b"/><path d="M12 22l36 20M10 34l30 16M20 10l30 18M14 44l18-34M26 52l20-38" stroke="#d99b52" stroke-width="3"/></svg>`,
    cream: () => `<svg viewBox="0 0 60 60"><circle cx="30" cy="32" r="22" fill="#fff"/><circle cx="22" cy="26" r="7" fill="#fff" stroke="#f1e6da" stroke-width="2"/><circle cx="24" cy="24" r="4" fill="#fff"/></svg>`,
  };
  const FLOATER_SPOTS = [
    { x: 4, y: 12, s: 46, t: 'choco' }, { x: 82, y: 6, s: 38, t: 'berry' }, { x: 90, y: 58, s: 44, t: 'choco' },
    { x: 2, y: 66, s: 40, t: 'berry' }, { x: 20, y: 90, s: 30, t: 'sprinkle' }, { x: 70, y: 92, s: 26, t: 'sprinkle' },
    { x: 60, y: 2, s: 24, t: 'sprinkle' }, { x: 94, y: 30, s: 22, t: 'sprinkle' },
  ];
  function paintFloaters(p) {
    const box = $('#heroFloaters');
    const sprColors = ['#ff5d8f', '#ffd23f', '#3bceac', '#4d96ff', '#ffffff'];
    box.innerHTML = FLOATER_SPOTS.map((f, i) => {
      const type = f.t === 'berry' && p.floaters === 'choco' ? 'choco' : f.t;
      const svg = FLOATER_SVGS[type](sprColors[i % sprColors.length]);
      return `<span class="floater" style="left:${f.x}%;top:${f.y}%;--s:${f.s}px;--d:${4 + (i % 3)}s;--dl:-${i * 0.7}s;--dx:${i % 2 ? 10 : -12}px;--dy:${i % 2 ? -14 : 12}px;--r:${i % 2 ? 25 : -30}deg">${svg}</span>`;
    }).join('');
  }

  function swapText(p) {
    copyEls.forEach((el) => { el.classList.remove('swap-in'); el.classList.add('swap-out'); });
    setTimeout(() => {
      $('#heroTitle').textContent = p.name;
      $('#heroPrice').textContent = eur(p.price);
      $('#heroDesc').textContent = p.desc;
      copyEls.forEach((el, i) => { el.classList.remove('swap-out'); el.style.animationDelay = i * 70 + 'ms'; el.classList.add('swap-in'); });
    }, 320);
  }

  function showHero(i, instant) {
    heroIndex = (i + heroItems.length) % heroItems.length;
    const p = heroItems[heroIndex];
    [...thumbs.children].forEach((t, k) => { t.classList.toggle('is-active', k === heroIndex); t.setAttribute('aria-selected', k === heroIndex); });
    setAccent(p.color, p.deep);
    if (instant) {
      heroImg.src = p.img; heroImg.alt = p.name;
      $('#heroTitle').textContent = p.name; $('#heroPrice').textContent = eur(p.price); $('#heroDesc').textContent = p.desc;
      paintFloaters(p);
      return;
    }
    swapText(p);
    heroImg.classList.add('is-leaving');
    setTimeout(() => {
      heroImg.src = p.img; heroImg.alt = p.name;
      heroImg.classList.remove('is-leaving');
      heroImg.classList.add('is-entering');
      void heroImg.offsetWidth; // força reflow para animar a entrada
      heroImg.classList.remove('is-entering');
      paintFloaters(p);
    }, 420);
  }
  function restartHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => { if (!document.hidden) showHero(heroIndex + 1); }, 5200);
  }
  showHero(0, true);
  restartHeroTimer();

  // parallax suave do produto com o rato
  const stage = $('#heroStage');
  $('.hero__card').addEventListener('pointermove', (e) => {
    if (isMobile()) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    stage.style.translate = `${x * 18}px ${y * 18}px`;
    $('#heroFloaters').style.translate = `${x * -30}px ${y * -30}px`;
  });

  /* ---------------- MENU: tabs ---------------- */
  const tabs = $('#menuTabs');
  let currentCat = 'all';
  [{ id: 'all', name: 'Tudo' }, ...categories].forEach((c) => {
    const b = document.createElement('button');
    b.className = 'tab' + (c.id === 'all' ? ' is-active' : '');
    b.type = 'button';
    b.textContent = c.name;
    b.addEventListener('click', () => {
      currentCat = c.id;
      [...tabs.children].forEach((t) => t.classList.toggle('is-active', t === b));
      renderRail(); renderSwipe();
    });
    tabs.appendChild(b);
  });
  const list = () => (currentCat === 'all' ? products : products.filter((p) => p.cat === currentCat));
  const catName = (id) => (categories.find((c) => c.id === id) || {}).name || '';

  /* ---------------- MENU: rail horizontal (desktop) ---------------- */
  const rail = $('#rail'), track = $('#railTrack'), progress = $('#railProgress');
  function renderRail() {
    track.innerHTML = list().map((p) => `
      <article class="pcard" style="--c:${p.color}">
        <div class="pcard__media"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
        <p class="pcard__cat">${catName(p.cat)}</p>
        <h3 class="pcard__name">${p.name}</h3>
        <p class="pcard__desc">${p.desc}</p>
        <div class="pcard__foot"><span class="pcard__price">${eur(p.price)}</span><button class="pcard__btn" type="button" aria-label="Pedir ${p.name}" data-order="${p.id}">+</button></div>
      </article>`).join('');
    sizeRail();
  }
  let railDistance = 0;
  function sizeRail() {
    if (isMobile()) { rail.style.height = ''; return; }
    railDistance = Math.max(0, track.scrollWidth - window.innerWidth);
    rail.style.height = window.innerHeight + railDistance + 'px';
    onScroll();
  }
  function onScroll() {
    if (!isMobile()) {
      const r = rail.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, railDistance)));
      track.style.transform = `translate3d(${-p * railDistance}px,0,0)`;
      progress.style.width = p * 100 + '%';
    }
    $('#topbar').classList.toggle('is-solid', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { sizeRail(); goSwipe(swipeIndex, true); });

  /* ---------------- MENU: swipe de cartões (mobile / Android) ---------------- */
  const swipeTrack = $('#swipeTrack'), swipeDots = $('#swipeDots'), swipeBox = $('#swipe');
  let swipeIndex = 0;
  function renderSwipe() {
    const items = list();
    swipeTrack.innerHTML = items.map((p) => `
      <article class="sslide">
        <div class="sslide__media"><img src="${p.img}" alt="${p.name}" loading="lazy" draggable="false"></div>
        <div class="sslide__card">
          <div class="sslide__top"><span class="sslide__price">${eur(p.price)}</span><span class="sslide__tag">${catName(p.cat)}</span></div>
          <h3 class="sslide__name">${p.name}</h3>
          <p class="sslide__desc">${p.desc}</p>
          <button class="sslide__btn" type="button" data-order="${p.id}">Quero este!</button>
        </div>
      </article>`).join('');
    swipeDots.innerHTML = items.map(() => '<span></span>').join('');
    goSwipe(0, true);
  }
  function goSwipe(i, instant) {
    const items = list();
    if (!items.length) return;
    swipeIndex = Math.max(0, Math.min(items.length - 1, i));
    swipeTrack.style.transition = instant ? 'none' : 'transform .6s cubic-bezier(.22,1,.36,1)';
    swipeTrack.style.transform = `translate3d(${10 - swipeIndex * 80}%,0,0)`;
    [...swipeTrack.children].forEach((s, k) => s.classList.toggle('is-active', k === swipeIndex));
    [...swipeDots.children].forEach((d, k) => d.classList.toggle('is-active', k === swipeIndex));
    swipeBox.style.setProperty('--sc', items[swipeIndex].color);
  }
  (function dragSwipe() {
    const vp = $('#swipeViewport');
    let x0 = null, y0 = 0, dx = 0, locked = null;
    vp.addEventListener('pointerdown', (e) => { x0 = e.clientX; y0 = e.clientY; dx = 0; locked = null; swipeTrack.style.transition = 'none'; });
    vp.addEventListener('pointermove', (e) => {
      if (x0 === null) return;
      const mx = e.clientX - x0, my = e.clientY - y0;
      if (locked === null && (Math.abs(mx) > 6 || Math.abs(my) > 6)) locked = Math.abs(mx) > Math.abs(my) ? 'x' : 'y';
      if (locked !== 'x') return;
      dx = mx;
      const w = vp.clientWidth;
      const edge = (swipeIndex === 0 && dx > 0) || (swipeIndex === list().length - 1 && dx < 0) ? 0.35 : 1;
      swipeTrack.style.transform = `translate3d(${w * 0.1 - swipeIndex * w * 0.8 + dx * edge}px,0,0)`;
    });
    const end = () => {
      if (x0 === null) return;
      const w = vp.clientWidth;
      if (locked === 'x' && Math.abs(dx) > w * 0.15) goSwipe(swipeIndex + (dx < 0 ? 1 : -1));
      else goSwipe(swipeIndex);
      x0 = null;
    };
    vp.addEventListener('pointerup', end);
    vp.addEventListener('pointercancel', end);
    vp.addEventListener('pointerleave', end);
    swipeDots.addEventListener('click', (e) => { const i = [...swipeDots.children].indexOf(e.target); if (i >= 0) goSwipe(i); });
  })();

  // Botões de pedido abrem a DM do Instagram
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-order]');
    if (!b) return;
    b.animate([{ transform: 'scale(1)' }, { transform: 'scale(.85)' }, { transform: 'scale(1)' }], { duration: 300 });
    window.open('https://ig.me/m/angy_gelados', '_blank', 'noopener');
  });

  renderRail();
  renderSwipe();

  /* ---------------- Serviços, galeria, visita ---------------- */
  $('#servicesGrid').innerHTML = services.map((s) => `
    <article class="scard reveal"><div class="scard__icon">${ICONS[s.icon]}</div><h3>${s.title}</h3><p>${s.text}</p></article>`).join('');
  $('#galleryGrid').innerHTML = gallery.map((g) => `
    <a class="reveal" href="https://www.instagram.com/angy_gelados/" target="_blank" rel="noopener"><img src="${g}" alt="Angy Gelados" loading="lazy"><span class="gallery__heart">${ICONS.heart}</span></a>`).join('');
  $('#visitList').innerHTML = visit.map((v) => `
    <li><span class="ico">${ICONS[v.icon]}</span><span><b>${v.label}</b>${v.value}</span></li>`).join('');
  const vimg = $('#visitImg');
  vimg.src = window.ANGY.visitImg; vimg.alt = 'Angy Gelados';

  /* ---------------- Reveal on scroll ---------------- */
  document.querySelectorAll('.section-title, .kicker, .menu__head .tabs, .visit__list li').forEach((el) => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 80 + 'ms'; io.observe(el); });

  /* ---------------- Menu mobile ---------------- */
  const burger = $('#burger'), drawer = $('#drawer');
  burger.addEventListener('click', () => {
    const open = drawer.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open);
  });
  drawer.addEventListener('click', (e) => { if (e.target.tagName === 'A') { drawer.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); } });
})();
