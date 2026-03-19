import BlogCard from "./BlogCard";
import { blogPosts } from "@/lib/data";

export default function BlogSection() {
  return (
    <section style={{ backgroundColor: "#111827", padding: "40px 20px" }}>
      <h2 style={{
        color: "#ffffff",
        fontSize: "20px",
        fontWeight: "700",
        textAlign: "center",
        marginBottom: "32px",
      }}>
        Últimas entradas del blog
      </h2>
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}>
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            date={post.date}
            description={post.excerpt}
            image={post.image.src}
            imageAlt={post.image.alt}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
}