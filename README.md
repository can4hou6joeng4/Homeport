# 🧭 Homeport

**母港 · Where the fleet comes home.**

[bobochang.cn](https://bobochang.cn) 的源码 —— 个人主页「夜航海图 · The Fleet」。以 GitHub 仓库群的航海命名为整站隐喻:深海蓝 × 等深线 × 灯塔琥珀,中英双语,夜航 / 纸海图双主题。

> 一套命名语法:一个单词、一个意象、一个 emoji。
> Homeport 是船队的母港 —— 所有船只登记于此。

## 结构

```
src/         源码(设计系统 CSS 在 Personal Homepage.html;数据 / 图标 / 组件 / 应用分层 JSX)
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

站点数据(星标 / 贡献 / 语言分布)为快照,由本机 launchd 每日 09:30 自动刷新:
`scripts/refresh-and-deploy.sh` 拉取 GitHub 实时数据重写 `src/data.jsx`,**有变化才**构建、部署并提交推送(LaunchAgent:`cn.bobochang.homeport-refresh`,日志在 `~/Library/Logs/homeport-refresh.log`)。手动刷新直接跑同一脚本即可。

## ⚓ The Fleet

| 船 | 意象 | 航线 |
|---|---|---|
| 🤖 [boss-agent-cli](https://github.com/can4hou6joeng4/boss-agent-cli) | 旗舰 | BOSS 直聘 agent CLI |
| ⚓ [Harbor](https://github.com/can4hou6joeng4/Harbor) | 港湾 | 本地优先 Mac 阅读收藏 |
| 🗼 [Beacon](https://github.com/can4hou6joeng4/Beacon) | 灯塔 | PDF 证件有效期审计 |
| 🗺️ [Atlas](https://github.com/can4hou6joeng4/Atlas) | 海图 | AI 编程用量菜单栏应用 |
| 🚩 [Semaphore](https://github.com/can4hou6joeng4/Semaphore) | 旗语 | 浏览器本地 ASCII 艺术 |
| 🎣 [Trawl](https://github.com/can4hou6joeng4/Trawl) | 拖网 | 法律文书结构化取证台 |
| 🌊 [Tide](https://github.com/can4hou6joeng4/Tide) | 潮汐 | 掘金每日签到 |
| 🛟 [Buoy](https://github.com/can4hou6joeng4/Buoy) | 浮标 | AnyRouter 多账号签到 |
| 🛥️ [landing-craft](https://github.com/can4hou6joeng4/landing-craft) | 登陆艇 | 落地页 Claude Code 技能 |
| 🧭 **Homeport** | 母港 | 本站 · [bobochang.cn](https://bobochang.cn) |

## License

[MIT](LICENSE)
