// static-fleet.js — 从 src/data.jsx 生成项目索引的静态 HTML,由 build.sh 注入 dist/index.html。
//
// 页面是 React SPA,服务端 HTML 里原本只有一个空的 #root,没有任何 <a>。
// 不执行 JS 的抓取器(Bing、GPTBot、ClaudeBot 等)因此看不到项目里的任何一条链接,
// 本站也就不是子站(如 semaphore.bobochang.cn)的一条入链。这里把同一份数据渲染成
// 普通链接列表放在 #root 之外:无 JS 时可见(顺带让无 JS 访客不再面对空白页),
// React 挂载后由 app.jsx 移除,内容与卡片完全一致,不是给爬虫的另一套文案。
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, "src/data.jsx"), "utf8"), sandbox);
const SITE = sandbox.window.SITE;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const item = ({ name, primary, image, zh, en, extra }) => {
  const tail = extra ? ` · <a href="${esc(extra.url)}">${esc(extra.label)}</a>` : "";
  return `    <li><a href="${esc(primary)}">${esc(name)}</a> · ${esc(image)} — ${esc(zh)} <span lang="en">${esc(en)}</span>${tail}</li>`;
};

const f = SITE.flagship;
const docs = f.links.find((l) => l.icon === "globe");
const repo = f.links.find((l) => l.icon === "github");
const lines = [
  item({ name: f.name, primary: repo.url, image: `${f.pennant.zh} · ${f.pennant.en}`, zh: f.desc.zh, en: f.desc.en,
         extra: docs ? { url: docs.url, label: docs.label.zh } : null }),
  ...SITE.fleet.map((s) => item({
    name: s.id, primary: s.site || s.github, image: s.image.zh, zh: s.desc.zh, en: s.desc.en,
    extra: s.site ? { url: s.github, label: "GitHub" } : null,
  })),
];

process.stdout.write(
`<nav id="static-fleet" aria-label="项目索引 · Project index">
  <h2>${esc(SITE.sections.fleet.zh)} · ${esc(SITE.sections.fleet.en)}</h2>
  <ul>
${lines.join("\n")}
  </ul>
  <p><a href="${esc(SITE.meta.github)}">GitHub @${esc(SITE.meta.handle)}</a></p>
${writing()}</nav>
`);

// 文章列表来自 build/posts.json(build-posts.js 先跑);没有文章时不输出任何东西。
function writing() {
  const file = path.join(root, "build/posts.json");
  if (!fs.existsSync(file)) return "";
  const posts = JSON.parse(fs.readFileSync(file, "utf8"));
  if (!posts.length) return "";
  return `  <h2>文章 · Writing</h2>
  <ul>
${posts.map((p) => `    <li><a href="${esc(p.url)}">${esc(p.title)}</a> · ${esc(p.date)} — ${esc(p.summary_zh)} <span lang="en">${esc(p.summary_en)}</span></li>`).join("\n")}
  </ul>
`;
}
