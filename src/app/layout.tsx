import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Koulen } from "@next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const koulen = Koulen({
  subsets: ["khmer"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Powder Path",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${koulen.className} bg-zinc-900 text-slate-100 container mx-auto p-4`}
      >
        {children}
      </body>
    </html>
  );
}
