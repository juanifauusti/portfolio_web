import { Link } from "react-router-dom";
import { projectList } from "../assets/data/projects";
import "../styles/Projects.css";

export default function AllProjects() {
  return (
    <section className="projects fade-in-total">
      {" "}
      <Link className="back-link" to="/">← Volver</Link>
      <h1>Todos mis proyectos</h1>
      <p>Explorá el listado completo de mis trabajos</p>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="card-content">
              <h3>{project.title}</h3>

              {project.date && (
                <span className="project-date">{project.date}</span>
              )}

              <p>{project.description}</p>

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
                Ver proyecto
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
