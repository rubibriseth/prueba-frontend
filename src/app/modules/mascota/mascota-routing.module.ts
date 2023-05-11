import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoMascotaComponent } from './components/listado-mascota/listado-mascota.component';
import { RegistrarMascotaComponent } from './components/registrar-mascota/registrar-mascota.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path: 'listado', component: ListadoMascotaComponent },
      { path: 'registrar', component: RegistrarMascotaComponent },
      { path: '**', redirectTo: 'listado' },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotaRoutingModule { }
