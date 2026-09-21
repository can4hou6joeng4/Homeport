# bobochang.cn

`Homeport` 是 `bobochang.cn` 的源码仓库与发布入口。

[bobochang.cn](https://bobochang.cn) 是 Bobochang 的个人主页，直接展示 AI Agent 工具链、CLI、自动化、本地优先应用和开源项目。界面采用黑色神经场、紫色信号、玻璃控制台和多层系统面板，支持中英双语、暗色 / 亮色主题及交互微调。

## 结构

```
src/         源码(设计系统 CSS 在 Personal Homepage.html;Canvas 神经场与数据 / 图标 / 组件 / 应用分层 JSX)
fonts/       自托管字体(Space Grotesk + IBM Plex Mono,woff2)
vendor/      自托管 React 18 生产版 UMD
dist/        构建产物(部署到 Cloudflare 的即为此目录)
build.sh     构建脚本:拼接 JSX → Babel 预编译 → 组装 dist/
wrangler.jsonc  Cloudflare Workers 静态资产配置(绑定 bobochang.cn / www)
```

## 开发

```bash
# 预览源码原型(多文件 JSX 必须走 HTTP,file:// 会静默失败)
python3 -m http.server 4311 --directory src
# 打开 http://localhost:4311/Personal%20Homepage.html
```

## 构建 & 部署

```bash
npm install        # Babel 工具链
./build.sh         # 产出 dist/
npx wrangler deploy  # 部署 Cloudflare Workers + 自定义域名
```

`build.sh` 还会把项目索引渲染成静态 HTML 注入 `#root` 之前(`scripts/static-fleet.js`,数据同样来自 `src/data.jsx`):不执行 JS 的抓取器(Bing、各家 AI 爬虫)因此能看到每个项目的链接,本站也能为子站提供正常入链;React 挂载后即移除,无 JS 访客则直接看到这份索引。

文章放在 `posts/<slug>.md`(front matter:title / slug / date / lang / description / image / summary_zh / summary_en,图片在 `posts/images/`),`scripts/build-posts.js` 在构建时渲染成 `dist/writing/<slug>/index.html` 纯静态页(设计令牌从主页抽取,主题读同一个 localStorage 键),并生成 `sitemap.xml` 与 `robots.txt`;主页的静态索引和链接区会带上文章链接。

站点数据(星标 / 贡献 / 语言分布)为快照,不在运行时请求 GitHub。GitHub Actions 计划于每周一 09:30(北京时间,实际调度可能延迟)刷新:`scripts/refresh-data.py` 拉取实时数据重写 `src/data.jsx`,**有变化才**构建、部署并提交(workflow:[`refresh-data.yml`](.github/workflows/refresh-data.yml),也可在 Actions 页面手动触发)。单个项目仓库返回 HTTP 404 时会记录警告并跳过,其他项目继续刷新;认证、限流等其他错误仍会终止任务。

本地手动刷新:

```bash
python3 scripts/refresh-data.py   # 需已登录的 gh CLI
./build.sh && npx wrangler deploy
```

## Projects

| 项目 | 用途 |
|---|---|
| 🤖 [boss-agent-cli](https://github.com/can4hou6joeng4/boss-agent-cli) | BOSS 直聘 agent CLI |
| 🗼 [Beacon](https://github.com/can4hou6joeng4/Beacon) | PDF 证件有效期审计 |
| ⏱️ [Watch](https://github.com/can4hou6joeng4/Watch) | 跨 CLI 编程 Agent 本地会话接力 · [relay.bobochang.cn](https://relay.bobochang.cn) |
| 🚩 [Semaphore](https://github.com/can4hou6joeng4/Semaphore) | 浏览器本地 ASCII 艺术 |
| 🎣 [Trawl](https://github.com/can4hou6joeng4/Trawl) | 法律文书结构化取证台 |
| 🌊 [Tide](https://github.com/can4hou6joeng4/Tide) | 掘金每日签到 |
| 🛟 [Buoy](https://github.com/can4hou6joeng4/Buoy) | AnyRouter 多账号签到 |
| 🏝️ [Landfall](https://github.com/can4hou6joeng4/Landfall) | 产品页面设计技能 |

## License

[MIT](LICENSE)
