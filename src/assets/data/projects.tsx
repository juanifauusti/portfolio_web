import tostyImage from "../../assets/images/tosty.png";
import consultoraLogo from "../../assets/images/consultora.jpg";
import taskManager from "../../assets/images/taskManager.png";

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
  downloadUrl?: string | null;
}

export const projectList: Project[] = [
  {
    id: "tosty",
    title: "Tosty - Aplicación móvil",
    date: "Marzo 2025 - Actualidad",
    description:
      "Aplicación para Android que transforma la reducción del tiempo de pantalla en una experiencia lúdica para combatir el 'pantallismo'.",
    problem:
      "El uso compulsivo de dispositivos genera estrés, ansiedad y deterioros en la capacidad de atención y regulación emocional, especialmente en adolescentes.",
    solution:
      "Un sistema basado en la autorregulación y gamificación donde el bienestar de una mascota virtual depende estrictamente del cumplimiento de los límites de tiempo establecidos por el usuario.",
    features: [
      "Mascota virtual con estados de salud visuales ",
      "Seguimiento de uso en tiempo real mediante módulos nativos ",
      "Sistema de economía interna con monedas, tienda y skins ",
      "Misiones diarias, logros y sistema de rachas ",
      "Funcionalidad social para misiones conjuntas con amigos ",
      "Historial de uso detallado en calendario ",
      "Notificaciones recordatorias de límites ",
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
    downloadUrl: "/InformeTosty.pdf",
  },
  {
    id: "porlasfamilias",
    title: "Landing Page - Proyecto Freelance",
    date: "Febrero 2026 - Actualidad",
    description:
      "Landing page profesional para una consultora enfocada en la captación de clientes y presencia digital.",
    problem:
      "La consultora carecía de una plataforma digital para centralizar sus servicios, presentar a su equipo profesional y brindar confianza a familias en procesos legales complejos.",
    solution:
      "Desarrollo de una interfaz moderna y empática que organiza las categorías de intervención, presenta perfiles profesionales detallados y facilita el contacto directo mediante formularios integrados.",
    features: [
      "Diseño responsivo optimizado",
      "Sección interactiva de servicios",
      "Navegación intuitiva con enfoque en la experiencia del usuario",
      "Modales interactivos para información detallada",
    ],
    technologies: ["React", "TypeScript", "Figma", "CSS Moderno"],
    challenges:
      "El mayor desafío fue equilibrar una estética moderna con la sobriedad y confianza que requiere un servicio de asesoría familiar, además de asegurar una adaptabilidad perfecta en todos los dispositivos.",
    image: consultoraLogo,
    github: null,
    live: "www.porlasfamilias.com.ar",
  },
  {
    id: "task-management",
    title: "Task Management App",
    date: "Marzo 2026 - Actualidad",
    description:
      "Aplicación Full Stack para la gestión de tareas diarias con persistencia de datos en la nube.",
    problem:
      "La necesidad de una herramienta eficiente para organizar tareas que sea accesible desde cualquier dispositivo y mantenga la información sincronizada en tiempo real.",
    solution:
      "Desarrollo de una SPA (Single Page Application) con React conectada a una API robusta en .NET. Se implementó una base de datos PostgreSQL para garantizar que las tareas se mantengan guardadas de forma segura.",
    features: [
      "Gestión completa de tareas (Crear, Leer, Actualizar, Eliminar)",
      "Filtros dinámicos por estado de tarea (Pendientes y Completadas)",
      "Interfaz de usuario moderna y minimalista con enfoque en UX",
      "API RESTful documentada con Swagger",
      "Base de datos relacional integrada con Entity Framework Core",
    ],
    technologies: [
      "React",
      "TypeScript",
      ".NET 9",
      "ASP.NET Core",
      "PostgreSQL",
      "Supabase",
      "Entity Framework Core",
      "Axios",
    ],
    challenges:
      "Los principales desafíos incluyeron la configuración de CORS para la comunicación segura entre Vercel y Render, y la orquestación de migraciones automáticas en un entorno de base de datos PostgreSQL en la nube.",
    image: taskManager,
    github: "https://github.com/juanifauusti/taskManagement", 
    live: "task-management-juana.vercel.app",
  },
];
