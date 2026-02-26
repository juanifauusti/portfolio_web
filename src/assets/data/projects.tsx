import tostyImage from "../../assets/images/tosty.png";

export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  challenges: string;
  image: string;
  github?: string | null;
  live?: string | null;
}

export const projectList: Project[] = [
  {
    id: "tosty",
    title: "Tosty - Aplicación móvil",
    date: "Marzo 2025 - Actualidad",
    description:
      "Busca reducir el tiempo en pantalla utilizando herramientas de gamificación.",
    problem:
      "El uso excesivo del celular afecta la concentración y la productividad en estudiantes.",
    solution:
      "El usuario se establece metas saludables y tiene una mascota virtual cuya salud depnende de su cumplimiento. Además, se agregaron distintas mecánicas de gamificación para incentivar el uso responsable del celular.",
    features: [
      "Establecimiento de metas",
      "Mascota virtual",
      "Recompensas y logros",
      "Tienda",
      "Personalización",
      "Estadísticas y seguimiento",
      "Sistema social",
    ],
    technologies: [
      "React Native",
      "Rive",
      "Figma",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
    challenges:
      "Los mayores desfios tuvieron que ver con la utilización del segundo plano sin afectar el rendimiento de la aplicación, con la implementación del trackeo de uso del celular y encontrar una estetica que fuera atractiva, única y amigable.",
    image: tostyImage,
    github: null,
    live: "www.tosty.online",
  },
  {
    id: "porlasfamilias",
    title: "Landing Page - Proyecto Freelance",
    date: "Febrero 2026 - Actualidad",
    description:
      "Desarrollada para una consultora de juicios familiares, con el objetivo de mejorar su presencia online y atraer nuevos clientes.",
    problem:
      "El cliente tenía una presencia online limitada y necesitaba una plataforma para mostrar sus servicios y atraer nuevos clientes.",
    solution:
      "Se diseñó y desarrolló una landing page moderna y profesional que destaca los servicios ofrecidos, informacion sobre la consultora y un formulario de contacto fácil de usar.",
    features: ["Diseño responsivo", "Navbar", "Sección de servicios"],
    technologies: ["React", "TypeScript", "Figma"],
    challenges: "El mayor desafío fue crear un diseño que transmitiera profesionalismo y confianza, al mismo tiempo que se mantenía moderno y atractivo para los visitantes.",
    image: "..",
    github: null,
    live: "www.porlasfamilias.com.ar",
  },
  {
    id: "proyecto3",
    title: "...",
    date: "...",
    description: "...",
    problem: "...",
    solution: "...",
    features: ["...", "..."],
    challenges: "...",
    technologies: ["...", "..."],
    image: "..",
  },
];
