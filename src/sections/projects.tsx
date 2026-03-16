import "../styles/projects.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { projectList } from "../assets/data/projects";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
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

  return (
    <section
      ref={sectionRef}
      className={`projects ${visible ? "fade-in-total" : ""}`}
    >
      <h1>Mis últimos proyectos</h1>
      <p>
        He trabajado en diferentes proyectos desde páginas web hasta
        aplicaciones móviles
      </p>

      <div className="projects-grid">
        {projectList.slice(0, 2).map((project) => (
          <div className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />
            <div className="card-content">
              <h3>{project.title}</h3>
              {project.date && (
                <span className="project-date">{project.date}</span>
              )}
              <p>{project.description}</p>
              {project.technologies && (
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <Link to={`/projects/${project.id}`} className="btn">
                Ver proyecto
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div>
        {projectList.length > 2 && (
          <div>
            <Link to="/projects" className="btn-primary">
              Ver más proyectos
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
