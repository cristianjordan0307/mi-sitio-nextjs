import BlogCard from './BlogCard';

// Datos de prueba (puedes mover esto a un archivo de constantes luego)
const blogPosts = [
  {
    id: 1,
    title: "Mi primer post",
    description: "Aprendiendo a construir componentes con Next.js y Tailwind.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    slug: "mi-primer-post"
  },
  {
    id: 2,
    title: "Configurando SQL Server",
    description: "Guía básica para normalización de bases de datos.",
    image: "https://images.unsplash.com/photo-1544380903-58065ca7303f",
    slug: "sql-server-guia"
  }
];

export default function BlogSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestro Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard 
              key={post.id}
              title={post.title}
              description={post.description}
              image={post.image}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}