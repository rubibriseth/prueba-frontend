import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DeclaracionService } from 'src/app/services/declaracion.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Mascota } from 'src/app/models/mascota.model';
import { HistorialVacuna } from 'src/app/models/historialVacuna.model';
import { SubjectHistorialVacunaService } from 'src/app/core/services/subject-historialVacuna.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-registrar-historial-vacunas',
  templateUrl: './registrar-historial-vacunas.component.html',
  styleUrls: ['./registrar-historial-vacunas.component.css']
})
export class RegistrarHistorialVacunasComponent implements OnInit, OnDestroy {

  listaMascota: Mascota[] = [];
  listaEstado: any[] = [];
  form: FormGroup = {} as FormGroup;
  dataHistorial: HistorialVacuna;
  esEditar: boolean = false;

  filteredMascotas: any[];

  private confirmarEsEditarSubs: Subscription | undefined;
  private emitirDataHistorialSubs: Subscription | undefined;

  constructor(
    private _declaracionService: DeclaracionService,
    private router: Router,
    private formBuilder: FormBuilder,
    private _historialVacunaService: SubjectHistorialVacunaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) 
  {}

  ngOnInit(): void {
    this.buildForm();
    this.obtenerListaMascota();
    this.getListaEstado();

    this.emitirDataHistorialSubs = this._historialVacunaService.$dataHistorialVacuna.subscribe(rs => this.dataHistorial = rs);
    
    this.confirmarEsEditarSubs = this._historialVacunaService.$esEditar.subscribe(rs => this.esEditar = rs);
    if(this.esEditar) {
      this.loadMascotaForm(this.dataHistorial);
    }
  }

  ngOnDestroy(): void {
    this.confirmarEsEditarSubs?.unsubscribe();
    this.emitirDataHistorialSubs?.unsubscribe();
  }

  buildForm(){
    this.form = this.formBuilder.group({
      id: [{value: '', disabled: false}],
      mascota: [{value: '', disabled: false}, [Validators.required]],
      tipoVacuna: [{value: '', disabled: false}, [Validators.required]],
      fecha: [{value: '', disabled: false}, [Validators.required]],
      observacion: [{value: '', disabled: false}],
      estado: [{value: '', disabled: false}, [Validators.required]],
    });
  }

  loadMascotaForm(historial: HistorialVacuna) {
    console.log('data hist', historial);
    
    this.form.controls['id'].patchValue(historial.idHistorial);
    this.form.controls['mascota'].patchValue(historial.mascota?.idMascota );
    //this.form.get('mascota')?.setValue(this.dataHistorial.mascota?.nombre);
    this.form.controls['tipoVacuna'].patchValue(historial.tipoVacuna);
    this.form.controls['fecha'].patchValue(new Date(String(historial.fecha)));
    this.form.controls['observacion'].patchValue(historial.observacion);
    this.form.controls['estado'].patchValue(historial.estado);
    //this.filteredMascotas = filtered;
  }

  obtenerListaMascota(){
    this._declaracionService.obtenerListaMascota().subscribe(rs => {
      this.listaMascota = rs
    })
  }

  getListaEstado(){
    this.listaEstado = [
      {id: '1', nombre: 'APLICADO'},
      {id: '2', nombre: 'PENDIENTE'},
      {id: '3', nombre: 'DESCARTADO'}
    ];
  }

  cancelar(){
    this.router.navigateByUrl("/home/historial-vacunas").then();
  }

  registrarHistorialVacuna(){
    if(this.listaMascota.length == 0){
      this.showMensaje();

    }else{
      if(this.form.invalid){
        this.form.markAllAsTouched();

      }else{
        let body = this.bodyHistorialVacuna();
  
        this._declaracionService.registrarHistorialVacuna(body).subscribe( rs => {      
          this.router.navigateByUrl("/home/historial-vacunas").then();
        });
      }      
    }

  }

  actualizarHistorialVacuna(){
    if(this.listaMascota.length == 0){
      this.showMensaje();

    }else{
      if(this.form.invalid){
        this.form.markAllAsTouched();

      }else{
        let body = this.bodyHistorialVacuna();      
    
        this._declaracionService.actualizarHistorialVacuna(body, this.dataHistorial.idHistorial || '').subscribe( rs => {      
          this.router.navigateByUrl("/home/historial-vacunas").then();
        });
      }
    }  
  }

  filterMascota(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.listaMascota.length; i++) {
        let mascota = this.listaMascota[i];
        if (mascota.nombre || ''.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(mascota);
        }
    }
    
    this.filteredMascotas = filtered;
  }

  valorErrorMsg(valor: string): string {
    const errors = this.form.get(valor)?.errors;
    if (errors?.['required']) {
      return 'Campo Obligatorio *';
    } 

    return '';
  }


  campoEsValido(campo: string) {
    return this.form.controls[campo]?.errors && this.form.controls[campo]?.touched;
  }

  bodyHistorialVacuna(): Mascota{
    return {
      idMascota: this.form.get('mascota')?.value,
      tipoVacuna: this.form.get('tipoVacuna')?.value,
      fecha: this.form.get('fecha')?.value,
      observacion: this.form.get('observacion')?.value,
      estado: this.form.get('estado')?.value
    } as Mascota
  }

  showMensaje() {
    this.messageService.add({ severity: 'warn', summary: 'ERROR', detail: 'Debe registrar una Mascota previamente' });
  }

}
