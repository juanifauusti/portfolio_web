import "../styles/projects.css";
import tostyImage from "../assets/images/tosty.png";

const projectList = [
  {
    title: "Tosty - Aplicación móvil",
    date: "Marzo 2025 - Actualidad",
    description:
      "Busca reducir el tiempo en pantalla utilizando herramientas de gamificación.",
    technologies: ["React Native", "JavaScript"],
    image: tostyImage,
    link: "#",
  },
  {
    title: "Landing Page - Proyecto Freelance",
    date: "Febrero 2026 - Actualidad",
    description:
      "Desarrollada para una consultora de juicios familiares, con el objetivo de mejorar su presencia online y atraer nuevos clientes.",
    technologies: ["React", "TypeScript"],
    image: "..",
    link: "#",
  },
  {
    title: "...",
    date: "...",
    description: "...",
    technologies: ["...", "..."],
    image: "..",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <h1>Mis últimos proyectos</h1>
      <p>
        He trabajado en diferentes proyectos desde páginas web hasta
        aplicaciones móviles
      </p>

      <div className="projects-grid">
        {projectList.map((project) => (
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
              <a
                href={project.link}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button className="btn-primary">Ver más proyectos</button>
      </div>
    </section>
  );
}
