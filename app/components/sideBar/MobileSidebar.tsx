"use client"
import { Menu} from 'lucide-react';
import React, { useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

const MobileSidebar = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const mounted = useMounted();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const sidebarContent = (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}
      {!isOpen && (
        <Menu
          onClick={() => setIsOpen(true)}
          className="fixed top-3.5 w-7 h-7 right-6 z-999 p-2 bg-neutral-900 text-[#98EF00] rounded-md md:hidden"
        >
          ☰ منو
        </Menu>
      )}
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
            ✕
          </button>
          <nav className="flex flex-col gap-4">{children}</nav>
        </div>
      </div>
    </>
  );

  if (!mounted) return null;
  return createPortal(sidebarContent, document.body);
};

export default MobileSidebar;