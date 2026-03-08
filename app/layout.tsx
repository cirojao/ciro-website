import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ciro | Frontend Engineer",
  description: "專注於打造流暢、優雅使用者體驗的前端工程師",
  keywords: [
    "前端工程師",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Developer",
  ],
  authors: [{ name: "Ciro" }],
  openGraph: {
    title: "Ciro — Frontend Engineer",
    description: "專注於打造流暢、優雅使用者體驗的前端工程師",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen bg-cream flex flex-col">
        <div className="texture-overlay" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
