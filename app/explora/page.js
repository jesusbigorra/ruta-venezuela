import { getAllDestinos } from "../../lib/destinos";
import DestinationCard from "../../components/DestinationCard";

export default function ExploraPage() {
  const destinos = getAllDestinos();

  return (
    <main className="mx-auto max-w-6xl bg-paper px-4 py-8 md:px-8">
      <h1 className="mb-6 text-2xl font-black text-ink">Todos los destinos</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {destinos.map((destino) => (
          <DestinationCard key={destino.slug} destino={destino} />
        ))}
      </div>
    </main>
  );
}
