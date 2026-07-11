"use client";

import { forwardRef, Ref, useState } from "react";
import Heading from "../ui/Heading";
import { SimplePara } from "../ui/SubHeadingContainer";
import Button from "../ui/Button";
import JourneyModal from "../modals/JourneyModal";
import aboutData from "@/config/user-data/about";
import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";

const AboutSection = forwardRef<HTMLElement, object>(
  (props, ref: Ref<HTMLElement>) => {
    const { aboutMe } = aboutData;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const renderParagraph = (text: string, index: number) => {
      const regex = /(\{[^}]+\})/;
      const parts = text.split(regex);

      return (
        <SimplePara
          key={index}
          className={`mt-${index === 0 ? "2" : "1"} font-light`}
        >
          {parts.map((part, idx) => {
            if (part.startsWith("{") && part.endsWith("}")) {
              return <strong key={idx}>{part.slice(1, -1)}</strong>;
            }
            return part;
          })}
        </SimplePara>
      );
    };

    return (
      <>
        <section
          className="bg-primary-light py-8 md:py-14 px-4 mt-2"
          id="about"
          ref={ref}
        >
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Reveal delay={0.12}>
              <Heading
                as="h2"
                normalText={aboutMe.heading.normalText}
                highlightText={aboutMe.heading.highlightedText}
              />
            </Reveal>

            <Stagger className="space-y-3 mt-4 text-left">
              {aboutMe.paragraphs.map((paragraph, index) => (
                <StaggerItem key={index}>
                  {renderParagraph(paragraph, index)}
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.24}>
              <Stagger className="flex gap-2 mt-4 flex-wrap justify-center">
                {aboutMe.highlightedAboutRole.map((title, index) => (
                  <StaggerItem
                    key={index}
                    className="text-xs font-medium px-2 py-1 rounded-md bg-black-light/10 text-primary"
                  >
                    {title}
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                  className="mt-2"
                >
                  {aboutMe.aboutCTA}
                </Button>
                {aboutMe.aboutSecondaryCTA && (
                  <Button
                    variant={"secondary"}
                    onClick={aboutMe.aboutSecondaryCTA.onClick}
                    className="mt-2"
                  >
                    {aboutMe.aboutSecondaryCTA.text}{" "}
                    <i
                      className={`${aboutMe.aboutSecondaryCTA.icon} text-2xl align-middle`}
                    ></i>
                  </Button>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        <JourneyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  },
);

AboutSection.displayName = "AboutSection";

export default AboutSection;
