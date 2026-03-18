export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Se agrega mt-8 para el margen superior solicitado en el Hotfix
    <footer className="w-full border-t border-gray-200 py-8 mt-8">
      <div className="container mx-auto px-4 text-center">
        {/* Se ajusta el color de texto para mejorar el contraste */}
        <p className="text-gray-800 font-medium">
          © {currentYear} Mi Sitio - Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}