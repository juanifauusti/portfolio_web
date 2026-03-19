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

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "dark") return "light";
      if (prev === "light") return "terminal";
      return "dark";
    });
  };

  const getSwitchClass = () => {
    if (theme === "light") return "pos-light";
    if (theme === "terminal") return "pos-terminal";
    return "pos-dark";
  };

  return (
    <Router>
      <ScrollToTop />
      <button
        className={`theme-toggle-switch ${theme}`}
        onClick={toggleTheme}
        aria-label="Cambiar tema"
      >
        <div className={`switch-circle ${getSwitchClass()}`} />
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
