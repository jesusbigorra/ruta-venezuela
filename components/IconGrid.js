import Link from "next/link";

const items = [
  {
        label: "Destinos",
        href: "/explora",
        icon: "M3 20l6-11 4 6 3-4 5 9H3z",
  },
  {
        label: "Dónde dormir",
        href: "/explora",
        icon: "M3 18v-7a2 2 0 012-2h14a2 2 0 012 2v7M3 18h18M6 9V7a2 2 0 012-2h8a2 2 0 012 2v2",
  },
  {
        label: "Dónde comer",
        href: "/explora",
        icon: "M6 3v8a2 2 0 004 0V3M6 7h4M12 21V11c3 0 4-2 4-5V3",
  },
  {
        label: "Qué hacer",
        href: "/explora",
        icon: "M12 7v6l-4 8M12 13l4 8M8 11l4-2 4 2",
        circle: true,
  },
  {
        label: "Qué visitar",
        href: "/explora",
        icon: "M8 7l2-3h4l2 3",
        rect: true,
  },
  {
        label: "Cómo llegar",
        href: "/explora",
        icon: "M4 16V9l2-4h12l2 4v7",
        wheels: true,
  },
  {
        label: "Servicios",
        href: "/explora",
        icon: "M19 12a7 7 0 00-.2-1.6l2-1.4-2-3.4-2.2.8a7 7 0 00-2.8-1.6L13.4 2h-2.8l-.4 2.8a7 7 0 00-2.8 1.6l-2.2-.8-2 3.4 2 1.4A7 7 0 005 12",
        gear: true,
  },
  ];

export default function IconGrid() {
    return (
          <div className="mx-auto grid grid-cols-4 gap-2 px-4 py-4 md:max-w-5xl md:grid-cols-7 md:gap-3">
    {items.map((item) => (
              <Link
                         key={item.label}
          href={item.href}
          className="flex flex-col items-center gap-1.5 rounded-2xl bg-bg-soft px-1 py-3 text-center text-[10px] font-bold text-ink transition hover:bg-navy hover:text-white"
        >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          {item.rect && (
                          <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
                        )}
          {item.circle && <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.7" />}
          {item.gear && <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />}
          {item.wheels && (
                          <>
                            <circle cx="7.5" cy="16.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
                            <circle cx="16.5" cy="16.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
            </>
                       )}
            <path
              d={item.icon}
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
                </svg>
{item.label}
</Link>
      ))}

      <Link
                href="/explora"
        className="col-span-4 flex items-center justify-center gap-3 rounded-2xl bg-navy px-4 py-3.5 text-white md:col-span-7"
      >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 11l9-7 9 7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 10v9h14v-9" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
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
