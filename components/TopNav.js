import Link from "next/link";

const links = [
  { href: "/explora", label: "Destinos" },
  { href: "/explora", label: "Experiencias" },
  { href: "/explora", label: "Gastronomía" },
  { href: "/explora", label: "Servicios" },
  { href: "/explora", label: "Dónde vivir" },
];

export default function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link href="/" className="flex items-center gap-2 text-base font-black tracking-wide text-navy">
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
            <path d="M1 17L8 5l4 6 3-4 8 10H1z" stroke="#1C3A54" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
          RUTA VENEZUELA
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-bold text-ink md:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="transition hover:text-coral">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/explora" className="hidden text-muted transition hover:text-navy md:block">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Link>
          <Link
            href="/explora"
            className="rounded-full bg-navy px-4 py-2 text-xs font-extrabold text-white transition hover:bg-navy-deep md:px-5 md:py-2.5 md:text-sm"
          >
            Explora Venezuela
          </Link>
        </div>
      </div>
    </header>
  );
}
