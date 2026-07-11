import { highlightTechs, ProjectIconKey } from "@/config/user-data/projects";
import aboutData from "@/config/user-data/about";
import Heading from "./Heading";
import { ArrowRight, Notebook, SquaresFour } from "phosphor-react";
import { motion, useReducedMotion } from "framer-motion";

// Icons are resolved here (client-side only) rather than stored as
// component references in the project data, since that data is also
// imported by server-only code (sitemap.ts).
const PROJECT_ICONS: Record<ProjectIconKey, React.ElementType> = {
  notebook: Notebook,
  "squares-four": SquaresFour,
};

interface ProjectCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  icon?: ProjectIconKey;
  iconColor?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  icon,
  iconColor = "#7b2cbf",
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  const Icon = icon ? PROJECT_ICONS[icon] : undefined;
  const reduceMotion = useReducedMotion() ?? false;
  const externalUrl = liveUrl || githubUrl;

  return (
    <motion.div
      className="relative flex h-full flex-col rounded-xl border border-black-light/10 bg-glass p-6 shadow-sm transition-colors duration-300 hover:border-primary/40"
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {imageUrl ? (
        <div className="overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={`${aboutData.name}'s Project ${title}`}
            className="w-full object-cover"
          />
        </div>
      ) : (
        Icon && (
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl"
            style={{ backgroundColor: `${iconColor}1a` }}
          >
            <Icon size={28} weight="duotone" color={iconColor} />
          </div>
        )
      )}

      <Heading as="h4" normalText={title} center={false} className="mt-4" />

      {description && (
        <p className="mt-2 flex-1 text-sm leading-relaxed text-black-light">
          {description}
        </p>
      )}

      {technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => {
            const isHighlight = highlightTechs.includes(tech);
            return (
              <span
                key={index}
                className={`text-xs font-medium px-2 py-1 rounded-md ${
                  isHighlight
                    ? "bg-primary-light text-primary"
                    : "bg-black-light/10 text-black-light"
                }`}
                title={tech}
              >
                {tech}
              </span>
            );
          })}
        </div>
      )}

      {externalUrl && (
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          View Details <ArrowRight weight="bold" size={14} />
        </a>
      )}
    </motion.div>
  );
}
