import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return globalThis.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const { t, i18n } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
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
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguage = () => {
    const currentLang = i18n.language || "es";
    const newLang = currentLang.startsWith("es") ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    setActiveLink(sectionId);
    if (location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <div className="navbarContainer" ref={dropdownRef}>
      <div className="navbar">
        <div
          className="logo-circle"
          onClick={toggleLanguage}
          style={{ cursor: "pointer" }}
          title="Cambiar idioma"
        >
          <span>{i18n.language?.startsWith("es") ? "ES" : "EN"}</span>
        </div>

        <div className="nav-right">
          <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
            <ul className="links">
              <li>
                <button
                  className={activeLink === "hero" ? "active" : ""}
                  onClick={() => handleNavClick("hero")}
                >
                  {t("navbar.home")}
                </button>
              </li>
              <li>
                <button
                  className={activeLink === "aboutMe" ? "active" : ""}
                  onClick={() => handleNavClick("aboutMe")}
                >
                  {t("navbar.about")}
                </button>
              </li>
              <li>
                <button
                  className={activeLink === "projects" ? "active" : ""}
                  onClick={() => handleNavClick("projects")}
                >
                  {t("navbar.projects")}
                </button>
              </li>
            </ul>
          </nav>

          <button
            className="icon-btn"
            aria-label="Cambiar tema"
            onClick={toggleTheme}
            title="Cambiar tema"
          >
            <span
              className={`dot ${theme}`}
              style={{ pointerEvents: "none" }}
            ></span>
          </button>

          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            type="button"
            aria-label="Abrir menú"
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};
