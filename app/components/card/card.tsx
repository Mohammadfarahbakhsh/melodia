import { Music, Podcast } from "lucide-react";
import Link from "next/link";

const Card = () => {
  return (
    <div
      dir="rtl"
      className="flex items-center justify-center bg-neutral-950 p-6"
    >
      <div className="w-full max-w-md rounded-2xl border border-[#6AA300]/40 bg-gradient-to-b from-[#0d1400] to-black p-8 shadow-[0_0_40px_-12px_rgba(106,163,0,0.35)]">
        <div className="flex items-center justify-center gap-5">
          <Link href="/Upload-music">
          <button
            type="button"
            className="group flex flex-1 flex-col items-center gap-2 rounded-xl border border-transparent px-4 py-5 transition-all duration-200 hover:border-[#6AA300]/50 hover:bg-[#6AA300]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6AA300]"
          >
            <Music
              className="h-6 w-6 text-[#6AA300] transition-transform duration-200 group-hover:scale-110"
              strokeWidth={1.75}
            />
              <span className="text-sm font-medium whitespace-nowrap text-[#6AA300]">
                اضافه کردن موسیقی
              </span>
          </button>
            </Link>

          <span className="h-12 w-px bg-[#6AA300]/25" aria-hidden="true" />

          <Link href="/Upload-podcast">
          <button
            type="button"
            className="group flex flex-1 flex-col items-center gap-2 rounded-xl border border-transparent px-4 py-5 transition-all duration-200 hover:border-[#6AA300]/50 hover:bg-[#6AA300]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6AA300]"
          >
            <Podcast
              className="h-6 w-6 text-[#6AA300] transition-transform duration-200 group-hover:scale-110"
              strokeWidth={1.75}
            />
              <span className="text-sm font-medium text-[#6AA300]">
                اضافه کردن پادکست
              </span>
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
