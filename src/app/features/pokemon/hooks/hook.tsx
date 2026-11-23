import { useQuery } from "@tanstack/react-query";
import { cargo } from "../services/position.service";
export function useRegisterCargo() {
return useQuery({
 queryKey: ["cargoFuncionario"],
 queryFn: cargo,
 });
}
