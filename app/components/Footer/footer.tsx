import Link from "next/link";

import React from "react";
import ThemeToggle from "../theme/ThemeToggle";
import { Plus } from "lucide-react";

const Footer = () => {
  return (
    <div className="pl-5 pr-5">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#98EF00] to-transparent" />
        <div className="flex justify-end pt-5 gap-5">
          <Link href="/Info">
            <h2> درباره ما</h2>
          </Link>

          <ThemeToggle />
        </div>

    </div>
  );
};

export default Footer;
