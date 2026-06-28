import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Landing = () => {
    return (
            <div className="min-h-screen bg-gradient-to-b from-[#4B7600] to-[#131316] flex flex-col items-center justify-between py-14">

      {/* Logo */}
      <div className="flex flex-col items-center gap-6 animate-fade-in">
        <Image
          src="/LabelMelodia.svg"
          width={150}
          height={150}
          alt="لوگوی ملودیا"
          className="drop-shadow-2xl animate-pulse"
        />

        <h1 className="text-5xl font-bold text-white tracking-wide">
          ملودیا
        </h1>

        <p className="text-zinc-300 text-lg">
          موسیقی رو جور دیگه‌ای تجربه کن
        </p>
      </div>

      {/* Button */}
      <Link href="/home">
        <button
          className="
            group
            flex
            items-center
            gap-3
            rounded-full
            bg-[#6AA300]
            px-8
            py-4
            text-lg
            font-semibold
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:scale-105
            hover:bg-[#79B800]
            hover:shadow-green-500/40
            active:scale-95
          "
        >
          بزن بریم

          <ArrowLeft
            className="
              transition-transform
              duration-300
              group-hover:-translate-x-2
            "
          />
        </button>
      </Link>

    </div>
    );
}

export default Landing;
