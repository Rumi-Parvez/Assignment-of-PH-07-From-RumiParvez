import type { Metadata } from "next";
import {Hind_Siliguri , Geist_Mono} from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "বাজার দর — চাল, ডাল, তেলসহ নিত্যপ্রয়োজনীয় পণ্যের আজকের দাম, বাজারভিত্তিক মূল্য এবং প্রতিদিনের দাম বাড়া-কমার আপডেট এক নজরে দেখুন।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${hindSiliguri.className} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">

        <Navbar></Navbar>

        <main className="container px-20 mx-auto ">
          {children}
        </main>
        <Footer></Footer>




         <ToastContainer />

      </body>
    </html>
  );
}
