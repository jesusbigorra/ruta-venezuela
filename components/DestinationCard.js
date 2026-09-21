import Link from "next/link";

const tilts = ["tilt-1", "tilt-2", "tilt-3", "tilt-4"];

export default function DestinationCard({ destino, index = 0 }) {
  const [from, to] = destino.heroGradient || ["#1C3A54", "#3E8A4A"];
  const tilt = tilts[index % tilts.length];

  return (
    <Link
      href={`/destinos/${destino.slug}`}
      className={`block w-[140px] shrink-0 md:w-full ${tilt} transition hover:rotate-0 hover:-translate-y-1`}
    >
      <div className="polaroid">
        <div
          className="relative h-24 w-full overflow-hidden rounded-sm md:h-36"
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
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(8,16,26,0.55) 100%)",
            }}
          />
        </div>
        <div className="mt-1.5 px-0.5 text-sm font-extrabold text-ink">
          {destino.name}
        </div>
        <div className="px-0.5 pb-1 text-xs font-medium text-muted">
          {destino.tags?.[0]}
        </div>
      </div>
    </Link>
  );
}
