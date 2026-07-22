// app.jsx — 应用状态唯一持有者:语言 / 主题 / 微调项 / 滚动入场。
const { useState, useEffect, useRef } = React;

const LS_KEY = "bobochang-home";
const loadPrefs = () => {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch (e) { return {}; }
};

const DEFAULTS = { theme: "night", hue: 62, contours: true, motion: true };

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
    try { localStorage.setItem(LS_KEY, JSON.stringify({ lang, theme, hue, contours, motion })); } catch (e) {}
  }, [lang, theme, hue, contours, motion]);

  // 滚动入场:进入视口加 .revealed(一次性)
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal:not(.revealed)"));
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("revealed"));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add("revealed"); io.unobserve(en.target); }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  const surface = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: motion && !reduce ? "smooth" : "auto" });
  };

  const resetTweaks = () => {
    setTheme(DEFAULTS.theme);
    setHue(DEFAULTS.hue);
    setContours(DEFAULTS.contours);
    setMotion(DEFAULTS.motion);
  };

  return (
    <React.Fragment>
      <ChartLayer />
      <div className="page">
        <Topbar
          lang={lang} theme={theme}
          onLang={setLang}
          onTheme={() => setTheme(theme === "night" ? "chart" : "night")}
        />
        <main>
          <Hero lang={lang} />
          <Flagship lang={lang} />
          <Fleet lang={lang} />
          <Logbook lang={lang} />
          <Captain lang={lang} />
          <Moorings lang={lang} />
        </main>
        <Footer lang={lang} onSurface={surface} />
      </div>
      <TweaksPanel
        lang={lang}
        open={panelOpen} onToggle={() => setPanelOpen(!panelOpen)}
        theme={theme} onTheme={setTheme}
        hue={hue} onHue={setHue}
        contours={contours} onContours={setContours}
        motion={motion} onMotion={setMotion}
        onReset={resetTweaks}
      />
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
