"use client";
import { Home, Library, Search, Users } from "lucide-react";
import Link from "next/link";
import { useMobile } from "@/app/hooks/useMobile";
import Button from "@/app/base/buttons/button";
import Image from "next/image";
import MobileSidebar from "../sideBar/MobileSidebar";

const MobileNavItem = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) => (
  <Link href={href} className="block">
    <div className="flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 group hover:bg-white/5 active:scale-[0.98]">
      <span className="text-white/60 text-base font-medium group-hover:text-[#98EF00] transition-colors duration-300 pr-1">
        {label}
      </span>
      <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-[#98EF00]/10 transition-all duration-300">
        <div className="text-white/50 group-hover:text-[#98EF00] transition-all duration-300 group-hover:drop-shadow-[0_0_6px_#98EF0099]">
          {icon}
        </div>
      </div>
    </div>
  </Link>
);
const Header = () => {
  const isMobile = useMobile();
  const isLogin: boolean = false;
  return (
    <div className="relative">
      <div className="relative flex justify-between items-center px-8 py-5 backdrop-blur-md ">
        {!isMobile && (
          <div className="flex items-center gap-1">
            {!isLogin ? (
              <Link href="/auth">
                <Button
                  variant="contained"
                  className="text-[13px] p-1 pr-7 pl-7  whitespace-nowrap"
                >
                  ورود
                </Button>
              </Link>
            ) : (
              <Users size={19} />
            )}
          </div>
        )}

        <div className="flex items-center gap-7">
          <input
            dir="rtl"
            className="p-3 rounded-2xl border border-[#98EF00] pr-5 pl-20 text-right w-full min-w-[320px]
    focus:outline-none focus:ring-2 focus:ring-[#98EF00] focus:border-[#98EF00]"
            type="text"
            placeholder="چه چیزی میخواهید گوش کنید"
          />
          <Link href="/" className="group select-none">
            <Image
              src="/LabelMelodia.svg"
              width={37}
              height={37}
              alt="لوگوی ملودیا"
            />
          </Link>
        </div>

        {isMobile && (
          <MobileSidebar>
            <div className="flex flex-col gap-1 px-3 py-5">
              <div className="px-4 pb-4 mb-2 border-b border-white/5">
                <p className="text-[#98EF00]/60 text-xs tracking-widest uppercase font-medium">
                  منو
                </p>
              </div>

              <MobileNavItem href="/" label="خانه" icon={<Home size={19} />} />
              <MobileNavItem href="" label="سرچ" icon={<Search size={19} />} />
              <MobileNavItem
                href=""
                label="پروفایل"
                icon={<Users size={19} />}
              />
              <MobileNavItem
                href="./Library"
                label="کتابخانه"
                icon={<Library size={19} />}
              />
            </div>
          </MobileSidebar>
        )}
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#98EF00] to-transparent" />
      
    </div>
  );
};

export default Header;
