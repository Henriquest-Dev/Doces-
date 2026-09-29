#!/usr/bin/env bash
# Publica o site no GitHub Pages (branch gh-pages).
# Carimba ?v=<data> nos CSS/JS para o navegador não usar ficheiros antigos em cache.
set -euo pipefail
cd "$(dirname "$0")/.."
v=$(date -u +%Y%m%d%H%M)
sed -i -E "s#(href=\"css/[^\"?]+\.css)(\?v=[0-9]+)?\"#\1?v=$v\"#g; s#(src=\"js/[^\"?]+\.js)(\?v=[0-9]+)?\"#\1?v=$v\"#g" index.html
git add index.html
git commit -q -m "Publicar versão $v" || true
branch=$(git rev-parse --abbrev-ref HEAD)
git push -q -u origin "$branch"
git push -q origin "$branch:gh-pages"
echo "Publicado: versão $v"
