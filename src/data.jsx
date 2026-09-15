// data.jsx — 站点全部内容数据(中英双语)。组件不写死文案，均从此处取。
// 数据快照日期：2026-09-15,来源：github.com/can4hou6joeng4(见 readme.md)。

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
    port: { zh: "广州 · 中国", en: "GUANGZHOU · CHINA" },
    title: { zh: "Bobochang · AI Agent 工具与自动化", en: "Bobochang · AI Agent Tools & Automation" },
  },

  nav: [
    { id: "flagship", zh: "重点项目", en: "Featured" },
    { id: "fleet", zh: "开源项目", en: "Projects" },
    { id: "log", zh: "数据与动态", en: "Activity" },
    { id: "captain", zh: "关于", en: "About" },
    { id: "moorings", zh: "链接", en: "Links" },
  ],

  hero: {
    name: "Bobochang",
    roles: {
      zh: "AI Agent 开发者 · 全栈工程师 · 开源维护者",
      en: "AI Agent Developer · Full Stack Engineer · Open Source Maintainer",
    },
    tagline: {
      zh: "为 AI Agent 构建可靠的工具、自动化系统与开发者工作流。",
      en: "Reliable tools, automation systems, and developer workflows for AI agents.",
    },
    bio: {
      zh: "独立项目，共享同一套工程原则：明确边界、本地优先、自动化可验证、默认低风险。",
      en: "Independent projects, guided by the same engineering principles: explicit boundaries, local-first design, verifiable automation, and low-risk defaults.",
    },
    ctaFleet: { zh: "查看项目", en: "View projects" },
    ctaGithub: "GitHub",
    vessels: { zh: "9 个开源项目", en: "9 open-source projects" },
    routeLabel: { zh: "项目记录 · 2024 — 2026", en: "PROJECT LOG · 2024 — 2026" },
  },

  sections: {
    flagship: { no: "01", zh: "重点项目", en: "Featured Project",
      sub: { zh: "当前最具代表性的开源项目。", en: "The open-source project that best represents my current work." } },
    fleet: { no: "02", zh: "开源项目", en: "Open Source Projects",
      sub: { zh: "面向具体问题构建的工具、应用与自动化系统。", en: "Tools, applications, and automation systems built around concrete problems." } },
    log: { no: "03", zh: "数据与动态", en: "Activity",
      sub: { zh: "GitHub 项目与过去一年的公开活动快照。", en: "A snapshot of GitHub projects and public activity from the past year." } },
    captain: { no: "04", zh: "关于", en: "About",
      sub: { zh: "我的方向、工程原则与常用工具。", en: "Focus areas, engineering principles, and the tools I use." } },
    moorings: { no: "05", zh: "链接", en: "Links",
      sub: { zh: "项目源码、技术文章与其他公开档案。", en: "Project source, technical writing, and other public profiles." } },
  },

  flagship: {
    id: "boss-agent-cli",
    emoji: "🤖",
    name: "boss-agent-cli",
    stars: "1,976",
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
    pennant: { zh: "重点项目", en: "FEATURED PROJECT" },
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
      id: "Harbor", emoji: "⚓", lang: "Swift", stars: 1,
      image: { zh: "Mac 阅读与收藏", en: "Reading and curation for macOS" },
      desc: {
        zh: "本地优先的 macOS 阅读与收藏应用，整合 RSS 与稍后读，数据保留在本机。",
        en: "A local-first macOS reading and curation app that combines RSS and read-later workflows while keeping data on the device.",
      },
      tech: ["Swift", "SwiftUI", "SQLite"],
      github: "https://github.com/can4hou6joeng4/Harbor",
    },
    {
      id: "Beacon", emoji: "🗼", lang: "TypeScript", stars: 1,
      image: { zh: "PDF 到期审计", en: "PDF expiry audits" },
      desc: {
        zh: "PDF 证件有效期云端审计服务，通过 OCR 自动识别到期日并提供预警。",
        en: "A cloud service that audits PDF certificate validity, extracts expiry dates with OCR, and provides advance warnings.",
      },
      tech: ["Next.js", "Cloudflare Workers", "PaddleOCR"],
      github: "https://github.com/can4hou6joeng4/Beacon",
      site: "https://pdf-audit.bobochang.cn",
    },
    {
      id: "Atlas", emoji: "🗺️", lang: "Swift", stars: 2,
      image: { zh: "AI 编程用量", en: "AI coding usage" },
      desc: {
        zh: "在 macOS 菜单栏汇总本地 AI 编程用量，包括 token、成本、会话与 Git 活动。",
        en: "A macOS menu bar app for tracking local AI coding usage, including tokens, cost, sessions, and Git activity.",
      },
      tech: ["Swift", "SwiftUI", "Sparkle"],
      github: "https://github.com/can4hou6joeng4/Atlas",
      site: "https://can4hou6joeng4.github.io/Atlas/",
    },
    {
      id: "Watch", emoji: "⏱️", lang: "TypeScript", stars: 1,
      image: { zh: "Agent 会话接力", en: "Agent session handoff" },
      desc: {
        zh: "跨 CLI 编程 Agent 的本地会话接力工具，可将已有记录与工作目录转入 Codex、OpenCode、Kimi 或 Pi。",
        en: "A local session handoff tool for coding agents that carries existing history and the working directory into Codex, OpenCode, Kimi, or Pi.",
      },
      tech: ["TypeScript", "Tauri", "node:sqlite"],
      github: "https://github.com/can4hou6joeng4/Watch",
      site: "https://relay.bobochang.cn",
    },
    {
      id: "Semaphore", emoji: "🚩", lang: "TypeScript", stars: 1,
      image: { zh: "浏览器图像转字符", en: "Browser image-to-text art" },
      desc: {
        zh: "在浏览器本地将图片转换为字符画，无需上传或账号，支持盲文与 CRT 风格。",
        en: "A browser-local image-to-character converter with no uploads or accounts, including Braille and CRT modes.",
      },
      tech: ["Vite", "TypeScript", "Canvas"],
      github: "https://github.com/can4hou6joeng4/Semaphore",
      site: "https://semaphore.bobochang.cn",
    },
    {
      id: "Trawl", emoji: "🎣", lang: "Go", stars: 1,
      image: { zh: "文书结构化取证", en: "Document forensics" },
      desc: {
        zh: "将批量法律文书转换为结构化数据的桌面取证工具，支持 PDF、DOCX 与 OCR。",
        en: "A desktop forensics tool that converts batches of legal documents into structured data from PDF, DOCX, and OCR inputs.",
      },
      tech: ["Wails", "Go", "Vue"],
      github: "https://github.com/can4hou6joeng4/Trawl",
      site: "https://github.com/can4hou6joeng4/Trawl/releases/latest",
      siteLabel: { zh: "下载", en: "Download" },
    },
    {
      id: "Tide", emoji: "🌊", lang: "JavaScript", stars: 1,
      image: { zh: "掘金自动签到", en: "Juejin check-in automation" },
      desc: {
        zh: "自动完成掘金每日签到与免费抽奖，并通过 Telegram 推送执行结果。",
        en: "Automates daily Juejin check-ins and free lottery draws, with execution results delivered through Telegram.",
      },
      tech: ["Playwright", "GitHub Actions"],
      github: "https://github.com/can4hou6joeng4/Tide",
    },
    {
      id: "Buoy", emoji: "🛟", lang: "Python", stars: 1,
      image: { zh: "AnyRouter 多账号签到", en: "AnyRouter multi-account check-in" },
      desc: {
        zh: "AnyRouter 多账号自动签到工具，支持多平台通知与隐私脱敏。",
        en: "An AnyRouter multi-account check-in tool with multi-platform notifications and privacy masking.",
      },
      tech: ["Python", "GitHub Actions"],
      github: "https://github.com/can4hou6joeng4/Buoy",
    },
    {
      id: "Landfall", emoji: "🏝️", lang: "HTML", stars: 1,
      image: { zh: "产品页面设计技能", en: "Product page design skill" },
      desc: {
        zh: "面向产品页面的 Claude Code 设计技能，提供 57 套城市灵感设计系统与 GSAP 动效。",
        en: "A Claude Code design skill for product pages, with 57 city-inspired design systems and GSAP motion patterns.",
      },
      tech: ["Claude Code", "GSAP", "SVG"],
      github: "https://github.com/can4hou6joeng4/Landfall",
      site: "https://can4hou6joeng4.github.io/Landfall/",
    },
  ],

  fleetNarrative: {
    zh: "这些项目面向不同问题，但遵循相同原则：明确边界、本地优先、自动化可验证、默认低风险。",
    en: "These projects address different problems but follow the same principles: explicit boundaries, local-first design, verifiable automation, and low-risk defaults.",
  },

  stats: [
    { value: "1,986", icon: "star", label: { zh: "累计星标", en: "Total stars" } },
    { value: "1,639", icon: "pulse", label: { zh: "年度贡献", en: "Contributions / yr" } },
    { value: "10", icon: "grid", label: { zh: "开源项目", en: "Open-source projects" } },
    { value: "14", icon: "box", label: { zh: "自建仓库", en: "Own repos" } },
  ],

  langMix: {
    title: { zh: "技术语言分布", en: "Language mix" },
    note: { zh: "按所列项目仓库代码量统计", en: "By code volume across listed project repositories" },
    items: [
      { name: "Swift", pct: 34 },
      { name: "Python", pct: 32 },
      { name: "TypeScript", pct: 14 },
      { name: "HTML", pct: 10 },
      { name: "JavaScript", pct: 4 },
      { name: "Go", pct: 2 },
      { name: "Vue", pct: 1 },
      { name: "Other", pct: 3 },
    ],
  },

  captain: {
    paras: [
      {
        zh: "常驻广州，专注 AI Agent 工具链、CLI、自动化和本地优先应用：让 Agent 直接使用工具，让重复流程能够稳定运行，让敏感数据尽量留在本机。",
        en: "Based in Guangzhou, I focus on AI-agent toolchains, CLIs, automation, and local-first applications: tools agents can use directly, repeatable workflows that run reliably, and sensitive data kept on-device where practical.",
      },
      {
        zh: "把重复劳动变成可靠系统。",
        en: "Turn repeated work into reliable systems.",
      },
    ],
    philosophy: {
      quote: { zh: "GitHub 仓库命名：一个单词、一个意象、一个 emoji。", en: "GitHub repository naming: one word, one image, one emoji." },
      source: { zh: "仓库命名原则", en: "Repository naming principle" },
    },
    groups: [
      { k: { zh: "语言", en: "Languages" }, items: ["Python", "TypeScript", "Go", "Swift", "JavaScript"] },
      { k: { zh: "方向", en: "Focus" }, items: [
        "AI Agents", "MCP",
        { zh: "CLI 工具", en: "CLI tools" },
        { zh: "macOS 应用", en: "macOS apps" },
        "Serverless",
        { zh: "自动化 & OCR", en: "Automation & OCR" },
      ] },
      { k: { zh: "工具栈", en: "Tool stack" }, items: ["Claude Code", "GitHub Actions", "Cloudflare", "SwiftUI", "Playwright", "Wails", "Vite", "Next.js"] },
    ],
    location: { zh: "广州 · 中国", en: "Guangzhou · China" },
  },

  moorings: [
    { icon: "github", name: "GitHub", handle: "@can4hou6joeng4",
      url: "https://github.com/can4hou6joeng4",
      note: { zh: "开源项目与代码", en: "Open-source projects and code" } },
    { icon: "book", name: { zh: "掘金专栏", en: "Juejin blog" }, handle: "juejin.cn",
      url: "https://juejin.cn/user/1187904004821262",
      note: { zh: "中文技术文章", en: "Technical writing in Chinese" } },
    { icon: "book", name: { zh: "技术文章", en: "Writing" }, handle: "bobochang.cn/writing", url: "/writing/unicode-braille-8-pixel-bitmap-font/", note: { zh: "盲文点阵与误差扩散", en: "Braille bitmaps and error diffusion" }, external: false },
    { icon: "box", name: { zh: "本站源码", en: "Source code" }, handle: "github.com/can4hou6joeng4/Homeport",
      url: "https://github.com/can4hou6joeng4/Homeport",
      note: { zh: "bobochang.cn 的构建与发布", en: "Build and publishing source for bobochang.cn" } },
    { icon: "grid", name: "CheckMyGit", handle: "bento",
      url: "https://checkmygit.com/can4hou6joeng4?template=bento",
      note: { zh: "交互式档案", en: "Interactive profile" } },
  ],

  footer: {
    line: { zh: "广州 · AI Agent 工具与自动化", en: "Guangzhou · AI Agent tools and automation" },
    crafted: { zh: "开放源码，持续构建", en: "Open source, continuously built" },
    surface: { zh: "返回顶部", en: "Back to top" },
  },

  tweaks: {
    title: { zh: "微调", en: "Tweaks" },
    theme: { zh: "主题", en: "Theme" },
    night: { zh: "暗色", en: "Dark" },
    chart: { zh: "亮色", en: "Light" },
    hue: { zh: "信号色相", en: "Signal hue" },
    contours: { zh: "背景网络", en: "Background network" },
    motion: { zh: "入场动画", en: "Motion" },
    reset: { zh: "复位", en: "Reset" },
  },
};

Object.assign(window, { SITE, LANG_COLORS, tr });
