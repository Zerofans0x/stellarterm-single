
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

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
    "A secure and transparent asset management ecosystem for investors who are serious about growing their capital.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${thicccboi.variable} ${mazzard.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}