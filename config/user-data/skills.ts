import {
  ChatCircleDots,
  Database,
  FileJs,
  FlowArrow,
  GitBranch,
  Laptop,
  Lightning,
  Robot,
} from "phosphor-react";
import {
  DjangoIcon,
  DjangoRestIcon,
  FastAPIIcon,
  FlaskIcon,
  MongoDBIcon,
  MySQLIcon,
  PG_ADMIN,
  PostmanIcon,
  PythonIcon,
  SQLiteIcon,
} from "./skills-icons/skills-icons";

// ── Categories ───────────────────────────────────────────
export type Category =
  | "all"
  | "backend"
  | "tools"
  | "language"
  | "database"
  | "ai";
export type Ring = "inner" | "mid" | "outer";

// ── Skill Interface ───────────────────────────────────────
export interface Skill {
  id: string;
  label: string;
  name: string;
  tags: string[];
  cat: Omit<Category, "all">[]; // <-- multi-category support
  ring: Ring;
  angle: number;
  Icon: React.ElementType;
  color?: string;
}

// ── Base Skills ───────────────────────────────────────────
const BASE_SKILLS: Omit<Skill, "angle">[] = [
  // ── Inner ring: core stack ──
  {
    id: "python",
    label: "Python",
    name: "Python",
    tags: ["Django", "FastAPI", "Scripting"],
    cat: ["backend", "language"],
    ring: "inner",
    Icon: PythonIcon,
  },
  {
    id: "django",
    label: "Django",
    name: "Django",
    tags: ["ORM", "Admin", "MVT"],
    cat: ["backend"],
    ring: "inner",
    Icon: DjangoIcon,
    color: "#2f855a",
  },
  {
    id: "drf",
    label: "DRF",
    name: "Django REST Framework",
    tags: ["REST APIs", "Serializers"],
    cat: ["backend"],
    ring: "inner",
    Icon: DjangoRestIcon,
    color: "#c0392b",
  },
  {
    id: "fastapi",
    label: "FastAPI",
    name: "FastAPI",
    tags: ["Async", "Pydantic", "REST"],
    cat: ["backend"],
    ring: "inner",
    Icon: FastAPIIcon,
    color: "#009688",
  },
  {
    id: "flask",
    label: "Flask",
    name: "Flask",
    tags: ["Micro-framework", "REST"],
    cat: ["backend"],
    ring: "inner",
    Icon: FlaskIcon,
  },
  {
    id: "js",
    label: "JS",
    name: "JavaScript",
    tags: ["ES6+", "JavaScript"],
    cat: ["language"],
    ring: "inner",
    Icon: FileJs,
    color: "#F5F75B",
  },

  // ── Mid ring: supporting stack ──
  {
    id: "pg",
    label: "Postgres",
    name: "PostgreSQL",
    tags: ["SQL", "Relational"],
    cat: ["database"],
    ring: "mid",
    Icon: PG_ADMIN,
  },
  {
    id: "mongo",
    label: "MongoDB",
    name: "MongoDB",
    tags: ["NoSQL", "Documents"],
    cat: ["database"],
    ring: "mid",
    Icon: MongoDBIcon,
    color: "#47a248",
  },
  {
    id: "mysql",
    label: "MySQL",
    name: "MySQL",
    tags: ["SQL", "Relational"],
    cat: ["database"],
    ring: "mid",
    Icon: MySQLIcon,
    color: "#00758f",
  },
  {
    id: "sqlite",
    label: "SQLite",
    name: "SQLite",
    tags: ["Embedded", "SQL"],
    cat: ["database"],
    ring: "mid",
    Icon: SQLiteIcon,
    color: "#003b57",
  },
  {
    id: "git",
    label: "Git",
    name: "Git & GitHub",
    tags: ["Version Control", "CI/CD"],
    cat: ["tools"],
    ring: "mid",
    Icon: GitBranch,
    color: "#D74A34",
  },
  // ── Outer ring: tools & AI specialties ──
  {
    id: "postman",
    label: "Postman",
    name: "Postman",
    tags: ["API Testing"],
    cat: ["tools"],
    ring: "outer",
    Icon: PostmanIcon,
    color: "#ff6c37",
  },
  {
    id: "agentic-ai",
    label: "Agentic AI",
    name: "Agentic AI",
    tags: ["Autonomous Agents"],
    cat: ["ai"],
    ring: "outer",
    Icon: Robot,
    color: "#7b2cbf",
  },
  {
    id: "chatbots",
    label: "Chatbots",
    name: "Chatbots",
    tags: ["Conversational AI"],
    cat: ["ai"],
    ring: "outer",
    Icon: ChatCircleDots,
    color: "#7b2cbf",
  },
  {
    id: "langchain",
    label: "LangChain",
    name: "LangChain",
    tags: ["Chains", "Agents", "Tools"],
    cat: ["ai"],
    ring: "outer",
    Icon: FlowArrow,
    color: "#1c3c3c",
  },
];

// ── Skill Description ────────────────────────────────────
export const skillPara =
  "Technologies and tools I use to build modern, scalable web applications.";

// ── Function to assign dynamic angles ────────────────────
export const SKILLS: Skill[] = (() => {
  const rings: Record<Ring, Skill[]> = { inner: [], mid: [], outer: [] };

  BASE_SKILLS.forEach((skill) => {
    rings[skill.ring].push({ ...skill, angle: 0 }); // placeholder
  });

  Object.keys(rings).forEach((ringKey) => {
    const ring = ringKey as Ring;
    const items = rings[ring];
    const angleStep = 360 / items.length;
    items.forEach((skill, idx) => {
      skill.angle = idx * angleStep;
    });
  });

  return [...rings.inner, ...rings.mid, ...rings.outer];
})();

// ── Categories for center display and buttons ───────────
export const CATEGORIES: Record<
  Category,
  { icon: React.ElementType; label: string; sub: string }
> = {
  all: {
    icon: Laptop,
    label: "Full Stack",
    sub: "All Technologies",
  },
  backend: {
    icon: PythonIcon,
    label: "Backend",
    sub: "Django · DRF · FastAPI · Flask",
  },
  tools: {
    icon: Lightning,
    label: "Tools",
    sub: "Git · Postman",
  },
  language: {
    icon: PythonIcon,
    label: "Languages",
    sub: "Python · JavaScript",
  },
  database: {
    icon: Database,
    label: "Database",
    sub: "MongoDB · PostgreSQL · MySQL",
  },
  ai: {
    icon: Robot,
    label: "AI",
    sub: "Agentic AI · Chatbots · LangChain",
  },
};
