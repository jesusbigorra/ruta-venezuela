import Link from "next/link";

const items = [
  { label: "Destinos", href: "/explora" },
  { label: "Dónde dormir", href: "/explora?cat=dormir" },
  { label: "Dónde comer", href: "/explora?cat=comer" },
  { label: "Qué hacer", href: "/explora?cat=hacer" },
  { label: "Qué visitar", href: "/explora?cat=visitar" },
  { label: "Cómo llegar", href: "/explora?cat=llegar" },
  { label: "Servicios", href: "/explora?cat=servicios" },
];

export default function IconGrid() {
  return (
    <div className="grid grid-cols-4 gap-2 px-4 py-4 md:max-w-2xl">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex flex-col items-center gap-1.5 rounded-2xl bg-bg-soft px-1 py-3 text-center text-[10px] font-bold text-ink"
        >
          {item.label}
        </Link>
      ))}
      <Link
        href="/explora?cat=vivir"
        className="col-span-4 flex items-center justify-center gap-2 rounded-2xl bg-navy px-4 py-3.5 text-white"
      >
        <div className="text-left">
          <span className="block text-[9px] font-semibold text-white/75">
            Powered by Propiedash
          </span>
          <span className="text-sm font-extrabold">Dónde vivir</span>
        </div>
      </Link>
    </div>
  );
}
