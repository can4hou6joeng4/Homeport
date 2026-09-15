// components.jsx — Nexus 技术视觉语言下的个人主页展示组件。
// 全局依赖：SITE / tr / LANG_COLORS(data.jsx)、图标(icons.jsx)。

const FIELD_LABELS = [
  { top: "18%", left: "7%", text: "NODE.01" },
  { top: "34%", left: "84%", text: "SYNC.92" },
  { top: "67%", left: "12%", text: "CORTEX.M9" },
  { top: "81%", left: "76%", text: "PORT.113" },
];

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

    const noise = (n) => {
      const x = Math.sin(n * 91.313 + 17.17) * 43758.5453;
      return x - Math.floor(x);
    };

    const makeNodes = () => {
      const count = Math.max(38, Math.min(72, Math.round(width / 24)));
      nodes = Array.from({ length: count }, (_, i) => ({
        x: noise(i + 2) * width,
        y: noise(i + 71) * height,
        z: 0.45 + noise(i + 149) * 0.8,
        phase: noise(i + 233) * Math.PI * 2,
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

    const move = (event) => {
      targetX = event.clientX / Math.max(window.innerWidth, 1) - 0.5;
      targetY = event.clientY / Math.max(window.innerHeight, 1) - 0.5;
    };

    const draw = (time) => {
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
        i,
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
    window.addEventListener("pointermove", move, { passive: true });
    frame = window.requestAnimationFrame(draw);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return <canvas ref={canvasRef} className="signal-canvas" aria-hidden="true"></canvas>;
};

const ChartLayer = () => (
  <div className="chart-layer" aria-hidden="true">
    <div className="matrix-grid"></div>
    <SignalField />
    {FIELD_LABELS.map((label) => (
      <span key={label.text} className="field-label" style={{ top: label.top, left: label.left }}>{label.text}</span>
    ))}
  </div>
);

const Topbar = ({ lang, theme, onLang, onTheme }) => (
  <header className="topbar">
    <div className="topbar-shell">
      <a className="wordmark" href="#top"><IconNetwork size={16} /><span>BOBO.LINK</span></a>
      <nav className="nav" aria-label={lang === "zh" ? "主页分区" : "Homepage sections"}>
        {SITE.nav.map((n) => <a key={n.id} href={`#${n.id}`}>{tr(n, lang)}</a>)}
      </nav>
      <div className="controls">
        <div className="seg" role="group" aria-label="Language / 语言">
          <button type="button" className={lang === "zh" ? "on" : ""} onClick={() => onLang("zh")}>中</button>
          <button type="button" className={lang === "en" ? "on" : ""} onClick={() => onLang("en")}>EN</button>
        </div>
        <button type="button" className="icon-btn" onClick={onTheme}
          aria-label={theme === "night" ? tr(SITE.tweaks.chart, lang) : tr(SITE.tweaks.night, lang)}
          title={theme === "night" ? tr(SITE.tweaks.chart, lang) : tr(SITE.tweaks.night, lang)}>
          {theme === "night" ? <IconSun size={15} /> : <IconMoon size={15} />}
        </button>
      </div>
    </div>
  </header>
);

const StatusDot = ({ label }) => (
  <span className="status"><span className="status-dot"></span>{label}</span>
);

const CoreGlyph = () => (
  <div className="core-glyph" aria-hidden="true">
    <span className="core-ring ring-a"></span>
    <span className="core-ring ring-b"></span>
    <span className="core-diamond diamond-a"></span>
    <span className="core-diamond diamond-b"></span>
    <span className="core-axis axis-x"></span>
    <span className="core-axis axis-y"></span>
  </div>
);

const Hero = ({ lang }) => {
  const h = SITE.hero;
  const flagship = SITE.flagship;
  return (
    <section className="hero" id="top" data-screen-label="Home 主页">
      <div className="wrap hero-wrap">
        <header className="hero-heading reveal">
          <div className="system-line"><StatusDot label={lang === "zh" ? "主页在线" : "HOMEPAGE ONLINE"} /><span>{SITE.meta.coords}</span></div>
          <h1>Bobochang</h1>
          <p className="roles">{tr(h.roles, lang)}</p>
        </header>

        <div className="hero-stage" aria-label={lang === "zh" ? "个人主页核心系统" : "Personal homepage core system"}>
          <div className="stage-frame" aria-hidden="true"></div>
          <CoreGlyph />

          <article className="hero-panel load-panel reveal" data-tilt style={{ "--d": "0.08s" }}>
            <div className="panel-k"><span>SYS.LOAD</span><IconPulse size={15} /></div>
            <div className="load-visual" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
            <h2>{lang === "zh" ? "可靠系统" : "Reliable systems"}</h2>
            <p>{tr(h.bio, lang)}</p>
            <div className="meter-row"><span>SYNC</span><strong>92%</strong></div>
            <div className="meter"><span></span></div>
          </article>

          <article className="hero-panel operator-panel reveal" data-tilt style={{ "--d": "0.14s" }}>
            <div className="operator-head">
              <div className="avatar">BC</div>
              <div><strong>Bobochang</strong><span>OPEN SOURCE · BUILDER</span></div>
            </div>
            <div className="operator-state"><span>{lang === "zh" ? "广州 · 珠江口" : "GUANGZHOU · PEARL RIVER"}</span><StatusDot label="ACTIVE" /></div>
          </article>

          <article className="hero-panel core-panel reveal" data-tilt style={{ "--d": "0.2s" }}>
            <div className="core-head"><span><i></i> CORTEX_BC</span><StatusDot label="SYNCHED" /></div>
            <div className="core-window">
              <div className="core-title-row"><IconTerminal size={17} /><span>AGENT-FIRST WORKFLOW</span></div>
              <h2>{tr(h.tagline, lang)}</h2>
              <p>{flagship.name} · {tr(flagship.desc, lang)}</p>
            </div>
            <div className="core-actions">
              <a className="btn btn-primary" href="#fleet">{tr(h.ctaFleet, lang)}<IconArrowRight size={15} /></a>
              <a className="btn btn-ghost" href={SITE.meta.github} target="_blank" rel="noreferrer">
                <IconGitHub size={15} />GitHub <span className="star-chip">★ {flagship.stars}</span>
              </a>
            </div>
          </article>

          <article className="hero-panel topology-panel reveal" data-tilt style={{ "--d": "0.25s" }}>
            <div className="panel-k"><IconNetwork size={15} /><span>PROJECT.INDEX</span></div>
            <h2>{tr(h.vessels, lang)}</h2>
            <p>{lang === "zh" ? "独立项目，共享同一套工程原则。" : "Independent projects, shared engineering principles."}</p>
            <div className="verify-line"><span></span>VERIFY SOURCE</div>
          </article>

          <article className="hero-panel asset-panel reveal" data-tilt style={{ "--d": "0.3s" }}>
            <div className="asset-art" aria-hidden="true"><span></span><span></span><span></span></div>
            <div><span className="asset-k">SOURCE</span><strong>bobochang.cn</strong></div>
            <IconArrowUpRight size={15} />
          </article>
        </div>

        <div className="hero-foot reveal" style={{ "--d": "0.35s" }}>
          <span>{tr(h.routeLabel, lang)}</span>
          <a href="#flagship">{lang === "zh" ? "查看重点项目" : "VIEW FEATURED PROJECT"}<IconArrowRight size={14} /></a>
        </div>
      </div>
    </section>
  );
};

const SectionHead = ({ s, lang }) => {
  const other = lang === "zh" ? "en" : "zh";
  return (
    <header className="section-head reveal">
      <div className="chart-no"><span>NODE {s.no}</span><StatusDot label="ONLINE" /></div>
      <div className="section-title-row"><h2 className="section-title">{tr(s, lang)}</h2><span className="section-alt">{tr(s, other)}</span></div>
      <p className="section-sub">{tr(s.sub, lang)}</p>
    </header>
  );
};

const FeaturedProject = ({ lang }) => {
  const f = SITE.flagship;
  return (
    <section id="flagship" className="section section-flagship" data-screen-label="Featured Project 重点项目">
      <div className="wrap">
        <SectionHead s={SITE.sections.flagship} lang={lang} />
        <div className="flagship-deck">
          <article className="flagship-overview reveal" data-tilt>
            <div className="flagship-signal"><IconStar size={14} /><span>{tr(f.pennant, lang)}</span></div>
            <div className="flagship-ident"><span className="ship-mark" aria-hidden="true">{f.emoji}</span><span>PRIMARY NODE · 001</span></div>
            <h3 className="flagship-name">{f.name}</h3>
            <div className="flagship-stars"><IconStar size={16} /><strong>{f.stars}</strong><span>{tr(f.starsNote, lang)}</span></div>
            <p className="flagship-desc">{tr(f.desc, lang)}</p>
            <div className="chips">{f.tech.map((tech) => <span key={tech} className="chip">{tech}</span>)}</div>
            <div className="flagship-links">
              {f.links.map((link) => (
                <a key={link.url} className="text-link" href={link.url} target="_blank" rel="noreferrer">
                  {link.icon === "github" ? <IconGitHub size={14} /> : <IconArrowUpRight size={14} />}{tr(link.label, lang)}
                </a>
              ))}
            </div>
          </article>
          <div className="terminal-panel reveal" style={{ "--d": "0.1s" }}>
            <div className="term-head"><span className="term-mode">CORTEX_M9 · LIVE</span><StatusDot label="SYNCHED" /></div>
            <div className="term-visual" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
            <div className="term-body">
              {f.term.map((line, i) => <div key={i} className={`t-${line.t}`}>{line.s}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ s, i, lang }) => (
  <article className="ship-card reveal" data-tilt style={{ "--d": `${(i % 3) * 0.06}s` }}>
    <div className="ship-node-row"><span>NODE.{String(i + 2).padStart(2, "0")}</span><StatusDot label="ONLINE" /></div>
    <div className="ship-top">
      <div className="ship-mark" aria-hidden="true">{s.emoji}</div>
      <div><h3 className="ship-name">{s.id}</h3><div className="ship-image">{tr(s.image, lang)}</div></div>
    </div>
    <p className="ship-desc">{tr(s.desc, lang)}</p>
    <div className="chips ship-tech">{s.tech.slice(0, 3).map((tech) => <span key={tech} className="chip">{tech}</span>)}</div>
    <div className="ship-meta">
      <span className="lang-dot" style={{ background: LANG_COLORS[s.lang] || LANG_COLORS.Other }}></span><span>{s.lang}</span>
      {s.stars > 0 ? <span className="meta-star"><IconStar size={10} />{s.stars}</span> : null}
      <span className="spacer"></span>
      <a className="mini-link" href={s.github} target="_blank" rel="noreferrer" title="GitHub"><IconGitHub size={15} /></a>
      {s.site ? <a className="mini-link" href={s.site} target="_blank" rel="noreferrer" title={s.siteLabel ? tr(s.siteLabel, lang) : "Site"}><IconArrowUpRight size={15} /></a> : null}
    </div>
  </article>
);

const Projects = ({ lang }) => (
  <section id="fleet" className="section" data-screen-label="Projects 开源项目">
    <div className="wrap">
      <SectionHead s={SITE.sections.fleet} lang={lang} />
      <div className="fleet-grid">{SITE.fleet.map((project, i) => <ProjectCard key={project.id} s={project} i={i} lang={lang} />)}</div>
      <blockquote className="log-entry reveal"><span className="log-k">{lang === "zh" ? "SYSTEM SUMMARY · 工程原则" : "SYSTEM SUMMARY · ENGINEERING PRINCIPLES"}</span>{tr(SITE.fleetNarrative, lang)}</blockquote>
    </div>
  </section>
);

const STAT_ICONS = { star: IconStar, pulse: IconPulse, grid: IconGrid, box: IconBox };

const Activity = ({ lang }) => (
  <section id="log" className="section section-log" data-screen-label="Activity 数据与动态">
    <div className="wrap">
      <SectionHead s={SITE.sections.log} lang={lang} />
      <div className="stats-grid">
        {SITE.stats.map((stat, i) => {
          const Icon = STAT_ICONS[stat.icon] || IconPulse;
          return <article key={stat.icon} className="stat reveal" style={{ "--d": `${i * 0.06}s` }}><div className="stat-head"><Icon size={16} /><span>0{i + 1}</span></div><strong className="stat-num">{stat.value}</strong><span className="stat-label">{tr(stat.label, lang)}</span></article>;
        })}
      </div>
      <div className="langmix reveal">
        <div className="langmix-head"><span>{tr(SITE.langMix.title, lang)}</span><span>{tr(SITE.langMix.note, lang)}</span></div>
        <div className="langbar">{SITE.langMix.items.map((item) => <span key={item.name} style={{ width: `${item.pct}%`, background: LANG_COLORS[item.name] || LANG_COLORS.Other }} title={`${item.name} ${item.pct}%`}></span>)}</div>
        <div className="lang-legend">{SITE.langMix.items.map((item) => <span key={item.name} className="legend-item"><span className="lang-dot" style={{ background: LANG_COLORS[item.name] || LANG_COLORS.Other }}></span>{item.name}<span className="pct">{item.pct}%</span></span>)}</div>
      </div>
    </div>
  </section>
);

const About = ({ lang }) => {
  const c = SITE.captain;
  return (
    <section id="captain" className="section" data-screen-label="About 关于">
      <div className="wrap">
        <SectionHead s={SITE.sections.captain} lang={lang} />
        <div className="captain-grid">
          <article className="operator-card reveal" data-tilt>
            <div className="operator-profile"><div className="avatar avatar-large">BC</div><div><span className="profile-k">PROFILE</span><h3>Bobochang</h3><StatusDot label="ACTIVE" /></div></div>
            <div className="captain-paras">{c.paras.map((p, i) => <p key={i}>{tr(p, lang)}</p>)}</div>
            <blockquote className="philosophy"><span>{tr(c.philosophy.quote, lang)}</span><cite>{tr(c.philosophy.source, lang)}</cite></blockquote>
            <div className="location-line"><IconPin size={14} />{tr(c.location, lang)}</div>
          </article>
          <div className="stack-groups reveal" style={{ "--d": "0.1s" }}>
            {c.groups.map((group, i) => <section key={i} className="stack-group"><div className="group-k"><span>0{i + 1}</span>{tr(group.k, lang)}</div><div className="chips">{group.items.map((item, ii) => <span key={ii} className="chip">{tr(item, lang)}</span>)}</div></section>)}
          </div>
        </div>
      </div>
    </section>
  );
};

const MOORING_ICONS = { github: IconGitHub, book: IconBook, globe: IconGlobe, grid: IconGrid, box: IconBox };

const Links = ({ lang }) => (
  <section id="moorings" className="section section-moorings" data-screen-label="Links 链接">
    <div className="wrap">
      <SectionHead s={SITE.sections.moorings} lang={lang} />
      <div className="moorings-grid">
        {SITE.moorings.map((mooring, i) => {
          const Icon = MOORING_ICONS[mooring.icon] || IconGlobe;
          return <a key={mooring.url} className="mooring-card reveal" style={{ "--d": `${i * 0.05}s` }} href={mooring.url} {...(mooring.external === false ? {} : { target: "_blank", rel: "noreferrer" })}>
            <span className="mooring-index">0{i + 1}</span><Icon size={18} /><strong>{tr(mooring.name, lang)}</strong><span className="mooring-handle">{mooring.handle}</span><span className="mooring-note">{tr(mooring.note, lang)}</span><span className="mooring-arrow"><IconArrowUpRight size={15} /></span>
          </a>;
        })}
      </div>
    </div>
  </section>
);

const Footer = ({ lang, onSurface }) => (
  <footer className="footer"><div className="wrap footer-inner"><span>© 2026 Bobochang · {tr(SITE.footer.line, lang)}</span><span className="footer-signal"><span className="status-dot"></span>SITE ONLINE</span><button type="button" className="surface-link" onClick={onSurface}>{tr(SITE.footer.surface, lang)}<IconArrowUp size={13} /></button></div></footer>
);

const SwitchControl = ({ checked, onChange, label }) => (
  <label className="switch" title={label}><input type="checkbox" checked={checked} onChange={onChange} aria-label={label} /><span></span></label>
);

const TweaksPanel = ({ lang, open, onToggle, theme, onTheme, hue, onHue, contours, onContours, motion, onMotion, onReset }) => {
  const t = SITE.tweaks;
  return (
    <React.Fragment>
      <button type="button" className={`tweaks-fab${open ? " on" : ""}`} onClick={onToggle} aria-label={tr(t.title, lang)} title={tr(t.title, lang)}><IconSliders size={17} /></button>
      {open ? <aside className="tweaks-panel" aria-label={tr(t.title, lang)}>
        <div className="tweaks-title"><span>{tr(t.title, lang)}</span><StatusDot label="LIVE" /></div>
        <div className="tweak-row"><span>{tr(t.theme, lang)}</span><div className="seg"><button type="button" className={theme === "night" ? "on" : ""} onClick={() => onTheme("night")}>{tr(t.night, lang)}</button><button type="button" className={theme === "chart" ? "on" : ""} onClick={() => onTheme("chart")}>{tr(t.chart, lang)}</button></div></div>
        <div className="tweak-row"><label htmlFor="signal-hue">{tr(t.hue, lang)}</label><input id="signal-hue" type="range" min="270" max="335" value={hue} onChange={(e) => onHue(Number(e.target.value))} /></div>
        <div className="tweak-row"><span>{tr(t.contours, lang)}</span><SwitchControl checked={contours} onChange={(e) => onContours(e.target.checked)} label={tr(t.contours, lang)} /></div>
        <div className="tweak-row"><span>{tr(t.motion, lang)}</span><SwitchControl checked={motion} onChange={(e) => onMotion(e.target.checked)} label={tr(t.motion, lang)} /></div>
        <button type="button" className="tweaks-reset" onClick={onReset}>{tr(t.reset, lang)}</button>
      </aside> : null}
    </React.Fragment>
  );
};

Object.assign(window, {
  ChartLayer, Topbar, Hero, SectionHead, FeaturedProject, Projects, ProjectCard,
  Activity, About, Links, Footer, TweaksPanel,
});
