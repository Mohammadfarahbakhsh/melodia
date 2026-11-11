
"use client";

import Button from "@/components/base/buttons/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Heart, Library, ArrowUpLeft, Music2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const artists = [
  {
    id: 1,
    name: "هایده",
    description: "صدایی ماندگار که همیشه در قلب موسیقی ایران زنده است.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pc0RyGyFThsT5Oo_NdtxU6KBzZNSEj3qNdpxGXkZaQ&s=10",
  },
  {
    id: 2,
    name: "هایده",
    description: "از خاطره‌انگیزترین صداهای موسیقی سنتی و پاپ ایران.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pc0RyGyFThsT5Oo_NdtxU6KBzZNSEj3qNdpxGXkZaQ&s=10",
  },
  {
    id: 3,
    name: "هایده",
    description: "ترانه‌هایی که با گذشت زمان همچنان شنیدنی هستند.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pc0RyGyFThsT5Oo_NdtxU6KBzZNSEj3qNdpxGXkZaQ&s=10",
  },
  {
    id: 4,
    name: "هایده",
    description: "همراه با ملودی‌های خاطره‌انگیز و فراموش‌نشدنی.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pc0RyGyFThsT5Oo_NdtxU6KBzZNSEj3qNdpxGXkZaQ&s=10",
  },
  {
    id: 5,
    name: "هایده",
    description: "یکی از نام‌های ماندگار در تاریخ موسیقی ایران.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pc0RyGyFThsT5Oo_NdtxU6KBzZNSEj3qNdpxGXkZaQ&s=10",
  },
  {
    id: 6,
    name: "هایده",
    description: "موسیقی برای لحظه‌هایی که دوست داری دوباره تجربه‌شان کنی.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pc0RyGyFThsT5Oo_NdtxU6KBzZNSEj3qNdpxGXkZaQ&s=10",
  },
];

const Content = () => {
  const { isLoading, isError, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get("/").then((res) => res.data),
    retry: 1,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-5 px-4 py-6 sm:grid-cols-2 xl:grid-cols-3">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="animate-pulse rounded-3xl border border-zinc-200/70 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex items-center gap-4">
              <div className="size-16 rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
              <div className="flex-1 space-y-3">
                <div className="h-4 w-24 rounded bg-zinc-200 dark:bg-zinc-800" />
                <div className="h-3 w-full rounded bg-zinc-100 dark:bg-zinc-800" />
              </div>
            </div>
            <div className="mt-6 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800" />
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-64 flex-col items-center justify-center gap-4 px-6 text-center">
        <div className="rounded-2xl bg-red-500/10 p-4 text-red-500">
          <Music2 size={28} />
        </div>
        <h2 className="text-lg font-semibold">مشکلی پیش آمده!</h2>
        <p className="max-w-sm text-sm leading-7 text-zinc-500">
          دریافت اطلاعات با خطا مواجه شد. لطفاً دوباره تلاش کن.
        </p>
        <Button
          variant="contained"
          onClick={() => void refetch()}
          className="rounded-xl bg-[#98EF00] px-6 py-2 font-medium text-black hover:opacity-80"
        >
          تلاش مجدد
        </Button>
      </div>
    );
  }

  return (
    <section dir="rtl" className="flex flex-1 flex-col gap-6 px-4 py-6 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-[#78B900]">
            <span className="size-2 rounded-full bg-[#98EF00]" />
            دنیای موسیقی
          </div>

          <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-2xl">
            هنرمندان محبوب
          </h1>

          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            دوباره به صدای خاطره‌انگیز موردعلاقه‌ات گوش بده.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {artists.map((artist) => (
          <article
            key={artist.id}
            className="group relative isolate overflow-hidden rounded-3xl border border-zinc-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#98EF00]/70 hover:shadow-[0_12px_40px_-20px_rgba(152,239,0,0.4)] dark:border-zinc-800 dark:bg-[#19191D]"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 -z-10 size-40 rounded-full bg-[#98EF00]/10 blur-3xl transition-opacity duration-300 group-hover:bg-[#98EF00]/20" />

            <div className="mb-6 flex items-center justify-between">
              <span className="flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                <Music2 size={14} />
                هنرمند
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label={`افزودن ${artist.name} به علاقه‌مندی‌ها`}
                  className="rounded-xl p-2 text-zinc-400 transition-colors hover:bg-red-500/10 hover:text-red-500"
                >
                  <Heart size={19} />
                </button>

                <button
                  type="button"
                  aria-label={`کتابخانه ${artist.name}`}
                  className="rounded-xl p-2 text-zinc-400 transition-colors hover:bg-[#98EF00]/10 hover:text-[#78B900]"
                >
                  <Library size={19} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
                <Image
                  src={artist.image}
                  width={80}
                  height={80}
                  alt={`تصویر ${artist.name}`}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">
                  {artist.name}
                </h2>
                <p className="line-clamp-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  {artist.description}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800">
              <Link href="/music" className="block">
                <Button
                  variant="contained"
                  className="group/button flex w-full items-center justify-center gap-2 rounded-xl bg-[#98EF00] py-2.5 font-semibold text-black transition-all duration-200 hover:bg-[#89D900]"
                >
                  مشاهده آثار
                  <ArrowUpLeft
                    size={17}
                    className="transition-transform duration-200 group-hover/button:-translate-x-1"
                  />
                </Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Content;
