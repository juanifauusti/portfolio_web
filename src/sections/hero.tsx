import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/hero.css";
import Github from "../assets/icons/github.png";
import Gmail from "../assets/icons/gmail.png";
import Wpp from "../assets/icons/wpp.png";
import Linkedin from "../assets/icons/linkedin.png";
import Animation from "../assets/images/animation.jpg";

export default function Hero() {
  const { t } = useTranslation("translation");
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 25;
    const rotateY = (x - centerX) / 25;

    wrapper.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section className={`hero ${visible ? "fade-in" : ""}`}>
      {" "}
      <div className={`hero-left ${visible ? "fade-in-left" : ""}`}>
        <h1>{t("hero.title")}</h1>
        <p>{t("hero.description")}</p>
        <div className="cv-dropdown">
          <button className="primary cv-main-btn">
            {t("hero.cv_button", { defaultValue: "Descargar CV" })}
          </button>
          <div className="dropdown-content">
            <a href="/JuanaCalzada-Frontend.pdf" download>
              Frontend
            </a>
            <a href="/JuanaCalzada-Dev.pdf" download>
              DEV
            </a>
            <a href="/JuanaCalzada-QA.pdf" download>
              QA
            </a>
            <a href="/JuanaCalzada-English.pdf" download>
              English
            </a>
          </div>
        </div>
        <div className="icons">
          <a
            href="https://github.com/juanifauusti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="icono de github" />
          </a>
          <a href="mailto:juanacalzada01@gmail.com">
            <img src={Gmail} alt="icono de gmail" />
          </a>
          <a
            href="www.linkedin.com/in/juanacalzada"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="icono de linkedin" />
          </a>
          <a
            href="https://wa.me/5491166144123?text=Hola%20me%20interesa%20tu%20trabajo"
            target="_blank"
          >
            <img src={Wpp} alt="icono de whatsapp" className="wpp" />
          </a>
        </div>
      </div>
      <div className={`hero-right ${visible ? "fade-in-right" : ""}`}>
        <div
          ref={wrapperRef}
          className="image-wrapper"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          aria-hidden="true"
        >
          <img
            src={Animation}
            alt="ilustración de una persona trabajando en una computadora"
          />
        </div>
      </div>
    </section>
  );
}
