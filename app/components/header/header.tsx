import { Home, Library, Search, Thermometer, ThermometerSun, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Github } from '../../../public/icons/github';

const Header = () => {
  return (
    <div className='flex justify-between items-center p-8'>
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
      </div>

      <h1 className='text-white hover:text-[#96EF00] hover:drop-shadow-[0_0_10px_#98EF00] text-5xl'>ملودیا</h1>

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
    </div>
  );
};

export default Header;
