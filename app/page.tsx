//version 2
// app/page.tsx - Página principal (ruta: /)
// Server Component que compone las secciones.

import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection"; // 1. Importamos la nueva sección
import Gallery from "@/components/Gallery"; // Importamos la galería
import ContactForm from "@/components/ContactForm"; // Importamos el formulario
import { heroImage } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HeroSection imageSrc={heroImage.src} imageAlt={heroImage.alt} />

      {/* 2. Reemplazamos el comentario por el componente */}
      <BlogSection />

      {/* Sección de Galería (Fase anterior) */}
      <Gallery />

      {/* Sección de Contacto (Fase 3D) */}
      <section className="py-12 bg-gray-50">
        <ContactForm />
      </section>

      
      {/* 2. Reemplazamos el comentario por el componente */}
      <BlogSection />

      {/* Las demás secciones se agregarán en features posteriores */}
    </>
  );
}