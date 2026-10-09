"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Button } from "./Button";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // On mount, read from class on html. The inline script handles initial state.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount-only sync of external theme state
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Button variant="ghost" className="p-2 min-h-0 min-w-0" onClick={toggleTheme} aria-label="Toggle Theme">
      <span className="grid h-5 w-5 place-items-center">
        {!mounted ? null : isDark ? <FiSun className="h-5 w-5 text-secondary" /> : <FiMoon className="h-5 w-5 text-secondary" />}
      </span>
    </Button>
  );
}
