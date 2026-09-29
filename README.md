# Angy Gelados — website

Site animado de uma página para a **@angy_gelados** (gelados, waffles, panquecas, donuts e batidos).
HTML, CSS e JavaScript puros, sem build: basta abrir o `index.html` ou publicar a pasta
(GitHub Pages, Netlify, Vercel…).

## Direção de design

- **Hero (referência Starbucks):** cartão dividido em branco e cor, logo e navegação vertical à esquerda,
  texto e botão à direita, produto grande a flutuar sobre a divisão e a palavra gigante **ANGY** atrás, em duas cores.
- **Troca de produto (referência vídeo desktop):** miniaturas que trocam o produto em destaque. O círculo, o fundo
  e a página inteira mudam para a cor do doce, com transição do produto e elementos a flutuar (chocolate, morangos, granulado).
  A troca também é automática a cada 5 s.
- **Bordas derretidas (referência "Sweet Melting"):** cada secção começa com um derretido em SVG gerado por código
  (natas, rosa ou chocolate, com ou sem granulado) na cor da secção anterior.
- **Menu no desktop:** o scroll vertical move uma galeria horizontal de cartões, com barra de progresso.
- **Menu no Android/mobile (referência vídeo 2):** carrossel com deslize, com o produto em cima, o cartão branco com preço,
  nome, descrição e o botão "Quero este!", fundo que muda de cor e cartões vizinhos a espreitar.
- Filtros por categoria, animações ao entrar no ecrã, menu hambúrguer com revelação circular, loader com a logo e
  `prefers-reduced-motion` respeitado.

## ⚠️ Conteúdo provisório: substituir pelos dados reais

O Instagram bloqueou o acesso automático ao perfil (pede login, e os destaques só abrem com sessão iniciada). Por isso:

- **Fotos do menu:** são imagens de domínio público (rawpixel, CC0), recortadas automaticamente. Para usar as fotos reais,
  põe o PNG/WebP com fundo transparente em `assets/menu/` e muda o campo `img` em `js/data.js`.
- **Nomes, preços e descrições:** são exemplos em `js/data.js`. Edita a lista `products`.
- **Logo:** `assets/brand/logo.png` é uma proposta criada para o site. Troca pela logo oficial com o mesmo nome de ficheiro.
  Depois ajusta `--brand` e `--brand-deep` no topo de `css/style.css` para as cores da marca.
- **Morada e horário:** em `visit`, dentro de `js/data.js`.

Os botões "Quero este!" e "+" abrem a DM do Instagram (`ig.me/m/angy_gelados`).

## Estrutura

```
index.html
css/style.css      tokens da marca, layout, animações, responsivo
js/data.js         menu, categorias, serviços, galeria, contactos  ← editar aqui
js/drips.js        gerador das bordas derretidas em SVG
js/main.js         hero, carrossel, galeria horizontal, reveals
assets/brand/      logo e ícone
assets/menu/       produtos recortados (WebP transparente)
assets/gallery/    fotos da galeria
```

## Créditos das imagens (domínio público / CC0)

| Ficheiro | Fonte | Licença |
|---|---|---|
| `assets/menu/taca-frutos-vermelhos.webp` | [Free ice-cream sundae image](https://www.rawpixel.com/image/5908901/image-public-domain-summer-food) | CC0 |
| `assets/menu/taca-chocolate.webp` | [Free ice-cream sundae image](https://www.rawpixel.com/image/5908933/image-public-domain-glass-summer) | CC0 |
| `assets/menu/cone-crocante.webp` | [Chocolate ice cream](https://www.rawpixel.com/image/6022951/photo-image-public-domain-person-sprinkles) | CC0 |
| `assets/menu/bola-morango.webp` | [Strawberry ice-cream cone image](https://www.rawpixel.com/image/5917092/image-public-domain-summer-food) | CC0 |
| `assets/menu/copo-choco-confetti.webp` | [Chocolate filled waffles with sprinkles](https://www.rawpixel.com/image/680889/chocolate-ice-cream) | CC0 |
| `assets/menu/waffle-chocolate.webp` | [Delicious waffle with chocolate drizzle](https://www.rawpixel.com/image/5969002/waffles) | CC0 |
| `assets/menu/waffle-coracao.webp` | [Imagem rawpixel](https://www.rawpixel.com/image/5948171/free-public-domain-cc0-photo) | CC0 |
| `assets/menu/waffle-belga.webp` | [Free close belgian waffle image](https://www.rawpixel.com/image/5902164/photo-image-public-domain-food-free) | CC0 |
| `assets/menu/torre-panquecas.webp` | [Pancake cherry](https://www.rawpixel.com/image/6025951/photo-image-public-domain-plant-fruits) | CC0 |
| `assets/menu/panquecas-classicas.webp` | [Pancake, American breakfast](https://www.rawpixel.com/image/6033674/photo-image-public-domain-food-free) | CC0 |
| `assets/menu/panquecas-mirtilo.webp` | [Free blueberry pancake image](https://www.rawpixel.com/image/5921568/photo-image-public-domain-food-free) | CC0 |
| `assets/menu/donut-morango.webp` | [Free hand holding donut palm](https://www.rawpixel.com/image/5928062/photo-image-public-domain-hands-person) | CC0 |
| `assets/menu/donut-chocolate.webp` | [Free chocolate donut image](https://www.rawpixel.com/image/5912300/image-background-public-domain-person) | CC0 |
| `assets/menu/donut-crunch.webp` | [Free hand holding chocolate donut](https://www.rawpixel.com/image/5926801/photo-image-background-public-domain-hands) | CC0 |
| `assets/menu/batido-chocolate.webp` | [Imagem rawpixel](https://www.rawpixel.com/image/5963627/free-public-domain-cc0-photo) | CC0 |
| `assets/menu/batido-frutos.webp` | [Imagem rawpixel](https://www.rawpixel.com/image/5962021/free-public-domain-cc0-photo) | CC0 |
| `assets/menu/chocolate-quente.webp` | [Free chocolate drink & whipped](https://www.rawpixel.com/image/5924486/photo-image-public-domain-free-drink) | CC0 |
| `assets/menu/churros.webp` | [Free sugar coated churros closeup](https://www.rawpixel.com/image/5927612/photo-image-public-domain-free-sweet) | CC0 |
| `assets/gallery/g1.webp` | [Free hand holding donut palm](https://www.rawpixel.com/image/5928062/photo-image-public-domain-hands-person) | CC0 |
| `assets/gallery/g2.webp` | [Free pancake berries plate image](https://www.rawpixel.com/image/5911370/image-background-public-domain-food) | CC0 |
| `assets/gallery/g3.webp` | [Breakfast Waffles](https://www.rawpixel.com/image/5969003/breakfast-waffles) | CC0 |
| `assets/gallery/g4.webp` | [Free ice-cream sundae image](https://www.rawpixel.com/image/5908901/image-public-domain-summer-food) | CC0 |
| `assets/gallery/g6.webp` | [Free sugar coated churros closeup](https://www.rawpixel.com/image/5927612/photo-image-public-domain-free-sweet) | CC0 |
| `assets/gallery/g7.webp` | [Strawberry mint milkshake](https://www.rawpixel.com/image/447850/fresh-strawberry-smoothie-with-mint) | CC0 |
| `assets/gallery/g8.webp` | [Vanilla ice-cream cone](https://www.rawpixel.com/image/3286282/free-photo-image-ice-cream-cookie-pink) | CC0 |
