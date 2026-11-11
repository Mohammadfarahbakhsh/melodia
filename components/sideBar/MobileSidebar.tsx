
"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Music2 } from "lucide-react";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

const MobileSidebar = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useMounted();

  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const sidebarContent = (
    <>
      {/* دکمه باز کردن منو */}
      <button
        type="button"
        aria-label="باز کردن منو"
        aria-expanded={isOpen}
        aria-controls="melodia-mobile-sidebar"
        onClick={() => setIsOpen(true)}
        className="fixed right-4 top-4 z-[60] flex size-10 items-center justify-center rounded-xl border border-[#98EF00]/20 bg-[#98EF00] text-black shadow-[0_4px_16px_rgba(152,239,0,0.15)] transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_22px_rgba(152,239,0,0.25)] active:scale-95 md:hidden"
      >
        <Menu size={21} strokeWidth={2.2} />
      </button>

      {/* پس‌زمینه تاریک */}
      <div
        aria-hidden="true"
        onClick={closeSidebar}
        className={`fixed inset-0 z-[70] bg-black/50 backdrop-blur-[3px] transition-opacity duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* پنل سایدبار */}
      <aside
        id="melodia-mobile-sidebar"
        dir="rtl"
        aria-label="منوی موبایل"
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 right-0 z-[80] flex h-dvh w-[min(19rem,85vw)] flex-col overflow-y-auto border-l border-zinc-200/70 bg-white text-zinc-900 shadow-2xl transition-transform duration-300 ease-out dark:border-white/[0.07] dark:bg-[#17171B] dark:text-white md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* هدر سایدبار */}
        <div className="flex items-center justify-between border-b border-zinc-200/70 px-5 py-5 dark:border-white/[0.07]">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-[#98EF00]/10 text-[#78B900] dark:text-[#98EF00]">
              <Music2 size={23} />
            </div>

            <div>
              <h2 className="text-base font-extrabold tracking-tight">
                ملودیا
              </h2>

              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                موسیقی رو جور دیگه‌ای تجربه کن
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeSidebar}
            aria-label="بستن منو"
            className="flex size-9 items-center justify-center rounded-xl text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/[0.07] dark:hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* محتوای منو */}
        <nav
          className="flex flex-1 flex-col gap-2 px-3 py-5"
          onClick={(event) => {
            const target = event.target;

            if (
              target instanceof Element &&
              target.closest("a")
            ) {
              closeSidebar();
            }
          }}
        >


          {children}
        </nav>

        {/* فوتر سایدبار */}
        <div className="border-t border-zinc-200/70 px-5 py-4 dark:border-white/[0.07]">
          <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
            <span className="size-1.5 rounded-full bg-[#98EF00]" />
            تجربه‌ای متفاوت از موسیقی
          </div>
        </div>
      </aside>
    </>
  );

  if (!mounted) return null;

  return createPortal(sidebarContent, document.body);
};

export default MobileSidebar;
