import Link from "next/link";
import Button from "./components/base/buttons/button";

export default function NotFound() {
  return (
    <div
      dir="rtl"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50 dark:bg-black px-6"
    >
      <div className="flex w-full max-w-xl flex-col items-center rounded-2xl border border-[#5c8a00]/30 dark:border-[#98EF00]/30 bg-linear-to-b from-[#f3f9e6] to-white dark:from-[#0f1400] dark:to-black px-8 py-16 text-center shadow-[0_0_60px_-15px_rgba(92,138,0,0.15)] dark:shadow-[0_0_60px_-15px_rgba(152,239,0,0.35)]">
        <span className="mb-4 text-xs font-medium tracking-[0.3em] text-[#5c8a00]/70 dark:text-[#98EF00]/60">
          خطا
        </span>

        <h1 className="text-8xl font-bold text-[#5c8a00] dark:text-[#98EF00] drop-shadow-[0_0_25px_rgba(92,138,0,0.2)] dark:drop-shadow-[0_0_25px_rgba(152,239,0,0.45)]">
          ۴۰۴
        </h1>

        <div className="my-6 h-px w-16 bg-[#5c8a00]/30 dark:bg-[#98EF00]/30" aria-hidden="true" />

        <p className="text-lg text-[#4a7000] dark:text-[#98EF00]/90">صفحه مورد نظر یافت نشد</p>
        <p className="mt-2 max-w-sm text-sm text-zinc-500 dark:text-[#98EF00]/50">
          ممکن است آدرس را اشتباه وارد کرده باشید یا این صفحه حذف شده باشد
        </p>

        <Link href="/home" className="mt-8">
          <Button
            className="px-6 py-2.5 transition-colors duration-200 hover:bg-[#5c8a00]/10 "
            variant="outline"
          >
            بازگشت به صفحه اصلی
          </Button>
        </Link>
      </div>
    </div>
  );
}