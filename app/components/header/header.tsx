"use client"
import { Home, Library, Search, Users } from 'lucide-react';
import Link from 'next/link';
import { Github } from '../../../public/icons/github';
import { useMobile } from '@/app/hooks/useMobile';
import MobileSidebar from '../sideBar/MobileSidebar';

const Header = () => {
  const isMobile = useMobile()
  return (
    <div className='flex justify-between items-center p-8'>
      {!isMobile && (
        <div className='flex gap-5'>
          <Link href="">
            <Users className='hover:drop-shadow-[0_0_10px_#98EF00] hover:fill-[#96EF00] ' />
          </Link>

          <Link
            href=""
            className="transition hover:drop-shadow-[0_0_10px_#98EF00]"
          >
            <Github />
          </Link>
        </div>)}
      {!isMobile && (
        <h1 className='text-white hover:text-[#96EF00] hover:drop-shadow-[0_0_10px_#98EF00] text-5xl'>ملودیا</h1>

      )}
      {isMobile&&(
        <h1 className='text-white hover:text-[#96EF00] hover:drop-shadow-[0_0_10px_#98EF00] text-5xl'>ملودیا</h1>
      )}


      {!isMobile && (
        <div className='flex gap-5'>
          <Link href="./Library" className="p-2 rounded-md">
            <Library className="text-white hover:text-[#98EF00] transition hover:drop-shadow-[0_0_10px_#98EF00]" />
          </Link>

          <Link href="" className="p-2 rounded-md">
            <Search className="text-white hover:text-[#98EF00] transition hover:drop-shadow-[0_0_10px_#98EF00]" />
          </Link>

          <Link
            href="/"
            className="p-2 rounded-md flex  justify-center"
          >
            <Home className="text-white hover:text-[#98EF00] transition hover:drop-shadow-[0_0_10px_#98EF00]" />

          </Link>
        </div>
      )}


<MobileSidebar>
  <div className='flex flex-col gap-2 px-4 py-6'>
    <Link href="/" className="block">
      <div className='flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-neutral-800/50 hover:to-neutral-900/30 transition-all duration-300 group'>
        <h1 className='text-white/80 text-lg font-medium group-hover:text-[#98EF00] transition-all duration-300 group-hover:translate-x-1'>خانه</h1>
        <div className='p-2 rounded-lg bg-neutral-900/50 group-hover:bg-[#98EF00]/10 transition-all duration-300'>
          <Home className="text-white/70 group-hover:text-[#98EF00] transition-all duration-300 group-hover:scale-110" size={22} />
        </div>
      </div>
    </Link>
    
    <Link href="" className="block">
      <div className='flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-neutral-800/50 hover:to-neutral-900/30 transition-all duration-300 group'>
        <h1 className='text-white/80 text-lg font-medium group-hover:text-[#98EF00] transition-all duration-300 group-hover:translate-x-1'>سرچ</h1>
        <div className='p-2 rounded-lg bg-neutral-900/50 group-hover:bg-[#98EF00]/10 transition-all duration-300'>
          <Search className="text-white/70 group-hover:text-[#98EF00] transition-all duration-300 group-hover:scale-110" size={22} />
        </div>
      </div>
    </Link>
    
    <Link className='block' href="">
      <div className='flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-neutral-800/50 hover:to-neutral-900/30 transition-all duration-300 group'>
        <h1 className='text-white/80 text-lg font-medium group-hover:text-[#98EF00] transition-all duration-300 group-hover:translate-x-1'>پروفایل</h1>
        <div className='p-2 rounded-lg bg-neutral-900/50 group-hover:bg-[#98EF00]/10 transition-all duration-300'>
          <Users className="text-white/70 group-hover:text-[#98EF00] transition-all duration-300 group-hover:scale-110" size={22} />
        </div>
      </div>
    </Link>

    <Link href="" className="block">
      <div className='flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-neutral-800/50 hover:to-neutral-900/30 transition-all duration-300 group'>
        <h1 className='text-white/80 text-lg font-medium group-hover:text-[#98EF00] transition-all duration-300 group-hover:translate-x-1'>گیتهاب</h1>
        <div className='p-2 rounded-lg bg-neutral-900/50 group-hover:bg-[#98EF00]/10 transition-all duration-300 flex items-center justify-center'>
          <div className="text-white/70 group-hover:text-[#98EF00] transition-all duration-300 group-hover:scale-110 w-5 h-5">
            <Github />
          </div>
        </div>
      </div>
    </Link>
    
    <Link href="./Library" className="block">
      <div className='flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-neutral-800/50 hover:to-neutral-900/30 transition-all duration-300 group'>
        <h1 className='text-white/80 text-lg font-medium group-hover:text-[#98EF00] transition-all duration-300 group-hover:translate-x-1'>کتابخانه</h1>
        <div className='p-2 rounded-lg bg-neutral-900/50 group-hover:bg-[#98EF00]/10 transition-all duration-300'>
          <Library className="text-white/70 group-hover:text-[#98EF00] transition-all duration-300 group-hover:scale-110" size={22} />
        </div>
      </div>
    </Link>
  </div>
</MobileSidebar>

    </div>
  );
};

export default Header;
