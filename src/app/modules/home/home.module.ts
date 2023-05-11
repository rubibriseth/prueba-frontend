import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HistorialModule } from '../historial/historial.module';
import { MascotaModule } from '../mascota/mascota.module';
import { DeclaracionServiceModule } from 'src/app/services/declaracion-service.module';
import { DeclaracionService } from 'src/app/services/declaracion.service';

/* PrimeNg */
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from "primeng/api";
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';

import { ListadoHistorialVacunasComponent } from '../historial/components/listado-historial-vacunas/listado-historial-vacunas.component';
import { RegistrarHistorialVacunasComponent } from '../historial/components/registrar-historial-vacunas/registrar-historial-vacunas.component';
import { ListadoMascotaComponent } from '../mascota/components/listado-mascota/listado-mascota.component';
import { RegistrarMascotaComponent } from '../mascota/components/registrar-mascota/registrar-mascota.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListadoHistorialVacunasComponent,
    RegistrarHistorialVacunasComponent,
    ListadoMascotaComponent,
    RegistrarMascotaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DeclaracionServiceModule,

/* PrimeNg */
    TableModule,
    ButtonModule,
    ToolbarModule,
    PanelModule,
    DropdownModule,
    ConfirmDialogModule,
    AutoCompleteModule,
    InputTextModule,
    CalendarModule,
    TabViewModule,
    DialogModule,
    ToastModule
  ],
  providers:[DeclaracionService, ConfirmationService, MessageService]
 
})
export class HomeModule { }
