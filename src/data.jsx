// data.jsx — 站点全部内容数据(中英双语)。组件不写死文案，均从此处取。
// 数据快照日期：2026-07-22,来源：github.com/can4hou6joeng4(见 readme.md)。

const LANG_COLORS = {
  Swift: "#F05138",
  Python: "#3776AB",
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  Go: "#00ADD8",
  HTML: "#E34C26",
  Vue: "#41B883",
  Other: "#8B949E",
};

// 双语取值：{zh, en} 对象按当前语言取；普通字符串原样返回。
const tr = (v, lang) => {
  if (v && typeof v === "object" && !Array.isArray(v) && ("zh" in v || "en" in v)) {
    return v[lang] != null ? v[lang] : (v.zh != null ? v.zh : v.en);
  }
  return v;
};

const SITE = {
  meta: {
    handle: "can4hou6joeng4",
    github: "https://github.com/can4hou6joeng4",
    coords: "23°08′ N · 113°16′ E",
    port: { zh: "母港 · 广州", en: "HOME PORT · GUANGZHOU" },
    title: { zh: "Bobochang · 开源船队", en: "Bobochang · The Fleet" },
  },

  nav: [
    { id: "flagship", zh: "旗舰", en: "Flagship" },
    { id: "fleet", zh: "编队", en: "Fleet" },
    { id: "log", zh: "日志", en: "Logbook" },
    { id: "captain", zh: "船长室", en: "Captain" },
    { id: "moorings", zh: "泊位", en: "Moorings" },
  ],

  hero: {
    name: "Bobochang",
    roles: {
      zh: "AI Agent 开发者 · 全栈工程师 · 开源维护者",
      en: "AI Agent Developer · Full Stack Engineer · Open Source Maintainer",
    },
    tagline: { zh: "各自航行，同队而动。", en: "Each sails alone —\nthey move as one fleet." },
    bio: {
      zh: "我构建 agent-first 的自动化工具、CLI 产品与实用的开发者工作流，把重复劳动变成可靠系统。",
      en: "I build agent-first automation tools, CLI products, and practical developer workflows that turn repeated work into reliable systems.",
    },
    ctaFleet: { zh: "检阅船队", en: "Review the fleet" },
    ctaGithub: "GitHub",
    vessels: { zh: "9 艘在航", en: "9 vessels under way" },
    routeLabel: { zh: "航线 · 2024 — 2026", en: "ROUTE · 2024 — 2026" },
  },

  sections: {
    flagship: { no: "01", zh: "旗舰", en: "The Flagship",
      sub: { zh: "船队里吨位最大的一艘。", en: "The heaviest tonnage in the fleet." } },
    fleet: { no: "02", zh: "编队", en: "In Formation",
      sub: { zh: "一套命名语法：一个单词、一个意象、一个 emoji。", en: "One naming grammar — a single word, a single image, a single emoji." } },
    log: { no: "03", zh: "航海日志", en: "The Logbook",
      sub: { zh: "过去一年的航行记录。", en: "A year of sailing, on the record." } },
    captain: { no: "04", zh: "船长室", en: "Captain's Quarters",
      sub: { zh: "掌舵的人。", en: "The one at the helm." } },
    moorings: { no: "05", zh: "泊位", en: "Moorings",
      sub: { zh: "有货要载、有航线要合？欢迎靠泊。", en: "Cargo to ship, routes to chart together? Come alongside." } },
  },

  flagship: {
    id: "boss-agent-cli",
    emoji: "🤖",
    name: "boss-agent-cli",
    stars: "1,433",
    starsNote: { zh: "GitHub 星标", en: "GitHub stars" },
    desc: {
      zh: "为 AI agent 打造的 BOSS 直聘本地辅助 CLI —— 搜索、福利筛选、意向清单、JSON 信封输出；默认低风险、合规运行。",
      en: "Local-assist BOSS Zhipin CLI built for AI agents — search, welfare filtering, shortlists, JSON-envelope output. Low-risk & compliant by default.",
    },
    tech: ["Python", "MCP", "Agent Skill", "CLI", "GitHub Actions"],
    links: [
      { label: { zh: "仓库", en: "Repository" }, url: "https://github.com/can4hou6joeng4/boss-agent-cli", icon: "github" },
      { label: { zh: "文档站", en: "Docs" }, url: "https://can4hou6joeng4.github.io/boss-agent-cli/", icon: "globe" },
    ],
    pennant: { zh: "旗舰", en: "FLAGSHIP" },
    term: [
      { t: "cmd", s: "boss search \"Golang 后端\" --city 广州 --welfare 五险一金" },
      { t: "out", s: "✓ 32 jobs matched · 5 shortlisted · 0.8s" },
      { t: "json", s: "{" },
      { t: "json", s: "  \"ok\": true," },
      { t: "json", s: "  \"shortlist\": [" },
      { t: "json", s: "    { \"company\": \"···\", \"salary\": \"18-25K\"," },
      { t: "json", s: "      \"welfare\": [\"五险一金\", \"双休\", \"年终奖\"] }" },
      { t: "json", s: "  ]" },
      { t: "json", s: "}" },
      { t: "cursor", s: "" },
    ],
  },

  fleet: [
    {
      id: "Harbor", emoji: "⚓", lang: "Swift", stars: 0,
      image: { zh: "港湾 · 停泊与收藏", en: "harbor · dock & keep" },
      desc: {
        zh: "本地优先的 Mac 阅读与收藏应用 —— 数据全在本地的知识港湾，RSS 与稍后读一站收齐。",
        en: "Local-first reading & curation for macOS — a knowledge harbor where your data never leaves the machine.",
      },
      tech: ["Swift", "SwiftUI", "SQLite"],
      github: "https://github.com/can4hou6joeng4/Harbor",
    },
    {
      id: "Beacon", emoji: "🗼", lang: "TypeScript", stars: 0,
      image: { zh: "灯塔 · 预警在前", en: "beacon · warn ahead" },
      desc: {
        zh: "在证件过期之前，点亮它 —— PDF 证件有效期云端审计，OCR 自动识别到期日。",
        en: "Light up certificates before they lapse — cloud PDF expiry audits with OCR-extracted dates.",
      },
      tech: ["Next.js", "Cloudflare Workers", "PaddleOCR"],
      github: "https://github.com/can4hou6joeng4/Beacon",
      site: "https://pdf-audit.bobochang.cn",
    },
    {
      id: "Atlas", emoji: "🗺️", lang: "Swift", stars: 1,
      image: { zh: "海图 · 丈量航程", en: "chart · measure the voyage" },
      desc: {
        zh: "在 macOS 菜单栏丈量本地 AI 编程航程 —— token、成本、会话与 Git 活动一目了然。",
        en: "Chart your local AI-coding voyage from the macOS menu bar — tokens, cost, sessions, Git activity.",
      },
      tech: ["Swift", "SwiftUI", "Sparkle"],
      github: "https://github.com/can4hou6joeng4/Atlas",
      site: "https://can4hou6joeng4.github.io/Atlas/",
    },
    {
      id: "Semaphore", emoji: "🚩", lang: "TypeScript", stars: 0,
      image: { zh: "旗语 · 图像化作字符", en: "flag signals · image to characters" },
      desc: {
        zh: "把图片打成字符旗语 —— 全程在浏览器本地完成，无上传、无账号，支持盲文与 CRT 风格。",
        en: "Turn any image into ASCII art right in the browser — no upload, no account; Braille & CRT modes included.",
      },
      tech: ["Vite", "TypeScript", "Canvas"],
      github: "https://github.com/can4hou6joeng4/Semaphore",
      site: "https://semaphore.bobochang.cn",
    },
    {
      id: "Trawl", emoji: "🎣", lang: "Go", stars: 0,
      image: { zh: "拖网 · 一网打捞", en: "trawl · haul it all in" },
      desc: {
        zh: "把成摞法律文书一网打捞成结构化数据的桌面取证台 —— PDF、DOCX、OCR 通吃。",
        en: "A desktop forensics bench that nets stacks of legal documents into structured data — PDF, DOCX, OCR.",
      },
      tech: ["Wails", "Go", "Vue"],
      github: "https://github.com/can4hou6joeng4/Trawl",
      site: "https://github.com/can4hou6joeng4/Trawl/releases/latest",
      siteLabel: { zh: "下载", en: "Download" },
    },
    {
      id: "Tide", emoji: "🌊", lang: "JavaScript", stars: 0,
      image: { zh: "潮汐 · 守时如海", en: "tide · punctual as the sea" },
      desc: {
        zh: "如潮汐般守时的掘金每日签到 —— 免费抽奖，Telegram 播报战果。",
        en: "Daily Juejin check-ins, punctual as the tide — free lottery draws, results piped to Telegram.",
      },
      tech: ["Playwright", "GitHub Actions"],
      github: "https://github.com/can4hou6joeng4/Tide",
    },
    {
      id: "Buoy", emoji: "🛟", lang: "Python", stars: 0,
      image: { zh: "浮标 · 按时浮出", en: "buoy · surface on schedule" },
      desc: {
        zh: "按时浮出水面报到的 AnyRouter 多账号自动签到 —— 多平台通知，智能隐私脱敏。",
        en: "AnyRouter multi-account check-in that surfaces on schedule — notifications with privacy masking.",
      },
      tech: ["Python", "GitHub Actions"],
      github: "https://github.com/can4hou6joeng4/Buoy",
    },
    {
      id: "landing-craft", emoji: "🛥️", lang: "HTML", stars: 2,
      image: { zh: "登陆艇 · 抢滩上岸", en: "landing craft · hit the beach" },
      desc: {
        zh: "让落地页真正「落地」的 Claude Code 技能 —— 57 套城市灵感设计系统与 GSAP 动效。",
        en: "A Claude Code skill that puts landing pages ashore — 57 city-inspired design systems, GSAP motion.",
      },
      tech: ["Claude Code", "GSAP", "SVG"],
      github: "https://github.com/can4hou6joeng4/landing-craft",
      site: "https://can4hou6joeng4.github.io/landing-craft/",
    },
  ],

  fleetNarrative: {
    zh: "Harbor 收好你读过的，Beacon 在过期前点亮；Atlas 丈量航程，Tide 与 Buoy 按时浮出报到；Semaphore 把图像打成旗语，Trawl 把文书捞成数据，landing-craft 送页面抢滩上岸 —— 各自航行，同队而动。",
    en: "Harbor keeps what you read, and Beacon warns before it expires. Atlas charts the voyage while Tide and Buoy surface on schedule to report in. Semaphore signals images into characters, Trawl hauls documents up as data, and landing-craft puts your pages ashore — each sails alone, but they move as one fleet.",
  },

  stats: [
    { value: "1,436", icon: "star", label: { zh: "累计星标", en: "Total stars" } },
    { value: "1,312", icon: "pulse", label: { zh: "年度贡献", en: "Contributions / yr" } },
    { value: "9", icon: "ship", label: { zh: "在航船只", en: "Vessels under way" } },
    { value: "13", icon: "box", label: { zh: "公开仓库", en: "Public repos" } },
  ],

  langMix: {
    title: { zh: "主航线 · 语言分布", en: "Main routes · language mix" },
    note: { zh: "按船队各仓库代码量统计", en: "By code volume across fleet repositories" },
    items: [
      { name: "Swift", pct: 44 },
      { name: "Python", pct: 34 },
      { name: "HTML", pct: 8 },
      { name: "TypeScript", pct: 6 },
      { name: "JavaScript", pct: 3 },
      { name: "Other", pct: 5 },
    ],
  },

  captain: {
    paras: [
      {
        zh: "泊于广州，长期在开源海域巡航。主攻 AI agent 工具链与自动化：让 agent 直接可用的 CLI、跑在 GitHub Actions 上的守时机器人、数据不出本机的 macOS 应用。",
        en: "Anchored in Guangzhou, cruising open-source waters. Focus: AI-agent toolchains and automation — CLIs that agents can drive, punctual bots on GitHub Actions, and local-first macOS apps.",
      },
      {
        zh: "造船的标准只有一条：把重复劳动变成可靠系统，然后让它自己航行。",
        en: "One shipwright's rule: turn repeated work into a reliable system — then let it sail on its own.",
      },
    ],
    philosophy: {
      quote: { zh: "一套命名语法：一个单词、一个意象、一个 emoji。", en: "One naming grammar — a single word, a single image, a single emoji." },
      source: { zh: "船队命名守则 · README", en: "The Fleet · README" },
    },
    groups: [
      { k: { zh: "语言", en: "Languages" }, items: ["Python", "TypeScript", "Go", "Swift", "JavaScript"] },
      { k: { zh: "航域", en: "Waters" }, items: [
        "AI Agents", "MCP",
        { zh: "CLI 工具", en: "CLI tools" },
        { zh: "macOS 应用", en: "macOS apps" },
        "Serverless",
        { zh: "自动化 & OCR", en: "Automation & OCR" },
      ] },
      { k: { zh: "索具", en: "Rigging" }, items: ["Claude Code", "GitHub Actions", "Cloudflare", "SwiftUI", "Playwright", "Wails", "Vite", "Next.js"] },
    ],
    location: { zh: "泊于广州 · 珠江口", en: "Anchored in Guangzhou · Pearl River estuary" },
  },

  moorings: [
    { icon: "github", name: "GitHub", handle: "@can4hou6joeng4",
      url: "https://github.com/can4hou6joeng4",
      note: { zh: "船籍港", en: "Port of registry" } },
    { icon: "book", name: { zh: "掘金专栏", en: "Juejin blog" }, handle: "juejin.cn",
      url: "https://juejin.cn/user/1187904004821262",
      note: { zh: "航海记录", en: "Voyage notes" } },
    { icon: "box", name: "Homeport", handle: "src · bobochang.cn",
      url: "https://github.com/can4hou6joeng4/Homeport",
      note: { zh: "本站源码 · 母港", en: "This site's source" } },
    { icon: "grid", name: "CheckMyGit", handle: "bento",
      url: "https://checkmygit.com/can4hou6joeng4?template=bento",
      note: { zh: "交互式档案", en: "Interactive profile" } },
  ],

  footer: {
    line: { zh: "泊于广州，航向开源。", en: "Anchored in Guangzhou, sailing open source." },
    crafted: { zh: "以 HTML 为帆", en: "HTML for sails" },
    surface: { zh: "浮出水面", en: "Surface" },
  },

  tweaks: {
    title: { zh: "微调", en: "Tweaks" },
    theme: { zh: "主题", en: "Theme" },
    night: { zh: "夜航", en: "Night" },
    chart: { zh: "海图", en: "Chart" },
    hue: { zh: "灯塔色相", en: "Beacon hue" },
    contours: { zh: "海图纹理", en: "Chart texture" },
    motion: { zh: "入场动画", en: "Motion" },
    reset: { zh: "复位", en: "Reset" },
  },
};

Object.assign(window, { SITE, LANG_COLORS, tr });
