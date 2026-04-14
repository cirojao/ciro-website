import type { Metadata } from "next";
import { getCanonicalPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Ciro Jao",
  description: "聯絡 Ciro Jao，討論全職機會、接案合作或技術顧問需求。",
  alternates: {
    canonical: getCanonicalPath("/contact"),
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
