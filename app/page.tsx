// app/page.tsx - Página principal (ruta: /)
// Server Component que compone las secciones.

import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection"; // 1. Importamos la nueva sección
import { heroImage } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HeroSection imageSrc={heroImage.src} imageAlt={heroImage.alt} />
      
      {/* 2. Reemplazamos el comentario por el componente */}
      <BlogSection />

      {/* Las demás secciones se agregarán en features posteriores */}
    </>
  );
}