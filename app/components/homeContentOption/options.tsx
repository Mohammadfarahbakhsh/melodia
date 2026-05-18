import { Home } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Options = () => {
    return (
        <div className='flex justify-end p-6 gap-6'>
                {/* <img src="" alt="" /> */}
                
                <button className='hover:bg-[#98Ef00] hover:transition hover:delay-75 text-[#ffffff] hover:text-[#070708] rounded-full bg-[#232329] w-20 h-8  whitespace-nowrap'>کتاب صوتی</button>
                <button className='hover:bg-[#98Ef00] hover:transition hover:delay-75 text-[#ffffff] hover:text-[#070708] rounded-full bg-[#232329] w-20 h-8 '>پادکست</button>
                <button className='hover:bg-[#98Ef00] hover:transition hover:delay-75 text-[#ffffff] hover:text-[#070708] rounded-full bg-[#232329] w-20 h-8 '>موسیقی</button>
                <button className='hover:bg-[#98Ef00] hover:transition hover:delay-75 text-[#ffffff] hover:text-[#070708] rounded-full bg-[#232329] w-20 h-8 '>جهان</button>
                <button className='hover:bg-[#98Ef00] hover:transition hover:delay-75 text-[#ffffff] hover:text-[#070708] rounded-full bg-[#232329] w-20 h-8 '>ایران</button>
                <button className='hover:bg-[#98Ef00] hover:transition hover:delay-75 text-[#ffffff] hover:text-[#070708] rounded-full bg-[#232329] w-20 h-8 '>همه</button>
        </div>
    );
}

export default Options;
