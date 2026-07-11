"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "phosphor-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:bg-primary-light hover:text-primary"
    >
      {isDark ? (
        <Sun size={18} weight="bold" />
      ) : (
        <Moon size={18} weight="bold" />
      )}
    </button>
  );
}
