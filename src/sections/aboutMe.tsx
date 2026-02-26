import "../styles/aboutMe.css";
import { useState, useEffect, useRef } from "react";
import Me from "../assets/images/me.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function AboutMe() {
  const technologies = [
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "C#",
    "Ecosistema .NET",
    "SQL Server",
    "Python",
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
      <h1>Sobre mí</h1>
      <div className="aboutmeContainer">
        <img src={Me} alt="Foto de perfil" className="profile-pic" />
        <div className="aboutmeText">
          <p>
            Actualmente curso Ingeniería en Informática y me gradué de un
            colegio técnico con orientación en informática. Esta base me
            permitió desarrollar una mirada estructurada y sólida para la
            resolución de problemas.
          </p>
          <p>
            Tengo experiencia en desarrollo de interfaces mediante una
            estructura basada en componentes, priorizando reutilización,
            organización del código y adaptación responsive. Experiencia en
            implementación, testing visual y procesos de despliegue.
          </p>
        </div>
      </div>
      <h2>Tecnologías</h2>
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
