#!/usr/bin/env bash
# build.sh — 组装生产版 dist/:预编译 JSX、自托管 React 与字体、注入 SEO meta。
set -euo pipefail
cd "$(dirname "$0")"

mkdir -p build dist
cat src/data.jsx src/icons.jsx src/components.jsx src/app.jsx > build/bundle.jsx
./node_modules/.bin/babel build/bundle.jsx --compact false -o dist/app.js
node --check dist/app.js

rm -rf dist/vendor dist/fonts
cp -R vendor dist/vendor
cp -R fonts dist/fonts

python3 - <<'EOF'
import re

html = open("src/Personal Homepage.html").read()

# 1) Google Fonts 三行 → 本地字体样式表
html = re.sub(
    r'<link rel="preconnect"[^>]*>\n<link rel="preconnect"[^>]*>\n<link href="https://fonts\.googleapis\.com[^>]*>',
    '<link rel="stylesheet" href="fonts/fonts.css">',
    html,
)
assert "fonts.googleapis.com" not in html, "font links not replaced"

# 2) description 后补 canonical / OG / twitter meta
desc = re.search(r'<meta name="description" content="([^"]*)">', html).group(1)
seo = f'''<link rel="canonical" href="https://bobochang.cn/">
<meta property="og:type" content="website">
<meta property="og:url" content="https://bobochang.cn/">
<meta property="og:title" content="Bobochang · 开源船队 The Fleet">
<meta property="og:description" content="{desc}">
<meta property="og:site_name" content="Bobochang">
<meta name="twitter:card" content="summary">'''
html = html.replace('<meta name="description" content="%s">' % desc,
                    '<meta name="description" content="%s">\n%s' % (desc, seo))

# 3) 开发脚本(React dev + Babel standalone + 4 个 JSX)→ 生产脚本
html = re.sub(
    r'<script src="https://unpkg\.com/react@[\s\S]*?<script type="text/babel" src="app\.jsx"></script>',
    '''<script src="vendor/react.production.min.js"></script>
<script src="vendor/react-dom.production.min.js"></script>
<script src="app.js"></script>''',
    html,
)
assert "unpkg.com" not in html and "text/babel" not in html, "dev scripts not replaced"

open("dist/index.html", "w").write(html)
print("dist/index.html written,", len(html), "bytes")
EOF

echo "build OK"
