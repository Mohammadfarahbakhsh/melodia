"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Github } from "@/public/icons/github";
import Google from "@/public/icons/google";

const EQ_HEIGHTS = [14, 26, 18, 32, 20, 28, 16];

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<"github" | "google" | null>(null);

  const handleLogin = (provider: "github" | "google") => {
    setLoading(provider);
    const success = true;

    if (!success) {
      console.log("error");
      setLoading(null);
      return;
    }

    router.push("/home");
  };

  return (
    <div
      dir="rtl"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6
      bg-linear-to-b from-[#EAF6D2] via-[#F7FAF0] to-white
      dark:from-[#4B7600] dark:via-[#1E2413] dark:to-[#0D0E0A]"
    >
      <div
        className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-[120px]
        bg-[#98EF00] opacity-[0.18] dark:opacity-[0.12]"
      ></div>

      <div className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 flex items-end gap-1.5 opacity-40 dark:opacity-30 motion-reduce:hidden">
        {EQ_HEIGHTS.map((h, i) => {
          const style = {
            height: h + "px",
            animationDelay: i * 0.12 + "s",
          };
          return (
            <span
              key={i}
              className="w-1 rounded-full bg-[#5B8A00] dark:bg-[#98EF00] animate-eq"
              style={style}
            ></span>
          );
        })}
      </div>

      <div className="relative flex w-full max-w-sm flex-col items-center gap-8 py-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <Image
            src="/LabelMelodia.svg"
            height={88}
            width={88}
            alt="لوگوی ملودیا"
            className="drop-shadow-[0_0_24px_rgba(91,138,0,0.2)] dark:drop-shadow-[0_0_24px_rgba(152,239,0,0.25)]"
            priority
          />
          <h1 className="text-3xl font-bold text-[#131316] dark:text-white">
            خوش آمدید!
          </h1>
          <h2 className="text-sm leading-7 text-[#131316]/70 dark:text-white/70 max-w-[280px]">
            جهت ورود یا ثبت‌نام در ملودیا، شماره موبایل یا ایمیل خود را وارد کنید
          </h2>
        </div>

        <div className="h-px w-40 bg-linear-to-r from-transparent via-[#5B8A00]/50 dark:via-[#98EF00]/60 to-transparent"></div>

        <div className="flex w-full flex-col gap-3">
          <button
            type="button"
            onClick={() => handleLogin("google")}
            disabled={loading !== null}
            className="group flex items-center justify-center gap-3 rounded-xl bg-[#98EF00] px-7 py-3.5 font-medium text-[#0D0E0A]
            transition-all hover:brightness-95 hover:scale-[1.01] active:scale-[0.99]
            disabled:opacity-60 disabled:pointer-events-none
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8A00] dark:focus-visible:ring-[#98EF00]
            focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0D0E0A]"
          >
            {loading === "google" ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0D0E0A]/30 border-t-[#0D0E0A]"></span>
            ) : (
              <Google />
            )}
            <span>ورود با گوگل</span>
          </button>

          <button
            type="button"
            onClick={() => handleLogin("github")}
            disabled={loading !== null}
            className="group flex items-center justify-center gap-3 rounded-xl px-7 py-3.5 font-medium
            border border-[#131316]/15 bg-white text-[#131316] shadow-sm
            dark:border-white/15 dark:bg-white/5 dark:text-white dark:backdrop-blur-sm dark:shadow-none
            transition-all hover:bg-[#131316]/[0.03] dark:hover:bg-white/10 hover:scale-[1.01] active:scale-[0.99]
            disabled:opacity-60 disabled:pointer-events-none
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#131316]/30 dark:focus-visible:ring-white/40
            focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0D0E0A]"
          >
            {loading === "github" ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#131316]/30 dark:border-white/30 border-t-[#131316] dark:border-t-white"></span>
            ) : (
              <Github />
            )}
            <span>ورود با گیت‌هاب</span>
          </button>
        </div>

        <p className="text-xs leading-6 text-[#131316]/50 dark:text-white/50 max-w-[280px] text-center">
          با ثبت‌نام در ملودیا با شرایط و قوانین موافقت می‌کنم
        </p>
      </div>
    </div>
  );
};

export default Login;