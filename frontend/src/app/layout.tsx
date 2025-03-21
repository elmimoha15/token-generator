// src/app/layout.tsx
import "../styles/globals.css";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import type { ReactNode } from "react";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains", // define CSS variable
});

export const metadata = {
  title: "TokenGen",
  description: "Generate secure tokens easily",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-gray-50 text-black font-[var(--font-jetbrains)]">
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Navbar />
            <main className="flex-1 flex justify-center items-center bg-gray-300 p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
