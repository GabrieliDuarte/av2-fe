import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export function AppProviders({ children }) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
