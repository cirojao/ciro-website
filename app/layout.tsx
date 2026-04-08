import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CursorDot from "@/components/ui/CursorDot";
import JsonLd from "@/components/seo/JsonLd";
import { getCanonicalPath, getSiteOrigin } from "@/lib/site";
import {
  getPersonStructuredData,
  getWebsiteStructuredData,
} from "@/lib/structured-data";

const siteOrigin = getSiteOrigin();
const socialImage = {
  url: "/images/ciro_bg.png",
  width: 1200,
  height: 630,
  alt: "Ciro frontend engineer portfolio",
};

export const metadata: Metadata = {
  metadataBase: siteOrigin,
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
  alternates: {
    canonical: getCanonicalPath("/"),
  },
  openGraph: {
    title: "Ciro — Frontend Engineer",
    description: "專注於打造流暢、優雅使用者體驗的前端工程師",
    type: "website",
    url: getCanonicalPath("/"),
    siteName: "Ciro",
    locale: "zh_TW",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciro — Frontend Engineer",
    description: "專注於打造流暢、優雅使用者體驗的前端工程師",
    images: [socialImage.url],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <JsonLd data={[getPersonStructuredData(), getWebsiteStructuredData()]} />
      </head>
      <body className="bg-cream dark scrollbar-hidden flex min-h-screen flex-col">
        <SmoothScroll />
        <CursorDot />
        <div className="texture-overlay" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
