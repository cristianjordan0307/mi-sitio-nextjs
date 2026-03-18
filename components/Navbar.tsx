import Link from "next/link";
import SearchBar from "./SearchBar";
import { siteConfig } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white py-3 sticky top-0 z-50">
      {/* Ajuste: flex-col para stack vertical en móvil y sm:flex-row para fila */}
      <div className="w-[90%] max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <Link href="/" className="text-2xl font-bold hover:text-blue-400">
          {siteConfig.name}
        </Link>
        <SearchBar />
      </div>
    </header>
  );
}