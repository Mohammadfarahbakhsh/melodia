"use client";
import Button from "@/app/components/base/buttons/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Library } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Content = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get("/").then((res) => res.data),
    retry: 1,
  });

  if (isLoading)
    return (
      <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="size-10 rounded-full bg-gray-200"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 rounded bg-gray-200"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
              <div className="h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    );

  if (isError)
    return (
      <div className="mx-auto w-full max-w-sm rounded-md border border-red-300 p-4 text-center">
        <p className="text-red-500">خطا در دریافت اطلاعات: {error?.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          تلاش مجدد
        </button>
      </div>
    );

  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <div className=" grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-zinc-200/60
                bg-white/70
                p-3
                shadow-sm
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#98EF00]
                hover:shadow-xl
                dark:border-zinc-800
                dark:bg-zinc-900/70
              "
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#98EF00]/30 blur-2xl transition-all group-hover:bg-[#98EF00]/20" />

            <div className="flex justify-end">
              <div className="rounded-xl bg-blue-500/10 p-3 text-[#98EF00]">
                <Library size={22} />
              </div>
            </div>

            <div className="mt-5 flex flex-col items-center text-center">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pc0RyGyFThsT5Oo_NdtxU6KBzZNSEj3qNdpxGXkZaQ&s=10"
                width={110}
                height={110}
                alt="عکس خواننده"
                className="h-28 w-28 rounded-2xl border object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
              />

              <h2 className="mt-4 text-lg font-semibold">هایده</h2>

              <p className="mt-2 px-2 text-center text-sm leading-6 text-muted-foreground">
                خانوم هایده یکی از بهترین خوانندگان زن ایران و جهان است.
              </p>
            </div>

            <Link href="/Library">
              <Button
                variant="contained"
                className="mt-6 w-full rounded-xl bg-[#98EF00] py-2 font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:opacity-80"
              >
                مشاهده
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
