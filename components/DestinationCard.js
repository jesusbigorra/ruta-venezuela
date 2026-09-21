import Link from "next/link";

export default function DestinationCard({ destino }) {
  const [from, to] = destino.heroGradient || ["#1C3A54", "#3E8A4A"];

  return (
    <Link
      href={`/destinos/${destino.slug}`}
      className="group block w-full overflow-hidden rounded-2xl bg-white shadow-md shadow-black/10 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className="relative h-36 w-full overflow-hidden md:h-48"
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
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(8,16,26,0.65) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 p-3">
          <div className="text-base font-extrabold text-white">{destino.name}</div>
          <div className="text-xs font-semibold text-white/85">{destino.tags?.[0]}</div>
        </div>
      </div>
    </Link>
  );
}
