import "./globals.css";
import { VT323 } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomScrollbar from "./components/CustomScrollbar";
import InteractiveBackground from "./components/InteractiveBackground";
import type React from "react";

const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Colossus 2025 - Retro Space Hackathon",
  description: "Join us for an exciting retro-themed space hackathon event!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${vt323.className} bg-black text-retro-green`}>
        <CustomScrollbar />
        <InteractiveBackground />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
