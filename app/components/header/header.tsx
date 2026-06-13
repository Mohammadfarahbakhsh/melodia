"use client"
import { Home, Info, Library, Search, Users } from 'lucide-react';
import Link from 'next/link';
import { Github } from '../../../public/icons/github';
import { useMobile } from '@/app/hooks/useMobile';
import MobileSidebar from '../sideBar/MobileSidebar';

const NavIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="group relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 hover:bg-white/5">
    <div className="text-white/50 group-hover:text-[#98EF00] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_#98EF0088]">
      {children}
    </div>
    <span className="absolute inset-0 rounded-xl ring-0 group-hover:ring-1 ring-[#98EF00]/20 transition-all duration-300" />
  </Link>
);

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

  return (
    <header className="relative">
      {/* Glass bar */}
      <div className="relative flex justify-between items-center px-8 py-5 backdrop-blur-md bg-black/30">

        {/* Left — social links (desktop) */}
        {!isMobile && (
          <div className="flex items-center gap-1">
            <NavIcon href="">
              <Users size={19} />
            </NavIcon>
            <NavIcon href="">
              <Github />
            </NavIcon>
            <NavIcon href="/Info">
              <Info/>
            </NavIcon>
          </div>
        )}

        {/* Logo */}
        <Link href="/" className="group select-none">
          <h1 className="text-white text-4xl tracking-wide font-semibold transition-all duration-500 group-hover:text-[#98EF00] group-hover:drop-shadow-[0_0_18px_#98EF0099]">
            ملودیا
          </h1>
        </Link>

        {/* Right — nav icons (desktop) */}
        {!isMobile && (
          <div className="flex items-center gap-1">
            <NavIcon href="./Library">
              <Library size={19} />
            </NavIcon>
            <NavIcon href="">
              <Search size={19} />
            </NavIcon>
            <NavIcon href="/">
              <Home size={19} />
            </NavIcon>
          </div>
        )}

        {/* Mobile — sidebar trigger */}
        {isMobile && (
          <MobileSidebar>
            <div className="flex flex-col gap-1 px-3 py-5">
              {/* Sidebar header */}
              <div className="px-4 pb-4 mb-2 border-b border-white/5">
                <p className="text-[#98EF00]/60 text-xs tracking-widest uppercase font-medium">منو</p>
              </div>

              <MobileNavItem href="/" label="خانه" icon={<Home size={19} />} />
              <MobileNavItem href="" label="سرچ" icon={<Search size={19} />} />
              <MobileNavItem href="" label="پروفایل" icon={<Users size={19} />} />
              <MobileNavItem
                href=""
                label="گیتهاب"
                icon={
                  <div className="w-[19px] h-[19px] flex items-center justify-center">
                    <Github />
                  </div>
                }
              />
              <MobileNavItem href="./Library" label="کتابخانه" icon={<Library size={19} />} />
            </div>
          </MobileSidebar>
        )}
      </div>

      {/* Signature: subtle bottom glow line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#98EF00]/30 to-transparent" />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#98EF00]/10 to-transparent mt-[1px]" />
    </header>
  );
};

export default Header;
