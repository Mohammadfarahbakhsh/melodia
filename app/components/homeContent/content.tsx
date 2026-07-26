"use client"
import { Github } from '@/public/icons/github';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Info, Library, Moon, Sun } from 'lucide-react';
import React, { ReactNode, useContext } from 'react';



const Content = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['users'],
        queryFn: () => axios.get("/").then((res) => res.data),
        retry: 1,
    })


    if (isLoading) return (
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
    )

    if (isError) return (
        <div className="mx-auto w-full max-w-sm rounded-md border border-red-300 p-4 text-center">
            <p className="text-red-500">خطا در دریافت اطلاعات: {error?.message}</p>
            <button 
                onClick={() => window.location.reload()} 
                className="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
                تلاش مجدد
            </button>
        </div>
    )
return (
           <div className="flex justify-center flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid pt-10 auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 bg-neutral-900 aspect-video rounded-xl" />
            <div className="bg-muted/50 bg-neutral-900  aspect-video rounded-xl" />
            <div className="bg-muted/50 bg-neutral-900  aspect-video rounded-xl" />
            <div className="bg-muted/50 bg-neutral-900  aspect-video rounded-xl" />
            <div className="bg-muted/50 bg-neutral-900  aspect-video rounded-xl" />
            <div className="bg-muted/50 bg-neutral-900  aspect-video rounded-xl" />
          </div>
          </div>
    );

}

export default Content;
    //     return (
    //   <div className="flex flex-1 flex-col gap-8 p-8">
    //     <div>
    //       <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
    //       <p className="mt-2 text-muted-foreground">
    //         به پنل مدیریت ملودیا خوش اومدی 👋
    //       </p>
    //     </div>
    
    //     <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    //       {[1, 2, 3, 4, 5, 6].map((item) => (
    //         <div
    //           key={item}
    //           className="
    //             group
    //             relative
    //             overflow-hidden
    //             rounded-2xl
    //             border
    //             border-zinc-200/60
    //             bg-white/70
    //             p-6
    //             shadow-sm
    //             backdrop-blur
    //             transition-all
    //             duration-300
    //             hover:-translate-y-1
    //             hover:border-blue-500/40
    //             hover:shadow-xl
    //             dark:border-zinc-800
    //             dark:bg-zinc-900/70
    //           "
    //         >
    //           <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all group-hover:bg-blue-500/20" />
    
    //           <div className="relative flex items-center justify-between">
    //             <div className="rounded-xl bg-blue-500/10 p-3 text-blue-500">
    //               <Library size={22} />
    //             </div>
    
    //             <Info
    //               size={18}
    //               className="text-zinc-400 transition group-hover:text-blue-500"
    //             />
    //           </div>
    
    //           <h2 className="mt-6 text-lg font-semibold">
    //             کارت شماره {item}
    //           </h2>
    
    //           <p className="mt-2 text-sm text-muted-foreground">
    //             این قسمت می‌تواند اطلاعات مربوط به داشبورد، آمار یا درخواست‌ها را
    //             نمایش دهد.
    //           </p>
    
    //           <div className="mt-6 flex items-center justify-between">
    //             <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">
    //               Active
    //             </span>
    
    //             <button className="rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-600">
    //               مشاهده
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>