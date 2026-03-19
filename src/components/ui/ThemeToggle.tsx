"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./Button";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // On mount, read from class on html. The inline script handles initial state.
    setIsDark(document.documentElement.classList.contains("dark"));
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
    <Button variant="ghost" className="px-3 py-2" onClick={toggleTheme} title="Toggle Theme" aria-label="Toggle Theme">
      {isDark ? <Sun className="h-5 w-5 text-secondary" /> : <Moon className="h-5 w-5 text-secondary" />}
    </Button>
  );
}
