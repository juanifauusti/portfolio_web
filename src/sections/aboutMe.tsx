import "../styles/aboutMe.css";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Me from "../assets/images/me.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function AboutMe() {
  const { t } = useTranslation("translation");
  const technologies = [
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "C#",
    ".NET",
    "SQL Server",
    "Python",
    "Node.js",
    "Vercel",
    "Express",
    "MongoDB",
    "MySQL",
    "Prisma"
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState<boolean>(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) =>
          prev === technologies.length - 1 ? 0 : prev + 1,
        );
        setFade(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const prevTech = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? technologies.length - 1 : prev - 1,
    );
  };

  const nextTech = () => {
    setCurrentIndex((prev) =>
      prev === technologies.length - 1 ? 0 : prev + 1,
    );
  };

  const goToTech = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className={`about-me ${visible ? "fade-in-total" : ""}`}
    >
      {" "}
      <h1>{t("about.title")}</h1>
      <div className="aboutmeContainer">
        <img src={Me} alt="Foto de perfil" className="profile-pic" />
        <div className="aboutmeText">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
        </div>
      </div>
      <h2>{t("about.tech_title")}</h2>
      <div className="techCarousel">
        <button
          className="arrow left"
          onClick={prevTech}
          aria-label="Anterior tecnología"
        >
          <FaArrowLeft />
        </button>

        <div className="techContainer">
          <span className={`tech-item ${fade ? "fade-in" : "fade-out"}`}>
            {technologies[currentIndex]}
          </span>
        </div>

        <button
          className="arrow right"
          onClick={nextTech}
          aria-label="Siguiente tecnología"
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="dots">
        {technologies.map((tech) => (
          <button
            key={tech}
            className={`dot ${technologies[currentIndex] === tech ? "active" : ""}`}
            onClick={() => goToTech(technologies.indexOf(tech))}
            aria-label={`Ver tecnología ${tech}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
