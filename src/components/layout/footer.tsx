import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/producto", label: "Producto" },
  { href: "/lay-out", label: "Lay-out" },
  { href: "/glosario", label: "Glosario" },
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="bg-dark py-10 px-6 border-t border-border-dark">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-gold rounded-full flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <span className="text-white font-bold text-sm">
            Dijes <span className="text-gold">Deportivos</span>
          </span>
        </div>
        <div className="flex gap-6 text-[#525252] text-xs">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-[#525252] text-xs">Proyecto Ingeniería Industrial · 2025</p>
      </div>
    </footer>
  );
}
