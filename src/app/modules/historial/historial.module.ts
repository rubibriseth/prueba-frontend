import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HistorialRoutingModule } from './historial-routing.module';
import { ListadoHistorialVacunasComponent } from './components/listado-historial-vacunas/listado-historial-vacunas.component';
import { RegistrarHistorialVacunasComponent } from './components/registrar-historial-vacunas/registrar-historial-vacunas.component';



@NgModule({
  declarations: [
   // ListadoHistorialVacunasComponent,
    //RegistrarHistorialVacunasComponent
  ],
  imports: [
    CommonModule,
    HistorialRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class HistorialModule { }
