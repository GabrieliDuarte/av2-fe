import { api } from "../../../lib/api";
import type { CargoCredentials } from "../types/position.types";
export async function cargo(): Promise<CargoCredentials[]> {
const response = await api.get<CargoCredentials[]>("/cargo_func");
return response.data;
}