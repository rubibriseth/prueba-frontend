import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DeclaracionService } from './declaracion.service';
import { AppEndpointConfig } from '../utils/app-endpoint-config';

@NgModule({
  declarations: [],
  imports: [    
    CommonModule,
    HttpClientModule
  ],
  providers: [
    DeclaracionService,
    AppEndpointConfig
  ]
})
export class DeclaracionServiceModule { }
