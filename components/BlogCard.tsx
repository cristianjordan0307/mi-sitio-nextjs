import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

export default function BlogCard({ title, date, description, image, imageAlt, slug }: BlogCardProps) {
  return (
    <article style={{
      display: "flex",
      flexDirection: "row",
      gap: "20px",
      backgroundColor: "#1f2937",
      borderRadius: "10px",
      overflow: "hidden",
      minHeight: "140px",
    }}>
      {/* Imagen izquierda */}
      <div style={{ position: "relative", width: "190px", minHeight: "140px", flexShrink: 0 }}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Contenido derecho */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "16px 16px 16px 0",
        gap: "6px",
        flex: 1,
      }}>
        <h3 style={{ color: "#ffffff", fontSize: "15px", fontWeight: "700", margin: 0 }}>
          {title}
        </h3>
        <p style={{ color: "#9ca3af", fontSize: "11px", margin: 0 }}>
          Fecha: {date}
        </p>
        <p style={{
          color: "#d1d5db",
          fontSize: "13px",
          margin: 0,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical" as const,
          overflow: "hidden",
        }}>
          {description}
        </p>
        <Link
          href={`/blog/${slug}`}
          style={{
            marginTop: "8px",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            fontSize: "12px",
            fontWeight: "600",
            padding: "5px 16px",
            borderRadius: "5px",
            textDecoration: "none",
            width: "fit-content",
          }}
        >
          Leer más
        </Link>
      </div>
    </article>
  );
}