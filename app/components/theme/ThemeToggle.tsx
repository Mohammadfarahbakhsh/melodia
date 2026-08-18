"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const base =
    "flex h-5 w-5 items-center justify-center rounded-lg transition-all duration-200";

  const active = "bg-zinc-900 text-white dark:bg-white dark:text-black";

  const inactive =
    "text-zinc-500 hover:bg-zinc-100 hover:text-black dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white";

  if (!mounted) {
    // یه اسکلتون ساده تا وقتی مقدار واقعی تم مشخص بشه
    return (
      <div className="flex items-center gap-1 rounded-xl border p-1 border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 h-7 w-[92px]" />
    );
  }

  return (
    <div className="flex items-center gap-1 rounded-xl border p-1 border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <button
        onClick={() => setTheme("light")}
        className={`${base} ${theme === "light" ? active : inactive}`}
        aria-label="Light mode"
      >
        <Sun size={15} />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`${base} ${theme === "dark" ? active : inactive}`}
        aria-label="Dark mode"
      >
        <Moon size={15} />
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`${base} ${theme === "system" ? active : inactive}`}
        aria-label="System mode"
      >
        <Monitor size={15} />
      </button>
    </div>
  );
};

export default ThemeToggle;