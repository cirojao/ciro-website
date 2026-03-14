import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
      </head>
      <body className="min-h-screen bg-cream flex flex-col dark scrollbar-hidden">
        <div className="texture-overlay" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
