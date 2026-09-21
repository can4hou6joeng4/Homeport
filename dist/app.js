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
    id: "captain",
    zh: "关于",
    en: "About"
  }, {
    id: "moorings",
    zh: "链接",
    en: "Links"
  }],
  hero: {
    name: "Bobochang",
    roles: {
      zh: "AI Agent 开发者 · 全栈工程师 · 开源维护者",
      en: "AI Agent Developer · Full Stack Engineer · Open Source Maintainer"
    },
    tagline: {
      zh: "为 AI Agent 构建可靠的工具、自动化系统与开发者工作流。",
      en: "Reliable tools, automation systems, and developer workflows for AI agents."
    },
    bio: {
      zh: "独立项目，共享同一套工程原则：明确边界、本地优先、自动化可验证、默认低风险。",
      en: "Independent projects, guided by the same engineering principles: explicit boundaries, local-first design, verifiable automation, and low-risk defaults."
    },
    ctaFleet: {
      zh: "查看项目",
      en: "View projects"
    },
    ctaGithub: "GitHub",
    vessels: {
      zh: "7 个开源项目",
      en: "7 open-source projects"
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
    captain: {
      no: "04",
      zh: "关于",
      en: "About",
      sub: {
        zh: "我的方向、工程原则与常用工具。",
        en: "Focus areas, engineering principles, and the tools I use."
      }
    },
    moorings: {
      no: "05",
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
  captain: {
    paras: [{
      zh: "常驻广州，专注 AI Agent 工具链、CLI、自动化和本地优先应用：让 Agent 直接使用工具，让重复流程能够稳定运行，让敏感数据尽量留在本机。",
      en: "Based in Guangzhou, I focus on AI-agent toolchains, CLIs, automation, and local-first applications: tools agents can use directly, repeatable workflows that run reliably, and sensitive data kept on-device where practical."
    }, {
      zh: "把重复劳动变成可靠系统。",
      en: "Turn repeated work into reliable systems."
    }],
    philosophy: {
      quote: {
        zh: "GitHub 仓库命名：一个单词、一个意象、一个 emoji。",
        en: "GitHub repository naming: one word, one image, one emoji."
      },
      source: {
        zh: "仓库命名原则",
        en: "Repository naming principle"
      }
    },
    groups: [{
      k: {
        zh: "语言",
        en: "Languages"
      },
      items: ["Python", "TypeScript", "Go", "Swift", "JavaScript"]
    }, {
      k: {
        zh: "方向",
        en: "Focus"
      },
      items: ["AI Agents", "MCP", {
        zh: "CLI 工具",
        en: "CLI tools"
      }, {
        zh: "macOS 应用",
        en: "macOS apps"
      }, "Serverless", {
        zh: "自动化 & OCR",
        en: "Automation & OCR"
      }]
    }, {
      k: {
        zh: "工具栈",
        en: "Tool stack"
      },
      items: ["Claude Code", "GitHub Actions", "Cloudflare", "SwiftUI", "Playwright", "Wails", "Vite", "Next.js"]
    }],
    location: {
      zh: "广州 · 中国",
      en: "Guangzhou · China"
    }
  },
  moorings: [{
    icon: "github",
    name: "GitHub",
    handle: "@can4hou6joeng4",
    url: "https://github.com/can4hou6joeng4",
    note: {
      zh: "开源项目与代码",
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
      zh: "中文技术文章",
      en: "Technical writing in Chinese"
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
      zh: "盲文点阵与误差扩散",
      en: "Braille bitmaps and error diffusion"
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
  }, {
    icon: "grid",
    name: "CheckMyGit",
    handle: "bento",
    url: "https://checkmygit.com/can4hou6joeng4?template=bento",
    note: {
      zh: "交互式档案",
      en: "Interactive profile"
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
  CompassRose,
  ContourField,
  FooterWaves
});
// components.jsx — Nexus 技术视觉语言下的个人主页展示组件。
// 全局依赖：SITE / tr / LANG_COLORS(data.jsx)、图标(icons.jsx)。

const FIELD_LABELS = [{
  top: "18%",
  left: "7%",
  text: "NODE.01"
}, {
  top: "34%",
  left: "84%",
  text: "SYNC.92"
}, {
  top: "67%",
  left: "12%",
  text: "CORTEX.M9"
}, {
  top: "81%",
  left: "76%",
  text: "PORT.113"
}];
const SignalField = () => {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let nodes = [];
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;
    const noise = n => {
      const x = Math.sin(n * 91.313 + 17.17) * 43758.5453;
      return x - Math.floor(x);
    };
    const makeNodes = () => {
      const count = Math.max(38, Math.min(72, Math.round(width / 24)));
      nodes = Array.from({
        length: count
      }, (_, i) => ({
        x: noise(i + 2) * width,
        y: noise(i + 71) * height,
        z: 0.45 + noise(i + 149) * 0.8,
        phase: noise(i + 233) * Math.PI * 2
      }));
    };
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeNodes();
    };
    const move = event => {
      targetX = event.clientX / Math.max(window.innerWidth, 1) - 0.5;
      targetY = event.clientY / Math.max(window.innerHeight, 1) - 0.5;
    };
    const draw = time => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const motionOff = document.documentElement.dataset.motion === "off";
      const hue = Number(getComputedStyle(document.documentElement).getPropertyValue("--accent-h")) || 292;
      const dark = document.documentElement.dataset.theme !== "chart";
      const t = reduce || motionOff ? 0 : time * 0.00022;
      pointerX += (targetX - pointerX) * 0.035;
      pointerY += (targetY - pointerY) * 0.035;
      ctx.clearRect(0, 0, width, height);
      const points = nodes.map((node, i) => ({
        x: node.x + Math.sin(t * node.z + node.phase) * 7 + pointerX * (8 + node.z * 10),
        y: node.y + Math.cos(t * 0.8 * node.z + node.phase) * 5 + pointerY * (6 + node.z * 8),
        z: node.z,
        i
      }));
      const maxDistance = Math.min(170, Math.max(112, width * 0.12));
      ctx.lineWidth = 0.7;
      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist > maxDistance) continue;
          const alpha = (1 - dist / maxDistance) * (dark ? 0.13 : 0.1);
          ctx.strokeStyle = `hsla(${hue}, 88%, ${dark ? 70 : 46}%, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
      points.forEach((point, i) => {
        const pulse = 0.58 + Math.sin(t * 4 + i) * 0.22;
        ctx.fillStyle = `hsla(${hue + (i % 5 === 0 ? 26 : 0)}, 92%, ${dark ? 72 : 45}%, ${0.18 + pulse * 0.28})`;
        const size = i % 9 === 0 ? 2.1 : 1.2;
        ctx.fillRect(point.x - size / 2, point.y - size / 2, size, size);
      });
      for (let k = 0; k < 5; k += 1) {
        const from = points[(k * 11 + 3) % points.length];
        const to = points[(k * 17 + 19) % points.length];
        const progress = (t * (0.46 + k * 0.035) + k * 0.19) % 1;
        const x = from.x + (to.x - from.x) * progress;
        const y = from.y + (to.y - from.y) * progress;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(t + k);
        ctx.shadowColor = `hsla(${hue + 22}, 95%, 67%, 0.8)`;
        ctx.shadowBlur = 12;
        ctx.fillStyle = `hsla(${hue + 22}, 95%, 72%, ${dark ? 0.9 : 0.7})`;
        ctx.fillRect(-2.5, -2.5, 5, 5);
        ctx.restore();
      }
      frame = window.requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, {
      passive: true
    });
    frame = window.requestAnimationFrame(draw);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
    };
  }, []);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    className: "signal-canvas",
    "aria-hidden": "true"
  });
};
const ChartLayer = () => /*#__PURE__*/React.createElement("div", {
  className: "chart-layer",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("div", {
  className: "matrix-grid"
}), /*#__PURE__*/React.createElement(SignalField, null), FIELD_LABELS.map(label => /*#__PURE__*/React.createElement("span", {
  key: label.text,
  className: "field-label",
  style: {
    top: label.top,
    left: label.left
  }
}, label.text)));
const Topbar = ({
  lang,
  theme,
  onLang,
  onTheme
}) => /*#__PURE__*/React.createElement("header", {
  className: "topbar"
}, /*#__PURE__*/React.createElement("div", {
  className: "topbar-shell"
}, /*#__PURE__*/React.createElement("a", {
  className: "wordmark",
  href: "#top"
}, /*#__PURE__*/React.createElement(IconNetwork, {
  size: 16
}), /*#__PURE__*/React.createElement("span", null, "BOBO.LINK")), /*#__PURE__*/React.createElement("nav", {
  className: "nav",
  "aria-label": lang === "zh" ? "主页分区" : "Homepage sections"
}, SITE.nav.map(n => /*#__PURE__*/React.createElement("a", {
  key: n.id,
  href: `#${n.id}`
}, tr(n, lang)))), /*#__PURE__*/React.createElement("div", {
  className: "controls"
}, /*#__PURE__*/React.createElement("div", {
  className: "seg",
  role: "group",
  "aria-label": "Language / 语言"
}, /*#__PURE__*/React.createElement("button", {
  type: "button",
  className: lang === "zh" ? "on" : "",
  onClick: () => onLang("zh")
}, "中"), /*#__PURE__*/React.createElement("button", {
  type: "button",
  className: lang === "en" ? "on" : "",
  onClick: () => onLang("en")
}, "EN")), /*#__PURE__*/React.createElement("button", {
  type: "button",
  className: "icon-btn",
  onClick: onTheme,
  "aria-label": theme === "night" ? tr(SITE.tweaks.chart, lang) : tr(SITE.tweaks.night, lang),
  title: theme === "night" ? tr(SITE.tweaks.chart, lang) : tr(SITE.tweaks.night, lang)
}, theme === "night" ? /*#__PURE__*/React.createElement(IconSun, {
  size: 15
}) : /*#__PURE__*/React.createElement(IconMoon, {
  size: 15
})))));
const StatusDot = ({
  label
}) => /*#__PURE__*/React.createElement("span", {
  className: "status"
}, /*#__PURE__*/React.createElement("span", {
  className: "status-dot"
}), label);
const CoreGlyph = () => /*#__PURE__*/React.createElement("div", {
  className: "core-glyph",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("span", {
  className: "core-ring ring-a"
}), /*#__PURE__*/React.createElement("span", {
  className: "core-ring ring-b"
}), /*#__PURE__*/React.createElement("span", {
  className: "core-diamond diamond-a"
}), /*#__PURE__*/React.createElement("span", {
  className: "core-diamond diamond-b"
}), /*#__PURE__*/React.createElement("span", {
  className: "core-axis axis-x"
}), /*#__PURE__*/React.createElement("span", {
  className: "core-axis axis-y"
}));
const Hero = ({
  lang
}) => {
  const h = SITE.hero;
  const flagship = SITE.flagship;
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top",
    "data-screen-label": "Home 主页"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap hero-wrap"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hero-heading reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "system-line"
  }, /*#__PURE__*/React.createElement(StatusDot, {
    label: lang === "zh" ? "主页在线" : "HOMEPAGE ONLINE"
  }), /*#__PURE__*/React.createElement("span", null, SITE.meta.coords)), /*#__PURE__*/React.createElement("h1", null, "Bobochang"), /*#__PURE__*/React.createElement("p", {
    className: "roles"
  }, tr(h.roles, lang))), /*#__PURE__*/React.createElement("div", {
    className: "hero-stage",
    "aria-label": lang === "zh" ? "个人主页核心系统" : "Personal homepage core system"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stage-frame",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(CoreGlyph, null), /*#__PURE__*/React.createElement("article", {
    className: "hero-panel load-panel reveal",
    "data-tilt": true,
    style: {
      "--d": "0.08s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-k"
  }, /*#__PURE__*/React.createElement("span", null, "SYS.LOAD"), /*#__PURE__*/React.createElement(IconPulse, {
    size: 15
  })), /*#__PURE__*/React.createElement("div", {
    className: "load-visual",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("h2", null, lang === "zh" ? "可靠系统" : "Reliable systems"), /*#__PURE__*/React.createElement("p", null, tr(h.bio, lang)), /*#__PURE__*/React.createElement("div", {
    className: "meter-row"
  }, /*#__PURE__*/React.createElement("span", null, "SYNC"), /*#__PURE__*/React.createElement("strong", null, "92%")), /*#__PURE__*/React.createElement("div", {
    className: "meter"
  }, /*#__PURE__*/React.createElement("span", null))), /*#__PURE__*/React.createElement("article", {
    className: "hero-panel operator-panel reveal",
    "data-tilt": true,
    style: {
      "--d": "0.14s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "operator-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar"
  }, "BC"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Bobochang"), /*#__PURE__*/React.createElement("span", null, "OPEN SOURCE · BUILDER"))), /*#__PURE__*/React.createElement("div", {
    className: "operator-state"
  }, /*#__PURE__*/React.createElement("span", null, lang === "zh" ? "广州 · 珠江口" : "GUANGZHOU · PEARL RIVER"), /*#__PURE__*/React.createElement(StatusDot, {
    label: "ACTIVE"
  }))), /*#__PURE__*/React.createElement("article", {
    className: "hero-panel core-panel reveal",
    "data-tilt": true,
    style: {
      "--d": "0.2s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "core-head"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", null), " CORTEX_BC"), /*#__PURE__*/React.createElement(StatusDot, {
    label: "SYNCHED"
  })), /*#__PURE__*/React.createElement("div", {
    className: "core-window"
  }, /*#__PURE__*/React.createElement("div", {
    className: "core-title-row"
  }, /*#__PURE__*/React.createElement(IconTerminal, {
    size: 17
  }), /*#__PURE__*/React.createElement("span", null, "AGENT-FIRST WORKFLOW")), /*#__PURE__*/React.createElement("h2", null, tr(h.tagline, lang)), /*#__PURE__*/React.createElement("p", null, flagship.name, " · ", tr(flagship.desc, lang))), /*#__PURE__*/React.createElement("div", {
    className: "core-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "#fleet"
  }, tr(h.ctaFleet, lang), /*#__PURE__*/React.createElement(IconArrowRight, {
    size: 15
  })), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: SITE.meta.github,
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement(IconGitHub, {
    size: 15
  }), "GitHub ", /*#__PURE__*/React.createElement("span", {
    className: "star-chip"
  }, "★ ", flagship.stars)))), /*#__PURE__*/React.createElement("article", {
    className: "hero-panel topology-panel reveal",
    "data-tilt": true,
    style: {
      "--d": "0.25s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-k"
  }, /*#__PURE__*/React.createElement(IconNetwork, {
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, "PROJECT.INDEX")), /*#__PURE__*/React.createElement("h2", null, tr(h.vessels, lang)), /*#__PURE__*/React.createElement("p", null, lang === "zh" ? "独立项目，共享同一套工程原则。" : "Independent projects, shared engineering principles."), /*#__PURE__*/React.createElement("div", {
    className: "verify-line"
  }, /*#__PURE__*/React.createElement("span", null), "VERIFY SOURCE")), /*#__PURE__*/React.createElement("article", {
    className: "hero-panel asset-panel reveal",
    "data-tilt": true,
    style: {
      "--d": "0.3s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "asset-art",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "asset-k"
  }, "SOURCE"), /*#__PURE__*/React.createElement("strong", null, "bobochang.cn")), /*#__PURE__*/React.createElement(IconArrowUpRight, {
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero-foot reveal",
    style: {
      "--d": "0.35s"
    }
  }, /*#__PURE__*/React.createElement("span", null, tr(h.routeLabel, lang)), /*#__PURE__*/React.createElement("a", {
    href: "#flagship"
  }, lang === "zh" ? "查看重点项目" : "VIEW FEATURED PROJECT", /*#__PURE__*/React.createElement(IconArrowRight, {
    size: 14
  })))));
};
const SectionHead = ({
  s,
  lang
}) => {
  const other = lang === "zh" ? "en" : "zh";
  return /*#__PURE__*/React.createElement("header", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chart-no"
  }, /*#__PURE__*/React.createElement("span", null, "NODE ", s.no), /*#__PURE__*/React.createElement(StatusDot, {
    label: "ONLINE"
  })), /*#__PURE__*/React.createElement("div", {
    className: "section-title-row"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, tr(s, lang)), /*#__PURE__*/React.createElement("span", {
    className: "section-alt"
  }, tr(s, other))), /*#__PURE__*/React.createElement("p", {
    className: "section-sub"
  }, tr(s.sub, lang)));
};
const FeaturedProject = ({
  lang
}) => {
  const f = SITE.flagship;
  return /*#__PURE__*/React.createElement("section", {
    id: "flagship",
    className: "section section-flagship",
    "data-screen-label": "Featured Project 重点项目"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    s: SITE.sections.flagship,
    lang: lang
  }), /*#__PURE__*/React.createElement("div", {
    className: "flagship-deck"
  }, /*#__PURE__*/React.createElement("article", {
    className: "flagship-overview reveal",
    "data-tilt": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "flagship-signal"
  }, /*#__PURE__*/React.createElement(IconStar, {
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, tr(f.pennant, lang))), /*#__PURE__*/React.createElement("div", {
    className: "flagship-ident"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ship-mark",
    "aria-hidden": "true"
  }, f.emoji), /*#__PURE__*/React.createElement("span", null, "PRIMARY NODE · 001")), /*#__PURE__*/React.createElement("h3", {
    className: "flagship-name"
  }, f.name), /*#__PURE__*/React.createElement("div", {
    className: "flagship-stars"
  }, /*#__PURE__*/React.createElement(IconStar, {
    size: 16
  }), /*#__PURE__*/React.createElement("strong", null, f.stars), /*#__PURE__*/React.createElement("span", null, tr(f.starsNote, lang))), /*#__PURE__*/React.createElement("p", {
    className: "flagship-desc"
  }, tr(f.desc, lang)), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, f.tech.map(tech => /*#__PURE__*/React.createElement("span", {
    key: tech,
    className: "chip"
  }, tech))), /*#__PURE__*/React.createElement("div", {
    className: "flagship-links"
  }, f.links.map(link => /*#__PURE__*/React.createElement("a", {
    key: link.url,
    className: "text-link",
    href: link.url,
    target: "_blank",
    rel: "noreferrer"
  }, link.icon === "github" ? /*#__PURE__*/React.createElement(IconGitHub, {
    size: 14
  }) : /*#__PURE__*/React.createElement(IconArrowUpRight, {
    size: 14
  }), tr(link.label, lang))))), /*#__PURE__*/React.createElement("div", {
    className: "terminal-panel reveal",
    style: {
      "--d": "0.1s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "term-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "term-mode"
  }, "CORTEX_M9 · LIVE"), /*#__PURE__*/React.createElement(StatusDot, {
    label: "SYNCHED"
  })), /*#__PURE__*/React.createElement("div", {
    className: "term-visual",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "term-body"
  }, f.term.map((line, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `t-${line.t}`
  }, line.s)))))));
};
const ProjectCard = ({
  s,
  i,
  lang
}) => /*#__PURE__*/React.createElement("article", {
  className: "ship-card reveal",
  "data-tilt": true,
  style: {
    "--d": `${i % 3 * 0.06}s`
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ship-node-row"
}, /*#__PURE__*/React.createElement("span", null, "NODE.", String(i + 2).padStart(2, "0")), /*#__PURE__*/React.createElement(StatusDot, {
  label: "ONLINE"
})), /*#__PURE__*/React.createElement("div", {
  className: "ship-top"
}, /*#__PURE__*/React.createElement("div", {
  className: "ship-mark",
  "aria-hidden": "true"
}, s.emoji), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  className: "ship-name"
}, s.id), /*#__PURE__*/React.createElement("div", {
  className: "ship-image"
}, tr(s.image, lang)))), /*#__PURE__*/React.createElement("p", {
  className: "ship-desc"
}, tr(s.desc, lang)), /*#__PURE__*/React.createElement("div", {
  className: "chips ship-tech"
}, s.tech.slice(0, 3).map(tech => /*#__PURE__*/React.createElement("span", {
  key: tech,
  className: "chip"
}, tech))), /*#__PURE__*/React.createElement("div", {
  className: "ship-meta"
}, /*#__PURE__*/React.createElement("span", {
  className: "lang-dot",
  style: {
    background: LANG_COLORS[s.lang] || LANG_COLORS.Other
  }
}), /*#__PURE__*/React.createElement("span", null, s.lang), s.stars > 0 ? /*#__PURE__*/React.createElement("span", {
  className: "meta-star"
}, /*#__PURE__*/React.createElement(IconStar, {
  size: 10
}), s.stars) : null, /*#__PURE__*/React.createElement("span", {
  className: "spacer"
}), /*#__PURE__*/React.createElement("a", {
  className: "mini-link",
  href: s.github,
  target: "_blank",
  rel: "noreferrer",
  title: "GitHub"
}, /*#__PURE__*/React.createElement(IconGitHub, {
  size: 15
})), s.site ? /*#__PURE__*/React.createElement("a", {
  className: "mini-link",
  href: s.site,
  target: "_blank",
  rel: "noreferrer",
  title: s.siteLabel ? tr(s.siteLabel, lang) : "Site"
}, /*#__PURE__*/React.createElement(IconArrowUpRight, {
  size: 15
})) : null));
const Projects = ({
  lang
}) => /*#__PURE__*/React.createElement("section", {
  id: "fleet",
  className: "section",
  "data-screen-label": "Projects 开源项目"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement(SectionHead, {
  s: SITE.sections.fleet,
  lang: lang
}), /*#__PURE__*/React.createElement("div", {
  className: "fleet-grid"
}, SITE.fleet.map((project, i) => /*#__PURE__*/React.createElement(ProjectCard, {
  key: project.id,
  s: project,
  i: i,
  lang: lang
}))), /*#__PURE__*/React.createElement("blockquote", {
  className: "log-entry reveal"
}, /*#__PURE__*/React.createElement("span", {
  className: "log-k"
}, lang === "zh" ? "SYSTEM SUMMARY · 工程原则" : "SYSTEM SUMMARY · ENGINEERING PRINCIPLES"), tr(SITE.fleetNarrative, lang))));
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
  className: "section section-log",
  "data-screen-label": "Activity 数据与动态"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement(SectionHead, {
  s: SITE.sections.log,
  lang: lang
}), /*#__PURE__*/React.createElement("div", {
  className: "stats-grid"
}, SITE.stats.map((stat, i) => {
  const Icon = STAT_ICONS[stat.icon] || IconPulse;
  return /*#__PURE__*/React.createElement("article", {
    key: stat.icon,
    className: "stat reveal",
    style: {
      "--d": `${i * 0.06}s`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-head"
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, "0", i + 1)), /*#__PURE__*/React.createElement("strong", {
    className: "stat-num"
  }, stat.value), /*#__PURE__*/React.createElement("span", {
    className: "stat-label"
  }, tr(stat.label, lang)));
})), /*#__PURE__*/React.createElement("div", {
  className: "langmix reveal"
}, /*#__PURE__*/React.createElement("div", {
  className: "langmix-head"
}, /*#__PURE__*/React.createElement("span", null, tr(SITE.langMix.title, lang)), /*#__PURE__*/React.createElement("span", null, tr(SITE.langMix.note, lang))), /*#__PURE__*/React.createElement("div", {
  className: "langbar"
}, SITE.langMix.items.map(item => /*#__PURE__*/React.createElement("span", {
  key: item.name,
  style: {
    width: `${item.pct}%`,
    background: LANG_COLORS[item.name] || LANG_COLORS.Other
  },
  title: `${item.name} ${item.pct}%`
}))), /*#__PURE__*/React.createElement("div", {
  className: "lang-legend"
}, SITE.langMix.items.map(item => /*#__PURE__*/React.createElement("span", {
  key: item.name,
  className: "legend-item"
}, /*#__PURE__*/React.createElement("span", {
  className: "lang-dot",
  style: {
    background: LANG_COLORS[item.name] || LANG_COLORS.Other
  }
}), item.name, /*#__PURE__*/React.createElement("span", {
  className: "pct"
}, item.pct, "%")))))));
const About = ({
  lang
}) => {
  const c = SITE.captain;
  return /*#__PURE__*/React.createElement("section", {
    id: "captain",
    className: "section",
    "data-screen-label": "About 关于"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    s: SITE.sections.captain,
    lang: lang
  }), /*#__PURE__*/React.createElement("div", {
    className: "captain-grid"
  }, /*#__PURE__*/React.createElement("article", {
    className: "operator-card reveal",
    "data-tilt": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "operator-profile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar avatar-large"
  }, "BC"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "profile-k"
  }, "PROFILE"), /*#__PURE__*/React.createElement("h3", null, "Bobochang"), /*#__PURE__*/React.createElement(StatusDot, {
    label: "ACTIVE"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "captain-paras"
  }, c.paras.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, tr(p, lang)))), /*#__PURE__*/React.createElement("blockquote", {
    className: "philosophy"
  }, /*#__PURE__*/React.createElement("span", null, tr(c.philosophy.quote, lang)), /*#__PURE__*/React.createElement("cite", null, tr(c.philosophy.source, lang))), /*#__PURE__*/React.createElement("div", {
    className: "location-line"
  }, /*#__PURE__*/React.createElement(IconPin, {
    size: 14
  }), tr(c.location, lang))), /*#__PURE__*/React.createElement("div", {
    className: "stack-groups reveal",
    style: {
      "--d": "0.1s"
    }
  }, c.groups.map((group, i) => /*#__PURE__*/React.createElement("section", {
    key: i,
    className: "stack-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "group-k"
  }, /*#__PURE__*/React.createElement("span", null, "0", i + 1), tr(group.k, lang)), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, group.items.map((item, ii) => /*#__PURE__*/React.createElement("span", {
    key: ii,
    className: "chip"
  }, tr(item, lang))))))))));
};
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
  className: "section section-moorings",
  "data-screen-label": "Links 链接"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement(SectionHead, {
  s: SITE.sections.moorings,
  lang: lang
}), /*#__PURE__*/React.createElement("div", {
  className: "moorings-grid"
}, SITE.moorings.map((mooring, i) => {
  const Icon = MOORING_ICONS[mooring.icon] || IconGlobe;
  return /*#__PURE__*/React.createElement("a", {
    key: mooring.url,
    className: "mooring-card reveal",
    style: {
      "--d": `${i * 0.05}s`
    },
    href: mooring.url,
    ...(mooring.external === false ? {} : {
      target: "_blank",
      rel: "noreferrer"
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: "mooring-index"
  }, "0", i + 1), /*#__PURE__*/React.createElement(Icon, {
    size: 18
  }), /*#__PURE__*/React.createElement("strong", null, tr(mooring.name, lang)), /*#__PURE__*/React.createElement("span", {
    className: "mooring-handle"
  }, mooring.handle), /*#__PURE__*/React.createElement("span", {
    className: "mooring-note"
  }, tr(mooring.note, lang)), /*#__PURE__*/React.createElement("span", {
    className: "mooring-arrow"
  }, /*#__PURE__*/React.createElement(IconArrowUpRight, {
    size: 15
  })));
}))));
const Footer = ({
  lang,
  onSurface
}) => /*#__PURE__*/React.createElement("footer", {
  className: "footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap footer-inner"
}, /*#__PURE__*/React.createElement("span", null, "© 2026 Bobochang · ", tr(SITE.footer.line, lang)), /*#__PURE__*/React.createElement("span", {
  className: "footer-signal"
}, /*#__PURE__*/React.createElement("span", {
  className: "status-dot"
}), "SITE ONLINE"), /*#__PURE__*/React.createElement("button", {
  type: "button",
  className: "surface-link",
  onClick: onSurface
}, tr(SITE.footer.surface, lang), /*#__PURE__*/React.createElement(IconArrowUp, {
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
    size: 17
  })), open ? /*#__PURE__*/React.createElement("aside", {
    className: "tweaks-panel",
    "aria-label": tr(t.title, lang)
  }, /*#__PURE__*/React.createElement("div", {
    className: "tweaks-title"
  }, /*#__PURE__*/React.createElement("span", null, tr(t.title, lang)), /*#__PURE__*/React.createElement(StatusDot, {
    label: "LIVE"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tweak-row"
  }, /*#__PURE__*/React.createElement("span", null, tr(t.theme, lang)), /*#__PURE__*/React.createElement("div", {
    className: "seg"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: theme === "night" ? "on" : "",
    onClick: () => onTheme("night")
  }, tr(t.night, lang)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: theme === "chart" ? "on" : "",
    onClick: () => onTheme("chart")
  }, tr(t.chart, lang)))), /*#__PURE__*/React.createElement("div", {
    className: "tweak-row"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "signal-hue"
  }, tr(t.hue, lang)), /*#__PURE__*/React.createElement("input", {
    id: "signal-hue",
    type: "range",
    min: "270",
    max: "335",
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
    className: "tweaks-reset",
    onClick: onReset
  }, tr(t.reset, lang))) : null);
};
Object.assign(window, {
  ChartLayer,
  Topbar,
  Hero,
  SectionHead,
  FeaturedProject,
  Projects,
  ProjectCard,
  Activity,
  About,
  Links,
  Footer,
  TweaksPanel
});
// app.jsx — 应用状态唯一持有者:语言 / 主题 / 微调项 / 滚动入场。
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
  hue: 292,
  contours: true,
  motion: true
};
const App = () => {
  const saved = useRef(loadPrefs()).current;
  const savedHue = Number(saved.hue);
  const initialHue = Number.isFinite(savedHue) && savedHue >= 270 && savedHue <= 335 ? savedHue : DEFAULTS.hue;
  const [lang, setLang] = useState(saved.lang || "zh");
  const [theme, setTheme] = useState(saved.theme || DEFAULTS.theme);
  const [hue, setHue] = useState(initialHue);
  const [contours, setContours] = useState(saved.contours !== false);
  const [motion, setMotion] = useState(saved.motion !== false);
  const [panelOpen, setPanelOpen] = useState(false);

  // 同步到 <html> 属性 + CSS 变量 + localStorage
  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dataset.theme = theme;
    html.dataset.contours = contours ? "on" : "off";
    html.dataset.motion = motion ? "on" : "off";
    html.style.setProperty("--accent-h", String(hue));
    document.title = tr(SITE.meta.title, lang);
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
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll("[data-tilt]"));
    if (!motion || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach(card => {
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
      });
      return undefined;
    }
    const cleanups = cards.map(card => {
      const move = event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--tilt-x", `${(-y * 3.5).toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${(x * 4.5).toFixed(2)}deg`);
      };
      const leave = () => {
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
      };
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", leave);
      return () => {
        card.removeEventListener("pointermove", move);
        card.removeEventListener("pointerleave", leave);
      };
    });
    return () => cleanups.forEach(cleanup => cleanup());
  }, [lang, motion]);

  // 滚动入场:进入视口加 .revealed(一次性)
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal:not(.revealed)"));
    if (!("IntersectionObserver" in window) || els.length === 0) {
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
      threshold: 0.1,
      rootMargin: "0px 0px -6% 0px"
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [lang]);
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ChartLayer, null), /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement(Topbar, {
    lang: lang,
    theme: theme,
    onLang: setLang,
    onTheme: () => setTheme(theme === "night" ? "chart" : "night")
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    lang: lang
  }), /*#__PURE__*/React.createElement(FeaturedProject, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Projects, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Activity, {
    lang: lang
  }), /*#__PURE__*/React.createElement(About, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Links, {
    lang: lang
  })), /*#__PURE__*/React.createElement(Footer, {
    lang: lang,
    onSurface: surface
  })), /*#__PURE__*/React.createElement(TweaksPanel, {
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
