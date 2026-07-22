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
      zh: "母港 · 广州",
      en: "HOME PORT · GUANGZHOU"
    },
    title: {
      zh: "Bobochang · 开源船队",
      en: "Bobochang · The Fleet"
    }
  },
  nav: [{
    id: "flagship",
    zh: "旗舰",
    en: "Flagship"
  }, {
    id: "fleet",
    zh: "编队",
    en: "Fleet"
  }, {
    id: "log",
    zh: "日志",
    en: "Logbook"
  }, {
    id: "captain",
    zh: "船长室",
    en: "Captain"
  }, {
    id: "moorings",
    zh: "泊位",
    en: "Moorings"
  }],
  hero: {
    name: "Bobochang",
    roles: {
      zh: "AI Agent 开发者 · 全栈工程师 · 开源维护者",
      en: "AI Agent Developer · Full Stack Engineer · Open Source Maintainer"
    },
    tagline: {
      zh: "各自航行，同队而动。",
      en: "Each sails alone —\nthey move as one fleet."
    },
    bio: {
      zh: "我构建 agent-first 的自动化工具、CLI 产品与实用的开发者工作流，把重复劳动变成可靠系统。",
      en: "I build agent-first automation tools, CLI products, and practical developer workflows that turn repeated work into reliable systems."
    },
    ctaFleet: {
      zh: "检阅船队",
      en: "Review the fleet"
    },
    ctaGithub: "GitHub",
    vessels: {
      zh: "9 艘在航",
      en: "9 vessels under way"
    },
    routeLabel: {
      zh: "航线 · 2024 — 2026",
      en: "ROUTE · 2024 — 2026"
    }
  },
  sections: {
    flagship: {
      no: "01",
      zh: "旗舰",
      en: "The Flagship",
      sub: {
        zh: "船队里吨位最大的一艘。",
        en: "The heaviest tonnage in the fleet."
      }
    },
    fleet: {
      no: "02",
      zh: "编队",
      en: "In Formation",
      sub: {
        zh: "一套命名语法：一个单词、一个意象、一个 emoji。",
        en: "One naming grammar — a single word, a single image, a single emoji."
      }
    },
    log: {
      no: "03",
      zh: "航海日志",
      en: "The Logbook",
      sub: {
        zh: "过去一年的航行记录。",
        en: "A year of sailing, on the record."
      }
    },
    captain: {
      no: "04",
      zh: "船长室",
      en: "Captain's Quarters",
      sub: {
        zh: "掌舵的人。",
        en: "The one at the helm."
      }
    },
    moorings: {
      no: "05",
      zh: "泊位",
      en: "Moorings",
      sub: {
        zh: "有货要载、有航线要合？欢迎靠泊。",
        en: "Cargo to ship, routes to chart together? Come alongside."
      }
    }
  },
  flagship: {
    id: "boss-agent-cli",
    emoji: "🤖",
    name: "boss-agent-cli",
    stars: "1,434",
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
      zh: "旗舰",
      en: "FLAGSHIP"
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
    id: "Harbor",
    emoji: "⚓",
    lang: "Swift",
    stars: 0,
    image: {
      zh: "港湾 · 停泊与收藏",
      en: "harbor · dock & keep"
    },
    desc: {
      zh: "本地优先的 Mac 阅读与收藏应用 —— 数据全在本地的知识港湾，RSS 与稍后读一站收齐。",
      en: "Local-first reading & curation for macOS — a knowledge harbor where your data never leaves the machine."
    },
    tech: ["Swift", "SwiftUI", "SQLite"],
    github: "https://github.com/can4hou6joeng4/Harbor"
  }, {
    id: "Beacon",
    emoji: "🗼",
    lang: "TypeScript",
    stars: 0,
    image: {
      zh: "灯塔 · 预警在前",
      en: "beacon · warn ahead"
    },
    desc: {
      zh: "在证件过期之前，点亮它 —— PDF 证件有效期云端审计，OCR 自动识别到期日。",
      en: "Light up certificates before they lapse — cloud PDF expiry audits with OCR-extracted dates."
    },
    tech: ["Next.js", "Cloudflare Workers", "PaddleOCR"],
    github: "https://github.com/can4hou6joeng4/Beacon",
    site: "https://pdf-audit.bobochang.cn"
  }, {
    id: "Atlas",
    emoji: "🗺️",
    lang: "Swift",
    stars: 1,
    image: {
      zh: "海图 · 丈量航程",
      en: "chart · measure the voyage"
    },
    desc: {
      zh: "在 macOS 菜单栏丈量本地 AI 编程航程 —— token、成本、会话与 Git 活动一目了然。",
      en: "Chart your local AI-coding voyage from the macOS menu bar — tokens, cost, sessions, Git activity."
    },
    tech: ["Swift", "SwiftUI", "Sparkle"],
    github: "https://github.com/can4hou6joeng4/Atlas",
    site: "https://can4hou6joeng4.github.io/Atlas/"
  }, {
    id: "Semaphore",
    emoji: "🚩",
    lang: "TypeScript",
    stars: 0,
    image: {
      zh: "旗语 · 图像化作字符",
      en: "flag signals · image to characters"
    },
    desc: {
      zh: "把图片打成字符旗语 —— 全程在浏览器本地完成，无上传、无账号，支持盲文与 CRT 风格。",
      en: "Turn any image into ASCII art right in the browser — no upload, no account; Braille & CRT modes included."
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
      zh: "拖网 · 一网打捞",
      en: "trawl · haul it all in"
    },
    desc: {
      zh: "把成摞法律文书一网打捞成结构化数据的桌面取证台 —— PDF、DOCX、OCR 通吃。",
      en: "A desktop forensics bench that nets stacks of legal documents into structured data — PDF, DOCX, OCR."
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
      zh: "潮汐 · 守时如海",
      en: "tide · punctual as the sea"
    },
    desc: {
      zh: "如潮汐般守时的掘金每日签到 —— 免费抽奖，Telegram 播报战果。",
      en: "Daily Juejin check-ins, punctual as the tide — free lottery draws, results piped to Telegram."
    },
    tech: ["Playwright", "GitHub Actions"],
    github: "https://github.com/can4hou6joeng4/Tide"
  }, {
    id: "Buoy",
    emoji: "🛟",
    lang: "Python",
    stars: 0,
    image: {
      zh: "浮标 · 按时浮出",
      en: "buoy · surface on schedule"
    },
    desc: {
      zh: "按时浮出水面报到的 AnyRouter 多账号自动签到 —— 多平台通知，智能隐私脱敏。",
      en: "AnyRouter multi-account check-in that surfaces on schedule — notifications with privacy masking."
    },
    tech: ["Python", "GitHub Actions"],
    github: "https://github.com/can4hou6joeng4/Buoy"
  }, {
    id: "landing-craft",
    emoji: "🛥️",
    lang: "HTML",
    stars: 2,
    image: {
      zh: "登陆艇 · 抢滩上岸",
      en: "landing craft · hit the beach"
    },
    desc: {
      zh: "让落地页真正「落地」的 Claude Code 技能 —— 57 套城市灵感设计系统与 GSAP 动效。",
      en: "A Claude Code skill that puts landing pages ashore — 57 city-inspired design systems, GSAP motion."
    },
    tech: ["Claude Code", "GSAP", "SVG"],
    github: "https://github.com/can4hou6joeng4/landing-craft",
    site: "https://can4hou6joeng4.github.io/landing-craft/"
  }],
  fleetNarrative: {
    zh: "Harbor 收好你读过的，Beacon 在过期前点亮；Atlas 丈量航程，Tide 与 Buoy 按时浮出报到；Semaphore 把图像打成旗语，Trawl 把文书捞成数据，landing-craft 送页面抢滩上岸 —— 各自航行，同队而动。",
    en: "Harbor keeps what you read, and Beacon warns before it expires. Atlas charts the voyage while Tide and Buoy surface on schedule to report in. Semaphore signals images into characters, Trawl hauls documents up as data, and landing-craft puts your pages ashore — each sails alone, but they move as one fleet."
  },
  stats: [{
    value: "1,437",
    icon: "star",
    label: {
      zh: "累计星标",
      en: "Total stars"
    }
  }, {
    value: "1,313",
    icon: "pulse",
    label: {
      zh: "年度贡献",
      en: "Contributions / yr"
    }
  }, {
    value: "9",
    icon: "ship",
    label: {
      zh: "在航船只",
      en: "Vessels under way"
    }
  }, {
    value: "13",
    icon: "box",
    label: {
      zh: "公开仓库",
      en: "Public repos"
    }
  }],
  langMix: {
    title: {
      zh: "主航线 · 语言分布",
      en: "Main routes · language mix"
    },
    note: {
      zh: "按船队各仓库代码量统计",
      en: "By code volume across fleet repositories"
    },
    items: [{
      name: "Swift",
      pct: 44
    }, {
      name: "Python",
      pct: 33
    }, {
      name: "HTML",
      pct: 8
    }, {
      name: "TypeScript",
      pct: 6
    }, {
      name: "JavaScript",
      pct: 4
    }, {
      name: "Go",
      pct: 2
    }, {
      name: "Vue",
      pct: 1
    }, {
      name: "Other",
      pct: 2
    }]
  },
  captain: {
    paras: [{
      zh: "泊于广州，长期在开源海域巡航。主攻 AI agent 工具链与自动化：让 agent 直接可用的 CLI、跑在 GitHub Actions 上的守时机器人、数据不出本机的 macOS 应用。",
      en: "Anchored in Guangzhou, cruising open-source waters. Focus: AI-agent toolchains and automation — CLIs that agents can drive, punctual bots on GitHub Actions, and local-first macOS apps."
    }, {
      zh: "造船的标准只有一条：把重复劳动变成可靠系统，然后让它自己航行。",
      en: "One shipwright's rule: turn repeated work into a reliable system — then let it sail on its own."
    }],
    philosophy: {
      quote: {
        zh: "一套命名语法：一个单词、一个意象、一个 emoji。",
        en: "One naming grammar — a single word, a single image, a single emoji."
      },
      source: {
        zh: "船队命名守则 · README",
        en: "The Fleet · README"
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
        zh: "航域",
        en: "Waters"
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
        zh: "索具",
        en: "Rigging"
      },
      items: ["Claude Code", "GitHub Actions", "Cloudflare", "SwiftUI", "Playwright", "Wails", "Vite", "Next.js"]
    }],
    location: {
      zh: "泊于广州 · 珠江口",
      en: "Anchored in Guangzhou · Pearl River estuary"
    }
  },
  moorings: [{
    icon: "github",
    name: "GitHub",
    handle: "@can4hou6joeng4",
    url: "https://github.com/can4hou6joeng4",
    note: {
      zh: "船籍港",
      en: "Port of registry"
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
      zh: "航海记录",
      en: "Voyage notes"
    }
  }, {
    icon: "box",
    name: "Homeport",
    handle: "src · bobochang.cn",
    url: "https://github.com/can4hou6joeng4/Homeport",
    note: {
      zh: "本站源码 · 母港",
      en: "This site's source"
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
      zh: "泊于广州，航向开源。",
      en: "Anchored in Guangzhou, sailing open source."
    },
    crafted: {
      zh: "以 HTML 为帆",
      en: "HTML for sails"
    },
    surface: {
      zh: "浮出水面",
      en: "Surface"
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
      zh: "夜航",
      en: "Night"
    },
    chart: {
      zh: "海图",
      en: "Chart"
    },
    hue: {
      zh: "灯塔色相",
      en: "Beacon hue"
    },
    contours: {
      zh: "海图纹理",
      en: "Chart texture"
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
// icons.jsx — 线性图标集(海事风,统一 1.8 描边)+ 参数化罗盘 / 等深线 / 波浪。

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
  IconMoon,
  IconSun,
  IconGlobe,
  IconBook,
  IconGrid,
  IconPin,
  IconPulse,
  IconShip,
  IconBox,
  IconFlag,
  IconStar,
  IconGitHub,
  CompassRose,
  ContourField,
  FooterWaves
});
// components.jsx — 展示组件:属性进、回调出,不持有应用状态。
// 全局依赖:SITE / tr / LANG_COLORS(data.jsx),图标(icons.jsx)。

// ── 海图底纹层 ──────────────────────────────────────────────
const SOUNDINGS = [{
  top: "14%",
  left: "72%",
  n: "1433"
}, {
  top: "56%",
  left: "5%",
  n: "1312"
}, {
  top: "78%",
  left: "88%",
  n: "961"
}, {
  top: "88%",
  left: "30%",
  n: "26"
}, {
  top: "34%",
  left: "44%",
  n: "13"
}];
const ChartLayer = () => /*#__PURE__*/React.createElement("div", {
  className: "chart-layer",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("div", {
  className: "graticule"
}), /*#__PURE__*/React.createElement(ContourField, null), SOUNDINGS.map(s => /*#__PURE__*/React.createElement("span", {
  key: s.n,
  className: "sounding",
  style: {
    top: s.top,
    left: s.left
  }
}, s.n)));

// ── 顶栏 ────────────────────────────────────────────────────
const Topbar = ({
  lang,
  theme,
  onLang,
  onTheme
}) => /*#__PURE__*/React.createElement("header", {
  className: "topbar"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap topbar-inner"
}, /*#__PURE__*/React.createElement("a", {
  className: "wordmark",
  href: "#top"
}, /*#__PURE__*/React.createElement(IconAnchor, {
  size: 17
}), /*#__PURE__*/React.createElement("span", null, "BOBOCHANG")), /*#__PURE__*/React.createElement("nav", {
  className: "nav"
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
  title: theme === "night" ? tr(SITE.tweaks.chart, lang) : tr(SITE.tweaks.night, lang)
}, theme === "night" ? /*#__PURE__*/React.createElement(IconSun, {
  size: 15
}) : /*#__PURE__*/React.createElement(IconMoon, {
  size: 15
})))));

// ── 航线图(英雄区底部):9 艘船串在一条洋流上 ───────────────
const ROUTE_DOTS = [{
  x: 34,
  y: 84,
  n: "boss-agent-cli",
  flag: true
}, {
  x: 176,
  y: 56,
  n: "Harbor"
}, {
  x: 318,
  y: 72,
  n: "Beacon"
}, {
  x: 460,
  y: 44,
  n: "Atlas"
}, {
  x: 602,
  y: 64,
  n: "Semaphore"
}, {
  x: 744,
  y: 38,
  n: "Trawl"
}, {
  x: 886,
  y: 56,
  n: "Tide"
}, {
  x: 1028,
  y: 42,
  n: "Buoy"
}, {
  x: 1162,
  y: 26,
  n: "landing-craft"
}];
const routePath = () => {
  const p = ROUTE_DOTS;
  let d = `M ${p[0].x} ${p[0].y}`;
  for (let i = 1; i < p.length - 1; i++) {
    const mx = (p[i].x + p[i + 1].x) / 2;
    const my = (p[i].y + p[i + 1].y) / 2;
    d += ` Q ${p[i].x} ${p[i].y} ${mx} ${my}`;
  }
  const last = p[p.length - 1];
  d += ` L ${last.x} ${last.y}`;
  return d;
};
const RouteLine = ({
  lang
}) => /*#__PURE__*/React.createElement("div", {
  className: "routeline reveal",
  style: {
    "--d": "0.34s"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "route-caption"
}, /*#__PURE__*/React.createElement("span", null, tr(SITE.hero.routeLabel, lang)), /*#__PURE__*/React.createElement("span", null, tr(SITE.hero.vessels, lang))), /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 -14 1196 130",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  className: "route-path",
  d: routePath()
}), ROUTE_DOTS.map((p, i) => /*#__PURE__*/React.createElement("g", {
  key: p.n
}, /*#__PURE__*/React.createElement("circle", {
  className: `route-dot${p.flag ? " flag" : ""}`,
  cx: p.x,
  cy: p.y,
  r: p.flag ? 5 : 3.5
}, /*#__PURE__*/React.createElement("title", null, p.n)), p.flag ? /*#__PURE__*/React.createElement("text", {
  className: "route-star",
  x: p.x,
  y: p.y - 14,
  textAnchor: "start"
}, "★ 1.4k") : null, /*#__PURE__*/React.createElement("text", {
  className: "route-name",
  x: p.x,
  y: i % 2 === 0 ? p.y + 24 : p.y - 14,
  textAnchor: i === 0 ? "start" : i === ROUTE_DOTS.length - 1 ? "end" : "middle"
}, p.n)))));

// ── 英雄区 · 母港 ───────────────────────────────────────────
const Hero = ({
  lang
}) => {
  const h = SITE.hero;
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top",
    "data-screen-label": "Home Port 母港"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "compass"
  }, /*#__PURE__*/React.createElement(CompassRose, null)), /*#__PURE__*/React.createElement("div", {
    className: "kicker reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("span", null, SITE.meta.coords), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "·"), /*#__PURE__*/React.createElement("span", null, tr(SITE.meta.port, lang))), /*#__PURE__*/React.createElement("h1", {
    className: "reveal",
    style: {
      "--d": "0.05s"
    }
  }, "Bobochang", /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, ".")), /*#__PURE__*/React.createElement("div", {
    className: "roles reveal",
    style: {
      "--d": "0.1s"
    }
  }, tr(h.roles, lang)), /*#__PURE__*/React.createElement("p", {
    className: "tagline reveal",
    style: {
      "--d": "0.16s"
    }
  }, tr(h.tagline, lang)), /*#__PURE__*/React.createElement("p", {
    className: "bio reveal",
    style: {
      "--d": "0.22s"
    }
  }, tr(h.bio, lang)), /*#__PURE__*/React.createElement("div", {
    className: "cta-row reveal",
    style: {
      "--d": "0.28s"
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "#fleet"
  }, /*#__PURE__*/React.createElement(IconAnchor, {
    size: 15
  }), tr(h.ctaFleet, lang)), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: SITE.meta.github,
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement(IconGitHub, {
    size: 15
  }), h.ctaGithub, /*#__PURE__*/React.createElement("span", {
    className: "star-chip"
  }, "★ 1.4k"))), /*#__PURE__*/React.createElement(RouteLine, {
    lang: lang
  })));
};

// ── 分区标题 ────────────────────────────────────────────────
const SectionHead = ({
  s,
  lang
}) => {
  const other = lang === "zh" ? "en" : "zh";
  return /*#__PURE__*/React.createElement("header", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chart-no"
  }, "CHART ", s.no), /*#__PURE__*/React.createElement("div", {
    className: "section-title-row"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, tr(s, lang)), /*#__PURE__*/React.createElement("span", {
    className: "section-alt"
  }, tr(s, other))), /*#__PURE__*/React.createElement("p", {
    className: "section-sub"
  }, tr(s.sub, lang)));
};

// ── 旗舰 ────────────────────────────────────────────────────
const Flagship = ({
  lang
}) => {
  const f = SITE.flagship;
  return /*#__PURE__*/React.createElement("section", {
    id: "flagship",
    className: "section",
    "data-screen-label": "Flagship 旗舰"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    s: SITE.sections.flagship,
    lang: lang
  }), /*#__PURE__*/React.createElement("article", {
    className: "flagship-card reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pennant"
  }, /*#__PURE__*/React.createElement(IconFlag, {
    size: 12
  }), tr(f.pennant, lang)), /*#__PURE__*/React.createElement("div", {
    className: "flagship-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ship-mark",
    "aria-hidden": "true"
  }, f.emoji), /*#__PURE__*/React.createElement("h3", {
    className: "flagship-name"
  }, f.name), /*#__PURE__*/React.createElement("div", {
    className: "flagship-stars"
  }, /*#__PURE__*/React.createElement(IconStar, {
    size: 17
  }), /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, f.stars), /*#__PURE__*/React.createElement("span", {
    className: "note"
  }, tr(f.starsNote, lang))), /*#__PURE__*/React.createElement("p", {
    className: "flagship-desc"
  }, tr(f.desc, lang)), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, f.tech.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "chip"
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "flagship-links"
  }, f.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.url,
    className: "text-link",
    href: l.url,
    target: "_blank",
    rel: "noreferrer"
  }, l.icon === "github" ? /*#__PURE__*/React.createElement(IconGitHub, {
    size: 14
  }) : /*#__PURE__*/React.createElement(IconArrowUpRight, {
    size: 14
  }), tr(l.label, lang))))), /*#__PURE__*/React.createElement("div", {
    className: "term-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "term"
  }, /*#__PURE__*/React.createElement("div", {
    className: "term-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "td"
  }), /*#__PURE__*/React.createElement("span", {
    className: "td"
  }), /*#__PURE__*/React.createElement("span", {
    className: "td"
  }), /*#__PURE__*/React.createElement("span", {
    className: "term-title"
  }, "boss-agent-cli · agent session")), /*#__PURE__*/React.createElement("div", {
    className: "term-body"
  }, f.term.map((line, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `t-${line.t}`
  }, line.s))))))));
};

// ── 编队 ────────────────────────────────────────────────────
const ShipCard = ({
  s,
  i,
  lang
}) => /*#__PURE__*/React.createElement("article", {
  className: "ship-card reveal",
  style: {
    "--d": `${i % 4 * 0.07}s`
  }
}, /*#__PURE__*/React.createElement("div", {
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
  className: "ship-meta"
}, /*#__PURE__*/React.createElement("span", {
  className: "lang-dot",
  style: {
    background: LANG_COLORS[s.lang] || LANG_COLORS.Other
  }
}), /*#__PURE__*/React.createElement("span", null, s.lang), s.stars > 0 ? /*#__PURE__*/React.createElement("span", {
  className: "meta-star"
}, /*#__PURE__*/React.createElement(IconStar, {
  size: 11
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
const Fleet = ({
  lang
}) => /*#__PURE__*/React.createElement("section", {
  id: "fleet",
  className: "section",
  "data-screen-label": "Fleet 编队"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement(SectionHead, {
  s: SITE.sections.fleet,
  lang: lang
}), /*#__PURE__*/React.createElement("div", {
  className: "fleet-grid"
}, SITE.fleet.map((s, i) => /*#__PURE__*/React.createElement(ShipCard, {
  key: s.id,
  s: s,
  i: i,
  lang: lang
}))), /*#__PURE__*/React.createElement("blockquote", {
  className: "log-entry reveal"
}, /*#__PURE__*/React.createElement("span", {
  className: "log-k"
}, lang === "zh" ? "LOG · 编队记" : "LOG · THE FLEET"), tr(SITE.fleetNarrative, lang))));

// ── 航海日志(统计) ────────────────────────────────────────
const STAT_ICONS = {
  star: IconStar,
  pulse: IconPulse,
  ship: IconShip,
  box: IconBox
};
const Logbook = ({
  lang
}) => /*#__PURE__*/React.createElement("section", {
  id: "log",
  className: "section",
  "data-screen-label": "Logbook 航海日志"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement(SectionHead, {
  s: SITE.sections.log,
  lang: lang
}), /*#__PURE__*/React.createElement("div", {
  className: "stats-grid"
}, SITE.stats.map((st, i) => {
  const Ic = STAT_ICONS[st.icon] || IconStar;
  return /*#__PURE__*/React.createElement("div", {
    key: st.icon,
    className: "stat reveal",
    style: {
      "--d": `${i * 0.08}s`
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    size: 17
  }), /*#__PURE__*/React.createElement("div", {
    className: "stat-num"
  }, st.value), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, tr(st.label, lang)));
})), /*#__PURE__*/React.createElement("div", {
  className: "langmix reveal"
}, /*#__PURE__*/React.createElement("div", {
  className: "langmix-head"
}, /*#__PURE__*/React.createElement("span", null, tr(SITE.langMix.title, lang)), /*#__PURE__*/React.createElement("span", null, tr(SITE.langMix.note, lang))), /*#__PURE__*/React.createElement("div", {
  className: "langbar"
}, SITE.langMix.items.map(it => /*#__PURE__*/React.createElement("span", {
  key: it.name,
  style: {
    width: `${it.pct}%`,
    background: LANG_COLORS[it.name] || LANG_COLORS.Other
  },
  title: `${it.name} ${it.pct}%`
}))), /*#__PURE__*/React.createElement("div", {
  className: "lang-legend"
}, SITE.langMix.items.map(it => /*#__PURE__*/React.createElement("span", {
  key: it.name,
  className: "legend-item"
}, /*#__PURE__*/React.createElement("span", {
  className: "lang-dot",
  style: {
    background: LANG_COLORS[it.name] || LANG_COLORS.Other
  }
}), it.name, " ", /*#__PURE__*/React.createElement("span", {
  className: "pct"
}, it.pct, "%")))))));

// ── 船长室 ──────────────────────────────────────────────────
const Captain = ({
  lang
}) => {
  const c = SITE.captain;
  return /*#__PURE__*/React.createElement("section", {
    id: "captain",
    className: "section",
    "data-screen-label": "Captain 船长室"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    s: SITE.sections.captain,
    lang: lang
  }), /*#__PURE__*/React.createElement("div", {
    className: "captain-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "captain-paras reveal"
  }, c.paras.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, tr(p, lang))), /*#__PURE__*/React.createElement("div", {
    className: "philosophy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "q"
  }, tr(c.philosophy.quote, lang)), /*#__PURE__*/React.createElement("div", {
    className: "src"
  }, tr(c.philosophy.source, lang))), /*#__PURE__*/React.createElement("div", {
    className: "location-line"
  }, /*#__PURE__*/React.createElement(IconPin, {
    size: 14
  }), tr(c.location, lang))), /*#__PURE__*/React.createElement("div", {
    className: "stack-groups reveal",
    style: {
      "--d": "0.12s"
    }
  }, c.groups.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: gi
  }, /*#__PURE__*/React.createElement("div", {
    className: "group-k"
  }, tr(g.k, lang)), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, g.items.map((it, ii) => /*#__PURE__*/React.createElement("span", {
    key: ii,
    className: "chip"
  }, tr(it, lang))))))))));
};

// ── 泊位(联系) ────────────────────────────────────────────
const MOORING_ICONS = {
  github: IconGitHub,
  book: IconBook,
  globe: IconGlobe,
  grid: IconGrid,
  box: IconBox
};
const Moorings = ({
  lang
}) => /*#__PURE__*/React.createElement("section", {
  id: "moorings",
  className: "section",
  "data-screen-label": "Moorings 泊位"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement(SectionHead, {
  s: SITE.sections.moorings,
  lang: lang
}), /*#__PURE__*/React.createElement("div", {
  className: "moorings-grid"
}, SITE.moorings.map((m, i) => {
  const Ic = MOORING_ICONS[m.icon] || IconGlobe;
  return /*#__PURE__*/React.createElement("a", {
    key: m.url,
    className: "mooring-card reveal",
    style: {
      "--d": `${i * 0.07}s`
    },
    href: m.url,
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mooring-top"
  }, /*#__PURE__*/React.createElement(Ic, {
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "mooring-name"
  }, tr(m.name, lang))), /*#__PURE__*/React.createElement("div", {
    className: "mooring-handle"
  }, m.handle), /*#__PURE__*/React.createElement("div", {
    className: "mooring-note"
  }, tr(m.note, lang)), /*#__PURE__*/React.createElement("span", {
    className: "mooring-arrow"
  }, /*#__PURE__*/React.createElement(IconArrowUpRight, {
    size: 15
  })));
}))));

// ── 页脚 ────────────────────────────────────────────────────
const Footer = ({
  lang,
  onSurface
}) => /*#__PURE__*/React.createElement("footer", {
  className: "footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement(FooterWaves, null), /*#__PURE__*/React.createElement("div", {
  className: "footer-inner"
}, /*#__PURE__*/React.createElement("span", null, "© 2026 Bobochang · ", tr(SITE.footer.line, lang)), /*#__PURE__*/React.createElement("span", null, tr(SITE.footer.crafted, lang)), /*#__PURE__*/React.createElement("button", {
  type: "button",
  className: "surface-link",
  onClick: onSurface
}, tr(SITE.footer.surface, lang), /*#__PURE__*/React.createElement(IconArrowUp, {
  size: 13
})))));

// ── Tweaks 微调面板(展示层,状态由 App 持有) ──────────────
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
    onClick: onToggle
  }, tr(t.title, lang).toUpperCase()), open ? /*#__PURE__*/React.createElement("div", {
    className: "tweaks-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tweaks-title"
  }, tr(t.title, lang), " · TWEAKS"), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("span", null, tr(t.hue, lang)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "25",
    max: "95",
    value: hue,
    onChange: e => onHue(Number(e.target.value))
  })), /*#__PURE__*/React.createElement("div", {
    className: "tweak-row"
  }, /*#__PURE__*/React.createElement("span", null, tr(t.contours, lang)), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: contours,
    onChange: e => onContours(e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    className: "tweak-row"
  }, /*#__PURE__*/React.createElement("span", null, tr(t.motion, lang)), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: motion,
    onChange: e => onMotion(e.target.checked)
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
  RouteLine,
  SectionHead,
  Flagship,
  Fleet,
  ShipCard,
  Logbook,
  Captain,
  Moorings,
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
  hue: 62,
  contours: true,
  motion: true
};
const App = () => {
  const saved = useRef(loadPrefs()).current;
  const [lang, setLang] = useState(saved.lang || "zh");
  const [theme, setTheme] = useState(saved.theme || DEFAULTS.theme);
  const [hue, setHue] = useState(saved.hue != null ? saved.hue : DEFAULTS.hue);
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
  }), /*#__PURE__*/React.createElement(Flagship, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Fleet, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Logbook, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Captain, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Moorings, {
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
