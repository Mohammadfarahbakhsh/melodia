
"use client";

import { useState } from "react";

const options = [
  { id: 1, label: "موسیقی" },
  { id: 5, label: "پادکست" },
  { id: 2, label: "جهان" },
  { id: 3, label: "ایران" },
  { id: 4, label: "همه" },
];

const Options = () => {
  const [activeOption, setActiveOption] = useState(4);

  return (
    <section dir="rtl" className="w-full px-4 py-4 sm:px-6">
      <div className="flex w-full items-center gap-2 overflow-x-auto scrollbar-hide">
        {options.map((option) => {
          const isActive = activeOption === option.id;

          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveOption(option.id)}
              className={`
                relative flex h-10 shrink-0 items-center justify-center
                rounded-full border px-5 text-sm font-medium
                whitespace-nowrap outline-none
                transition-all duration-200 ease-out
                focus-visible:ring-2 focus-visible:ring-[#98EF00]
                focus-visible:ring-offset-2
                dark:focus-visible:ring-offset-[#131316]
                ${
                  isActive
                    ? "border-[#98EF00] bg-[#98EF00] text-black shadow-[0_3px_14px_rgba(152,239,0,0.18)]"
                    : "border-zinc-200 bg-white text-zinc-600 hover:border-[#98EF00]/60 hover:bg-[#98EF00]/10 hover:text-zinc-900 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-300 dark:hover:border-[#98EF00]/40 dark:hover:bg-[#98EF00]/[0.07] dark:hover:text-white"
                }
              `}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Options;
