// icons.jsx — 线性图标集(海事风,统一 1.8 描边)+ 参数化罗盘 / 等深线 / 波浪。

const LineIcon = ({ size = 16, vb = "0 0 24 24", children }) => (
  <svg width={size} height={size} viewBox={vb} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);

const IconAnchor = ({ size = 16 }) => (
  <LineIcon size={size}>
    <circle cx="12" cy="5" r="2.8"></circle>
    <line x1="12" y1="7.8" x2="12" y2="22"></line>
    <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
  </LineIcon>
);

const IconArrowUpRight = ({ size = 16 }) => (
  <LineIcon size={size}><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="8 7 17 7 17 16"></polyline></LineIcon>
);

const IconArrowUp = ({ size = 16 }) => (
  <LineIcon size={size}><line x1="12" y1="20" x2="12" y2="5"></line><polyline points="6 11 12 5 18 11"></polyline></LineIcon>
);

const IconMoon = ({ size = 16 }) => (
  <LineIcon size={size}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path></LineIcon>
);

const IconSun = ({ size = 16 }) => (
  <LineIcon size={size}>
    <circle cx="12" cy="12" r="4.2"></circle>
    <line x1="12" y1="1.8" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="22.2"></line>
    <line x1="1.8" y1="12" x2="4" y2="12"></line><line x1="20" y1="12" x2="22.2" y2="12"></line>
    <line x1="4.8" y1="4.8" x2="6.4" y2="6.4"></line><line x1="17.6" y1="17.6" x2="19.2" y2="19.2"></line>
    <line x1="4.8" y1="19.2" x2="6.4" y2="17.6"></line><line x1="17.6" y1="6.4" x2="19.2" y2="4.8"></line>
  </LineIcon>
);

const IconGlobe = ({ size = 16 }) => (
  <LineIcon size={size}>
    <circle cx="12" cy="12" r="9"></circle>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <path d="M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z"></path>
  </LineIcon>
);

const IconBook = ({ size = 16 }) => (
  <LineIcon size={size}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </LineIcon>
);

const IconGrid = ({ size = 16 }) => (
  <LineIcon size={size}>
    <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
    <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
    <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
    <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
  </LineIcon>
);

const IconPin = ({ size = 16 }) => (
  <LineIcon size={size}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </LineIcon>
);

const IconPulse = ({ size = 16 }) => (
  <LineIcon size={size}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></LineIcon>
);

const IconShip = ({ size = 16 }) => (
  <LineIcon size={size}>
    <path d="M2.5 15.5h19l-2.3 4.4a2 2 0 0 1-1.8 1.1H6.6a2 2 0 0 1-1.8-1.1z"></path>
    <line x1="12" y1="3" x2="12" y2="15.5"></line>
    <path d="M12 4.5l5.6 7.5H12z"></path>
    <path d="M9.5 8.5L12 12h-4z"></path>
  </LineIcon>
);

const IconBox = ({ size = 16 }) => (
  <LineIcon size={size}>
    <path d="M21 8l-9-5-9 5v8l9 5 9-5z"></path>
    <polyline points="3 8 12 13 21 8"></polyline>
    <line x1="12" y1="13" x2="12" y2="21"></line>
  </LineIcon>
);

const IconFlag = ({ size = 16 }) => (
  <LineIcon size={size}>
    <line x1="5" y1="3" x2="5" y2="21"></line>
    <path d="M5 4h13l-3 3.75L18 11.5H5"></path>
  </LineIcon>
);

const IconStar = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 1.9l3.13 6.35 7 1.02-5.06 4.93 1.19 6.98L12 17.9l-6.26 3.28 1.19-6.98L1.87 9.27l7-1.02z"></path>
  </svg>
);

const IconGitHub = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
  </svg>
);

// 罗盘玫瑰:72 刻度环 + 三重圆环 + 八角星芒。纯线稿,颜色随 currentColor。
const CompassRose = () => {
  const C = 160;
  const ticks = [];
  for (let i = 0; i < 72; i++) {
    const a = (i * 5 * Math.PI) / 180;
    const major = i % 18 === 0;
    const mid = i % 9 === 0;
    const r1 = major ? 136 : mid ? 141 : 146;
    const r2 = 152;
    ticks.push(
      <line
        key={i}
        x1={C + r1 * Math.sin(a)} y1={C - r1 * Math.cos(a)}
        x2={C + r2 * Math.sin(a)} y2={C - r2 * Math.cos(a)}
        strokeWidth={major ? 1.5 : 0.7}
      ></line>
    );
  }
  const starPts = [];
  for (let k = 0; k < 8; k++) {
    const aOut = (k * 45 * Math.PI) / 180;
    const aIn = ((k * 45 + 22.5) * Math.PI) / 180;
    const rOut = k % 2 === 0 ? 112 : 72;
    starPts.push(`${C + rOut * Math.sin(aOut)},${C - rOut * Math.cos(aOut)}`);
    starPts.push(`${C + 20 * Math.sin(aIn)},${C - 20 * Math.cos(aIn)}`);
  }
  const cardinals = [
    { t: "N", x: C, y: C - 168 + 5 },
    { t: "E", x: C + 168, y: C + 5 },
    { t: "S", x: C, y: C + 168 + 5 },
    { t: "W", x: C - 168, y: C + 5 },
  ];
  return (
    <svg viewBox="-22 -22 364 364" fill="none" stroke="currentColor" aria-hidden="true" style={{ width: "100%", height: "auto" }}>
      <circle cx={C} cy={C} r="152" strokeWidth="1"></circle>
      <circle cx={C} cy={C} r="120" strokeWidth="0.6" opacity="0.7"></circle>
      <circle cx={C} cy={C} r="58" strokeWidth="0.6" opacity="0.5"></circle>
      <g>{ticks}</g>
      <polygon points={starPts.join(" ")} strokeWidth="1.1"></polygon>
      <line x1={C} y1="-14" x2={C} y2="334" strokeWidth="0.4" opacity="0.45"></line>
      <line x1="-14" y1={C} x2="334" y2={C} strokeWidth="0.4" opacity="0.45"></line>
      {cardinals.map((c) => (
        <text key={c.t} x={c.x} y={c.y} textAnchor="middle" stroke="none" fill="currentColor"
          style={{ font: "13px 'IBM Plex Mono', monospace", letterSpacing: "0.1em" }}>{c.t}</text>
      ))}
    </svg>
  );
};

// 等深线场:三簇同心"暗礁"轮廓,罩在整个视口后面。
const ContourField = () => (
  <svg className="contours" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <g transform="translate(1120 150)">
      {[1, 1.35, 1.75, 2.2, 2.7].map((k, i) => (
        <path key={i} transform={`scale(${k})`}
          d="M0 -62 C34 -58 58 -38 62 -8 C66 22 48 48 18 58 C-12 68 -44 58 -58 32 C-72 6 -66 -28 -44 -46 C-28 -60 -14 -64 0 -62 Z"></path>
      ))}
    </g>
    <g transform="translate(150 720)">
      {[1, 1.4, 1.85, 2.35].map((k, i) => (
        <path key={i} transform={`scale(${k})`}
          d="M0 -48 C26 -44 46 -28 50 -6 C54 16 40 36 16 44 C-8 52 -34 46 -46 26 C-58 6 -52 -22 -34 -36 C-22 -46 -10 -50 0 -48 Z"></path>
      ))}
    </g>
    <g transform="translate(780 470)">
      {[1, 1.55].map((k, i) => (
        <path key={i} transform={`scale(${k})`}
          d="M0 -30 C18 -26 30 -16 32 -2 C34 12 26 24 10 28 C-6 32 -22 26 -28 12 C-34 -2 -30 -18 -18 -26 C-12 -30 -6 -32 0 -30 Z"></path>
      ))}
    </g>
  </svg>
);

// 页脚波浪:三条相位错开的正弦线。
const waveD = (y, amp) => {
  let d = `M0 ${y} Q 25 ${y - amp} 50 ${y}`;
  for (let x = 100; x <= 1200; x += 50) d += ` T ${x} ${y}`;
  return d;
};

const FooterWaves = () => (
  <svg className="waves" viewBox="0 0 1200 44" preserveAspectRatio="none" aria-hidden="true">
    <path d={waveD(13, 6)} opacity="0.3"></path>
    <path d={waveD(23, 7)} opacity="0.55"></path>
    <path d={waveD(33, 6)} opacity="0.25"></path>
  </svg>
);

Object.assign(window, {
  IconAnchor, IconArrowUpRight, IconArrowUp, IconMoon, IconSun, IconGlobe, IconBook,
  IconGrid, IconPin, IconPulse, IconShip, IconBox, IconFlag, IconStar, IconGitHub,
  CompassRose, ContourField, FooterWaves,
});
