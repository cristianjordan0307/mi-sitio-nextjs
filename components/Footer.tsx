// components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-700 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          © {currentYear} Mi Sitio Web — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}