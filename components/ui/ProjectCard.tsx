import { highlightTechs } from "@/config/user-data/projects";
import aboutData from "@/config/user-data/about";
import Heading from "./Heading";
import { ArrowRight, NavigationArrow } from "phosphor-react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  icon?: React.ElementType;
  iconColor?: string;
  technologies: string[];
  liveUrl?: string;
  id: string;
  githubUrl?: string;
  onNavigate?: () => void;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  icon: Icon,
  iconColor = "#7b2cbf",
  technologies,
  liveUrl,
  id,
  githubUrl,
  onNavigate,
}: ProjectCardProps) {
  const router = useRouter();
  const reduceMotion = useReducedMotion() ?? false;
  const externalUrl = liveUrl || githubUrl;

  const navigateToCaseStudy = () => {
    onNavigate?.();
    setTimeout(() => {
      router.push(`/projects/${id}`);
    }, 150);
  };

  // Projects without a screenshot have no internal case-study page —
  // "View Details" sends them straight to the live site / repo instead,
  // and the card itself isn't clickable.
  if (!imageUrl) {
    return (
      <motion.div
        className="relative flex h-full flex-col rounded-xl border border-black-light/10 bg-glass p-6 shadow-sm transition-colors duration-300 hover:border-primary/40"
        whileHover={reduceMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {Icon && (
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl"
            style={{ backgroundColor: `${iconColor}1a` }}
          >
            <Icon size={28} weight="duotone" color={iconColor} />
          </div>
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

  return (
    <motion.div
      className="group relative bg-glass rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full flex flex-col items-start cursor-pointer"
      onClick={navigateToCaseStudy}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      whileTap={reduceMotion ? undefined : { scale: 0.995 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative w-full h-fit px-2 m-2 overflow-hidden rounded-lg group mx-auto">
        {(liveUrl || githubUrl) && (
          <a
            href={liveUrl ? liveUrl : githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Live Project"
            className="absolute text-white right-3 top-3 z-10 flex h-9 w-9 items-center flex-col justify-center rounded-md py-1 bg-primary shadow-md transition-transform duration-200 hover:scale-110"
            onClick={(e) => e.stopPropagation()}
          >
            <NavigationArrow weight="bold" className="h-5 w-5" />
            <span className="text-xs">{liveUrl ? "Live" : "Code"}</span>
          </a>
        )}
        <div className="overflow-hidden rounded-xl">
          <img
            src={imageUrl}
            alt={`${aboutData.name}'s Project ${title}`}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-start gap-2 flex-1 px-6 w-full">
        <Heading as="h4" normalText={title} center={false} />
        {description && (
          <p className="text-sm text-black-light flex-1">
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
        )}

        {/* Technologies as small text chips */}
        {technologies.length > 0 && (
          <div className="flex gap-2 mb-1 flex-wrap">
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

        <div className="mb-4 flex items-center justify-between w-full">
          <span className="text-xs font-medium bg-primary text-white rounded-md p-1 flex items-start gap-1">
            Click to explore <i className="ri-arrow-right-long-fill"></i>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
