"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();
  const isLoggedIn = true;

  const handleClick = () => {
    router.push(isLoggedIn ? "/home" : "");
  };

  return (
    <div
      className= "relative min-h-screen overflow-hidden bg-[#0a0a0a] flex flex-col items-center justify-between py-14 px-6"
    >
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-105 w-105 rounded-full bg-[#98EF00]/10 blur-[120px]" />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex h-40 items-end justify-center gap-0.75 opacity-[0.12]"
        aria-hidden="true"
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="w-1 rounded-t-full bg-[#98EF00] animate-eq motion-reduce:animate-none"
            style={{
              height: `${20 + Math.abs(Math.sin(i * 0.8)) * 70}px`,
              animationDelay: `${i * 0.07}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 pt-8">
        <Image
          src="/LabelMelodia.svg"
          width={140}
          height={140}
          alt="لوگوی ملودیا"
          priority
          className="drop-shadow-[0_0_35px_rgba(152,239,0,0.35)] animate-fade-in"
        />

        <h1 className="text-5xl font-black text-[#98EF00] tracking-wide">
          ملودیا
        </h1>

        <p className="text-lg text-zinc-400">
                 موسیقی رو جور دیگه‌ای تجربه کن
        </p>

        <div className="mt-2 h-px w-32 shadow-[#98EF00] shadow-2xs bg-[#98EF00]
        
        
        
        " />
        
      </div>

      <button
        onClick={handleClick}
        className="
          group relative z-10 flex items-center gap-3
          rounded-full border border-[#6AA300] bg-zinc-950/80
          px-9 py-4 text-lg font-semibold text-[#98EF00]
          shadow-[0_0_25px_rgba(152,239,0,0.15)]
          backdrop-blur transition-all duration-300
          hover:border-[#98EF00] hover:bg-zinc-900
          hover:shadow-[0_0_35px_rgba(152,239,0,0.3)] hover:scale-[1.03]
          active:scale-95 focus-visible:outline-2
          focus-visible:outline-offset-2 focus-visible:outline-[#98EF00]
        "
      >
        <span>بزن بریم</span>
        <ArrowLeft
          size={22}
          className="text-[#98EF00] transition-transform duration-300 group-hover:-translate-x-2"
        />
      </button>
    </div>
  );
};

export default Landing;