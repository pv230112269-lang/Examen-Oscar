import { Monedero } from "../../core/entities/monedero";
import { IMonederoRepository } from "../ImonederoRepository";

export class MockMonederoRepository implements IMonederoRepository {
  private data: Monedero[] = [];

  async guardar(monedero: Monedero): Promise<void> {
    const index = this.data.findIndex(
      m => m.getIdAlumno() === monedero.getIdAlumno()
    );

    if (index >= 0) {
      this.data[index] = monedero;
    } else {
      this.data.push(monedero);
    }
  }

  async buscarPorId(idAlumno: string): Promise<Monedero | null> {
    const monedero = this.data.find(
      m => m.getIdAlumno() === idAlumno
    );

    return monedero || null;
  }
}