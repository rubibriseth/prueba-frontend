import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MascotaRoutingModule } from './mascota-routing.module';
import { ListadoMascotaComponent } from './components/listado-mascota/listado-mascota.component';
import { RegistrarMascotaComponent } from './components/registrar-mascota/registrar-mascota.component';

/* PrimeNg */
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from "primeng/api";

@NgModule({
  declarations: [
    //ListadoMascotaComponent,
    //RegistrarMascotaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MascotaRoutingModule,

   
  ],
  providers: [
    ConfirmationService
  ]
})
export class MascotaModule { }
