import { getAllDestinos } from "../lib/destinos";
import SearchBar from "../components/SearchBar";
import IconGrid from "../components/IconGrid";
import DestinationCard from "../components/DestinationCard";

export default function HomePage() {
    const destinos = getAllDestinos().filter((d) => d.destacado);

  return (
        <main>
          <section
          className="relative flex h-[220px] flex-col justify-end px-4 pb-8 text-white md:h-[320px]"
          style={{
                      background: "linear-gradient(150deg, #0E6E96 0%, #2FB6C0 55%, #EAF3E8 100%)",
          }}
      >
        <div
          className="absolute inset-0"
          style={{
                        background:
                                        "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(8,16,26,0.55) 100%)",
          }}
        />
        <div className="relative">
                    <h1 className="text-2xl font-extrabold md:text-4xl">Venezuela te espera</h1>
          <p className="mt-1 text-sm text-white/85 md:text-base">
                      Destinos. Experiencias. Historias. Todo en un solo lugar.
          </p>
          </div>
          </section>

      <SearchBar />
                <IconGrid />

                <section className="px-4 pb-24 md:pb-12">
                  <div className="mb-3 flex items-baseline justify-between">
                    <h2 className="text-sm font-extrabold">Destinos destacados</h2>
          <a href="/explora" className="text-xs font-bold text-muted">
                      Ver todos →
          </a>
          </div>
        <div className="flex gap-3 overflow-x-auto md:grid md:grid-cols-4 md:overflow-visible">
        {destinos.map((destino) => (
                      <DestinationCard key={destino.slug} destino={destino} />
                    ))}
</div>
  </section>
  </main>
  );
}
