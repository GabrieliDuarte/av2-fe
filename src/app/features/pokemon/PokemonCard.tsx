export function PokemonCard({ pokemon }) {
  const id = pokemon.url.split("/").filter(Boolean).pop();
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  const nomeFormatado = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const numeroFormatado = `N° ${String(id).padStart(3, "0")}`;

  return (
    <button className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 w-true text-left hover:border-amber-400 cursor-pointer">
      <img src={img} alt={pokemon.name} className="w-14 h-14 object-contain bg-gray-50 rounded-lg p-1" />
      <div>
        <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
          {numeroFormatado}
        </span>
        <h2 className="text-sm font-bold text-gray-800 mt-1">{nomeFormatado}</h2>
      </div>
    </button>
  );
}
