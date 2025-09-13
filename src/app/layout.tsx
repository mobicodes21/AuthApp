import "../styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AuthApp",
  description: "Simple client-side auth with Next.js + TS + Tailwind",
  icons:{
    icon: "/favicon.ico?v=2"
  }
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="anitialised bg-gray-50">
        {children}
      </body>
    </html>
  );
}
