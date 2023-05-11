import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-frontend';
  activeIndex: number = 0;
  constructor(private router: Router){

  }

  irHistorial(){    
    if(this.activeIndex == 0){
      this.router.navigateByUrl("/home/historial-vacunas").then();
    }else
    if(this.activeIndex == 1){
      this.router.navigateByUrl("/home/mascota").then();
    }
  }
}
