import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Healthron AI - Bridging Healthcare and AI",
  description:
    "The secure platform to monetize medical data and train AI models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <main
          style={{
            minHeight: "calc(100vh - 80px)",
            width: "100vw",
            overflowX: "hidden",
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
