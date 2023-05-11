import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import { Mascota } from 'src/app/models/mascota.model';

@Injectable({
  providedIn: 'root'
})

export class SubjectMascotaService {

  private dataMascota = new BehaviorSubject<Mascota>(new Mascota);
  public $dataMascota = this.dataMascota.asObservable();

  //editar
  private esEditar = new BehaviorSubject<boolean>(false);
  public $esEditar = this.esEditar.asObservable();

  constructor() {
  }

  emitirDataMascota(mascota: Mascota) {
    this.dataMascota.next(mascota);
  }

  confirmarEsEditar(editar: boolean) {
    this.esEditar.next(editar);
  }

}
