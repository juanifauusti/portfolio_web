import { useRef } from "react";
import "../styles/hero.css";
import Github from "../assets/icons/github.png";
import Gmail from "../assets/icons/gmail.png";
import Linkedin from "../assets/icons/linkedin.png";
import Animation from "../assets/images/animation.jpg";

export default function Hero() {
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
    <section className="hero">
      <div className="hero-left">
        <h1>Hola, soy Juana</h1>
        <p>
          Desarrolladora Frontend jr en continua formación, con base técnica en
          informática y experiencia en proyectos reales. Interesada en seguir
          creciendo y crear interfaces claras, funcionales y centradas en el
          usuario.
        </p>
        <a href="/JuanaCalzada-CV.pdf" download className="primary">
          Descargar CV
        </a>
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
            href="https://www.linkedin.com/in/juana-calzada"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="icono de linkedin" />
          </a>
        </div>
      </div>
      <div className="hero-right">
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
        <button className="primary">Cambiar el color</button>
      </div>
    </section>
  );
}
