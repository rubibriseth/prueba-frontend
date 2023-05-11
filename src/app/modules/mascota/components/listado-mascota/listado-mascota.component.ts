import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectMascotaService } from 'src/app/core/services/subject-mascota.service';
import { Mascota } from 'src/app/models/mascota.model';
import { DeclaracionService } from 'src/app/services/declaracion.service';
import { ConfirmationService } from "primeng/api";

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit {

  listaMascota: Mascota[] = [];

  constructor(
    private _declaracionService: DeclaracionService,
    private router: Router,
    private _mascotaService: SubjectMascotaService,
    private confirmationService: ConfirmationService ){

  }
  
  ngOnInit(): void {
    this.obtenerListaMascota();
  }
  
  obtenerListaMascota(){
    this._declaracionService.obtenerListaMascota().subscribe(rs => {
      this.listaMascota = rs
    })
  }
  registrarMascota(){
    this.router.navigateByUrl("/home/mascota/registrar").then();
    this._mascotaService.emitirDataMascota(new Mascota);
    this._mascotaService.confirmarEsEditar(false);
  }

  openActualizar(mascota: Mascota){    
    this.router.navigateByUrl("/home/mascota/registrar").then();
    this._mascotaService.emitirDataMascota(mascota);
    this._mascotaService.confirmarEsEditar(true);
  }

  modalEliminar(id: string){
    console.log('id eliminar', id);
    this.confirmationService.confirm({
      message: 'Seguro que se desea eliminar?',
      header: 'Mensaje de Confirmación',
      icon: 'fa fa-question-circle',
      accept: () => {
        this.eliminarMascota(id);
      },
      reject: () => {
        console.log("rechazado");
      }
    });
  }

  eliminarMascota(id: string){
    this._declaracionService.eliminarMascota(id).subscribe( rs => {            
      this.obtenerListaMascota();
    })
  }

}
