"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

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

    // if (isError) return (
    //     <div className="mx-auto w-full max-w-sm rounded-md border border-red-300 p-4 text-center">
    //         <p className="text-red-500">خطا در دریافت اطلاعات: {error?.message}</p>
    //         <button 
    //             onClick={() => window.location.reload()} 
    //             className="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
    //         >
    //             تلاش مجدد
    //         </button>
    //     </div>
    // )

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