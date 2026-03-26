import { Link } from "react-router-dom";
import { projectList } from "../assets/data/projects";
import "../styles/projects.css";
import { useTranslation } from "react-i18next";

export default function AllProjects() {
  const { t } = useTranslation(["translation", "projects"]);

  return (
    <section className="projects fade-in-total">
      <Link className="back-link" to="/">
        {t("translation:all_projects.back")}
      </Link>
      <h1>{t("translation:all_projects.title")}</h1>
      <p>{t("translation:all_projects.subtitle")}</p>

      <div className="projects-grid">
        {projectList.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={t(`projects:${project.id}.title`)} />
            <div className="card-content">
              <h3>{t(`projects:${project.id}.title`)}</h3>

              {t(`projects:${project.id}.date`)}

              <p>{t(`projects:${project.id}.description`)}</p>

              {project.technologies && (
                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((tech) => (
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
    </section>
  );
}
