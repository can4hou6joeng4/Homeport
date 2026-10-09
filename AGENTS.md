# AGENTS.md

`bobochang.cn` 个人主页的源码与发布仓库。纯静态站：多文件 JSX 在构建时拼接并用 Babel 预编译，部署到 Cloudflare Workers 静态资产。

## 目录

- `src/` — 页面源码：`Personal Homepage.html`（含设计系统 CSS）、`data.jsx`（站点数据快照）、`icons.jsx`、`components.jsx`、`app.jsx`
- `posts/` — 文章 Markdown（front matter：title / slug / date / lang / description / image / summary_zh / summary_en），图片在 `posts/images/`
- `scripts/` — `build-posts.js`（文章页 + sitemap + robots）、`static-fleet.js`（无 JS 抓取器可见的项目索引）、`refresh-data.py`（刷新 GitHub 数据快照）、`notify-telegram.py`
- `vendor/`、`fonts/` — 自托管 React UMD 与字体，不要改成 CDN
- `dist/` — 构建产物（部署的就是它）
- `build.sh` / `wrangler.jsonc` — 构建脚本与 Cloudflare 配置

## 常用命令

```bash
npm ci                                              # 安装 Babel 工具链
python3 -m http.server 4311 --directory src         # 预览源码（必须走 HTTP，file:// 会静默失败）
./build.sh                                          # 产出 dist/，包含 node --check 和若干断言
```

仓库没有测试和 lint；改动后至少跑一次 `./build.sh` 确认通过。

## 约定

- commit message：`type: 中文描述`（feat / fix / docs / chore / ci …）。
- `src/data.jsx` 由每周的 `refresh-data` 工作流自动重写，手工改动要和脚本输出格式保持一致。
- `build.sh` 里的断言（Google Fonts 已替换、无 unpkg/dev 脚本、静态项目索引存在）是发布护栏，不要删。

## 不要做

- 不要运行 `npm run deploy` / `wrangler deploy`，部署由维护者或工作流执行。
- 不要在运行时向 GitHub 请求数据；站点数据只来自快照。
- 不要提交 token、`.env` 或 Telegram 配置；工作流用的是仓库 secrets。
