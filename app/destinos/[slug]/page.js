import { notFound } from "next/navigation";
import { getDestinoBySlug, getAllSlugs } from "@/lib/destinos";
import Tabs from "@/components/Tabs";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function DestinoPage({ params }) {
  const destino = getDestinoBySlug(params.slug);
  if (!destino) return notFound();

  const [from, to] = destino.heroGradient || ["#1C3A54", "#3E8A4A"];

  return (
    <main>
      <section
        className="relative flex h-[210px] flex-col justify-end overflow-hidden px-4 pb-4 text-white"
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
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="scrim-bottom absolute inset-0" />
        <div className="relative">
          <p className="text-xs font-semibold text-white/80">{destino.region}</p>
          <h1 className="text-3xl font-extrabold">{destino.name}</h1>
        </div>
        {destino.credit && (
          <p className="relative mt-1 text-[10px] text-white/60">{destino.credit}</p>
        )}
      </section>

      <div className="pt-4">
        <Tabs destino={destino} />
      </div>
    </main>
  );
}
