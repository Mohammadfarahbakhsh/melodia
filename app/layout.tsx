// import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import './globals.css';
// import { Provider } from "react-redux";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Query from "./components/homeContent/query";
// import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import MobileSidebar from "./components/sideBar/MobileSidebar";
import Header from "./components/header/header";
import { Metadata } from 'next';


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
    <html lang="en">
      <body>
        
        <MobileSidebar>
        <Header/>
        </MobileSidebar>

        <Query>
          {children}
        </Query>
      </body>
    </html>
  );
}