import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import { HistorialVacuna } from 'src/app/models/historialVacuna.model';

@Injectable({
  providedIn: 'root'
})

export class SubjectHistorialVacunaService {

  private dataHistorialVacuna = new BehaviorSubject<HistorialVacuna>(new HistorialVacuna);
  public $dataHistorialVacuna = this.dataHistorialVacuna.asObservable();

  //editar
  private esEditar = new BehaviorSubject<boolean>(false);
  public $esEditar = this.esEditar.asObservable();

  constructor() {
  }

  emitirDataHistorialVacuna(historial: HistorialVacuna) {
    this.dataHistorialVacuna.next(historial);
  }

  confirmarEsEditar(editar: boolean) {
    this.esEditar.next(editar);
  }

}
