import GalleryImage from "./GalleryImage";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  return (
    <section className="mt-5 px-5 py-8">
      {/* Ajuste: grid-cols-1 asegura la galería en 1 columna en móvil */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <GalleryImage key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
}