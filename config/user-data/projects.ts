import { Notebook as NotebookIcon, SquaresFour as SquaresFourIcon } from "phosphor-react";

interface CaseStudySection {
  title: string;
  body: string;
}

interface Architecture {
  description: string;
  structure: string;
}

export interface CaseStudy {
  bgImageUrl?: string;
  introduction?: string;
  overview?: string;
  overviewImage?: string;
  architecture?: Architecture;
  challenges?: CaseStudySection[];
  process?: CaseStudySection[];
  features?: CaseStudySection[];
  featuresImage?: string;
  outcomes?: {
    value: string;
    desc: string;
  }[];
  reflection?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  categories: string[];
  imageUrl?: string;
  icon?: React.ElementType;
  iconColor?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isClientProject?: boolean;
  result?: string;
  bgImageUrl?: string;
  role?: string;
  context?: string;
  period?: string;
  introduction?: string;
  caseStudy?: CaseStudy;
  previewImage?: string;
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
    categories: [],
    icon: NotebookIcon,
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
    categories: [],
    icon: SquaresFourIcon,
    iconColor: "#14b8a6",
    technologies: [TECH_STACK.python, TECH_STACK.fastapi],
    githubUrl: "https://github.com/salmanakhtar57/OneSpace",
    description:
      "A simple full-stack personal productivity application built with FastAPI, helping users organize journals, habits, tasks, and daily insights in one place through a clean, scalable, and modular backend architecture.",
  },
];

// Highlight important techs
export const highlightTechs: string[] = [TECH_STACK.django, TECH_STACK.fastapi];
