import { App } from "./app/app";
import { PokemonCatalogPage } from "./features/pokemon/pages/PokemonPage";

export default function App() {
  return (
    <AppProviders>
      <PokemonCatalogPage />
    </AppProviders>
  );
}
