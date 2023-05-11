import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppEndpointConfig } from '../utils/app-endpoint-config';
import { Mascota } from '../models/mascota.model';
import { HistorialVacuna } from '../models/historialVacuna.model';

@Injectable({
  providedIn: 'root'
})
export class DeclaracionService {

  private readonly URL_LISTA_MASCOTA: string;
  private readonly URL_REGISTRAR_MASCOTA: string;
  private readonly URL_ACTUALIZAR_MASCOTA: string;
  private readonly URL_ELIMINAR_MASCOTA: string;
  private readonly URL_LISTA_HISTORIAL: string;
  private readonly URL_REGISTRAR_HISTORIAL: string;
  private readonly URL_ACTUALIZAR_HISTORIAL: string;
  private readonly URL_ELIMINAR_HISTORIAL: string;

  constructor(private http: HttpClient,
              private appEndpointConfig: AppEndpointConfig) 
  {
    this.URL_LISTA_MASCOTA = appEndpointConfig.listaMascota;
    this.URL_REGISTRAR_MASCOTA = appEndpointConfig.registrarMascota;
    this.URL_ACTUALIZAR_MASCOTA = appEndpointConfig.actualizarMascota;
    this.URL_ELIMINAR_MASCOTA = appEndpointConfig.eliminarMascota;
    this.URL_LISTA_HISTORIAL = appEndpointConfig.listaHistorial;
    this.URL_REGISTRAR_HISTORIAL = appEndpointConfig.registrarHistorial;
    this.URL_ACTUALIZAR_HISTORIAL = appEndpointConfig.actualizarHistorial;
    this.URL_ELIMINAR_HISTORIAL = appEndpointConfig.eliminarHistorial;
  }

  public obtenerListaMascota(): Observable<any> {
    const url = this.URL_LISTA_MASCOTA;
    return this.http.get<Mascota>(`${url}`);
  }

  public registrarMascota(body: Mascota): Observable<any> {
    const url = this.URL_REGISTRAR_MASCOTA;
    return this.http.post<any>(url, body);
  }

  public actualizarMascota(body: Mascota, id: string): Observable<any> {
    const url = this.URL_ACTUALIZAR_MASCOTA+'/'+id;
    return this.http.put<any>(url, body);
  }

  public eliminarMascota(id: string): Observable<any> {
    const url = this.URL_ELIMINAR_MASCOTA+'/'+id;
    return this.http.delete<any>(url);
  }

  public obtenerListaHistorialVacuna(): Observable<any> {
    const url = this.URL_LISTA_HISTORIAL;
    return this.http.get<HistorialVacuna>(`${url}`);
  }

  public registrarHistorialVacuna(body: HistorialVacuna): Observable<any> {
    const url = this.URL_REGISTRAR_HISTORIAL;
    return this.http.post<any>(url, body);
  }

  public actualizarHistorialVacuna(body: HistorialVacuna, id: string): Observable<any> {
    const url = this.URL_ACTUALIZAR_HISTORIAL+'/'+id;
    return this.http.put<any>(url, body);
  }

  public eliminarHistorialVacuna(id: string): Observable<any> {
    const url = this.URL_ELIMINAR_HISTORIAL+'/'+id;
    return this.http.delete<any>(url);
  }

}