import Link from "next/link";

const links = [
  { href: "/explora", label: "Destinos" },
  { href: "/explora", label: "Experiencias" },
  { href: "/explora", label: "Dónde vivir" },
  { href: "/explora", label: "Servicios" },
  ];

export default function TopNav() {
    return (
          <header className="mx-auto hidden max-w-5xl items-center justify-between px-4 py-6 md:flex">
            <Link href="/" className="flex items-center gap-2 text-sm font-extrabold tracking-wide text-navy">
              <svg width="22" height="16" viewBox="0 0 24 18" fill="none">
                <path d="M1 17L8 5l4 6 3-4 8 10H1z" stroke="#1C3A54" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
          RUTA VENEZUELA
            </Link>
        <nav className="flex gap-8 text-sm font-semibold text-ink">
          {links.map((l) => (
                      <Link key={l.label} href={l.href} className="hover:text-navy">
{l.label}
  </Link>
        ))}
          </nav>
          </header>
  );
}
