"use client";

import { useState, useEffect, forwardRef, Ref } from "react";
import Heading from "../ui/Heading";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/config/user-data/projects";
import Button from "../ui/Button";

const ProjectsSection = forwardRef<HTMLElement, object>(
  (props, ref: Ref<HTMLElement>) => {
    const [showAll, setShowAll] = useState(false);

    // client-only responsive state (safe)
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    // -----------------------------
    // Window tracking (client only)
    // -----------------------------
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const filteredProjects = projects;

    // -----------------------------
    // SSR-safe default count
    // -----------------------------
    const defaultCount = windowWidth !== null && windowWidth >= 1024 ? 3 : 2;

    // -----------------------------
    // UI
    // -----------------------------
    return (
      <section id="projects" ref={ref}>
        <div className="max-w-5xl mx-auto px-6 py-8 md:py-14">
          {/* HEADER */}
          <div className="text-center mb-8 md:mb-12">
            <Heading
              as="h2"
              normalText="Here's My"
              highlightText="Selected Work"
            />
          </div>

          {/* PROJECT GRID */}
          <div className="flex flex-wrap justify-center gap-8">
            {filteredProjects.map((project, index) => {
              const isHidden = !showAll && index >= defaultCount;

              return (
                <div
                  key={project.id}
                  className={`w-full sm:w-[340px] ${isHidden ? "sr-only" : "block"}`} // sr-only keeps it in DOM but invisible
                >
                  <ProjectCard {...project} />
                </div>
              );
            })}
          </div>

          {/* SEE MORE BUTTON */}
          {filteredProjects.length > defaultCount && (
            <div className="flex justify-center mt-6">
              <Button
                onClick={() => setShowAll((prev) => !prev)}
                variant="ghost"
              >
                {showAll ? "See Less" : "See More"}
              </Button>
            </div>
          )}
        </div>
      </section>
    );
  },
);

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
