import {environment} from "../../environments/environment.dev";

export class AppEndpointConfig {
  listaMascota: string = environment.urlBase + "/pluton/mascota/lista";
  registrarMascota: string =  environment.urlBase + "/pluton/mascota/guardar";
  actualizarMascota: string =  environment.urlBase + "/pluton/mascota/actualizar";
  eliminarMascota: string =  environment.urlBase + "/pluton/mascota/eliminar";

  listaHistorial: string = environment.urlBase + "/pluton/historialvacunas/lista";
  registrarHistorial: string = environment.urlBase + "/pluton/historialvacunas/guardar";
  actualizarHistorial: string = environment.urlBase + "/pluton/historialvacunas/actualizar";
  eliminarHistorial: string = environment.urlBase + "/pluton/historialvacunas/eliminar";
}

