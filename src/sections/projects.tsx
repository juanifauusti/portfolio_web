import "../styles/projects.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { projectList } from "../assets/data/projects";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation(["translation", "projects"]);
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
      <h1>{t("translation:projects_section.title")}</h1>
      <p>{t("translation:projects_section.subtitle")}</p>

      <div className="projects-grid">
        {projectList.slice(0, 2).map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={t(`projects:${project.id}.title`)} />
            <div className="card-content">
              <h3>{t(`projects:${project.id}.title`)}</h3>
              {t(`projects:${project.id}.date`)}
              <p>{t(`projects:${project.id}.description`)}</p>
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
                {t("translation:projects_section.view_project")}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div>
        {projectList.length > 2 && (
          <div>
            <Link to="/projects" className="btn-primary">
              {t("translation:projects_section.view_more")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}