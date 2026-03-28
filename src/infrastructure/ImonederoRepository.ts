import { Monedero } from "../core/entities/monedero";

export interface IMonederoRepository {
    guardar(monedero: Monedero): Promise<void>;
    buscarPorId(idAlumno: string): Promise<Monedero | null>;
}