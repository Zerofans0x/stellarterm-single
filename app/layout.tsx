import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const thicccboi = localFont({
  src: "../public/fonts/THICCCBOI-Medium.ttf",
  variable: "--font-thicccboi",
  display: "swap",
});

const mazzard = localFont({
  src: "../public/fonts/MazzardH-Medium.ttf",
  variable: "--font-mazzard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "stellarterm | Grow your capital with structure.",
  description:
    "One platform, everything you need to learn, track, and improve as a forex trader.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${thicccboi.variable} ${mazzard.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

