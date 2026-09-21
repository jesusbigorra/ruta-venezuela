import { getAllDestinos } from "../lib/destinos";
import SearchBar from "../components/SearchBar";
import IconGrid from "../components/IconGrid";
import DestinationCard from "../components/DestinationCard";

export default function HomePage() {
  const destinos = getAllDestinos().filter((d) => d.destacado);

  return (
    <main className="bg-paper">
      <section
        className="relative flex h-[260px] flex-col justify-end overflow-hidden px-4 pb-10 text-white md:h-[380px]"
        style={{
          background: "linear-gradient(150deg, #0E6E96 0%, #2FB6C0 55%, #EAF3E8 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(8,16,26,0.6) 100%)",
          }}
        />
        <div
          className="absolute -right-6 top-6 hidden h-24 w-24 rotate-12 rounded-full bg-sun/90 md:block"
          aria-hidden
        />
        <div className="relative">
          <h1 className="text-3xl font-black leading-tight md:text-5xl">
            Venezuela <span className="mark-yellow text-ink">te espera</span>
          </h1>
          <p className="mt-2 max-w-md text-sm font-semibold text-white/90 md:text-base">
            Destinos. Experiencias. Historias. Todo en un solo lugar.
          </p>
        </div>
      </section>

      <SearchBar />
      <IconGrid />

      <section className="px-4 pb-24 md:pb-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-lg font-black text-ink">
            Destinos <span className="mark-yellow">destacados</span>
          </h2>
          <a href="/explora" className="text-xs font-bold text-coral">
            Ver todos →
          </a>
        </div>
        <div className="flex gap-4 overflow-x-auto py-2 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible">
          {destinos.map((destino, i) => (
            <DestinationCard key={destino.slug} destino={destino} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
