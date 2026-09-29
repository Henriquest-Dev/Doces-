/* Bordas "derretidas" geradas em SVG (referência: Sweet Melting border collection).
   Cada elemento com [data-drip] recebe uma borda com gotas, brilho e (opcional) granulado. */
(function () {
  const PALETTES = {
    cream:  { base: '#fbf4ea', shade: '#eadcc8', gloss: '#ffffff' },
    pink:   { base: '#f7a8c6', shade: '#e27aa3', gloss: '#ffe3ee' },
    choco:  { base: '#4a2516', shade: '#2d140a', gloss: '#8a5438' },
  };
  const SPRINKLES = ['#ff5d8f', '#ffd23f', '#3bceac', '#4d96ff', '#ff8c42', '#ffffff', '#b388eb'];

  // gerador pseudo-aleatório determinístico para que as gotas não "saltem" entre renders
  function rng(seed) {
    let s = seed >>> 0;
    return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  }

  function dripPath(w, h, band, r) {
    // band = altura da faixa sólida; gotas descem abaixo dela
    let d = `M0 0 H${w} V${band}`;
    let x = w;
    while (x > 0) {
      const gap = 30 + r() * 70;
      const dripW = 16 + r() * 34;
      const long = r();
      const len = long > 0.8 ? h - band - 6 : (long > 0.45 ? (h - band) * (0.45 + r() * 0.35) : (h - band) * (0.12 + r() * 0.25));
      const x1 = Math.max(0, x - gap);
      // ondulação entre gotas
      d += ` C${x - gap * 0.3} ${band + 6 + r() * 8}, ${x1 + gap * 0.3} ${band - 2}, ${x1} ${band}`;
      x = x1;
      if (x - dripW <= 0) break;
      const cx = x - dripW / 2;
      const bulb = dripW * 0.5;
      const tip = band + len;
      d += ` C${x} ${band + len * 0.35}, ${cx + bulb * 0.55} ${tip - bulb * 1.6}, ${cx + bulb} ${tip - bulb * 0.7}`;
      d += ` A${bulb} ${bulb} 0 1 1 ${cx - bulb} ${tip - bulb * 0.7}`;
      d += ` C${cx - bulb * 0.55} ${tip - bulb * 1.6}, ${x - dripW} ${band + len * 0.35}, ${x - dripW} ${band}`;
      x -= dripW;
    }
    d += ` L0 ${band} Z`;
    return d;
  }

  function build(el) {
    const kind = el.dataset.drip || 'cream';
    const [name, extra] = kind.split('-');
    const pal = PALETTES[name] || PALETTES.cream;
    const w = 1600, h = 150, band = 46;
    const seed = [...kind].reduce((a, c) => a + c.charCodeAt(0), 0) * 97 + (el.dataset.seed | 0);
    const r = rng(seed);
    const d = dripPath(w, h, band, r);
    const id = 'g' + Math.random().toString(36).slice(2, 8);
    let sprinkles = '';
    if (extra === 'sprinkles') {
      const r2 = rng(seed + 7);
      for (let i = 0; i < 90; i++) {
        const sx = r2() * w, sy = 6 + r2() * (band - 12);
        const rot = r2() * 180, c = SPRINKLES[(r2() * SPRINKLES.length) | 0];
        sprinkles += `<rect x="${sx.toFixed(1)}" y="${sy.toFixed(1)}" width="11" height="3.6" rx="1.8" fill="${c}" transform="rotate(${rot.toFixed(0)} ${sx.toFixed(1)} ${sy.toFixed(1)})"/>`;
      }
    }
    el.innerHTML = `
      <svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${pal.base}"/>
            <stop offset=".75" stop-color="${pal.base}"/>
            <stop offset="1" stop-color="${pal.shade}"/>
          </linearGradient>
        </defs>
        <path d="${d}" fill="${pal.shade}" transform="translate(0 5)" opacity=".55"/>
        <path d="${d}" fill="url(#${id})"/>
        <path d="M0 ${band * 0.35} H${w}" stroke="${pal.gloss}" stroke-width="4" stroke-linecap="round" stroke-dasharray="120 260" opacity=".45"/>
        ${sprinkles}
      </svg>`;
  }

  window.buildDrips = function (root) {
    (root || document).querySelectorAll('[data-drip]').forEach(build);
  };
})();
