import { useParams, Link } from "react-router-dom";
import { projectList } from "../assets/data/projects";
import "../styles/projectDetail.css";
import { useTranslation } from "react-i18next";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projectList.find((p) => p.id === id);

  const { t } = useTranslation(["projects", "translation"]);

  if (!project) return <h1>{t("translation:project_detail.not_found")}</h1>;

  return (
    <div className="project-detail fade-in">
      <Link to="/projects" className="back-link">
        {t("translation:project_detail.back")}
      </Link>

      <img
        src={project.image}
        alt={t(`projects:${project.id}.title`)}
        className="detail-image"
      />

      <div className="detail-header">
        <h1>{t(`projects:${project.id}.title`)}</h1>
        <p className="detail-date">{t(`projects:${project.id}.date`)}</p>
        <p className="detail-description">
          {t(`projects:${project.id}.description`)}
        </p>
      </div>

      <div className="project-actions">
        {project.live && (
          <a
            href={
              project.live.startsWith("http")
                ? project.live
                : `https://${project.live}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="external-btn"
          >
            {t("translation:project_detail.go_live")}
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            {t("translation:project_detail.view_github")}
          </a>
        )}

        {project.downloadUrl && (
          <a href={project.downloadUrl} download className="download-btn">
            {t("translation:project_detail.download_docs")}
          </a>
        )}
      </div>

      <div className="technologies">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="detail-content">
        <section>
          <h2>{t("translation:project_detail.problem_title")}</h2>
          <p>{t(`projects:${project.id}.problem`)}</p>
        </section>

        <section>
          <h2>{t("translation:project_detail.solution_title")}</h2>
          <p>{t(`projects:${project.id}.solution`)}</p>
        </section>

        <section>
          <h2>{t("translation:project_detail.features_title")}</h2>
          <ul>
            {(
              t(`projects:${project.id}.features`, {
                returnObjects: true,
              }) as string[]
            ).map((f, index) => (
              <li key={index}>{f}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{t("translation:project_detail.challenges_title")}</h2>
          <p>{t(`projects:${project.id}.challenges`)}</p>
        </section>
      </div>
    </div>
  );
}
