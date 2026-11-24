import { usePokemonList } from "../hooks/usePokemonList";
import { PokemonCard } from "../components/PokemonCard";

export function PokemonCatalogPage() {
  const { data, isLoading, isError, refetch } = usePokemonList();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Catálogo de Pokémon</h1>
      </header>

      {isLoading && <p className="text-amber-700 font-medium">Carregando...</p>}

      {isError && (
        <div className="bg-red-50 p-4 rounded-xl text-center">
          <p className="text-red-700 mb-2">Erro ao carregar dados.</p>
          <button onClick={() => refetch()} className="bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer">
            Tentar novamente
          </button>
        </div>
      )}

      {data && (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {data.results.map((p) => (
            <PokemonCard key={p.name} pokemon={p} />
          ))}
        </section>
      )}
    </div>
  );
}
