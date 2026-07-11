// Icon keys are resolved to actual components client-side (see
// components/ui/ProjectCard.tsx) so this data file — imported by
// server-only code like sitemap.ts — never has to load an icon library.
export type ProjectIconKey = "notebook" | "squares-four";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  icon?: ProjectIconKey;
  iconColor?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const TECH_STACK = {
  react: "React",
  "redux toolkit": "Redux Toolkit",
  "rtk query": "RTK Query",
  "rtk thunks": "RTK Thunks",
  prisma: "Prisma",
  "next.js": "Next.js",
  nodejs: "Node.js",
  "express js": "Express",
  express: "Express",
  postgresql: "PostgreSQL",
  tailwind: "Tailwind",
  css: "CSS",
  html: "HTML",
  javascript: "JavaScript",
  typescript: "TypeScript",
  axios: "Axios",
  mui: "MUI",
  pusher: "Pusher",
  bootstrap: "Bootstrap",
  shadcn: "Shadcn UI",
  python: "Python",
  django: "Django",
  "rest framework": "Rest Framework",
  fastapi: "FastAPI",
};

export const projects: ProjectItem[] = [
  {
    id: "notes-app",
    title: "Notes App",
    icon: "notebook",
    iconColor: "#6366f1",
    technologies: [
      TECH_STACK.python,
      TECH_STACK.django,
      TECH_STACK["rest framework"],
      TECH_STACK.javascript,
    ],
    githubUrl: "https://github.com/salmanakhtar57/Notes-App",
    description:
      "A simple full-stack notes application built with Django REST Framework, allowing users to create, view, update, and delete notes using a clean and responsive frontend.",
  },
  {
    id: "onespace",
    title: "OneSpace",
    icon: "squares-four",
    iconColor: "#14b8a6",
    technologies: [TECH_STACK.python, TECH_STACK.fastapi],
    githubUrl: "https://github.com/salmanakhtar57/OneSpace",
    description:
      "A simple full-stack personal productivity application built with FastAPI, helping users organize journals, habits, tasks, and daily insights in one place through a clean, scalable, and modular backend architecture.",
  },
];

// Highlight important techs
export const highlightTechs: string[] = [TECH_STACK.django, TECH_STACK.fastapi];
