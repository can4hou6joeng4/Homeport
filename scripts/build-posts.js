// build-posts.js — 把 posts/*.md 渲染成静态文章页,并生成 sitemap.xml 与 robots.txt。
//
// 文章页不走 React:纯 HTML,设计令牌从 src/Personal Homepage.html 的 :root 与
// [data-theme="chart"] 两个块里原样抽取,所以主页改色文章页跟着变。主题读取与
// 主页相同的 localStorage 键,默认暗色主题。图片与正文同目录相对引用。
const fs = require("fs");
const path = require("path");
const { marked } = require("marked");

const ROOT = path.resolve(__dirname, "..");
const ORIGIN = "https://bobochang.cn";
const POSTS_DIR = path.join(ROOT, "posts");
const OUT_DIR = path.join(ROOT, "dist", "writing");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function frontMatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n\n?/);
  if (!m) throw new Error("post has no front matter");
  const meta = {};
  m[1].split("\n").forEach((line) => {
    const i = line.indexOf(":");
    meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  });
  return { meta, body: text.slice(m[0].length) };
}

function tokens() {
  const html = fs.readFileSync(path.join(ROOT, "src/Personal Homepage.html"), "utf8");
  const pick = (start) => {
    const i = html.indexOf(start);
    if (i < 0) throw new Error("token block not found: " + start);
    return html.slice(i, html.indexOf("\n}\n", i) + 3);
  };
  return pick(":root {") + pick('[data-theme="chart"] {');
}

function page(meta, bodyHtml, firstImage) {
  const url = `${ORIGIN}/writing/${meta.slug}/`;
  const image = `${url}${meta.image}`;
  const ld = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": url + "#article",
    headline: meta.title,
    description: meta.description,
    inLanguage: meta.lang,
    datePublished: meta.date,
    dateModified: meta.date,
    image: image,
    url: url,
    mainEntityOfPage: url,
    author: { "@type": "Person", "@id": ORIGIN + "/#person", name: "bobochang", url: ORIGIN + "/", sameAs: ["https://github.com/can4hou6joeng4"] },
    publisher: { "@id": ORIGIN + "/#person" },
    isPartOf: { "@type": "WebSite", "@id": ORIGIN + "/#website", name: "Bobochang", url: ORIGIN + "/" },
    about: [
      { "@type": "Thing", name: "Braille Patterns", sameAs: "https://en.wikipedia.org/wiki/Braille_Patterns" },
      { "@type": "Thing", name: "Floyd–Steinberg dithering", sameAs: "https://en.wikipedia.org/wiki/Floyd%E2%80%93Steinberg_dithering" },
      { "@type": "Thing", name: "ASCII art", sameAs: "https://en.wikipedia.org/wiki/ASCII_art" },
    ],
    mentions: [{ "@type": "WebApplication", "@id": "https://semaphore.bobochang.cn/#webapp", name: "Semaphore", url: "https://semaphore.bobochang.cn/" }],
  };
  return `<!DOCTYPE html>
<html lang="${esc(meta.lang)}" data-theme="night">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(meta.title)} · Bobochang</title>
<meta name="description" content="${esc(meta.description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(meta.title)}">
<meta property="og:description" content="${esc(meta.description)}">
<meta property="og:image" content="${image}">
<meta property="og:site_name" content="Bobochang">
<meta property="og:locale" content="en_US">
<meta property="article:published_time" content="${meta.date}T00:00:00Z">
<meta property="article:author" content="${ORIGIN}/">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(meta.title)}">
<meta name="twitter:description" content="${esc(meta.description)}">
<meta name="twitter:image" content="${image}">
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>◈</text></svg>">
<link rel="stylesheet" href="../../fonts/fonts.css">
<script type="application/ld+json">
${JSON.stringify(ld, null, 2)}
</script>
<style>
${tokens()}
html { scroll-behavior: smooth; }
body { margin: 0; background: var(--bg); color: var(--ink); font-family: var(--font-body); font-size: 17px; line-height: 1.7; -webkit-font-smoothing: antialiased; }
::selection { background: var(--accent); color: var(--bg); }
a { color: var(--accent); text-decoration: none; border-bottom: 1px solid color-mix(in oklab, var(--accent) 40%, transparent); }
a:hover { border-bottom-color: var(--accent); }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
.wrap { max-width: 720px; margin-inline: auto; padding: 0 clamp(20px, 4.5vw, 48px); }
.top { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 22px 0; font-family: var(--font-mono); font-size: 0.82rem; color: var(--ink-faint); }
.top a { border: 0; color: var(--ink-dim); }
.top a:hover { color: var(--accent); }
.top .wordmark { font-family: var(--font-display); font-weight: 600; letter-spacing: 0.06em; color: var(--ink); }
.kicker { font-family: var(--font-mono); font-size: 0.78rem; letter-spacing: 0.08em; color: var(--ink-faint); margin-top: 48px; }
h1 { font-family: var(--font-display); font-weight: 600; font-size: clamp(1.9rem, 4.6vw, 2.7rem); line-height: 1.15; letter-spacing: -0.01em; margin: 14px 0 18px; }
.byline { font-family: var(--font-mono); font-size: 0.82rem; color: var(--ink-faint); margin-bottom: 44px; }
.byline a { color: var(--ink-dim); border: 0; }
article h2 { font-family: var(--font-display); font-weight: 600; font-size: 1.45rem; line-height: 1.3; margin: 52px 0 14px; }
article h3 { font-family: var(--font-display); font-weight: 600; font-size: 1.12rem; margin: 34px 0 10px; }
article p { margin: 0 0 18px; }
article em { color: var(--ink-dim); }
article hr { border: 0; border-top: 1px solid var(--line); margin: 44px 0; }
article ol, article ul { padding-left: 1.4em; margin: 0 0 18px; }
article li { margin-bottom: 8px; }
article code { font-family: var(--font-mono); font-size: 0.86em; background: var(--panel); border: 1px solid var(--line-soft); border-radius: 5px; padding: 1px 6px; }
article pre { font-family: var(--font-mono); background: var(--term-bg); color: oklch(88% 0.02 240); border: 1px solid var(--line); border-radius: var(--radius); padding: 18px 20px; overflow-x: auto; margin: 0 0 22px; font-size: 0.86rem; line-height: 1.6; }
article pre code { background: none; border: 0; padding: 0; font-size: inherit; }
article img { display: block; max-width: 100%; height: auto; border-radius: var(--radius); border: 1px solid var(--line); margin: 26px 0 10px; }
article img + p em, article p:has(> em:only-child) { display: block; font-size: 0.86rem; color: var(--ink-faint); }
footer.foot { margin: 72px 0 48px; padding-top: 22px; border-top: 1px solid var(--line); font-family: var(--font-mono); font-size: 0.8rem; color: var(--ink-faint); display: flex; flex-wrap: wrap; gap: 8px 22px; }
footer.foot a { color: var(--ink-dim); border: 0; }
footer.foot a:hover { color: var(--accent); }
</style>
</head>
<body>
<script>
  // 与主页共用一份偏好:同一个 localStorage 键决定暗色 / 亮色主题。
  try { var p = JSON.parse(localStorage.getItem("bobochang-home") || "{}"); if (p.theme === "chart" || p.theme === "night") document.documentElement.dataset.theme = p.theme; if (p.hue != null) document.documentElement.style.setProperty("--accent-h", String(p.hue)); } catch (e) {}
</script>
<div class="wrap">
  <nav class="top" aria-label="site">
    <a class="wordmark" href="/">◈ BOBOCHANG</a>
    <a href="/#fleet">projects</a>
  </nav>
  <div class="kicker">WRITING · TECHNICAL NOTE</div>
  <h1>${esc(meta.title)}</h1>
  <p class="byline"><a href="${ORIGIN}/">bobochang</a> · <time datetime="${meta.date}">${meta.date}</time> · <a href="https://github.com/can4hou6joeng4/Semaphore">source of the engine discussed</a></p>
  <article>
${bodyHtml}
  </article>
  <footer class="foot">
    <span>© 2026 Bobochang</span>
    <a href="/">home</a>
    <a href="https://semaphore.bobochang.cn/">Semaphore</a>
    <a href="https://github.com/can4hou6joeng4">GitHub</a>
  </footer>
</div>
</body>
</html>
`;
}

const posts = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md")).map((f) => {
  const { meta, body } = frontMatter(fs.readFileSync(path.join(POSTS_DIR, f), "utf8"));
  for (const k of ["title", "slug", "date", "lang", "description", "image"]) if (!meta[k]) throw new Error(f + " missing " + k);
  const dir = path.join(OUT_DIR, meta.slug);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(path.join(dir, "images"), { recursive: true });
  const html = marked.parse(body, { gfm: true });
  fs.writeFileSync(path.join(dir, "index.html"), page(meta, html));
  const imgs = [...body.matchAll(/\]\((images\/[^)]+)\)/g)].map((m) => m[1]);
  for (const rel of new Set(imgs.concat([meta.image]))) {
    const from = path.join(POSTS_DIR, rel);
    if (!fs.existsSync(from)) throw new Error(f + " references missing " + rel);
    fs.copyFileSync(from, path.join(dir, rel));
  }
  return { ...meta, url: `${ORIGIN}/writing/${meta.slug}/` };
});

const urls = [{ loc: ORIGIN + "/", lastmod: null }].concat(posts.map((p) => ({ loc: p.url, lastmod: p.date })));
fs.writeFileSync(path.join(ROOT, "dist", "sitemap.xml"),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ""}\n  </url>`).join("\n") +
  "\n</urlset>\n");
fs.writeFileSync(path.join(ROOT, "dist", "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`);
fs.writeFileSync(path.join(ROOT, "build", "posts.json"), JSON.stringify(posts.map(({ slug, title, date, url, summary_zh, summary_en }) => ({ slug, title, date, url, summary_zh, summary_en })), null, 2));
console.log(`posts: ${posts.length} → dist/writing/, sitemap.xml (${urls.length} urls), robots.txt`);
