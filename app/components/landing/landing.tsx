"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();
  const Login=false
  const handleClick = () => {
    if (Login) {
      router.push("/home");
    } else {
      router.push("/auth");
    }
  };
  return (
    <div className="min-h-screen bg-linear-to-b from-[#4B7600] to-[#131316] flex flex-col items-center justify-between py-14">
      <div className="flex flex-col items-center gap-6 animate-fade-in">
        <Image
          src="/LabelMelodia.svg"
          width={150}
          height={150}
          alt="لوگوی ملودیا"
          className="drop-shadow-2xl animate-pulse"
        />

        <h1 className="text-5xl font-bold text-white tracking-wide">ملودیا</h1>

        <p className="text-zinc-300 text-lg">موسیقی رو جور دیگه‌ای تجربه کن</p>
      </div>

      {/* Button */}
      <button
        onClick={handleClick}
        className="
      group
      flex
      items-center
      gap-3

      rounded-full

      border
      border-[#6AA300]

      bg-zinc-950

      px-8
      py-4

      text-lg
      font-semibold
      text-[#6AA300]

      shadow-lg

      transition-all
      duration-300

      hover:border-[#6AA300]
      hover:bg-zinc-900
      hover:scale-105

      active:scale-95
    "
      >
        <span>بزن بریم</span>

        <ArrowLeft
          size={22}
          className="
        text-[#7ED321]
        transition-transform
        duration-300
        group-hover:-translate-x-2
      "
        />
      </button>
    </div>
  );
};

export default Landing;
