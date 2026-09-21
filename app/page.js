import { getAllDestinos } from "../lib/destinos";
import SearchBar from "../components/SearchBar";
import IconGrid from "../components/IconGrid";
import DestinationCard from "../components/DestinationCard";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1730831504726-1db4b1d53059?auto=format&fit=crop&w=1800&q=80";

export default function HomePage() {
  const destinos = getAllDestinos().filter((d) => d.destacado);

  return (
    <main className="bg-paper">
      <section
        className="relative flex h-[420px] flex-col justify-end px-4 pb-12 text-white md:h-[560px] md:px-8"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,16,26,0.15) 0%, rgba(8,16,26,0.15) 40%, rgba(8,16,26,0.75) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl">
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Venezuela <span className="mark-yellow text-ink">te espera</span>
          </h1>
          <p className="mt-3 max-w-lg text-sm font-semibold text-white/90 md:text-lg">
            Destinos. Experiencias. Historias. Todo en un solo lugar.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl">
        <SearchBar />
        <IconGrid />

        <section className="px-4 pb-24 pt-2 md:px-8 md:pb-16">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-lg font-black text-ink md:text-2xl">
              Destinos <span className="mark-yellow">destacados</span>
            </h2>
            <a href="/explora" className="text-xs font-bold text-coral md:text-sm">
              Ver todos →
            </a>
          </div>
          <div className="flex gap-4 overflow-x-auto py-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
            {destinos.map((destino) => (
              <div key={destino.slug} className="w-[220px] shrink-0 md:w-auto">
                <DestinationCard destino={destino} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
