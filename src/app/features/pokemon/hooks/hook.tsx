import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../api/api.tsx";

export function PokemonList() {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });
}

