// import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import './globals.css';
import localFont from "next/font/local";
// import { Provider } from "react-redux";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Query from "./components/homeContent/query";
// import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Metadata } from 'next';
import ThemeProvider from './providers/theme-provider';



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const arad = localFont({
  src: "../public/font/AradVF.woff2",
  variable: "--font-arad",
  display: "swap",

});

export const metadata:Metadata={
  icons:{
    icon:"/LabelMelodia.svg"
  },
  title:"ملودیا"
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa"  suppressHydrationWarning>
      <body className={`${arad.className} antialiased`}>

        <Query>
        <ThemeProvider>
          {children}

        </ThemeProvider>
        </Query>

      </body>
    </html>
  );
}


{/* <MobileSidebar>
  
  </MobileSidebar> */}