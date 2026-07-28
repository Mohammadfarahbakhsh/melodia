import Link from "next/link";

import React from "react";
import ThemeToggle from "../theme/ThemeToggle";
import { Plus } from "lucide-react";

const Footer = () => {
  return (
    <div className="pl-5 pr-5">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#98EF00] to-transparent" />
      <div className="flex justify-between items-center pt-4">
        <div className="pl-5">
          <button
            className="
      group
      flex
      items-center
      justify-center
        p-2

      rounded-full

      bg-[#98EF00]
      text-black

      shadow-[0_0_25px_rgba(152,239,0,0.45)]

      transition-all
      duration-300

      hover:scale-110
      hover:rotate-90
      hover:shadow-[0_0_40px_rgba(152,239,0,0.7)]

      active:scale-95
    "
          >
            <Plus
              size={30}
              strokeWidth={2.8}
              className="transition-transform duration-300"
            />
          </button>
        </div>
        <div className="flex gap-5">
          <Link href="/Info">
            <h2> درباره ما</h2>
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Footer;
