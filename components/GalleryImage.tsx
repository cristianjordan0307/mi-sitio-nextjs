"use client";
import { useState } from "react";
import Image from "next/image";
import type { GalleryImageType } from "@/types";

export default function GalleryImage({ image }: { image: GalleryImageType }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <figure
      className="relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
      style={{
        height: "175px",
        borderRadius: "10px",
        border: "2px solid #1f2937",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width:640px) 100vw, 33vw"
        className="object-cover"
      />
      <figcaption
        className="absolute inset-0 flex items-end p-2 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
          opacity: isHovered ? 1 : 0,
        }}
      >
        <p style={{ color: "#ffffff", fontSize: "11px" }}>{image.alt}</p>
      </figcaption>
    </figure>
  );
}