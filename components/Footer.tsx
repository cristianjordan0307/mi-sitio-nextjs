export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="w-full py-8 border-t border-gray-100" 
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Línea divisoria opcional para separar del contenido */}
        <div className="max-w-4xl mx-auto border-t border-gray-50 mb-6"></div>
        
        <p className="font-medium text-xs tracking-wide" style={{ color: "#9ca3af" }}>
          © {currentYear} <span style={{ color: "#3b82f6" }}>Mi Sitio Web</span> — Todos los derechos reservados.
        </p>
        
        <p className="mt-2 text-[10px] uppercase tracking-widest text-gray-300">
          Bogotá, Colombia
        </p>
      </div>
    </footer>
  );
}