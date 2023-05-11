import { Mascota } from "./mascota.model";

export class HistorialVacuna {
  idHistorial?: string;
  idMascota?: string;
  tipoVacuna?: string;
  fecha?: string;
  observacion?: string;
  estado?: number;
  mascota?: Mascota;
}