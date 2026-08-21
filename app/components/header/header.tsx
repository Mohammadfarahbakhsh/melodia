"use client";
import { Home, Library, Plus, Search, Users, LogIn } from "lucide-react";
import Link from "next/link";
import { useMobile } from "@/app/hooks/useMobile";
import Button from "@/app/components/base/buttons/button";
import Image from "next/image";
import MobileSidebar from "../sideBar/MobileSidebar";
import Card from "../card/card";
import { createPortal } from "react-dom";
import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";

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
    <Link href={href} className="block">
      <div
        className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group active:scale-[0.98] ${
          isActive
            ? "bg-[#98EF00]/10 shadow-[0_0_20px_rgba(152,239,0,0.15)]"
            : "hover:bg-white/5"
        }`}
      >
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 shrink-0 ${
            isActive
              ? "bg-[#98EF00] text-black"
              : "bg-white/5 text-white/50 group-hover:bg-[#98EF00]/10 group-hover:text-[#98EF00]"
          }`}
        >
          {icon}
        </div>
        <span
          className={`text-[15px] font-medium transition-colors duration-300 ${
            isActive
              ? "text-[#98EF00]"
              : "text-white/70 group-hover:text-white"
          }`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Header = () => {
  const isMobile = useMobile();
  const isLogin: boolean = false;
  const [showCard, setShowCard] = useState(false);
  const HandelOpenCard = useCallback(() => setShowCard(true), []);
  const HandelCloseCard = useCallback(() => setShowCard(false), []);

  return (
    <div className="relative">
      <div className="relative flex justify-between items-center gap-3 md:gap-5 px-3 sm:px-5 md:px-8 py-3 md:py-5 backdrop-blur-md">
        <div className="hidden md:flex items-center gap-5 order-1">
          {!isLogin ? (
            <Link href="/auth">
              <Button
                variant="contained"
                className="text-[13px] p-1 pr-7 pl-7 whitespace-nowrap"
              >
                ورود
              </Button>
            </Link>
          ) : (
            <Users size={19} />
          )}
          <Link href="/library">
            <Button className="p-1 pr-7 pl-7 whitespace-nowrap" variant="outline">
              پادکست/کتابخانه
            </Button>
          </Link>
          <button
            onClick={HandelOpenCard}
            className="
              group flex items-center justify-center p-2 rounded-full
              bg-[#98EF00] text-black
              shadow-[0_0_25px_rgba(152,239,0,0.45)]
              transition-all duration-300
              hover:scale-110 hover:rotate-90 hover:shadow-[0_0_40px_rgba(152,239,0,0.7)]
              active:scale-95
            "
          >
            <Plus size={24} strokeWidth={2.8} className="transition-transform duration-300" />
          </button>
        </div>

        {/* مودال کارت */}
        {showCard &&
          typeof document !== "undefined" &&
          createPortal(
            <div
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4"
              onClick={HandelCloseCard}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <Card />
              </div>
            </div>,
            document.body,
          )}

        <div className="flex items-center gap-3 sm:gap-5 md:gap-7 order-3 md:order-2 w-full md:w-auto">
          {!isMobile && (
            <div className="relative min-w-8/12 md:flex-none">
              <input
                dir="rtl"
                className="p-2.5 sm:p-3 rounded-2xl border border-[#98EF00] pr-4 sm:pr-5 pl-4 text-right w-full md:min-w-[280px] lg:min-w-[320px]
                text-sm sm:text-base
                focus:outline-none focus:ring-2 focus:ring-[#98EF00] focus:border-[#98EF00]"
                type="text"
                placeholder="چه چیزی میخواهید گوش کنید"
              />
            </div>
          )}

          <Link href="/" className="group select-none shrink-0">
            <Image
              src="/LabelMelodia.svg"
              width={40}
              height={40}
              alt="لوگوی ملودیا"
              className="w-8 h-8 sm:w-9 sm:h-9"
            />
          </Link>
        </div>

        {/* دکمه موبایل منو */}
        <div className="flex md:hidden items-center order-2">
          <MobileSidebar>
            <div className="flex flex-col h-full">
              {/* هدر منو */}
              <div className="px-4 pb-4 mb-2 border-b border-white/5">
                <p className="text-[#98EF00]/60 text-xs tracking-widest uppercase font-medium">
                  منو
                </p>
              </div>

              {/* آیتم‌های ناوبری */}
              <div className="flex flex-col gap-1 px-3">
                <MobileNavItem href="/" label="خانه" icon={<Home size={19} />} />
                <MobileNavItem href="/search" label="سرچ" icon={<Search size={19} />} />
                <MobileNavItem href="/library" label="کتابخانه/پادکست" icon={<Library size={19} />} />
              </div>

              {/* جداکننده */}
              <div className="mx-4 my-4 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

              {/* بخش پایینی: ورود + افزودن */}
              <div className="flex flex-col gap-3 px-4 mt-auto pb-4">
                {!isLogin && (
                  <Link href="/auth" className="block">
                    <div className="flex items-center justify-center gap-2 py-3 rounded-2xl border border-[#98EF00]/30 text-[#98EF00] font-medium text-sm transition-all duration-300 hover:bg-[#98EF00]/10 active:scale-[0.98]">
                      <LogIn size={17} />
                      ورود به حساب
                    </div>
                  </Link>
                )}

                <button
                  onClick={HandelOpenCard}
                  className="
                    flex items-center justify-center gap-2 py-3 rounded-2xl
                    bg-[#98EF00] text-black font-semibold text-sm
                    shadow-[0_0_20px_rgba(152,239,0,0.3)]
                    transition-all duration-300
                    hover:shadow-[0_0_30px_rgba(152,239,0,0.5)]
                    active:scale-[0.98]
                  "
                >
                  <Plus size={19} strokeWidth={2.8} />
                  افزودن
                </button>
              </div>
            </div>
          </MobileSidebar>
        </div>
      </div>

      <div className="h-px w-full bg-linear-to-r from-transparent via-[#98EF00] to-transparent" />
    </div>
  );
};

export default Header;