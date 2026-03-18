export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>
          © {currentYear} Mi Sitio - Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}