// app/layout.tsx - RootLayout
// Punto de entrada: define <html>, metadata, fuente, Navbar y Footer.

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // 1. Descomentamos el Footer
import { siteConfig } from "@/lib/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-100 min-h-screen flex flex-col`}>
        <Navbar />
        {/* main con flex-1 asegura que el footer siempre se vaya al fondo */}
        <main className="flex-1">{children}</main>
        
        {/* 2. Agregamos el componente Footer aquí */}
        <Footer />
      </body>
    </html>
  );
}