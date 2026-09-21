// app.jsx — 应用状态唯一持有者:语言 / 主题 / 微调项 / 滚动入场 / GSAP 文字动效
const { useState, useEffect, useRef } = React;

const LS_KEY = "bobochang-home";
const loadPrefs = () => {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch (e) { return {}; }
};

const DEFAULTS = { theme: "night", hue: 24, contours: true, motion: true };

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
      localStorage.setItem(LS_KEY, JSON.stringify({ lang, theme, hue, contours, motion }));
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
    lines.forEach((line) => {
      const original = line.getAttribute("data-original-text") || line.innerText;
      line.setAttribute("data-original-text", original);
      
      const hasSpaces = original.includes(" ");
      const words = hasSpaces ? original.split(" ") : original.split("");

      line.innerHTML = "";
      words.forEach((word) => {
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
          titleEl.querySelectorAll(".reveal-line > span").forEach((s) => {
            s.style.overflow = "visible";
          });
        },
      });
    } else {
      titleEl.querySelectorAll(".word-inner").forEach((el) => {
        el.style.transform = "none";
      });
      titleEl.querySelectorAll(".reveal-line > span").forEach((s) => {
        s.style.overflow = "visible";
      });
    }
  }, [lang, motion]);

  // 滚动入场:进入视口加 .revealed
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal:not(.revealed)"));
    if (!("IntersectionObserver" in window) || els.length === 0 || !motion) {
      els.forEach((el) => el.classList.add("revealed"));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("revealed");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang, motion]);

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
    <div className="relative z-10 flex flex-col min-h-screen w-full max-w-[1600px] mx-auto p-6 md:p-10 lg:p-12">
      <Topbar
        lang={lang}
        theme={theme}
        onLang={setLang}
        onTheme={() => setTheme(theme === "night" ? "chart" : "night")}
      />
      <Hero lang={lang} />
      <FeaturedProject lang={lang} />
      <Projects lang={lang} />
      <Activity lang={lang} />
      <Links lang={lang} />
      <Footer lang={lang} onSurface={surface} />

      <TweaksPanel
        lang={lang}
        open={panelOpen}
        onToggle={() => setPanelOpen(!panelOpen)}
        theme={theme}
        onTheme={setTheme}
        hue={hue}
        onHue={setHue}
        contours={contours}
        onContours={setContours}
        motion={motion}
        onMotion={setMotion}
        onReset={resetTweaks}
      />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// build.sh 在 #root 之前注入项目索引的静态 HTML(给不执行 JS 的抓取器和无 JS 访客);
// React 一挂载,同样的内容就由 Projects 组件呈现,静态版随即移除,避免重复。
const staticFleet = document.getElementById("static-fleet");
if (staticFleet) staticFleet.remove();
