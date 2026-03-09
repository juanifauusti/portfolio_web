import tostyImage from "../../assets/images/tosty.png";
import consultoraLogo from "../../assets/images/consultora.jpg";

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
