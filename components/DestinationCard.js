import Link from "next/link";

export default function DestinationCard({ destino }) {
  const [from, to] = destino.heroGradient || ["#1C3A54", "#3E8A4A"];

  return (
    <Link
      href={`/destinos/${destino.slug}`}
      className="block w-[130px] shrink-0 md:w-full"
    >
      <div
        className="relative h-24 w-full overflow-hidden rounded-card shadow-sm md:h-40"
        style={
          destino.heroImage
            ? undefined
            : { background: `linear-gradient(150deg, ${from}, ${to})` }
        }
      >
        {destino.heroImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={destino.heroImage}
            alt={destino.name}
            className="h-full w-full object-cover"
          />
        )}
        <div className="scrim-bottom absolute inset-0" />
      </div>
      <div className="mt-1.5 text-sm font-extrabold text-ink">{destino.name}</div>
      <div className="text-xs font-medium text-muted">{destino.tags?.[0]}</div>
    </Link>
  );
}
