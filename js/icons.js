/* Ícones em SVG (traço, herdam a cor via currentColor). */
window.ICONS = (function () {
  const svg = (body) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
  return {
    icecream: svg('<path d="M8 11l4 10 4-10"/><path d="M7 11a5 5 0 0 1 10 0z"/><path d="M9.5 6.2A3 3 0 0 1 14.5 6.2"/><path d="M12 3.2v1.2"/>'),
    waffle: svg('<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M9.2 3.5v17M14.8 3.5v17M3.5 9.2h17M3.5 14.8h17"/>'),
    cake: svg('<path d="M4 21h16"/><path d="M5 21v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7"/><path d="M5 16c1.2 1.2 2.3 1.2 3.5 0s2.3-1.2 3.5 0 2.3 1.2 3.5 0 2.3-1.2 3.5 0"/><path d="M12 12V8"/><path d="M12 5.5c.9-.8.9-1.7 0-2.5-.9.8-.9 1.7 0 2.5z"/>'),
    bag: svg('<path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>'),
    pin: svg('<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
    clock: svg('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
    chat: svg('<path d="M20 11.5a7.5 7.5 0 0 1-11 6.6L4 19.5l1.4-4.6A7.5 7.5 0 1 1 20 11.5z"/>'),
    heart: svg('<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.2 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/>'),
  };
})();
