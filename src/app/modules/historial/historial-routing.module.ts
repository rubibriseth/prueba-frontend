import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoHistorialVacunasComponent } from './components/listado-historial-vacunas/listado-historial-vacunas.component';
import { RegistrarHistorialVacunasComponent } from './components/registrar-historial-vacunas/registrar-historial-vacunas.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path: 'listado', component: ListadoHistorialVacunasComponent },
      { path: 'registrar', component: RegistrarHistorialVacunasComponent },
      { path: '**', redirectTo: 'listado' }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialRoutingModule { }
