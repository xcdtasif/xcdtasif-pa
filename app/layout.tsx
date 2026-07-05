import type { Metadata } from "next";
import { juliaMono, inter, doto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asif Rahman — Full Stack Developer",
  description: "I build fast, accessible web apps end to end — from database to pixel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${juliaMono.variable} ${inter.variable} ${doto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}