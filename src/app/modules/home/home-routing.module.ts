import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path: '', component: HomeComponent },
      { path: 'historial-vacunas', loadChildren: () => import('../historial/historial.module').then(m => m.HistorialModule) },
      { path: 'mascota', loadChildren: () => import('../mascota/mascota.module').then(m => m.MascotaModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
