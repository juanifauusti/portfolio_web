import { useParams, Link } from "react-router-dom";
import { projectList } from "../assets/data/projects";
import "../styles/projectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projectList.find((p) => p.id === id);

  if (!project) return <h1>Proyecto no encontrado</h1>;

  return (
    <div className="project-detail fade-in">
      <Link to="/projects" className="back-link">
        ← Volver a proyectos
      </Link>

      <img src={project.image} alt={project.title} className="detail-image" />

      <div className="detail-header">
        <h1>{project.title}</h1>
        <p className="detail-date">{project.date}</p>
        <p className="detail-description">{project.description}</p>
      </div>

      <div className="project-actions">
        {project.live && (
          <a
            href={`https://${project.live}`}
            target="_blank"
            rel="noopener noreferrer"
            className="external-btn"
          >
            Ir al proyecto
          </a>
        )}

        {project.downloadUrl && (
          <a href={project.downloadUrl} download className="download-btn">
            Descargar Documentación
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
          <h2>Problema</h2>
          <p>{project.problem}</p>
        </section>

        <section>
          <h2>Solución</h2>
          <p>{project.solution}</p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            {project.features.map((f, index) => (
              <li key={index}>{f}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Desafíos Técnicos</h2>
          <p>{project.challenges}</p>
        </section>
      </div>

      <div className="detail-footer">
        <Link to="/projects" className="view-all-btn">
          Ver más proyectos
        </Link>
      </div>
    </div>
  );
}
