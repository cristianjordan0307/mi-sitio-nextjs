import GalleryImage from "./GalleryImage";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  return (
    <section className="py-6 px-4" style={{ backgroundColor: "#f3f4f6" }}>
      <div
        className="mx-auto grid gap-3"
        style={{
          maxWidth: "1100px",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {galleryImages.map((image) => (
          <GalleryImage key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
}