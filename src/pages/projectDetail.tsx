import { useParams, Link } from "react-router-dom";
import { projectList } from "../assets/data/projects";
import "../styles/ProjectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projectList.find((p) => p.id === id);

  if (!project) return <h1>Proyecto no encontrado</h1>;

  return (
    <div className="project-detail">
      <Link to="/">← Volver</Link>
      <img src={project.image} alt={project.title} className="detail-image" />
      <h1>{project.title}</h1>
      <h2>{project.description}</h2>
      <h3>{project.date}</h3>
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
      <div className="technologies">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
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
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Desafíos Técnicos</h2>
        <p>{project.challenges}</p>
      </section>

      <Link to="/projects" className="view-all-btn">
        Ver más proyectos
      </Link>
    </div>
  );
}
