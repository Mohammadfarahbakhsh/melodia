"use client"
import { Menu } from 'lucide-react';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const MobileSidebar = ({children}:{children:any}) => {
    const [isOpen,setIsOpen]=React.useState(false)
    useEffect(() => {
    if(isOpen){
        document.body.style.overflow='hidden'
    }else{
        document.body.style.overflow='unset'
    }
    return ()=>{
        document.body.style.overflow = 'unset';
    }

    }, [isOpen]);
  const sidebarContent = (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* خود سایدبار */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-neutral-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="mb-4 text-white hover:text-gray-200"
          >
            ✕ بستن
          </button>
          <nav className="flex flex-col gap-4">
            {children}
          </nav>
        </div>
      </div>

      {/* دکمه همبرگری (وقتی منو بسته است) */}
      {!isOpen && (
        <Menu
          onClick={() => setIsOpen(true)}
          className="fixed top-4 right-4 z-30 p-2 bg-blue-600 text-white rounded-md md:hidden"
        >
          ☰ منو
        </Menu>
      )}
    </>
  );

  // استفاده از پورتال برای رندر کردن در body و جلوگیری از مشکل z-index
  if (typeof window === 'undefined') return null;
  return createPortal(sidebarContent, document.body);
}


export default MobileSidebar;
