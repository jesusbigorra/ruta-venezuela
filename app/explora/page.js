import { getAllDestinos } from "../../lib/destinos";
import DestinationCard from "../../components/DestinationCard";

export default function ExploraPage() {
    const destinos = getAllDestinos();

  return (
        <main className="px-4 py-6 pb-24">
          <h1 className="mb-4 text-xl font-extrabold">Todos los destinos</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
  {destinos.map((destino) => (
              <DestinationCard key={destino.slug} destino={destino} />
          ))}
  </div>
  </main>
  );
}
