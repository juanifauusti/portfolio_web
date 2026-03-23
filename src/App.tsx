import { useEffect, useState } from "react";
import "./styles/App.css";
import ScrollToTop from "./components/scrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./sections/hero";
import AboutMe from "./sections/aboutMe";
import Projects from "./sections/projects";
import ProjectDetail from "./pages/projectDetail";
import AllProjects from "./pages/allProjects";

function Home() {
  return (
    <div className="app-container">
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    return globalThis.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = globalThis.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const themes = [
    { id: "dark", label: "Oscuro" },
    { id: "light", label: "Claro" },
    { id: "terminal", label: "Terminal" },
    { id: "nature", label: "Nature" },
  ];

  return (
    <Router>
      <ScrollToTop />

      <div className={`theme-menu-container ${isOpen ? "open" : ""}`}>
        <button
          className={`main-theme-btn ${theme}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú de temas"
        >
          <div className="current-theme-indicator" />
        </button>

        <div className="theme-options">
          {themes.map((t) => (
            <button
              key={t.id}
              className={`theme-opt-btn ${theme === t.id ? "active" : ""}`}
              onClick={() => {
                setTheme(t.id);
                setIsOpen(false);
              }}
              title={t.label}
            >
              <span className={`dot ${t.id}`} />
            </button>
          ))}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;