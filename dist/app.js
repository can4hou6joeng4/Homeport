// data.jsx — 站点全部内容数据(中英双语)。组件不写死文案，均从此处取。
// 数据快照日期：2026-09-21,来源：github.com/can4hou6joeng4(见 readme.md)。

const LANG_COLORS = {
  Swift: "#F05138",
  Python: "#3776AB",
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  Go: "#00ADD8",
  HTML: "#E34C26",
  Vue: "#41B883",
  Other: "#8B949E"
};

// 双语取值：{zh, en} 对象按当前语言取；普通字符串原样返回。
const tr = (v, lang) => {
  if (v && typeof v === "object" && !Array.isArray(v) && ("zh" in v || "en" in v)) {
    return v[lang] != null ? v[lang] : v.zh != null ? v.zh : v.en;
  }
  return v;
};
const SITE = {
  meta: {
    handle: "can4hou6joeng4",
    github: "https://github.com/can4hou6joeng4",
    coords: "23°08′ N · 113°16′ E",
    port: {
      zh: "广州 · 中国",
      en: "GUANGZHOU · CHINA"
    },
    title: {
      zh: "Bobochang · AI Agent 工具与自动化",
      en: "Bobochang · AI Agent Tools & Automation"
    }
  },
  nav: [{
    id: "flagship",
    zh: "重点项目",
    en: "Featured"
  }, {
    id: "fleet",
    zh: "开源项目",
    en: "Projects"
  }, {
    id: "log",
    zh: "数据与动态",
    en: "Activity"
  }, {
    id: "moorings",
    zh: "链接",
    en: "Links"
  }],
  hero: {
    name: "Bobochang",
    headlineLead: "Think Faster.",
    headlineSub: "Master Your Mind.",
    tagline: {
      zh: "为 AI Agent 构建可靠的工具、自动化系统与开发者工作流。",
      en: "Reliable tools, automation systems, and developer workflows for AI agents."
    },
    bio: {
      zh: "专注于 AI Agent 工具链与本地自动化系统。",
      en: "Focusing on AI agent toolchains and local-first automation systems."
    },
    featureCards: [{
      icon: "solar:cpu-linear",
      title: {
        zh: "AI Agent 工具链",
        en: "AI Agent Toolchains"
      },
      desc: {
        zh: "构建可供 Agent 直接调用的标准 CLI 与 MCP 工具，确立明确边界与合规 JSON 输出。",
        en: "Standardized CLIs and MCP skills built for direct agent usage, with explicit boundaries and structured JSON outputs."
      }
    }, {
      icon: "solar:pulse-linear",
      title: {
        zh: "可验证自动化系统",
        en: "Verifiable Automation"
      },
      desc: {
        zh: "从跨 CLI 会话接力到定时运行与证件审计，把不可靠的人工作业转化为稳定高可用系统。",
        en: "From cross-CLI session handoff to automated routines and audits, turning friction into reliable systems."
      }
    }, {
      icon: "solar:shield-check-linear",
      title: {
        zh: "明确边界 · 本地优先",
        en: "Local-First & Low Risk"
      },
      desc: {
        zh: "敏感数据与凭据留在本机，默认低风险、合规运行，无需繁重云端依赖与数据上云。",
        en: "Sensitive data and credentials kept on-device with low-risk defaults and zero unnecessary lock-in."
      }
    }],
    ctaFleet: {
      zh: "查看开源作品",
      en: "Explore Projects"
    },
    ctaGithub: "GitHub",
    vessels: {
      zh: "8 个开源项目",
      en: "8 open-source projects"
    },
    routeLabel: {
      zh: "项目记录 · 2024 — 2026",
      en: "PROJECT LOG · 2024 — 2026"
    }
  },
  sections: {
    flagship: {
      no: "01",
      zh: "重点项目",
      en: "Featured Project",
      sub: {
        zh: "当前最具代表性的开源项目。",
        en: "The open-source project that best represents my current work."
      }
    },
    fleet: {
      no: "02",
      zh: "开源项目",
      en: "Open Source Projects",
      sub: {
        zh: "面向具体问题构建的工具、应用与自动化系统。",
        en: "Tools, applications, and automation systems built around concrete problems."
      }
    },
    log: {
      no: "03",
      zh: "数据与动态",
      en: "Activity",
      sub: {
        zh: "GitHub 项目与过去一年的公开活动快照。",
        en: "A snapshot of GitHub projects and public activity from the past year."
      }
    },
    moorings: {
      no: "04",
      zh: "链接",
      en: "Links",
      sub: {
        zh: "项目源码、技术文章与其他公开档案。",
        en: "Project source, technical writing, and other public profiles."
      }
    }
  },
  flagship: {
    id: "boss-agent-cli",
    emoji: "🤖",
    name: "boss-agent-cli",
    stars: "2,019",
    starsNote: {
      zh: "GitHub 星标",
      en: "GitHub stars"
    },
    desc: {
      zh: "为 AI agent 打造的 BOSS 直聘本地辅助 CLI —— 搜索、福利筛选、意向清单、JSON 信封输出；默认低风险、合规运行。",
      en: "Local-assist BOSS Zhipin CLI built for AI agents — search, welfare filtering, shortlists, JSON-envelope output. Low-risk & compliant by default."
    },
    tech: ["Python", "MCP", "Agent Skill", "CLI", "GitHub Actions"],
    links: [{
      label: {
        zh: "仓库",
        en: "Repository"
      },
      url: "https://github.com/can4hou6joeng4/boss-agent-cli",
      icon: "github"
    }, {
      label: {
        zh: "文档站",
        en: "Docs"
      },
      url: "https://can4hou6joeng4.github.io/boss-agent-cli/",
      icon: "globe"
    }],
    pennant: {
      zh: "重点项目",
      en: "FEATURED PROJECT"
    },
    term: [{
      t: "cmd",
      s: "boss search \"Golang 后端\" --city 广州 --welfare 五险一金"
    }, {
      t: "out",
      s: "✓ 32 jobs matched · 5 shortlisted · 0.8s"
    }, {
      t: "json",
      s: "{"
    }, {
      t: "json",
      s: "  \"ok\": true,"
    }, {
      t: "json",
      s: "  \"shortlist\": ["
    }, {
      t: "json",
      s: "    { \"company\": \"···\", \"salary\": \"18-25K\","
    }, {
      t: "json",
      s: "      \"welfare\": [\"五险一金\", \"双休\", \"年终奖\"] }"
    }, {
      t: "json",
      s: "  ]"
    }, {
      t: "json",
      s: "}"
    }, {
      t: "cursor",
      s: ""
    }]
  },
  fleet: [{
    id: "Beacon",
    emoji: "🗼",
    lang: "TypeScript",
    stars: 0,
    image: {
      zh: "PDF 到期审计",
      en: "PDF expiry audits"
    },
    desc: {
      zh: "PDF 证件有效期云端审计服务，通过 OCR 自动识别到期日并提供预警。",
      en: "A cloud service that audits PDF certificate validity, extracts expiry dates with OCR, and provides advance warnings."
    },
    tech: ["Next.js", "Cloudflare Workers", "PaddleOCR"],
    github: "https://github.com/can4hou6joeng4/Beacon",
    site: "https://pdf-audit.bobochang.cn"
  }, {
    id: "Watch",
    emoji: "⏱️",
    lang: "TypeScript",
    stars: 1,
    image: {
      zh: "Agent 会话接力",
      en: "Agent session handoff"
    },
    desc: {
      zh: "跨 CLI 编程 Agent 的本地会话接力工具，可将已有记录与工作目录转入 Codex、OpenCode、Kimi 或 Pi。",
      en: "A local session handoff tool for coding agents that carries existing history and the working directory into Codex, OpenCode, Kimi, or Pi."
    },
    tech: ["TypeScript", "Tauri", "node:sqlite"],
    github: "https://github.com/can4hou6joeng4/Watch",
    site: "https://relay.bobochang.cn"
  }, {
    id: "Semaphore",
    emoji: "🚩",
    lang: "TypeScript",
    stars: 0,
    image: {
      zh: "浏览器图像转字符",
      en: "Browser image-to-text art"
    },
    desc: {
      zh: "在浏览器本地将图片转换为字符画，无需上传或账号，支持盲文与 CRT 风格。",
      en: "A browser-local image-to-character converter with no uploads or accounts, including Braille and CRT modes."
    },
    tech: ["Vite", "TypeScript", "Canvas"],
    github: "https://github.com/can4hou6joeng4/Semaphore",
    site: "https://semaphore.bobochang.cn"
  }, {
    id: "Trawl",
    emoji: "🎣",
    lang: "Go",
    stars: 0,
    image: {
      zh: "文书结构化取证",
      en: "Document forensics"
    },
    desc: {
      zh: "将批量法律文书转换为结构化数据的桌面取证工具，支持 PDF、DOCX 与 OCR。",
      en: "A desktop forensics tool that converts batches of legal documents into structured data from PDF, DOCX, and OCR inputs."
    },
    tech: ["Wails", "Go", "Vue"],
    github: "https://github.com/can4hou6joeng4/Trawl",
    site: "https://github.com/can4hou6joeng4/Trawl/releases/latest",
    siteLabel: {
      zh: "下载",
      en: "Download"
    }
  }, {
    id: "Tide",
    emoji: "🌊",
    lang: "JavaScript",
    stars: 0,
    image: {
      zh: "掘金自动签到",
      en: "Juejin check-in automation"
    },
    desc: {
      zh: "自动完成掘金每日签到与免费抽奖，并通过 Telegram 推送执行结果。",
      en: "Automates daily Juejin check-ins and free lottery draws, with execution results delivered through Telegram."
    },
    tech: ["Playwright", "GitHub Actions"],
    github: "https://github.com/can4hou6joeng4/Tide"
  }, {
    id: "Buoy",
    emoji: "🛟",
    lang: "Python",
    stars: 0,
    image: {
      zh: "AnyRouter 多账号签到",
      en: "AnyRouter multi-account check-in"
    },
    desc: {
      zh: "AnyRouter 多账号自动签到工具，支持多平台通知与隐私脱敏。",
      en: "An AnyRouter multi-account check-in tool with multi-platform notifications and privacy masking."
    },
    tech: ["Python", "GitHub Actions"],
    github: "https://github.com/can4hou6joeng4/Buoy"
  }, {
    id: "Landfall",
    emoji: "🏝️",
    lang: "HTML",
    stars: 0,
    image: {
      zh: "产品页面设计技能",
      en: "Product page design skill"
    },
    desc: {
      zh: "面向产品页面的 Claude Code 设计技能，提供 57 套城市灵感设计系统与 GSAP 动效。",
      en: "A Claude Code design skill for product pages, with 57 city-inspired design systems and GSAP motion patterns."
    },
    tech: ["Claude Code", "GSAP", "SVG"],
    github: "https://github.com/can4hou6joeng4/Landfall",
    site: "https://can4hou6joeng4.github.io/Landfall/"
  }],
  fleetNarrative: {
    zh: "这些项目面向不同问题，但遵循相同原则：明确边界、本地优先、自动化可验证、默认低风险。",
    en: "These projects address different problems but follow the same principles: explicit boundaries, local-first design, verifiable automation, and low-risk defaults."
  },
  stats: [{
    value: "2,020",
    icon: "star",
    label: {
      zh: "累计星标",
      en: "Total stars"
    }
  }, {
    value: "1,287",
    icon: "pulse",
    label: {
      zh: "年度贡献",
      en: "Contributions / yr"
    }
  }, {
    value: "8",
    icon: "grid",
    label: {
      zh: "开源项目",
      en: "Open-source projects"
    }
  }, {
    value: "11",
    icon: "box",
    label: {
      zh: "自建仓库",
      en: "Own repos"
    }
  }],
  langMix: {
    title: {
      zh: "技术语言分布",
      en: "Language mix"
    },
    note: {
      zh: "按所列项目仓库代码量统计",
      en: "By code volume across listed project repositories"
    },
    items: [{
      name: "Python",
      pct: 55
    }, {
      name: "TypeScript",
      pct: 18
    }, {
      name: "HTML",
      pct: 16
    }, {
      name: "JavaScript",
      pct: 4
    }, {
      name: "Go",
      pct: 3
    }, {
      name: "Vue",
      pct: 1
    }, {
      name: "Other",
      pct: 3
    }]
  },
  moorings: [{
    icon: "github",
    name: "GitHub",
    handle: "@can4hou6joeng4",
    url: "https://github.com/can4hou6joeng4",
    note: {
      zh: "开源项目与代码仓库",
      en: "Open-source projects and code"
    }
  }, {
    icon: "book",
    name: {
      zh: "掘金专栏",
      en: "Juejin blog"
    },
    handle: "juejin.cn",
    url: "https://juejin.cn/user/1187904004821262",
    note: {
      zh: "技术博客与文章沉淀",
      en: "Technical writing and articles"
    }
  }, {
    icon: "book",
    name: {
      zh: "技术文章",
      en: "Writing"
    },
    handle: "bobochang.cn/writing",
    url: "/writing/unicode-braille-8-pixel-bitmap-font/",
    note: {
      zh: "盲文点阵与字体渲染实验",
      en: "Braille bitmaps and font experiments"
    },
    external: false
  }, {
    icon: "box",
    name: {
      zh: "本站源码",
      en: "Source code"
    },
    handle: "github.com/can4hou6joeng4/Homeport",
    url: "https://github.com/can4hou6joeng4/Homeport",
    note: {
      zh: "bobochang.cn 的构建与发布",
      en: "Build and publishing source for bobochang.cn"
    }
  }],
  footer: {
    line: {
      zh: "广州 · AI Agent 工具与自动化",
      en: "Guangzhou · AI Agent tools and automation"
    },
    crafted: {
      zh: "开放源码，持续构建",
      en: "Open source, continuously built"
    },
    surface: {
      zh: "返回顶部",
      en: "Back to top"
    }
  },
  tweaks: {
    title: {
      zh: "微调",
      en: "Tweaks"
    },
    theme: {
      zh: "主题",
      en: "Theme"
    },
    night: {
      zh: "暗色",
      en: "Dark"
    },
    chart: {
      zh: "亮色",
      en: "Light"
    },
    hue: {
      zh: "信号色相",
      en: "Signal hue"
    },
    contours: {
      zh: "背景网络",
      en: "Background network"
    },
    motion: {
      zh: "入场动画",
      en: "Motion"
    },
    reset: {
      zh: "复位",
      en: "Reset"
    }
  }
};
Object.assign(window, {
  SITE,
  LANG_COLORS,
  tr
});
// icons.jsx — 线性图标集(统一 1.8 描边)与背景系统所需图形。

const LineIcon = ({
  size = 16,
  vb = "0 0 24 24",
  children
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: vb,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, children);
const IconAnchor = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "5",
  r: "2.8"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "7.8",
  x2: "12",
  y2: "22"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 12H2a10 10 0 0 0 20 0h-3"
}));
const IconArrowUpRight = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("line", {
  x1: "7",
  y1: "17",
  x2: "17",
  y2: "7"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "8 7 17 7 17 16"
}));
const IconArrowUp = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "20",
  x2: "12",
  y2: "5"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "6 11 12 5 18 11"
}));
const IconArrowRight = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("line", {
  x1: "4",
  y1: "12",
  x2: "20",
  y2: "12"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "14 6 20 12 14 18"
}));
const IconMoon = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
}));
const IconSun = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4.2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "1.8",
  x2: "12",
  y2: "4"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "20",
  x2: "12",
  y2: "22.2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "1.8",
  y1: "12",
  x2: "4",
  y2: "12"
}), /*#__PURE__*/React.createElement("line", {
  x1: "20",
  y1: "12",
  x2: "22.2",
  y2: "12"
}), /*#__PURE__*/React.createElement("line", {
  x1: "4.8",
  y1: "4.8",
  x2: "6.4",
  y2: "6.4"
}), /*#__PURE__*/React.createElement("line", {
  x1: "17.6",
  y1: "17.6",
  x2: "19.2",
  y2: "19.2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "4.8",
  y1: "19.2",
  x2: "6.4",
  y2: "17.6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "17.6",
  y1: "6.4",
  x2: "19.2",
  y2: "4.8"
}));
const IconGlobe = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "12",
  x2: "21",
  y2: "12"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z"
}));
const IconBook = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
}));
const IconGrid = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "7",
  height: "7",
  rx: "1.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "14",
  y: "3",
  width: "7",
  height: "7",
  rx: "1.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "14",
  width: "7",
  height: "7",
  rx: "1.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "14",
  y: "14",
  width: "7",
  height: "7",
  rx: "1.5"
}));
const IconPin = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const IconPulse = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("polyline", {
  points: "22 12 18 12 15 21 9 3 6 12 2 12"
}));
const IconNetwork = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "5",
  r: "2.4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "5",
  cy: "17",
  r: "2.4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "19",
  cy: "17",
  r: "2.4"
}), /*#__PURE__*/React.createElement("line", {
  x1: "10.8",
  y1: "7.1",
  x2: "6.2",
  y2: "14.9"
}), /*#__PURE__*/React.createElement("line", {
  x1: "13.2",
  y1: "7.1",
  x2: "17.8",
  y2: "14.9"
}), /*#__PURE__*/React.createElement("line", {
  x1: "7.4",
  y1: "17",
  x2: "16.6",
  y2: "17"
}));
const IconTerminal = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "16",
  rx: "2"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "7 9 10 12 7 15"
}), /*#__PURE__*/React.createElement("line", {
  x1: "13",
  y1: "15",
  x2: "17",
  y2: "15"
}));
const IconSliders = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("line", {
  x1: "4",
  y1: "6",
  x2: "20",
  y2: "6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "6",
  r: "2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "4",
  y1: "12",
  x2: "20",
  y2: "12"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "15",
  cy: "12",
  r: "2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "4",
  y1: "18",
  x2: "20",
  y2: "18"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "18",
  r: "2"
}));
const IconShip = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("path", {
  d: "M2.5 15.5h19l-2.3 4.4a2 2 0 0 1-1.8 1.1H6.6a2 2 0 0 1-1.8-1.1z"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "3",
  x2: "12",
  y2: "15.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 4.5l5.6 7.5H12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 8.5L12 12h-4z"
}));
const IconBox = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 8l-9-5-9 5v8l9 5 9-5z"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "3 8 12 13 21 8"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "13",
  x2: "12",
  y2: "21"
}));
const IconFlag = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "3",
  x2: "5",
  y2: "21"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 4h13l-3 3.75L18 11.5H5"
}));
const IconStar = ({
  size = 16
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 1.9l3.13 6.35 7 1.02-5.06 4.93 1.19 6.98L12 17.9l-6.26 3.28 1.19-6.98L1.87 9.27l7-1.02z"
}));
const IconGitHub = ({
  size = 16
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
}));
const IconBrain = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("path", {
  d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"
}));
const IconShield = ({
  size = 16
}) => /*#__PURE__*/React.createElement(LineIcon, {
  size: size
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
}));

// 罗盘玫瑰:72 刻度环 + 三重圆环 + 八角星芒。纯线稿,颜色随 currentColor。
const CompassRose = () => {
  const C = 160;
  const ticks = [];
  for (let i = 0; i < 72; i++) {
    const a = i * 5 * Math.PI / 180;
    const major = i % 18 === 0;
    const mid = i % 9 === 0;
    const r1 = major ? 136 : mid ? 141 : 146;
    const r2 = 152;
    ticks.push(/*#__PURE__*/React.createElement("line", {
      key: i,
      x1: C + r1 * Math.sin(a),
      y1: C - r1 * Math.cos(a),
      x2: C + r2 * Math.sin(a),
      y2: C - r2 * Math.cos(a),
      strokeWidth: major ? 1.5 : 0.7
    }));
  }
  const starPts = [];
  for (let k = 0; k < 8; k++) {
    const aOut = k * 45 * Math.PI / 180;
    const aIn = (k * 45 + 22.5) * Math.PI / 180;
    const rOut = k % 2 === 0 ? 112 : 72;
    starPts.push(`${C + rOut * Math.sin(aOut)},${C - rOut * Math.cos(aOut)}`);
    starPts.push(`${C + 20 * Math.sin(aIn)},${C - 20 * Math.cos(aIn)}`);
  }
  const cardinals = [{
    t: "N",
    x: C,
    y: C - 168 + 5
  }, {
    t: "E",
    x: C + 168,
    y: C + 5
  }, {
    t: "S",
    x: C,
    y: C + 168 + 5
  }, {
    t: "W",
    x: C - 168,
    y: C + 5
  }];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "-22 -22 364 364",
    fill: "none",
    stroke: "currentColor",
    "aria-hidden": "true",
    style: {
      width: "100%",
      height: "auto"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: C,
    cy: C,
    r: "152",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: C,
    cy: C,
    r: "120",
    strokeWidth: "0.6",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: C,
    cy: C,
    r: "58",
    strokeWidth: "0.6",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("g", null, ticks), /*#__PURE__*/React.createElement("polygon", {
    points: starPts.join(" "),
    strokeWidth: "1.1"
  }), /*#__PURE__*/React.createElement("line", {
    x1: C,
    y1: "-14",
    x2: C,
    y2: "334",
    strokeWidth: "0.4",
    opacity: "0.45"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "-14",
    y1: C,
    x2: "334",
    y2: C,
    strokeWidth: "0.4",
    opacity: "0.45"
  }), cardinals.map(c => /*#__PURE__*/React.createElement("text", {
    key: c.t,
    x: c.x,
    y: c.y,
    textAnchor: "middle",
    stroke: "none",
    fill: "currentColor",
    style: {
      font: "13px 'IBM Plex Mono', monospace",
      letterSpacing: "0.1em"
    }
  }, c.t)));
};

// 等深线场:三簇同心"暗礁"轮廓,罩在整个视口后面。
const ContourField = () => /*#__PURE__*/React.createElement("svg", {
  className: "contours",
  viewBox: "0 0 1440 900",
  preserveAspectRatio: "xMidYMid slice",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(1120 150)"
}, [1, 1.35, 1.75, 2.2, 2.7].map((k, i) => /*#__PURE__*/React.createElement("path", {
  key: i,
  transform: `scale(${k})`,
  d: "M0 -62 C34 -58 58 -38 62 -8 C66 22 48 48 18 58 C-12 68 -44 58 -58 32 C-72 6 -66 -28 -44 -46 C-28 -60 -14 -64 0 -62 Z"
}))), /*#__PURE__*/React.createElement("g", {
  transform: "translate(150 720)"
}, [1, 1.4, 1.85, 2.35].map((k, i) => /*#__PURE__*/React.createElement("path", {
  key: i,
  transform: `scale(${k})`,
  d: "M0 -48 C26 -44 46 -28 50 -6 C54 16 40 36 16 44 C-8 52 -34 46 -46 26 C-58 6 -52 -22 -34 -36 C-22 -46 -10 -50 0 -48 Z"
}))), /*#__PURE__*/React.createElement("g", {
  transform: "translate(780 470)"
}, [1, 1.55].map((k, i) => /*#__PURE__*/React.createElement("path", {
  key: i,
  transform: `scale(${k})`,
  d: "M0 -30 C18 -26 30 -16 32 -2 C34 12 26 24 10 28 C-6 32 -22 26 -28 12 C-34 -2 -30 -18 -18 -26 C-12 -30 -6 -32 0 -30 Z"
}))));

// 页脚波浪:三条相位错开的正弦线。
const waveD = (y, amp) => {
  let d = `M0 ${y} Q 25 ${y - amp} 50 ${y}`;
  for (let x = 100; x <= 1200; x += 50) d += ` T ${x} ${y}`;
  return d;
};
const FooterWaves = () => /*#__PURE__*/React.createElement("svg", {
  className: "waves",
  viewBox: "0 0 1200 44",
  preserveAspectRatio: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: waveD(13, 6),
  opacity: "0.3"
}), /*#__PURE__*/React.createElement("path", {
  d: waveD(23, 7),
  opacity: "0.55"
}), /*#__PURE__*/React.createElement("path", {
  d: waveD(33, 6),
  opacity: "0.25"
}));
Object.assign(window, {
  IconAnchor,
  IconArrowUpRight,
  IconArrowUp,
  IconArrowRight,
  IconMoon,
  IconSun,
  IconGlobe,
  IconBook,
  IconGrid,
  IconPin,
  IconPulse,
  IconNetwork,
  IconTerminal,
  IconSliders,
  IconShip,
  IconBox,
  IconFlag,
  IconStar,
  IconGitHub,
  IconBrain,
  IconShield,
  CompassRose,
  ContourField,
  FooterWaves
});
// components.jsx — Neuform 视觉系统重构版个人主页组件
// 全局依赖：SITE / tr / LANG_COLORS(data.jsx)、图标(icons.jsx)。

const StatusDot = ({
  label = "ONLINE",
  color = "bg-emerald-400"
}) => /*#__PURE__*/React.createElement("span", {
  className: "inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-zinc-400 uppercase"
}, /*#__PURE__*/React.createElement("span", {
  className: `w-1.5 h-1.5 rounded-full ${color} animate-pulse`
}), label);
const SectionHead = ({
  s,
  lang
}) => {
  const other = lang === "zh" ? "en" : "zh";
  return /*#__PURE__*/React.createElement("header", {
    className: "mb-10 md:mb-14 reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-4 mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono font-medium px-2 py-0.5 rounded bg-white/[0.04] text-[#cc8066] border border-white/10"
  }, "NODE ", s.no), /*#__PURE__*/React.createElement(StatusDot, {
    label: "ONLINE"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-baseline gap-3 md:gap-4 mb-2"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white"
  }, tr(s, lang)), /*#__PURE__*/React.createElement("span", {
    className: "text-sm sm:text-base font-mono text-zinc-500 uppercase tracking-wider"
  }, "/ ", tr(s, other))), /*#__PURE__*/React.createElement("p", {
    className: "text-sm md:text-base text-zinc-400 font-normal max-w-2xl leading-relaxed"
  }, tr(s.sub, lang)));
};
const Topbar = ({
  lang,
  theme,
  onLang,
  onTheme
}) => /*#__PURE__*/React.createElement("nav", {
  className: "flex items-center justify-between w-full py-4 border-b border-white/[0.06] backdrop-blur-xl bg-zinc-950/70 sticky top-0 z-50 transition-colors"
}, /*#__PURE__*/React.createElement("a", {
  href: "#top",
  className: "flex items-center gap-2.5 text-base sm:text-lg font-medium text-white tracking-tight group"
}, /*#__PURE__*/React.createElement("span", {
  className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
}), /*#__PURE__*/React.createElement("span", {
  className: "font-semibold text-white tracking-tight"
}, "Bobochang"), /*#__PURE__*/React.createElement("span", {
  className: "hidden sm:inline text-xs font-mono text-zinc-400 border-l border-white/10 pl-2.5"
}, "AI Agent Tools")), /*#__PURE__*/React.createElement("div", {
  className: "hidden lg:flex items-center gap-8 text-sm font-normal text-zinc-300"
}, SITE.nav.map(n => /*#__PURE__*/React.createElement("a", {
  key: n.id,
  href: `#${n.id}`,
  className: "hover:text-white transition-colors duration-200"
}, tr(n, lang)))), /*#__PURE__*/React.createElement("div", {
  className: "flex items-center gap-3"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex items-center p-0.5 border border-white/10 rounded bg-white/[0.04] text-xs font-mono"
}, /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: () => onLang("zh"),
  className: `px-2 py-1 rounded transition-colors ${lang === "zh" ? "bg-white text-black font-semibold shadow" : "text-zinc-400 hover:text-white"}`,
  "aria-label": "切换为中文"
}, "中"), /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: () => onLang("en"),
  className: `px-2 py-1 rounded transition-colors ${lang === "en" ? "bg-white text-black font-semibold shadow" : "text-zinc-400 hover:text-white"}`,
  "aria-label": "Switch to English"
}, "EN")), /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: onTheme,
  className: "w-8 h-8 flex items-center justify-center border border-white/10 rounded text-zinc-300 hover:text-white hover:border-white/25 bg-white/[0.04] transition-colors",
  "aria-label": theme === "night" ? "切换亮色主题" : "切换暗色主题",
  title: theme === "night" ? "切换亮色主题" : "切换暗色主题"
}, theme === "night" ? /*#__PURE__*/React.createElement(IconSun, {
  size: 15
}) : /*#__PURE__*/React.createElement(IconMoon, {
  size: 15
})), /*#__PURE__*/React.createElement("a", {
  href: SITE.meta.github,
  target: "_blank",
  rel: "noreferrer",
  className: "neu-btn-primary group"
}, /*#__PURE__*/React.createElement("span", null, "GitHub"), /*#__PURE__*/React.createElement("div", {
  className: "neu-btn-icon"
}, /*#__PURE__*/React.createElement("iconify-icon", {
  icon: "solar:arrow-right-up-linear",
  width: "18",
  "stroke-width": "1.5"
})))));
const Hero = ({
  lang
}) => {
  const h = SITE.hero;
  return /*#__PURE__*/React.createElement("main", {
    className: "flex-grow flex flex-col justify-end pb-8 mt-16 md:mt-24",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-16 md:mb-32 max-w-3xl"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.05] text-white",
    id: "hero-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal-line font-normal text-zinc-200 mb-1 md:mb-2",
    "data-original-text": tr(h.headlineLead, lang)
  }, tr(h.headlineLead, lang)), /*#__PURE__*/React.createElement("div", {
    className: "reveal-line font-semibold text-white",
    "data-original-text": tr(h.headlineSub, lang)
  }, tr(h.headlineSub, lang)))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-span-1 lg:col-span-5 flex flex-col gap-3"
  }, h.featureCards.map((card, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "group relative flex items-start gap-4 p-5 transition-all duration-300 hover:translate-x-1 cursor-default neu-card rounded reveal",
    style: {
      "--d": `${0.06 * (idx + 1)}s`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 text-2xl text-white opacity-80 group-hover:opacity-100 transition-opacity"
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: card.icon,
    width: "24",
    "stroke-width": "1.5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-medium text-white text-base tracking-tight mb-1"
  }, tr(card.title, lang)), /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-400 text-sm font-normal leading-relaxed"
  }, tr(card.desc, lang)))))), /*#__PURE__*/React.createElement("div", {
    className: "col-span-1 lg:col-span-5 lg:col-start-8 flex flex-col items-start pb-2 reveal",
    style: {
      "--d": "0.24s"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-300 text-base md:text-lg leading-relaxed mb-8 max-w-lg font-normal"
  }, tr(h.bio, lang)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#fleet",
    className: "neu-btn-primary"
  }, /*#__PURE__*/React.createElement("span", null, tr(h.ctaFleet, lang)), /*#__PURE__*/React.createElement("div", {
    className: "neu-btn-icon"
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "solar:arrow-right-up-linear",
    width: "18",
    "stroke-width": "1.5"
  }))), /*#__PURE__*/React.createElement("a", {
    href: SITE.meta.github,
    target: "_blank",
    rel: "noreferrer",
    className: "neu-btn-secondary"
  }, /*#__PURE__*/React.createElement(IconGitHub, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, "GitHub @", SITE.meta.handle), /*#__PURE__*/React.createElement("span", {
    className: "text-xs px-2 py-0.5 rounded bg-white/10 font-mono text-[#cc8066]"
  }, "★ 2.0k"))))));
};
const FeaturedProject = ({
  lang
}) => {
  const f = SITE.flagship;
  return /*#__PURE__*/React.createElement("section", {
    id: "flagship",
    className: "py-20 md:py-28 border-t border-white/[0.06]"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    s: SITE.sections.flagship,
    lang: lang
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-span-1 lg:col-span-5 flex flex-col justify-between neu-card p-6 md:p-8 rounded-xl reveal"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-4 mb-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] text-[#cc8066] border border-white/10"
  }, /*#__PURE__*/React.createElement(IconStar, {
    size: 13
  }), tr(f.pennant, lang)), /*#__PURE__*/React.createElement("span", {
    className: "text-2xl",
    "aria-hidden": "true"
  }, f.emoji)), /*#__PURE__*/React.createElement("h3", {
    className: "text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3"
  }, f.name), /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 text-sm font-mono text-[#cc8066] mb-6 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-md"
  }, /*#__PURE__*/React.createElement(IconStar, {
    size: 14
  }), /*#__PURE__*/React.createElement("strong", {
    className: "font-semibold text-white"
  }, f.stars), /*#__PURE__*/React.createElement("span", {
    className: "text-zinc-400 font-normal"
  }, tr(f.starsNote, lang))), /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-300 text-sm md:text-base leading-relaxed mb-6 font-normal"
  }, tr(f.desc, lang)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-8"
  }, f.tech.map(tech => /*#__PURE__*/React.createElement("span", {
    key: tech,
    className: "px-2.5 py-1 text-xs font-mono rounded bg-white/[0.04] text-zinc-300 border border-white/10 hover:border-white/20 transition-colors"
  }, tech)))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3 pt-6 border-t border-white/10"
  }, f.links.map(link => /*#__PURE__*/React.createElement("a", {
    key: link.url,
    href: link.url,
    target: "_blank",
    rel: "noreferrer",
    className: "neu-btn-secondary text-xs"
  }, link.icon === "github" ? /*#__PURE__*/React.createElement(IconGitHub, {
    size: 14
  }) : /*#__PURE__*/React.createElement(IconGlobe, {
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, tr(link.label, lang)), /*#__PURE__*/React.createElement(IconArrowUpRight, {
    size: 13
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "col-span-1 lg:col-span-7 terminal-neu rounded-xl overflow-hidden flex flex-col reveal",
    style: {
      "--d": "0.1s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/[0.08]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded-full bg-red-500/80"
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded-full bg-yellow-500/80"
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded-full bg-green-500/80"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-2 text-xs font-mono text-zinc-400"
  }, "CORTEX_M9 · LIVE PREVIEW")), /*#__PURE__*/React.createElement(StatusDot, {
    label: "SYNCHED",
    color: "bg-emerald-400"
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-5 md:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto flex-grow flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, f.term.map((line, i) => {
    if (line.t === "cmd") {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "flex items-start gap-2 t-cmd"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-zinc-500 select-none"
      }, "$"), /*#__PURE__*/React.createElement("span", null, line.s));
    }
    if (line.t === "out") {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "t-out pl-4"
      }, line.s);
    }
    if (line.t === "json") {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "t-json pl-4 whitespace-pre"
      }, line.s);
    }
    if (line.t === "cursor") {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "flex items-center gap-2 pt-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-zinc-500 select-none"
      }, "$"), /*#__PURE__*/React.createElement("span", {
        className: "t-cursor"
      }));
    }
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, line.s);
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-500"
  }, /*#__PURE__*/React.createElement("span", null, "AGENT READY · LOW-RISK ENVELOPE"), /*#__PURE__*/React.createElement("span", null, "STDOUT 0.8s"))))));
};
const ProjectCard = ({
  s,
  i,
  lang
}) => /*#__PURE__*/React.createElement("article", {
  className: "neu-card p-6 rounded-xl flex flex-col justify-between reveal group",
  style: {
    "--d": `${i % 3 * 0.08}s`
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "flex items-center justify-between mb-4"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-xs font-mono text-zinc-500"
}, "NODE.", String(i + 2).padStart(2, "0")), /*#__PURE__*/React.createElement(StatusDot, {
  label: "ONLINE"
})), /*#__PURE__*/React.createElement("div", {
  className: "flex items-center gap-3 mb-3"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-2xl",
  "aria-hidden": "true"
}, s.emoji), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  className: "text-lg font-semibold text-white tracking-tight group-hover:text-white transition-colors"
}, s.id), /*#__PURE__*/React.createElement("div", {
  className: "text-xs font-mono text-zinc-400"
}, tr(s.image, lang)))), /*#__PURE__*/React.createElement("p", {
  className: "text-zinc-300 text-sm leading-relaxed mb-6 font-normal"
}, tr(s.desc, lang))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "flex flex-wrap gap-1.5 mb-5"
}, s.tech.map(tech => /*#__PURE__*/React.createElement("span", {
  key: tech,
  className: "px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.03] text-zinc-400 border border-white/[0.08]"
}, tech))), /*#__PURE__*/React.createElement("div", {
  className: "flex items-center justify-between pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-400"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex items-center gap-2"
}, /*#__PURE__*/React.createElement("span", {
  className: "w-2 h-2 rounded-full",
  style: {
    background: LANG_COLORS[s.lang] || LANG_COLORS.Other
  }
}), /*#__PURE__*/React.createElement("span", null, s.lang), s.stars > 0 ? /*#__PURE__*/React.createElement("span", {
  className: "flex items-center gap-1 text-[#cc8066] ml-2 font-medium"
}, /*#__PURE__*/React.createElement(IconStar, {
  size: 11
}), s.stars) : null), /*#__PURE__*/React.createElement("div", {
  className: "flex items-center gap-2.5"
}, /*#__PURE__*/React.createElement("a", {
  href: s.github,
  target: "_blank",
  rel: "noreferrer",
  className: "p-1 text-zinc-400 hover:text-white transition-colors",
  title: "GitHub Repository"
}, /*#__PURE__*/React.createElement(IconGitHub, {
  size: 15
})), s.site ? /*#__PURE__*/React.createElement("a", {
  href: s.site,
  target: "_blank",
  rel: "noreferrer",
  className: "p-1 text-zinc-400 hover:text-white transition-colors",
  title: s.siteLabel ? tr(s.siteLabel, lang) : "Live Site"
}, /*#__PURE__*/React.createElement(IconArrowUpRight, {
  size: 15
})) : null))));
const Projects = ({
  lang
}) => /*#__PURE__*/React.createElement("section", {
  id: "fleet",
  className: "py-20 md:py-28 border-t border-white/[0.06]"
}, /*#__PURE__*/React.createElement(SectionHead, {
  s: SITE.sections.fleet,
  lang: lang
}), /*#__PURE__*/React.createElement("div", {
  className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
}, SITE.fleet.map((project, i) => /*#__PURE__*/React.createElement(ProjectCard, {
  key: project.id,
  s: project,
  i: i,
  lang: lang
}))), /*#__PURE__*/React.createElement("blockquote", {
  className: "neu-card p-6 md:p-8 rounded-xl mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-l-2 border-l-[#cc8066] reveal"
}, /*#__PURE__*/React.createElement("div", {
  className: "space-y-1"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-xs font-mono uppercase tracking-wider text-[#cc8066] font-semibold block"
}, lang === "zh" ? "SYSTEM SUMMARY · 工程原则" : "SYSTEM SUMMARY · ENGINEERING PRINCIPLES"), /*#__PURE__*/React.createElement("p", {
  className: "text-sm md:text-base text-zinc-300 font-normal"
}, tr(SITE.fleetNarrative, lang))), /*#__PURE__*/React.createElement("a", {
  href: SITE.meta.github,
  target: "_blank",
  rel: "noreferrer",
  className: "neu-btn-secondary text-xs flex-shrink-0"
}, /*#__PURE__*/React.createElement(IconGitHub, {
  size: 14
}), /*#__PURE__*/React.createElement("span", null, "GitHub @", SITE.meta.handle))));
const STAT_ICONS = {
  star: IconStar,
  pulse: IconPulse,
  grid: IconGrid,
  box: IconBox
};
const Activity = ({
  lang
}) => /*#__PURE__*/React.createElement("section", {
  id: "log",
  className: "py-20 md:py-28 border-t border-white/[0.06]"
}, /*#__PURE__*/React.createElement(SectionHead, {
  s: SITE.sections.log,
  lang: lang
}), /*#__PURE__*/React.createElement("div", {
  className: "grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10"
}, SITE.stats.map((stat, i) => {
  const Icon = STAT_ICONS[stat.icon] || IconPulse;
  return /*#__PURE__*/React.createElement("article", {
    key: stat.icon,
    className: "neu-card p-5 md:p-6 rounded-xl flex flex-col justify-between reveal group",
    style: {
      "--d": `${i * 0.06}s`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-zinc-400 mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-white opacity-80 group-hover:opacity-100 transition-opacity"
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono text-zinc-500"
  }, "0", i + 1)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white block mb-1"
  }, stat.value), /*#__PURE__*/React.createElement("span", {
    className: "text-xs sm:text-sm font-mono text-zinc-400"
  }, tr(stat.label, lang))));
})), /*#__PURE__*/React.createElement("div", {
  className: "neu-card p-6 md:p-8 rounded-xl reveal"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6"
}, /*#__PURE__*/React.createElement("h3", {
  className: "text-base font-semibold text-white tracking-tight flex items-center gap-2"
}, /*#__PURE__*/React.createElement("span", {
  className: "w-2 h-2 rounded-full bg-[#cc8066]"
}), tr(SITE.langMix.title, lang)), /*#__PURE__*/React.createElement("span", {
  className: "text-xs font-mono text-zinc-500"
}, tr(SITE.langMix.note, lang))), /*#__PURE__*/React.createElement("div", {
  className: "h-2.5 w-full rounded-full overflow-hidden flex bg-white/[0.06] mb-6"
}, SITE.langMix.items.map(item => /*#__PURE__*/React.createElement("div", {
  key: item.name,
  style: {
    width: `${item.pct}%`,
    background: LANG_COLORS[item.name] || LANG_COLORS.Other
  },
  title: `${item.name} ${item.pct}%`,
  className: "h-full transition-all"
}))), /*#__PURE__*/React.createElement("div", {
  className: "flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono"
}, SITE.langMix.items.map(item => /*#__PURE__*/React.createElement("div", {
  key: item.name,
  className: "flex items-center gap-2 text-zinc-300"
}, /*#__PURE__*/React.createElement("span", {
  className: "w-2 h-2 rounded-full",
  style: {
    background: LANG_COLORS[item.name] || LANG_COLORS.Other
  }
}), /*#__PURE__*/React.createElement("span", null, item.name), /*#__PURE__*/React.createElement("span", {
  className: "text-zinc-500"
}, item.pct, "%"))))));
const MOORING_ICONS = {
  github: IconGitHub,
  book: IconBook,
  globe: IconGlobe,
  grid: IconGrid,
  box: IconBox
};
const Links = ({
  lang
}) => /*#__PURE__*/React.createElement("section", {
  id: "moorings",
  className: "py-20 md:py-28 border-t border-white/[0.06]"
}, /*#__PURE__*/React.createElement(SectionHead, {
  s: SITE.sections.moorings,
  lang: lang
}), /*#__PURE__*/React.createElement("div", {
  className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
}, SITE.moorings.map((mooring, i) => {
  const Icon = MOORING_ICONS[mooring.icon] || IconGlobe;
  return /*#__PURE__*/React.createElement("a", {
    key: mooring.url,
    href: mooring.url,
    ...(mooring.external === false ? {} : {
      target: "_blank",
      rel: "noreferrer"
    }),
    className: "neu-card p-5 md:p-6 rounded-xl group flex flex-col justify-between reveal",
    style: {
      "--d": `${i * 0.06}s`
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-zinc-500 mb-4 text-xs font-mono"
  }, /*#__PURE__*/React.createElement("span", null, "0", i + 1), /*#__PURE__*/React.createElement("span", {
    className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-zinc-400 group-hover:text-white"
  }, /*#__PURE__*/React.createElement(IconArrowUpRight, {
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-white opacity-80 group-hover:opacity-100 transition-opacity"
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 18
  })), /*#__PURE__*/React.createElement("strong", {
    className: "text-base font-semibold text-white tracking-tight group-hover:text-white transition-colors"
  }, tr(mooring.name, lang))), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-mono text-zinc-500 mb-3"
  }, mooring.handle)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-400 pt-3 border-t border-white/[0.06]"
  }, tr(mooring.note, lang)));
})));
const Footer = ({
  lang,
  onSurface
}) => /*#__PURE__*/React.createElement("footer", {
  className: "py-12 border-t border-white/[0.06] text-xs font-mono text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex items-center gap-2"
}, /*#__PURE__*/React.createElement("span", null, "© 2026 Bobochang"), /*#__PURE__*/React.createElement("span", null, "·"), /*#__PURE__*/React.createElement("span", null, tr(SITE.footer.line, lang))), /*#__PURE__*/React.createElement("div", {
  className: "flex items-center gap-4"
}, /*#__PURE__*/React.createElement(StatusDot, {
  label: "SITE ONLINE",
  color: "bg-emerald-400"
}), /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: onSurface,
  className: "flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
}, /*#__PURE__*/React.createElement("span", null, tr(SITE.footer.surface, lang)), /*#__PURE__*/React.createElement(IconArrowUp, {
  size: 13
}))));
const SwitchControl = ({
  checked,
  onChange,
  label
}) => /*#__PURE__*/React.createElement("label", {
  className: "switch",
  title: label
}, /*#__PURE__*/React.createElement("input", {
  type: "checkbox",
  checked: checked,
  onChange: onChange,
  "aria-label": label
}), /*#__PURE__*/React.createElement("span", null));
const TweaksPanel = ({
  lang,
  open,
  onToggle,
  theme,
  onTheme,
  hue,
  onHue,
  contours,
  onContours,
  motion,
  onMotion,
  onReset
}) => {
  const t = SITE.tweaks;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `tweaks-fab${open ? " on" : ""}`,
    onClick: onToggle,
    "aria-label": tr(t.title, lang),
    title: tr(t.title, lang)
  }, /*#__PURE__*/React.createElement(IconSliders, {
    size: 18
  })), open ? /*#__PURE__*/React.createElement("aside", {
    className: "tweaks-panel",
    "aria-label": tr(t.title, lang)
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-2 border-b border-white/10 font-semibold text-white"
  }, /*#__PURE__*/React.createElement("span", null, tr(t.title, lang)), /*#__PURE__*/React.createElement(StatusDot, {
    label: "LIVE"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tweak-row"
  }, /*#__PURE__*/React.createElement("span", null, tr(t.theme, lang)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center p-0.5 border border-white/10 rounded bg-white/[0.04]"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `px-2 py-0.5 rounded transition-colors ${theme === "night" ? "bg-white text-black font-semibold" : "text-zinc-400"}`,
    onClick: () => onTheme("night")
  }, tr(t.night, lang)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `px-2 py-0.5 rounded transition-colors ${theme === "chart" ? "bg-white text-black font-semibold" : "text-zinc-400"}`,
    onClick: () => onTheme("chart")
  }, tr(t.chart, lang)))), /*#__PURE__*/React.createElement("div", {
    className: "tweak-row"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "signal-hue"
  }, tr(t.hue, lang)), /*#__PURE__*/React.createElement("input", {
    id: "signal-hue",
    type: "range",
    min: "0",
    max: "360",
    value: hue,
    onChange: e => onHue(Number(e.target.value))
  })), /*#__PURE__*/React.createElement("div", {
    className: "tweak-row"
  }, /*#__PURE__*/React.createElement("span", null, tr(t.contours, lang)), /*#__PURE__*/React.createElement(SwitchControl, {
    checked: contours,
    onChange: e => onContours(e.target.checked),
    label: tr(t.contours, lang)
  })), /*#__PURE__*/React.createElement("div", {
    className: "tweak-row"
  }, /*#__PURE__*/React.createElement("span", null, tr(t.motion, lang)), /*#__PURE__*/React.createElement(SwitchControl, {
    checked: motion,
    onChange: e => onMotion(e.target.checked),
    label: tr(t.motion, lang)
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "w-full py-1.5 mt-2 rounded bg-white/10 text-white hover:bg-white/20 transition-colors font-mono text-center",
    onClick: onReset
  }, tr(t.reset, lang))) : null);
};
Object.assign(window, {
  StatusDot,
  SectionHead,
  Topbar,
  Hero,
  FeaturedProject,
  Projects,
  ProjectCard,
  Activity,
  Links,
  Footer,
  TweaksPanel
});
// app.jsx — 应用状态唯一持有者:语言 / 主题 / 微调项 / 滚动入场 / GSAP 文字动效
const {
  useState,
  useEffect,
  useRef
} = React;
const LS_KEY = "bobochang-home";
const loadPrefs = () => {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) || {};
  } catch (e) {
    return {};
  }
};
const DEFAULTS = {
  theme: "night",
  hue: 24,
  contours: true,
  motion: true
};
const App = () => {
  const saved = useRef(loadPrefs()).current;
  const savedHue = Number(saved.hue);
  const initialHue = Number.isFinite(savedHue) ? savedHue : DEFAULTS.hue;
  const [lang, setLang] = useState(saved.lang || "zh");
  const [theme, setTheme] = useState(saved.theme || DEFAULTS.theme);
  const [hue, setHue] = useState(initialHue);
  const [contours, setContours] = useState(saved.contours !== false);
  const [motion, setMotion] = useState(saved.motion !== false);
  const [panelOpen, setPanelOpen] = useState(false);

  // 同步到 <html> 属性 + CSS 变量 + localStorage + Three.js 实例
  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dataset.theme = theme;
    html.dataset.contours = contours ? "on" : "off";
    html.dataset.motion = motion ? "on" : "off";
    html.style.setProperty("--accent-h", String(hue));
    document.title = tr(SITE.meta.title, lang);
    if (window.__trail) {
      if (typeof window.__trail.setContours === "function") window.__trail.setContours(contours);
      if (typeof window.__trail.setMotion === "function") window.__trail.setMotion(motion);
      if (typeof window.__trail.setHue === "function") window.__trail.setHue(hue);
    }
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({
        lang,
        theme,
        hue,
        contours,
        motion
      }));
    } catch (e) {}
  }, [lang, theme, hue, contours, motion]);

  // GSAP 标题逐字入场动画 (彻底解决字母 g 等降部字符裁剪问题)
  useEffect(() => {
    if (typeof gsap === "undefined") return;
    try {
      if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }
    } catch (e) {}
    const titleEl = document.getElementById("hero-title");
    if (!titleEl) return;
    const lines = titleEl.querySelectorAll(".reveal-line");
    lines.forEach(line => {
      const original = line.getAttribute("data-original-text") || line.innerText;
      line.setAttribute("data-original-text", original);
      const hasSpaces = original.includes(" ");
      const words = hasSpaces ? original.split(" ") : original.split("");
      line.innerHTML = "";
      words.forEach(word => {
        const outerSpan = document.createElement("span");
        outerSpan.style.display = "inline-block";
        outerSpan.style.overflow = "hidden";
        outerSpan.style.verticalAlign = "bottom";
        outerSpan.style.paddingBottom = "0.22em"; // 为字母 g、p、y 尾部降部提供安全视口
        outerSpan.style.marginBottom = "-0.22em";
        if (hasSpaces) {
          outerSpan.style.marginRight = "0.28em";
        }
        const innerSpan = document.createElement("span");
        innerSpan.className = "word-inner";
        innerSpan.style.display = "inline-block";
        innerSpan.style.transform = "translateY(115%)";
        innerSpan.innerText = word;
        outerSpan.appendChild(innerSpan);
        line.appendChild(outerSpan);
      });
    });
    if (motion && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.to(".word-inner", {
        y: "0%",
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.035,
        delay: 0.1,
        onComplete: () => {
          // 入场完成后完全解除容器 overflow:hidden 限制，彻底保证任何字符字形不被裁剪
          titleEl.querySelectorAll(".reveal-line > span").forEach(s => {
            s.style.overflow = "visible";
          });
        }
      });
    } else {
      titleEl.querySelectorAll(".word-inner").forEach(el => {
        el.style.transform = "none";
      });
      titleEl.querySelectorAll(".reveal-line > span").forEach(s => {
        s.style.overflow = "visible";
      });
    }
  }, [lang, motion]);

  // 滚动入场:进入视口加 .revealed
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal:not(.revealed)"));
    if (!("IntersectionObserver" in window) || els.length === 0 || !motion) {
      els.forEach(el => el.classList.add("revealed"));
      return undefined;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("revealed");
          io.unobserve(en.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -4% 0px"
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [lang, motion]);
  const surface = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: motion && !reduce ? "smooth" : "auto"
    });
  };
  const resetTweaks = () => {
    setTheme(DEFAULTS.theme);
    setHue(DEFAULTS.hue);
    setContours(DEFAULTS.contours);
    setMotion(DEFAULTS.motion);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex flex-col min-h-screen w-full max-w-[1600px] mx-auto p-6 md:p-10 lg:p-12"
  }, /*#__PURE__*/React.createElement(Topbar, {
    lang: lang,
    theme: theme,
    onLang: setLang,
    onTheme: () => setTheme(theme === "night" ? "chart" : "night")
  }), /*#__PURE__*/React.createElement(Hero, {
    lang: lang
  }), /*#__PURE__*/React.createElement(FeaturedProject, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Projects, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Activity, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Links, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Footer, {
    lang: lang,
    onSurface: surface
  }), /*#__PURE__*/React.createElement(TweaksPanel, {
    lang: lang,
    open: panelOpen,
    onToggle: () => setPanelOpen(!panelOpen),
    theme: theme,
    onTheme: setTheme,
    hue: hue,
    onHue: setHue,
    contours: contours,
    onContours: setContours,
    motion: motion,
    onMotion: setMotion,
    onReset: resetTweaks
  }));
};
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));

// build.sh 在 #root 之前注入项目索引的静态 HTML(给不执行 JS 的抓取器和无 JS 访客);
// React 一挂载,同样的内容就由 Projects 组件呈现,静态版随即移除,避免重复。
const staticFleet = document.getElementById("static-fleet");
if (staticFleet) staticFleet.remove();
