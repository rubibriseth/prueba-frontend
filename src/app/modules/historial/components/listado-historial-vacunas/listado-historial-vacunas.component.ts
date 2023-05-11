import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SubjectHistorialVacunaService } from 'src/app/core/services/subject-historialVacuna.service';
import { HistorialVacuna } from 'src/app/models/historialVacuna.model';
import { DeclaracionService } from 'src/app/services/declaracion.service';
import { ConfirmationService } from "primeng/api";

@Component({
  selector: 'app-listado-historial-vacunas',
  templateUrl: './listado-historial-vacunas.component.html',
  styleUrls: ['./listado-historial-vacunas.component.css']
})
export class ListadoHistorialVacunasComponent implements OnInit{
  listaHistorialVacuna: HistorialVacuna[] = [];

  constructor(
    private _declaracionService: DeclaracionService,
    private router: Router,
    private _historialVacunaService: SubjectHistorialVacunaService,
    private confirmationService: ConfirmationService ){

  }
  
  ngOnInit(): void {
    this.obtenerListaHistorialVacuna();
  }
  
  obtenerListaHistorialVacuna(){
    this._declaracionService.obtenerListaHistorialVacuna().subscribe(rs => {
      this.listaHistorialVacuna = rs

    })
  }

  registrarHistorialVacuna(){
    this.router.navigateByUrl("/home/historial-vacunas/registrar").then();
    this._historialVacunaService.emitirDataHistorialVacuna(new HistorialVacuna);
    this._historialVacunaService.confirmarEsEditar(false);
  }

  openActualizar(historial: HistorialVacuna){    
    this.router.navigateByUrl("/home/historial-vacunas/registrar").then();
    this._historialVacunaService.emitirDataHistorialVacuna(historial);
    this._historialVacunaService.confirmarEsEditar(true);
  }

  modalEliminar(id: string){
    console.log('id eliminar', id);
    this.confirmationService.confirm({
      message: 'Seguro que se desea eliminar?',
      header: 'Mensaje de Confirmación',
      icon: 'fa fa-question-circle',
      accept: () => {
        this.eliminarHistorialVacuna(id);
      },
      reject: () => {
        console.log("rechazado");
      }
    });
  }

  eliminarHistorialVacuna(id: string){
    this._declaracionService.eliminarHistorialVacuna(id).subscribe( rs => {            
      this.obtenerListaHistorialVacuna();
    })
  }
}
