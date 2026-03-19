import Link from "next/link";
import SearchBar from "./SearchBar";
import { siteConfig } from "@/lib/data";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "#111827",
        padding: "12px 24px",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
        <Link
          href="/"
          style={{
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "700",
            fontFamily: "inherit",
            textDecoration: "none",
          }}
        >
          {siteConfig.name}
        </Link>
        <SearchBar />
      </div>
    </header>
  );
}