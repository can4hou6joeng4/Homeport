// components.jsx — 展示组件:属性进、回调出,不持有应用状态。
// 全局依赖:SITE / tr / LANG_COLORS(data.jsx),图标(icons.jsx)。

// ── 海图底纹层 ──────────────────────────────────────────────
const SOUNDINGS = [
  { top: "14%", left: "72%", n: "1433" },
  { top: "56%", left: "5%", n: "1312" },
  { top: "78%", left: "88%", n: "961" },
  { top: "88%", left: "30%", n: "26" },
  { top: "34%", left: "44%", n: "13" },
];

const ChartLayer = () => (
  <div className="chart-layer" aria-hidden="true">
    <div className="graticule"></div>
    <ContourField />
    {SOUNDINGS.map((s) => (
      <span key={s.n} className="sounding" style={{ top: s.top, left: s.left }}>{s.n}</span>
    ))}
  </div>
);

// ── 顶栏 ────────────────────────────────────────────────────
const Topbar = ({ lang, theme, onLang, onTheme }) => (
  <header className="topbar">
    <div className="wrap topbar-inner">
      <a className="wordmark" href="#top"><IconAnchor size={17} /><span>BOBOCHANG</span></a>
      <nav className="nav">
        {SITE.nav.map((n) => (
          <a key={n.id} href={`#${n.id}`}>{tr(n, lang)}</a>
        ))}
      </nav>
      <div className="controls">
        <div className="seg" role="group" aria-label="Language / 语言">
          <button type="button" className={lang === "zh" ? "on" : ""} onClick={() => onLang("zh")}>中</button>
          <button type="button" className={lang === "en" ? "on" : ""} onClick={() => onLang("en")}>EN</button>
        </div>
        <button type="button" className="icon-btn" onClick={onTheme}
          title={theme === "night" ? tr(SITE.tweaks.chart, lang) : tr(SITE.tweaks.night, lang)}>
          {theme === "night" ? <IconSun size={15} /> : <IconMoon size={15} />}
        </button>
      </div>
    </div>
  </header>
);

// ── 航线图(英雄区底部):9 艘船串在一条洋流上 ───────────────
const ROUTE_DOTS = [
  { x: 34, y: 84, n: "boss-agent-cli", flag: true },
  { x: 176, y: 56, n: "Harbor" },
  { x: 318, y: 72, n: "Beacon" },
  { x: 460, y: 44, n: "Atlas" },
  { x: 602, y: 64, n: "Semaphore" },
  { x: 744, y: 38, n: "Trawl" },
  { x: 886, y: 56, n: "Tide" },
  { x: 1028, y: 42, n: "Buoy" },
  { x: 1162, y: 26, n: "landing-craft" },
];

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

const RouteLine = ({ lang }) => (
  <div className="routeline reveal" style={{ "--d": "0.34s" }}>
    <div className="route-caption">
      <span>{tr(SITE.hero.routeLabel, lang)}</span>
      <span>{tr(SITE.hero.vessels, lang)}</span>
    </div>
    <svg viewBox="0 -14 1196 130" aria-hidden="true">
      <path className="route-path" d={routePath()}></path>
      {ROUTE_DOTS.map((p, i) => (
        <g key={p.n}>
          <circle className={`route-dot${p.flag ? " flag" : ""}`} cx={p.x} cy={p.y} r={p.flag ? 5 : 3.5}>
            <title>{p.n}</title>
          </circle>
          {p.flag ? (
            <text className="route-star" x={p.x} y={p.y - 14} textAnchor="start">★ 1.4k</text>
          ) : null}
          <text className="route-name" x={p.x} y={i % 2 === 0 ? p.y + 24 : p.y - 14}
            textAnchor={i === 0 ? "start" : i === ROUTE_DOTS.length - 1 ? "end" : "middle"}>
            {p.n}
          </text>
        </g>
      ))}
    </svg>
  </div>
);

// ── 英雄区 · 母港 ───────────────────────────────────────────
const Hero = ({ lang }) => {
  const h = SITE.hero;
  return (
    <section className="hero" id="top" data-screen-label="Home Port 母港">
      <div className="wrap hero-inner">
        <div className="compass"><CompassRose /></div>
        <div className="kicker reveal">
          <span className="rule"></span>
          <span>{SITE.meta.coords}</span>
          <span className="sep">·</span>
          <span>{tr(SITE.meta.port, lang)}</span>
        </div>
        <h1 className="reveal" style={{ "--d": "0.05s" }}>Bobochang<span className="dot">.</span></h1>
        <div className="roles reveal" style={{ "--d": "0.1s" }}>{tr(h.roles, lang)}</div>
        <p className="tagline reveal" style={{ "--d": "0.16s" }}>{tr(h.tagline, lang)}</p>
        <p className="bio reveal" style={{ "--d": "0.22s" }}>{tr(h.bio, lang)}</p>
        <div className="cta-row reveal" style={{ "--d": "0.28s" }}>
          <a className="btn btn-primary" href="#fleet"><IconAnchor size={15} />{tr(h.ctaFleet, lang)}</a>
          <a className="btn btn-ghost" href={SITE.meta.github} target="_blank" rel="noreferrer">
            <IconGitHub size={15} />{h.ctaGithub}<span className="star-chip">★ 1.4k</span>
          </a>
        </div>
        <RouteLine lang={lang} />
      </div>
    </section>
  );
};

// ── 分区标题 ────────────────────────────────────────────────
const SectionHead = ({ s, lang }) => {
  const other = lang === "zh" ? "en" : "zh";
  return (
    <header className="section-head reveal">
      <div className="chart-no">CHART {s.no}</div>
      <div className="section-title-row">
        <h2 className="section-title">{tr(s, lang)}</h2>
        <span className="section-alt">{tr(s, other)}</span>
      </div>
      <p className="section-sub">{tr(s.sub, lang)}</p>
    </header>
  );
};

// ── 旗舰 ────────────────────────────────────────────────────
const Flagship = ({ lang }) => {
  const f = SITE.flagship;
  return (
    <section id="flagship" className="section" data-screen-label="Flagship 旗舰">
      <div className="wrap">
        <SectionHead s={SITE.sections.flagship} lang={lang} />
        <article className="flagship-card reveal">
          <div className="pennant"><IconFlag size={12} />{tr(f.pennant, lang)}</div>
          <div className="flagship-left">
            <div className="ship-mark" aria-hidden="true">{f.emoji}</div>
            <h3 className="flagship-name">{f.name}</h3>
            <div className="flagship-stars">
              <IconStar size={17} />
              <span className="num">{f.stars}</span>
              <span className="note">{tr(f.starsNote, lang)}</span>
            </div>
            <p className="flagship-desc">{tr(f.desc, lang)}</p>
            <div className="chips">
              {f.tech.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
            <div className="flagship-links">
              {f.links.map((l) => (
                <a key={l.url} className="text-link" href={l.url} target="_blank" rel="noreferrer">
                  {l.icon === "github" ? <IconGitHub size={14} /> : <IconArrowUpRight size={14} />}
                  {tr(l.label, lang)}
                </a>
              ))}
            </div>
          </div>
          <div className="term-wrap">
            <div className="term">
              <div className="term-head">
                <span className="td"></span><span className="td"></span><span className="td"></span>
                <span className="term-title">boss-agent-cli · agent session</span>
              </div>
              <div className="term-body">
                {f.term.map((line, i) => (
                  <div key={i} className={`t-${line.t}`}>{line.s}</div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

// ── 编队 ────────────────────────────────────────────────────
const ShipCard = ({ s, i, lang }) => (
  <article className="ship-card reveal" style={{ "--d": `${(i % 4) * 0.07}s` }}>
    <div className="ship-top">
      <div className="ship-mark" aria-hidden="true">{s.emoji}</div>
      <div>
        <h3 className="ship-name">{s.id}</h3>
        <div className="ship-image">{tr(s.image, lang)}</div>
      </div>
    </div>
    <p className="ship-desc">{tr(s.desc, lang)}</p>
    <div className="ship-meta">
      <span className="lang-dot" style={{ background: LANG_COLORS[s.lang] || LANG_COLORS.Other }}></span>
      <span>{s.lang}</span>
      {s.stars > 0 ? <span className="meta-star"><IconStar size={11} />{s.stars}</span> : null}
      <span className="spacer"></span>
      <a className="mini-link" href={s.github} target="_blank" rel="noreferrer" title="GitHub"><IconGitHub size={15} /></a>
      {s.site ? (
        <a className="mini-link" href={s.site} target="_blank" rel="noreferrer"
          title={s.siteLabel ? tr(s.siteLabel, lang) : "Site"}><IconArrowUpRight size={15} /></a>
      ) : null}
    </div>
  </article>
);

const Fleet = ({ lang }) => (
  <section id="fleet" className="section" data-screen-label="Fleet 编队">
    <div className="wrap">
      <SectionHead s={SITE.sections.fleet} lang={lang} />
      <div className="fleet-grid">
        {SITE.fleet.map((s, i) => <ShipCard key={s.id} s={s} i={i} lang={lang} />)}
      </div>
      <blockquote className="log-entry reveal">
        <span className="log-k">{lang === "zh" ? "LOG · 编队记" : "LOG · THE FLEET"}</span>
        {tr(SITE.fleetNarrative, lang)}
      </blockquote>
    </div>
  </section>
);

// ── 航海日志(统计) ────────────────────────────────────────
const STAT_ICONS = { star: IconStar, pulse: IconPulse, ship: IconShip, box: IconBox };

const Logbook = ({ lang }) => (
  <section id="log" className="section" data-screen-label="Logbook 航海日志">
    <div className="wrap">
      <SectionHead s={SITE.sections.log} lang={lang} />
      <div className="stats-grid">
        {SITE.stats.map((st, i) => {
          const Ic = STAT_ICONS[st.icon] || IconStar;
          return (
            <div key={st.icon} className="stat reveal" style={{ "--d": `${i * 0.08}s` }}>
              <Ic size={17} />
              <div className="stat-num">{st.value}</div>
              <div className="stat-label">{tr(st.label, lang)}</div>
            </div>
          );
        })}
      </div>
      <div className="langmix reveal">
        <div className="langmix-head">
          <span>{tr(SITE.langMix.title, lang)}</span>
          <span>{tr(SITE.langMix.note, lang)}</span>
        </div>
        <div className="langbar">
          {SITE.langMix.items.map((it) => (
            <span key={it.name} style={{ width: `${it.pct}%`, background: LANG_COLORS[it.name] || LANG_COLORS.Other }}
              title={`${it.name} ${it.pct}%`}></span>
          ))}
        </div>
        <div className="lang-legend">
          {SITE.langMix.items.map((it) => (
            <span key={it.name} className="legend-item">
              <span className="lang-dot" style={{ background: LANG_COLORS[it.name] || LANG_COLORS.Other }}></span>
              {it.name} <span className="pct">{it.pct}%</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ── 船长室 ──────────────────────────────────────────────────
const Captain = ({ lang }) => {
  const c = SITE.captain;
  return (
    <section id="captain" className="section" data-screen-label="Captain 船长室">
      <div className="wrap">
        <SectionHead s={SITE.sections.captain} lang={lang} />
        <div className="captain-grid">
          <div className="captain-paras reveal">
            {c.paras.map((p, i) => <p key={i}>{tr(p, lang)}</p>)}
            <div className="philosophy">
              <div className="q">{tr(c.philosophy.quote, lang)}</div>
              <div className="src">{tr(c.philosophy.source, lang)}</div>
            </div>
            <div className="location-line"><IconPin size={14} />{tr(c.location, lang)}</div>
          </div>
          <div className="stack-groups reveal" style={{ "--d": "0.12s" }}>
            {c.groups.map((g, gi) => (
              <div key={gi}>
                <div className="group-k">{tr(g.k, lang)}</div>
                <div className="chips">
                  {g.items.map((it, ii) => <span key={ii} className="chip">{tr(it, lang)}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ── 泊位(联系) ────────────────────────────────────────────
const MOORING_ICONS = { github: IconGitHub, book: IconBook, globe: IconGlobe, grid: IconGrid, box: IconBox };

const Moorings = ({ lang }) => (
  <section id="moorings" className="section" data-screen-label="Moorings 泊位">
    <div className="wrap">
      <SectionHead s={SITE.sections.moorings} lang={lang} />
      <div className="moorings-grid">
        {SITE.moorings.map((m, i) => {
          const Ic = MOORING_ICONS[m.icon] || IconGlobe;
          return (
            <a key={m.url} className="mooring-card reveal" style={{ "--d": `${i * 0.07}s` }}
              href={m.url} target="_blank" rel="noreferrer">
              <div className="mooring-top"><Ic size={18} /><span className="mooring-name">{tr(m.name, lang)}</span></div>
              <div className="mooring-handle">{m.handle}</div>
              <div className="mooring-note">{tr(m.note, lang)}</div>
              <span className="mooring-arrow"><IconArrowUpRight size={15} /></span>
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

// ── 页脚 ────────────────────────────────────────────────────
const Footer = ({ lang, onSurface }) => (
  <footer className="footer">
    <div className="wrap">
      <FooterWaves />
      <div className="footer-inner">
        <span>© 2026 Bobochang · {tr(SITE.footer.line, lang)}</span>
        <span>{tr(SITE.footer.crafted, lang)}</span>
        <button type="button" className="surface-link" onClick={onSurface}>
          {tr(SITE.footer.surface, lang)}<IconArrowUp size={13} />
        </button>
      </div>
    </div>
  </footer>
);

// ── Tweaks 微调面板(展示层,状态由 App 持有) ──────────────
const TweaksPanel = ({ lang, open, onToggle, theme, onTheme, hue, onHue, contours, onContours, motion, onMotion, onReset }) => {
  const t = SITE.tweaks;
  return (
    <React.Fragment>
      <button type="button" className={`tweaks-fab${open ? " on" : ""}`} onClick={onToggle}>
        {tr(t.title, lang).toUpperCase()}
      </button>
      {open ? (
        <div className="tweaks-panel">
          <div className="tweaks-title">{tr(t.title, lang)} · TWEAKS</div>
          <div className="tweak-row">
            <span>{tr(t.theme, lang)}</span>
            <div className="seg">
              <button type="button" className={theme === "night" ? "on" : ""} onClick={() => onTheme("night")}>{tr(t.night, lang)}</button>
              <button type="button" className={theme === "chart" ? "on" : ""} onClick={() => onTheme("chart")}>{tr(t.chart, lang)}</button>
            </div>
          </div>
          <div className="tweak-row">
            <span>{tr(t.hue, lang)}</span>
            <input type="range" min="25" max="95" value={hue} onChange={(e) => onHue(Number(e.target.value))} />
          </div>
          <div className="tweak-row">
            <span>{tr(t.contours, lang)}</span>
            <input type="checkbox" checked={contours} onChange={(e) => onContours(e.target.checked)} />
          </div>
          <div className="tweak-row">
            <span>{tr(t.motion, lang)}</span>
            <input type="checkbox" checked={motion} onChange={(e) => onMotion(e.target.checked)} />
          </div>
          <button type="button" className="tweaks-reset" onClick={onReset}>{tr(t.reset, lang)}</button>
        </div>
      ) : null}
    </React.Fragment>
  );
};

Object.assign(window, {
  ChartLayer, Topbar, Hero, RouteLine, SectionHead, Flagship, Fleet, ShipCard,
  Logbook, Captain, Moorings, Footer, TweaksPanel,
});
