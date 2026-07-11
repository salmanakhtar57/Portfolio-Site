"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/helpers/merge-helper";

interface TypewriterProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const Typewriter = ({
  words,
  className,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1500,
}: TypewriterProps) => {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    if (!isDeleting && text === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, pauseDuration / 3);
      return () => clearTimeout(timeout);
    }

    const nextText = isDeleting
      ? currentWord.slice(0, text.length - 1)
      : currentWord.slice(0, text.length + 1);

    const timeout = setTimeout(
      () => setText(nextText),
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    reduceMotion,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  if (words.length === 0) return null;

  if (reduceMotion) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className={cn("inline-flex items-center", className)}>
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-current align-middle" />
    </span>
  );
};

export default Typewriter;
