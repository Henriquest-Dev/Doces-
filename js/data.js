/* ==========================================================
   Conteúdo do site — edita aqui para atualizar o menu.
   ATENÇÃO: nomes, preços (em MZN) e fotos são PROVISÓRIOS: o Instagram
   bloqueou o acesso automático aos destaques do @angy_gelados.
   Para usar as fotos reais: coloca o PNG/WebP (fundo
   transparente) em assets/menu/ e troca o campo `img`.
   ========================================================== */
window.ANGY = {
  categories: [
    { id: 'gelados', name: 'Gelados' },
    { id: 'waffles', name: 'Waffles' },
    { id: 'panquecas', name: 'Panquecas' },
    { id: 'donuts', name: 'Donuts' },
    { id: 'batidos', name: 'Batidos & Quentes' },
    { id: 'extras', name: 'Churros' },
  ],

  // ids que aparecem no destaque do topo (troca automática + miniaturas)
  hero: ['taca-frutos-vermelhos', 'torre-panquecas', 'taca-chocolate', 'donut-morango'],

  products: [
    { id: 'taca-frutos-vermelhos', cat: 'gelados', name: 'Taça Frutos Vermelhos', price: 320, color: '#e0304f', deep: '#8f1330',
      desc: 'Gelado de baunilha e frutos vermelhos, chantilly, cereja e calda de morango.', img: 'assets/menu/taca-frutos-vermelhos.webp', floaters: 'berry' },
    { id: 'taca-chocolate', cat: 'gelados', name: 'Taça Chocolate Belga', price: 320, color: '#8a5234', deep: '#3b1d10',
      desc: 'Duas bolas de chocolate belga com bolacha wafer e calda quente.', img: 'assets/menu/taca-chocolate.webp', floaters: 'choco' },
    { id: 'cone-crocante', cat: 'gelados', name: 'Cone Crocante', price: 180, color: '#c98a4b', deep: '#6b3f1c',
      desc: 'Cone de bolacha com gelado coberto de raspas de chocolate.', img: 'assets/menu/cone-crocante.webp', floaters: 'choco' },
    { id: 'bola-morango', cat: 'gelados', name: 'Bola de Morango', price: 120, color: '#f38bb0', deep: '#b8246a',
      desc: 'Gelado artesanal de morango, cremoso e fresquinho.', img: 'assets/menu/bola-morango.webp', floaters: 'berry' },
    { id: 'copo-choco-confetti', cat: 'gelados', name: 'Copo Choco Confetti', price: 220, color: '#3bb3a0', deep: '#16665a',
      desc: 'Copo de gelado mergulhado em chocolate com confetis coloridos.', img: 'assets/menu/copo-choco-confetti.webp', floaters: 'choco' },

    { id: 'waffle-chocolate', cat: 'waffles', name: 'Waffle Chocolate', price: 350, color: '#b0703f', deep: '#5a2e1a',
      desc: 'Waffle estaladiço regado com chocolate negro derretido.', img: 'assets/menu/waffle-chocolate.webp', floaters: 'choco' },
    { id: 'waffle-coracao', cat: 'waffles', name: 'Waffle Coração & Cereja', price: 390, color: '#d62f4d', deep: '#7d1427',
      desc: 'Waffles em coração com gelado, natas e cerejas em calda.', img: 'assets/menu/waffle-coracao.webp', floaters: 'berry' },
    { id: 'waffle-belga', cat: 'waffles', name: 'Waffle Belga Clássico', price: 280, color: '#e2a04d', deep: '#8a561c',
      desc: 'A receita clássica com açúcar em pó. Simples e perfeito.', img: 'assets/menu/waffle-belga.webp', floaters: 'choco' },

    { id: 'torre-panquecas', cat: 'panquecas', name: 'Torre de Panquecas', price: 420, color: '#ee9a3a', deep: '#a3561a',
      desc: 'Seis panquecas fofinhas empilhadas com cereja no topo e mel.', img: 'assets/menu/torre-panquecas.webp', floaters: 'berry' },
    { id: 'panquecas-classicas', cat: 'panquecas', name: 'Panquecas Clássicas', price: 320, color: '#d9a066', deep: '#7a4a24',
      desc: 'Pilha de panquecas douradas com manteiga e xarope de ácer.', img: 'assets/menu/panquecas-classicas.webp', floaters: 'choco' },
    { id: 'panquecas-mirtilo', cat: 'panquecas', name: 'Panquecas Mirtilo', price: 380, color: '#5b6ee1', deep: '#28358f',
      desc: 'Panquecas com iogurte, mirtilos frescos e hortelã.', img: 'assets/menu/panquecas-mirtilo.webp', floaters: 'berry' },

    { id: 'donut-morango', cat: 'donuts', name: 'Donut Morango Granulado', price: 150, color: '#ff6fa5', deep: '#c2185b',
      desc: 'Cobertura de morango e granulado arco-íris. O favorito!', img: 'assets/menu/donut-morango.webp', floaters: 'berry' },
    { id: 'donut-chocolate', cat: 'donuts', name: 'Donut Chocolate', price: 150, color: '#7b4a2d', deep: '#3b1d10',
      desc: 'Massa fofa com cobertura espessa de chocolate.', img: 'assets/menu/donut-chocolate.webp', floaters: 'choco' },
    { id: 'donut-crunch', cat: 'donuts', name: 'Donut Choco Crunch', price: 170, color: '#a0663f', deep: '#4a2516',
      desc: 'Chocolate de leite com pepitas crocantes por cima.', img: 'assets/menu/donut-crunch.webp', floaters: 'choco' },

    { id: 'batido-chocolate', cat: 'batidos', name: 'Batido de Chocolate', price: 250, color: '#9c6b4e', deep: '#4a2516',
      desc: 'Batido cremoso de gelado de chocolate com natas.', img: 'assets/menu/batido-chocolate.webp', floaters: 'choco' },
    { id: 'batido-frutos', cat: 'batidos', name: 'Batido Frutos Vermelhos', price: 250, color: '#c7314f', deep: '#6e1024',
      desc: 'Morango, framboesa e gelado de iogurte batidos na hora.', img: 'assets/menu/batido-frutos.webp', floaters: 'berry' },
    { id: 'chocolate-quente', cat: 'batidos', name: 'Chocolate Quente & Natas', price: 200, color: '#6d4230', deep: '#2d140a',
      desc: 'Chocolate quente espesso com natas e raspas de chocolate.', img: 'assets/menu/chocolate-quente.webp', floaters: 'choco' },

    { id: 'churros', cat: 'extras', name: 'Churros', price: 230, color: '#e0a458', deep: '#8a561c',
      desc: 'Churros estaladiços com açúcar e canela. Pede com chocolate!', img: 'assets/menu/churros.webp', floaters: 'choco' },
  ],

  services: [
    { icon: 'icecream', title: 'Gelados artesanais', text: 'Sabores cremosos servidos em copo, cone ou taça, com toppings à escolha.' },
    { icon: 'waffle', title: 'Waffles & panquecas', text: 'Feitos na hora, quentinhos, com chocolate, fruta e gelado.' },
    { icon: 'cake', title: 'Encomendas & festas', text: 'Doces para aniversários e eventos. Fala connosco por mensagem.' },
    { icon: 'bag', title: 'Take-away', text: 'Pede e leva contigo, ou combina a entrega por mensagem.' },
  ],

  gallery: [
    'assets/gallery/g1.webp', 'assets/gallery/g2.webp', 'assets/gallery/g3.webp', 'assets/gallery/g4.webp',
    'assets/gallery/g6.webp', 'assets/gallery/g7.webp', 'assets/gallery/g8.webp',
  ],

  // ATENÇÃO: morada e horário por confirmar: preenche com os dados reais.
  visit: [
    { icon: 'pin', label: 'Onde estamos', value: 'Morada a confirmar' },
    { icon: 'clock', label: 'Horário', value: 'Horário a confirmar' },
    { icon: 'chat', label: 'Encomendas', value: 'Por mensagem no Instagram @angy_gelados' },
  ],
  visitImg: 'assets/menu/taca-frutos-vermelhos.webp',
};
