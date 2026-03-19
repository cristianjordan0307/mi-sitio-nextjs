import Image from "next/image";

interface HeroSectionProps { imageSrc: string; imageAlt: string; }

export default function HeroSection({ imageSrc, imageAlt }: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "420px" }}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}