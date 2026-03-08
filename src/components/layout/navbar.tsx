"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getAssetPath, getBasePath } from "@/lib/utils";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/producto", label: "Producto" },
  { href: "/lay-out", label: "Lay-out" },
  { href: "/glosario", label: "Glosario" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const base = getBasePath();

  function isActive(href: string) {
    const full = base + href;
    if (href === "/") return pathname === full || pathname === full + "/";
    return pathname.startsWith(full);
  }

  return (
    <nav className="bg-dark sticky top-0 z-50 shadow-lg border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={getAssetPath("logo.png")}
            alt="Logo Dijes Deportivos"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="text-white font-bold text-lg tracking-tight">
            Dijes <span className="text-gold">Deportivos</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "text-gold border-b-2 border-gold pb-0.5"
                  : "text-gray-300 hover:text-white transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark border-t border-border-dark px-6 pb-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium ${
                isActive(link.href)
                  ? "text-gold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
