import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export default function BlogCard({ title, description, image, slug }: BlogCardProps) {
  return (
    <article className="flex flex-col border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
      <div className="relative w-full h-48">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Link 
          href={`/blog/${slug}`} 
          className="text-blue-600 font-semibold hover:underline"
        >
          Leer más
        </Link>
      </div>
    </article>
  );
}