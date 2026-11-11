"use client";

import {
  Home,
  Library,
  Plus,
  Search,
  Users,
  LogIn,
  Music2,
  X,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useMobile } from "@/app/hooks/useMobile";
import Button from "@/components/base/buttons/button";

import MobileSidebar from "../sideBar/MobileSidebar";
import Card from "../card/card";

const MobileNavItem = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`group flex items-center gap-3 rounded-2xl px-3 py-3 transition-all duration-200 ${
        isActive
          ? "bg-[#98EF00]/10 text-[#98EF00]"
          : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
      }`}
    >
      <span
        className={`flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
          isActive
            ? "bg-[#98EF00] text-black"
            : "bg-zinc-100 dark:bg-white/5 group-hover:bg-[#98EF00]/10 group-hover:text-[#98EF00]"
        }`}
      >
        {icon}
      </span>

      <span className="text-sm font-medium">{label}</span>

      {isActive && (
        <span className="mr-auto size-1.5 rounded-full bg-[#98EF00]" />
      )}
    </Link>
  );
};

const Header = () => {
  const isMobile = useMobile();
  const isLogin = false;

  const [showCard, setShowCard] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const HandelOpenCard = useCallback(() => setShowCard(true), []);
  const HandelCloseCard = useCallback(() => setShowCard(false), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!showCard) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        HandelCloseCard();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showCard, HandelCloseCard]);

  return (
    <>
      <header
        dir="rtl"
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-zinc-200/70 bg-white/85 shadow-sm backdrop-blur-2xl dark:border-white/[0.06] dark:bg-[#131316]/85"
            : "border-b border-transparent bg-white/60 backdrop-blur-xl dark:bg-[#131316]/50"
        }`}
      >
        <div className="mx-auto flex min-h-[68px] w-full items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          {/* لوگو و برند */}
          <Link
            href="/"
            aria-label="صفحه اصلی ملودیا"
            className="group flex shrink-0 items-center gap-2.5"
          >
            <div className="flex size-10 items-center justify-center rounded-2xl bg-[#98EF00]/10 transition-colors duration-300 group-hover:bg-[#98EF00]/20">
              <Image
                src="/LabelMelodia.svg"
                width={32}
                height={32}
                alt="ملودیا"
                className="size-8 object-contain"
                priority
              />
            </div>

            <div className="hidden sm:block">
              <span className="block text-base font-extrabold tracking-tight text-zinc-900 dark:text-white">
                ملودیا
              </span>
              <span className="mt-0.5 block text-[10px] text-zinc-500 dark:text-zinc-400">
                موسیقی رو جور دیگه‌ای تجربه کن
              </span>
            </div>
          </Link>

          {/* جستجو */}
          {!isMobile && (
            <div className="mx-auto w-full max-w-md px-3 lg:max-w-xl">
              <label className="group relative flex items-center">
                <Search
                  size={19}
                  className="pointer-events-none absolute right-4 text-zinc-400 transition-colors group-focus-within:text-[#98EF00]"
                />

                <input
                  dir="rtl"
                  type="search"
                  placeholder="چی دوست داری گوش کنی؟"
                  aria-label="جستجوی موسیقی"
                  className="h-11 w-full rounded-2xl border border-zinc-200/80 bg-zinc-100/70 pr-11 pl-4 text-sm text-zinc-900 outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-300 focus:border-[#98EF00]/70 focus:bg-white focus:ring-4 focus:ring-[#98EF00]/10 dark:border-white/[0.07] dark:bg-white/[0.035] dark:text-white dark:hover:border-white/15 dark:focus:bg-white/[0.05]"
                />
              </label>
            </div>
          )}

          {/* اکشن‌های دسکتاپ */}
          <div className="hidden shrink-0 items-center gap-2 md:flex lg:gap-3">
            <Link href="/Library">
              <Button
                variant="outline"
                className="flex h-10 items-center gap-2 rounded-xl border-zinc-200 px-4 text-sm transition-colors hover:border-[#98EF00]/50 hover:bg-[#98EF00]/5 dark:border-white/10"
              >
                <Library size={17} />
                کتابخانه
              </Button>
            </Link>

            <button
              type="button"
              onClick={HandelOpenCard}
              aria-label="افزودن مورد جدید"
              className="group flex h-10 items-center gap-2 rounded-xl bg-[#98EF00] px-4 text-sm font-semibold text-black shadow-[0_3px_14px_rgba(152,239,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(152,239,0,0.25)] active:translate-y-0"
            >
              <Plus
                size={19}
                strokeWidth={2.5}
                className="transition-transform duration-200 group-hover:rotate-90"
              />
              افزودن
            </button>

            {isLogin ? (
              <Link
                href="/profile"
                aria-label="پروفایل کاربری"
                className="flex size-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-600 transition-colors hover:border-[#98EF00]/50 hover:text-[#98EF00] dark:border-white/10 dark:text-zinc-300"
              >
                <Users size={19} />
              </Link>
            ) : (
              <Link href="/auth">
                <Button
                  variant="contained"
                  className="h-10 rounded-xl bg-zinc-900 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                >
                  ورود
                </Button>
              </Link>
            )}
          </div>

          {/* موبایل */}
          <div className="flex shrink-0 items-center gap-2 md:hidden">
            {isMobile && (
              <Link
                href="/search"
                aria-label="جستجو"
                className="flex size-10 items-center justify-center rounded-xl border border-zinc-200/80 bg-zinc-100/70 text-zinc-600 transition-colors hover:text-[#78B900] dark:border-white/[0.07] dark:bg-white/[0.035] dark:text-zinc-300"
              >
                <Search size={19} />
              </Link>
            )}

            <MobileSidebar>
              <div
                dir="rtl"
                className="flex h-full flex-col bg-white text-zinc-900 dark:bg-[#17171B] dark:text-white"
              >
                

                {/* جستجو */}
                <div className="px-4 pt-5">
                  <Link
                    href="/search"
                    className="flex items-center gap-3 rounded-xl bg-zinc-100 px-4 py-3 text-sm text-zinc-500 dark:bg-white/[0.04] dark:text-zinc-400"
                  >
                    <Search size={18} />
                    جستجوی موسیقی
                  </Link>
                </div>

                {/* لینک‌ها */}
                <nav
                  aria-label="منوی اصلی"
                  className="flex flex-col gap-1 px-3 pt-5"
                >
                  <p className="mb-2 px-3 text-[11px] font-semibold text-zinc-400">
                    منوی اصلی
                  </p>

                  <MobileNavItem
                    href="/"
                    label="خانه"
                    icon={<Home size={19} />}
                  />

                  <MobileNavItem
                    href="/search"
                    label="جستجو"
                    icon={<Search size={19} />}
                  />

                  <MobileNavItem
                    href="/library"
                    label="کتابخانه و پادکست"
                    icon={<Library size={19} />}
                  />
                </nav>

                <div className="mx-5 my-5 h-px bg-zinc-200 dark:bg-white/[0.07]" />

                {/* اکشن‌های پایین منو */}
                <div className="mt-auto space-y-3 px-4 pb-6">
                  {!isLogin && (
                    <Link href="/auth" className="block">
                      <div className="flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-200 text-sm font-medium transition-colors hover:border-[#98EF00]/60 hover:bg-[#98EF00]/5 dark:border-white/10">
                        <LogIn size={18} />
                        ورود به حساب
                      </div>
                    </Link>
                  )}

                  <button
                    type="button"
                    onClick={HandelOpenCard}
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#98EF00] text-sm font-semibold text-black transition-all hover:bg-[#8BDD00] active:scale-[0.98]"
                  >
                    <Plus size={19} strokeWidth={2.5} />
                    افزودن مورد جدید
                  </button>
                </div>
              </div>
            </MobileSidebar>
          </div>
        </div>

        {/* خط تأکیدی پایین هدر */}
        <div
          className={`h-px transition-opacity duration-300 ${
            isScrolled
              ? "bg-gradient-to-l from-transparent via-[#98EF00]/40 to-transparent opacity-100"
              : "bg-gradient-to-l from-transparent via-[#98EF00]/20 to-transparent opacity-70"
          }`}
        />
      </header>

      {/* مودال افزودن */}
      {showCard &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            dir="rtl"
            role="presentation"
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={HandelCloseCard}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="افزودن مورد جدید"
              className="relative w-full max-w-lg animate-in fade-in zoom-in-95 duration-200"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={HandelCloseCard}
                aria-label="بستن پنجره"
                className="absolute -top-3 -left-3 z-10 flex size-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-lg transition-colors hover:text-red-500 dark:border-white/10 dark:bg-[#222226] dark:text-zinc-300"
              >
                <X size={18} />
              </button>

              <Card />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default Header;
