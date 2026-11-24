export async function getPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  if (!res.ok) throw new Error("Erro ao carregar");
  return res.json();
}

