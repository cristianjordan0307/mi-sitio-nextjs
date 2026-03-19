"use client";
import { useState, type FormEvent } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) console.log("Búsqueda:", query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar..."
        aria-label="Buscar en el sitio"
        style={{
          backgroundColor: "#e5e7eb",
          color: "#111827",
          border: "none",
          padding: "6px 12px",
          borderRadius: "4px 0 0 4px",
          fontSize: "14px",
          fontWeight: "600",
          fontFamily: "inherit",
          width: "200px",
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "#2563eb",
          color: "#ffffff",
          border: "none",
          padding: "6px 16px",
          borderRadius: "0 4px 4px 0",
          fontSize: "14px",
          fontWeight: "600",
          fontFamily: "inherit",
          cursor: "pointer",
        }}
      >
        Buscar
      </button>
    </form>
  );
}