"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Children } from "react"

const Query=({children}:{children:any})=>{
const queryClient=new QueryClient
return(
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
)
}


export default Query
