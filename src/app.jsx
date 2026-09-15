// app.jsx — 应用状态唯一持有者:语言 / 主题 / 微调项 / 滚动入场。
const { useState, useEffect, useRef } = React;

const LS_KEY = "bobochang-home";
const loadPrefs = () => {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch (e) { return {}; }
};

const DEFAULTS = { theme: "night", hue: 292, contours: true, motion: true };

const App = () => {
  const saved = useRef(loadPrefs()).current;
  const savedHue = Number(saved.hue);
  const initialHue = Number.isFinite(savedHue) && savedHue >= 270 && savedHue <= 335
    ? savedHue
    : DEFAULTS.hue;
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
    try { localStorage.setItem(LS_KEY, JSON.stringify({ lang, theme, hue, contours, motion })); } catch (e) {}
  }, [lang, theme, hue, contours, motion]);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll("[data-tilt]"));
    if (!motion || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((card) => {
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
      });
      return undefined;
    }

    const cleanups = cards.map((card) => {
      const move = (event) => {
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
    return () => cleanups.forEach((cleanup) => cleanup());
  }, [lang, motion]);

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
          <FeaturedProject lang={lang} />
          <Projects lang={lang} />
          <Activity lang={lang} />
          <About lang={lang} />
          <Links lang={lang} />
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

// build.sh 在 #root 之前注入项目索引的静态 HTML(给不执行 JS 的抓取器和无 JS 访客);
// React 一挂载,同样的内容就由 Projects 组件呈现,静态版随即移除,避免重复。
const staticFleet = document.getElementById("static-fleet");
if (staticFleet) staticFleet.remove();
