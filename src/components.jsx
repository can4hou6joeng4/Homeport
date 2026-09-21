// components.jsx — Neuform 视觉系统重构版个人主页组件
// 全局依赖：SITE / tr / LANG_COLORS(data.jsx)、图标(icons.jsx)。

const StatusDot = ({ label = "ONLINE", color = "bg-emerald-400" }) => (
  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
    <span className={`w-1.5 h-1.5 rounded-full ${color} animate-pulse`}></span>
    {label}
  </span>
);

const SectionHead = ({ s, lang }) => {
  const other = lang === "zh" ? "en" : "zh";
  return (
    <header className="mb-10 md:mb-14 reveal">
      <div className="flex items-center justify-between gap-4 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-white/[0.04] text-[#cc8066] border border-white/10">
            NODE {s.no}
          </span>
          <StatusDot label="ONLINE" />
        </div>
      </div>
      <div className="flex flex-wrap items-baseline gap-3 md:gap-4 mb-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
          {tr(s, lang)}
        </h2>
        <span className="text-sm sm:text-base font-mono text-zinc-500 uppercase tracking-wider">
          / {tr(s, other)}
        </span>
      </div>
      <p className="text-sm md:text-base text-zinc-400 font-normal max-w-2xl leading-relaxed">
        {tr(s.sub, lang)}
      </p>
    </header>
  );
};

const Topbar = ({ lang, theme, onLang, onTheme }) => (
  <nav className="flex items-center justify-between w-full py-4 border-b border-white/[0.06] backdrop-blur-xl bg-zinc-950/70 sticky top-0 z-50 transition-colors">
    <a href="#top" className="flex items-center gap-2.5 text-base sm:text-lg font-medium text-white tracking-tight group">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      <span className="font-semibold text-white tracking-tight">Bobochang</span>
      <span className="hidden sm:inline text-xs font-mono text-zinc-400 border-l border-white/10 pl-2.5">
        AI Agent Tools
      </span>
    </a>

    <div className="hidden lg:flex items-center gap-8 text-sm font-normal text-zinc-300">
      {SITE.nav.map((n) => (
        <a key={n.id} href={`#${n.id}`} className="hover:text-white transition-colors duration-200">
          {tr(n, lang)}
        </a>
      ))}
    </div>

    <div className="flex items-center gap-3">
      {/* Language Switch */}
      <div className="flex items-center p-0.5 border border-white/10 rounded bg-white/[0.04] text-xs font-mono">
        <button
          type="button"
          onClick={() => onLang("zh")}
          className={`px-2 py-1 rounded transition-colors ${lang === "zh" ? "bg-white text-black font-semibold shadow" : "text-zinc-400 hover:text-white"}`}
          aria-label="切换为中文"
        >
          中
        </button>
        <button
          type="button"
          onClick={() => onLang("en")}
          className={`px-2 py-1 rounded transition-colors ${lang === "en" ? "bg-white text-black font-semibold shadow" : "text-zinc-400 hover:text-white"}`}
          aria-label="Switch to English"
        >
          EN
        </button>
      </div>

      {/* Theme Toggle */}
      <button
        type="button"
        onClick={onTheme}
        className="w-8 h-8 flex items-center justify-center border border-white/10 rounded text-zinc-300 hover:text-white hover:border-white/25 bg-white/[0.04] transition-colors"
        aria-label={theme === "night" ? "切换亮色主题" : "切换暗色主题"}
        title={theme === "night" ? "切换亮色主题" : "切换暗色主题"}
      >
        {theme === "night" ? <IconSun size={15} /> : <IconMoon size={15} />}
      </button>

      {/* GitHub CTA Button matching Neuform */}
      <a
        href={SITE.meta.github}
        target="_blank"
        rel="noreferrer"
        className="neu-btn-primary group"
      >
        <span>GitHub</span>
        <div className="neu-btn-icon">
          <iconify-icon icon="solar:arrow-right-up-linear" width="18" stroke-width="1.5"></iconify-icon>
        </div>
      </a>
    </div>
  </nav>
);

const Hero = ({ lang }) => {
  const h = SITE.hero;

  return (
    <main className="flex-grow flex flex-col justify-end pb-8 mt-16 md:mt-24" id="top">
      {/* Headline matching Neuform template */}
      <div className="mb-16 md:mb-32 max-w-3xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.05] text-white" id="hero-title">
          <div
            className="reveal-line font-normal text-zinc-200 mb-1 md:mb-2"
            data-original-text={tr(h.headlineLead, lang)}
          >
            {tr(h.headlineLead, lang)}
          </div>
          <div
            className="reveal-line font-semibold text-white"
            data-original-text={tr(h.headlineSub, lang)}
          >
            {tr(h.headlineSub, lang)}
          </div>
        </h1>
      </div>

      {/* Bottom Content Grid (12 Columns matching Neuform) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        {/* Left Feature Cards (col-span-5) matching exact Neuform template structure */}
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-3">
          {h.featureCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative flex items-start gap-4 p-5 transition-all duration-300 hover:translate-x-1 cursor-default neu-card rounded reveal"
              style={{ "--d": `${0.06 * (idx + 1)}s` }}
            >
              <div className="mt-0.5 text-2xl text-white opacity-80 group-hover:opacity-100 transition-opacity">
                <iconify-icon icon={card.icon} width="24" stroke-width="1.5"></iconify-icon>
              </div>
              <div>
                <h3 className="font-medium text-white text-base tracking-tight mb-1">
                  {tr(card.title, lang)}
                </h3>
                <p className="text-zinc-400 text-sm font-normal leading-relaxed">
                  {tr(card.desc, lang)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Description & CTA (col-span-5 lg:col-start-8) matching exact Neuform template */}
        <div className="col-span-1 lg:col-span-5 lg:col-start-8 flex flex-col items-start pb-2 reveal" style={{ "--d": "0.24s" }}>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8 max-w-lg font-normal">
            {tr(h.bio, lang)}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#fleet" className="neu-btn-primary">
              <span>{tr(h.ctaFleet, lang)}</span>
              <div className="neu-btn-icon">
                <iconify-icon icon="solar:arrow-right-up-linear" width="18" stroke-width="1.5"></iconify-icon>
              </div>
            </a>
            <a
              href={SITE.meta.github}
              target="_blank"
              rel="noreferrer"
              className="neu-btn-secondary"
            >
              <IconGitHub size={16} />
              <span>GitHub @{SITE.meta.handle}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-white/10 font-mono text-[#cc8066]">★ 2.0k</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

const FeaturedProject = ({ lang }) => {
  const f = SITE.flagship;

  return (
    <section id="flagship" className="py-20 md:py-28 border-t border-white/[0.06]">
      <SectionHead s={SITE.sections.flagship} lang={lang} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Project Overview */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-between neu-card p-6 md:p-8 rounded-xl reveal">
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] text-[#cc8066] border border-white/10">
                <IconStar size={13} />
                {tr(f.pennant, lang)}
              </span>
              <span className="text-2xl" aria-hidden="true">{f.emoji}</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">
              {f.name}
            </h3>

            <div className="inline-flex items-center gap-2 text-sm font-mono text-[#cc8066] mb-6 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-md">
              <IconStar size={14} />
              <strong className="font-semibold text-white">{f.stars}</strong>
              <span className="text-zinc-400 font-normal">{tr(f.starsNote, lang)}</span>
            </div>

            <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 font-normal">
              {tr(f.desc, lang)}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {f.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-white/[0.04] text-zinc-300 border border-white/10 hover:border-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
            {f.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="neu-btn-secondary text-xs"
              >
                {link.icon === "github" ? <IconGitHub size={14} /> : <IconGlobe size={14} />}
                <span>{tr(link.label, lang)}</span>
                <IconArrowUpRight size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Live Interactive Terminal */}
        <div className="col-span-1 lg:col-span-7 terminal-neu rounded-xl overflow-hidden flex flex-col reveal" style={{ "--d": "0.1s" }}>
          <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              <span className="ml-2 text-xs font-mono text-zinc-400">CORTEX_M9 · LIVE PREVIEW</span>
            </div>
            <StatusDot label="SYNCHED" color="bg-emerald-400" />
          </div>

          <div className="p-5 md:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto flex-grow flex flex-col justify-between">
            <div className="space-y-2">
              {f.term.map((line, i) => {
                if (line.t === "cmd") {
                  return (
                    <div key={i} className="flex items-start gap-2 t-cmd">
                      <span className="text-zinc-500 select-none">$</span>
                      <span>{line.s}</span>
                    </div>
                  );
                }
                if (line.t === "out") {
                  return <div key={i} className="t-out pl-4">{line.s}</div>;
                }
                if (line.t === "json") {
                  return <div key={i} className="t-json pl-4 whitespace-pre">{line.s}</div>;
                }
                if (line.t === "cursor") {
                  return (
                    <div key={i} className="flex items-center gap-2 pt-2">
                      <span className="text-zinc-500 select-none">$</span>
                      <span className="t-cursor"></span>
                    </div>
                  );
                }
                return <div key={i}>{line.s}</div>;
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-500">
              <span>AGENT READY · LOW-RISK ENVELOPE</span>
              <span>STDOUT 0.8s</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ s, i, lang }) => (
  <article
    className="neu-card p-6 rounded-xl flex flex-col justify-between reveal group"
    style={{ "--d": `${(i % 3) * 0.08}s` }}
  >
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-zinc-500">
          NODE.{String(i + 2).padStart(2, "0")}
        </span>
        <StatusDot label="ONLINE" />
      </div>

      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl" aria-hidden="true">{s.emoji}</span>
        <div>
          <h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-white transition-colors">
            {s.id}
          </h3>
          <div className="text-xs font-mono text-zinc-400">
            {tr(s.image, lang)}
          </div>
        </div>
      </div>

      <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
        {tr(s.desc, lang)}
      </p>
    </div>

    <div>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {s.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.03] text-zinc-400 border border-white/[0.08]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: LANG_COLORS[s.lang] || LANG_COLORS.Other }}
          ></span>
          <span>{s.lang}</span>
          {s.stars > 0 ? (
            <span className="flex items-center gap-1 text-[#cc8066] ml-2 font-medium">
              <IconStar size={11} />
              {s.stars}
            </span>
          ) : null}
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href={s.github}
            target="_blank"
            rel="noreferrer"
            className="p-1 text-zinc-400 hover:text-white transition-colors"
            title="GitHub Repository"
          >
            <IconGitHub size={15} />
          </a>
          {s.site ? (
            <a
              href={s.site}
              target="_blank"
              rel="noreferrer"
              className="p-1 text-zinc-400 hover:text-white transition-colors"
              title={s.siteLabel ? tr(s.siteLabel, lang) : "Live Site"}
            >
              <IconArrowUpRight size={15} />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  </article>
);

const Projects = ({ lang }) => (
  <section id="fleet" className="py-20 md:py-28 border-t border-white/[0.06]">
    <SectionHead s={SITE.sections.fleet} lang={lang} />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {SITE.fleet.map((project, i) => (
        <ProjectCard key={project.id} s={project} i={i} lang={lang} />
      ))}
    </div>

    <blockquote className="neu-card p-6 md:p-8 rounded-xl mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-l-2 border-l-[#cc8066] reveal">
      <div className="space-y-1">
        <span className="text-xs font-mono uppercase tracking-wider text-[#cc8066] font-semibold block">
          {lang === "zh" ? "SYSTEM SUMMARY · 工程原则" : "SYSTEM SUMMARY · ENGINEERING PRINCIPLES"}
        </span>
        <p className="text-sm md:text-base text-zinc-300 font-normal">
          {tr(SITE.fleetNarrative, lang)}
        </p>
      </div>
      <a
        href={SITE.meta.github}
        target="_blank"
        rel="noreferrer"
        className="neu-btn-secondary text-xs flex-shrink-0"
      >
        <IconGitHub size={14} />
        <span>GitHub @{SITE.meta.handle}</span>
      </a>
    </blockquote>
  </section>
);

const STAT_ICONS = { star: IconStar, pulse: IconPulse, grid: IconGrid, box: IconBox };

const Activity = ({ lang }) => (
  <section id="log" className="py-20 md:py-28 border-t border-white/[0.06]">
    <SectionHead s={SITE.sections.log} lang={lang} />

    {/* 4 Stats Cards */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10">
      {SITE.stats.map((stat, i) => {
        const Icon = STAT_ICONS[stat.icon] || IconPulse;
        return (
          <article
            key={stat.icon}
            className="neu-card p-5 md:p-6 rounded-xl flex flex-col justify-between reveal group"
            style={{ "--d": `${i * 0.06}s` }}
          >
            <div className="flex items-center justify-between text-zinc-400 mb-4">
              <span className="text-white opacity-80 group-hover:opacity-100 transition-opacity">
                <Icon size={18} />
              </span>
              <span className="text-xs font-mono text-zinc-500">0{i + 1}</span>
            </div>
            <div>
              <strong className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white block mb-1">
                {stat.value}
              </strong>
              <span className="text-xs sm:text-sm font-mono text-zinc-400">
                {tr(stat.label, lang)}
              </span>
            </div>
          </article>
        );
      })}
    </div>

    {/* Language Distribution Bar */}
    <div className="neu-card p-6 md:p-8 rounded-xl reveal">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <h3 className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#cc8066]"></span>
          {tr(SITE.langMix.title, lang)}
        </h3>
        <span className="text-xs font-mono text-zinc-500">
          {tr(SITE.langMix.note, lang)}
        </span>
      </div>

      <div className="h-2.5 w-full rounded-full overflow-hidden flex bg-white/[0.06] mb-6">
        {SITE.langMix.items.map((item) => (
          <div
            key={item.name}
            style={{
              width: `${item.pct}%`,
              background: LANG_COLORS[item.name] || LANG_COLORS.Other,
            }}
            title={`${item.name} ${item.pct}%`}
            className="h-full transition-all"
          ></div>
        ))}
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono">
        {SITE.langMix.items.map((item) => (
          <div key={item.name} className="flex items-center gap-2 text-zinc-300">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: LANG_COLORS[item.name] || LANG_COLORS.Other }}
            ></span>
            <span>{item.name}</span>
            <span className="text-zinc-500">{item.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MOORING_ICONS = {
  github: IconGitHub,
  book: IconBook,
  globe: IconGlobe,
  grid: IconGrid,
  box: IconBox,
};

const Links = ({ lang }) => (
  <section id="moorings" className="py-20 md:py-28 border-t border-white/[0.06]">
    <SectionHead s={SITE.sections.moorings} lang={lang} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
      {SITE.moorings.map((mooring, i) => {
        const Icon = MOORING_ICONS[mooring.icon] || IconGlobe;
        return (
          <a
            key={mooring.url}
            href={mooring.url}
            {...(mooring.external === false ? {} : { target: "_blank", rel: "noreferrer" })}
            className="neu-card p-5 md:p-6 rounded-xl group flex flex-col justify-between reveal"
            style={{ "--d": `${i * 0.06}s` }}
          >
            <div>
              <div className="flex items-center justify-between text-zinc-500 mb-4 text-xs font-mono">
                <span>0{i + 1}</span>
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-zinc-400 group-hover:text-white">
                  <IconArrowUpRight size={16} />
                </span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-white opacity-80 group-hover:opacity-100 transition-opacity">
                  <Icon size={18} />
                </span>
                <strong className="text-base font-semibold text-white tracking-tight group-hover:text-white transition-colors">
                  {tr(mooring.name, lang)}
                </strong>
              </div>
              <div className="text-xs font-mono text-zinc-500 mb-3">
                {mooring.handle}
              </div>
            </div>

            <p className="text-xs text-zinc-400 pt-3 border-t border-white/[0.06]">
              {tr(mooring.note, lang)}
            </p>
          </a>
        );
      })}
    </div>
  </section>
);

const Footer = ({ lang, onSurface }) => (
  <footer className="py-12 border-t border-white/[0.06] text-xs font-mono text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
    <div className="flex items-center gap-2">
      <span>© 2026 Bobochang</span>
      <span>·</span>
      <span>{tr(SITE.footer.line, lang)}</span>
    </div>

    <div className="flex items-center gap-4">
      <StatusDot label="SITE ONLINE" color="bg-emerald-400" />
      <button
        type="button"
        onClick={onSurface}
        className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
      >
        <span>{tr(SITE.footer.surface, lang)}</span>
        <IconArrowUp size={13} />
      </button>
    </div>
  </footer>
);

const SwitchControl = ({ checked, onChange, label }) => (
  <label className="switch" title={label}>
    <input type="checkbox" checked={checked} onChange={onChange} aria-label={label} />
    <span></span>
  </label>
);

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
  onReset,
}) => {
  const t = SITE.tweaks;

  return (
    <React.Fragment>
      <button
        type="button"
        className={`tweaks-fab${open ? " on" : ""}`}
        onClick={onToggle}
        aria-label={tr(t.title, lang)}
        title={tr(t.title, lang)}
      >
        <IconSliders size={18} />
      </button>

      {open ? (
        <aside className="tweaks-panel" aria-label={tr(t.title, lang)}>
          <div className="flex items-center justify-between pb-2 border-b border-white/10 font-semibold text-white">
            <span>{tr(t.title, lang)}</span>
            <StatusDot label="LIVE" />
          </div>

          <div className="tweak-row">
            <span>{tr(t.theme, lang)}</span>
            <div className="flex items-center p-0.5 border border-white/10 rounded bg-white/[0.04]">
              <button
                type="button"
                className={`px-2 py-0.5 rounded transition-colors ${theme === "night" ? "bg-white text-black font-semibold" : "text-zinc-400"}`}
                onClick={() => onTheme("night")}
              >
                {tr(t.night, lang)}
              </button>
              <button
                type="button"
                className={`px-2 py-0.5 rounded transition-colors ${theme === "chart" ? "bg-white text-black font-semibold" : "text-zinc-400"}`}
                onClick={() => onTheme("chart")}
              >
                {tr(t.chart, lang)}
              </button>
            </div>
          </div>

          <div className="tweak-row">
            <label htmlFor="signal-hue">{tr(t.hue, lang)}</label>
            <input
              id="signal-hue"
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={(e) => onHue(Number(e.target.value))}
            />
          </div>

          <div className="tweak-row">
            <span>{tr(t.contours, lang)}</span>
            <SwitchControl
              checked={contours}
              onChange={(e) => onContours(e.target.checked)}
              label={tr(t.contours, lang)}
            />
          </div>

          <div className="tweak-row">
            <span>{tr(t.motion, lang)}</span>
            <SwitchControl
              checked={motion}
              onChange={(e) => onMotion(e.target.checked)}
              label={tr(t.motion, lang)}
            />
          </div>

          <button
            type="button"
            className="w-full py-1.5 mt-2 rounded bg-white/10 text-white hover:bg-white/20 transition-colors font-mono text-center"
            onClick={onReset}
          >
            {tr(t.reset, lang)}
          </button>
        </aside>
      ) : null}
    </React.Fragment>
  );
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
  TweaksPanel,
});
