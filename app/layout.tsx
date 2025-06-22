import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iTulip Netwerk",
  description: "iTULIP SOFTWARE BEDRIJVEN UIT DE ADRIA REGIO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icons/logo.svg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
