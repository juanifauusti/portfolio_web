import tostyImage from "../../assets/images/tosty.png";
import consultoraLogo from "../../assets/images/consultora.jpg";
import taskManager from "../../assets/images/taskManager.png";
import chatbot from "../../assets/images/chatbot.png";

export interface Project {
  id: string;
  technologies: string[];
  image: string;
  github?: string | null;
  live?: string | null;
  downloadUrl?: string | null;
}

export const projectList: Project[] = [
  {
    id: "tosty",
    technologies: [
      "React Native",
      "Rive",
      "Figma",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
    image: tostyImage,
    github: null,
    live: "www.tosty.online",
    downloadUrl: "/InformeTosty.pdf",
  },
  {
    id: "porlasfamilias",
    technologies: ["React", "TypeScript", "Figma", "CSS Moderno"],
    image: consultoraLogo,
    github: null,
    live: "www.porlasfamilias.com.ar",
  },
  {
    id: "task-management",
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
    image: taskManager,
    github: "https://github.com/juanifauusti/taskManagement",
    live: "task-management-juana.vercel.app",
  },
  {
    id: "chatbot",
    technologies: [
      "C#",
      "ASP.NET Core",
      "Cohere API",
      "Supabase",
      "Render",
      "JavaScript",
      "Vercel",
    ],
    image: chatbot,
    github: "https://github.com/juanifauusti/website-chatbot", 
    live: "https://website-chatbot-juana.vercel.app",
    downloadUrl: null,
  },
];
