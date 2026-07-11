"use client";

import Image from "next/image";
import { Star } from "phosphor-react";
import Button from "../ui/Button";
import SubHeadingContainer from "../ui/SubHeadingContainer";
import Typewriter from "../ui/Typewriter";
import aboutData from "@/config/user-data/about";
import { forwardRef, Ref } from "react";
import { highlightText } from "@/helpers/text-helper";
import { Reveal, Stagger, StaggerItem, TextReveal } from "../motion/Reveal";

const HeroSection = forwardRef<HTMLElement, { portfolioForJob: boolean }>(
  ({ portfolioForJob }, ref: Ref<HTMLElement>) => {
    const { showCurtain, topText, highlightsFromTopText, hero, title, name } =
      aboutData;
    const firstName = name.split(" ")[0];
    const roles = hero.roles && hero.roles.length > 0 ? hero.roles : [title];

    return (
      <section
        className="relative pt-20 md:pt-16 min-h-dvh flex flex-col justify-center"
        id="home"
        ref={ref}
      >
        {showCurtain && (
          <>
            {/* Left Curtain */}
            <div className="absolute left-0 md:-top-65 lg:-top-50 -top-80 w-1/3 h-dvh opacity-30 md:opacity-50">
              <Image
                src="/left-curtain.svg"
                alt="Left decorative curtain"
                fill
                className="object-fill"
              />
            </div>
            {/* Right Curtain */}
            <div className="absolute right-0 md:-top-65 lg:-top-50 -top-80 w-1/3 h-dvh opacity-30 md:opacity-50">
              <Image
                src="/right-curtain.svg"
                alt="Right decorative curtain"
                fill
                className="object-fill"
              />
            </div>
          </>
        )}

        <div className="container mx-auto px-2 relative z-10 my-4 md:my-8">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 max-w-6xl mx-auto">
            {/* Text */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8">
              {/* Trust Badge */}
              {topText && (
                <Reveal delay={0.05}>
                  <SubHeadingContainer>
                    {portfolioForJob ? (
                      <div className="flex items-center justify-center gap-2">
                        <span className="p-1 bg-green-500 rounded-full"></span>
                        <p className="tracking-wider">
                          {highlightText(
                            topText,
                            "text-green-500",
                            highlightsFromTopText,
                          )}
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2 relative justify-center">
                        <span className="hidden md:inline-block py-1 px-2 rounded-full bg-white">
                          <Star
                            weight="fill"
                            className="w-4 h-4 text-yellow-500"
                          />
                        </span>

                        <Star
                          weight="fill"
                          className="text-yellow-500 w-5 h-5"
                        />

                        <div className="md:hidden absolute -top-5 flex text-yellow-500 text-lg">
                          <Star weight="fill" />
                          <Star weight="fill" />
                        </div>

                        {highlightText(
                          topText,
                          "text-green-500",
                          highlightsFromTopText,
                        )}
                      </div>
                    )}
                  </SubHeadingContainer>
                </Reveal>
              )}

              {/* Greeting */}
              <Reveal delay={0.16}>
                <div className="leading-tight text-3xl md:text-4xl lg:text-5xl font-bold">
                  <p>
                    Hi, I&apos;m{" "}
                    <span className="text-primary">{firstName}</span>
                  </p>
                  <p className="mt-1">
                    and I&apos;m a{" "}
                    <Typewriter words={roles} className="text-primary" />
                  </p>
                </div>
              </Reveal>

              {/* Subheading */}
              <Reveal delay={0.26}>
                <p className="md:text-xl font-serif text-black-light max-w-xl">
                  <TextReveal text={hero.heroPara} delay={0.24} />
                </p>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal delay={0.34}>
                <Stagger className="flex justify-center md:justify-start gap-4">
                  {hero.primaryCtaText && hero.primaryCtaLink && (
                    <StaggerItem>
                      <a
                        href={hero.primaryCtaLink}
                        download
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary">{hero.primaryCtaText}</Button>
                      </a>
                    </StaggerItem>
                  )}
                </Stagger>
              </Reveal>
            </div>

            {/* Circular Photo */}
            <Reveal delay={0.1} className="flex-shrink-0">
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-primary/15 ring-4 ring-primary/30 overflow-hidden shadow-xl">
                <Image
                  src="/photo-gallery/my-picture.png"
                  alt={`Photo of ${name}`}
                  fill
                  sizes="(max-width: 768px) 15rem, 24rem"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    );
  },
);

HeroSection.displayName = "HeroSection";
export default HeroSection;
