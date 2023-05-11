import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DeclaracionService } from 'src/app/services/declaracion.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Mascota } from 'src/app/models/mascota.model';
import { SubjectMascotaService } from 'src/app/core/services/subject-mascota.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registrar-mascota',
  templateUrl: './registrar-mascota.component.html',
  styleUrls: ['./registrar-mascota.component.css']
})
export class RegistrarMascotaComponent implements OnInit, OnDestroy {

  listaRaza: any[] = [];
  form: FormGroup = {} as FormGroup;
  dataMascota: Mascota;
  esEditar: boolean = false;

  private confirmarEsEditarSubs: Subscription | undefined;
  private emitirDataMascotaSubs: Subscription | undefined;

  constructor(
    private _declaracionService: DeclaracionService,
    private router: Router,
    private formBuilder: FormBuilder,
    private _mascotaService: SubjectMascotaService){

  }

  ngOnInit(): void {
    this.buildForm();
    this.listaRaza = [
      {id: '1', nombre: 'Chihuahua'},
      {id: '2', nombre: 'Beagle'},
      {id: '3', nombre: 'Caniche'},
      {id: '4', nombre: 'Bulldog Francés'},
      {id: '5', nombre: 'Pitbull'},
      {id: '6', nombre: 'Salchicha'},
      {id: '7', nombre: 'Pastor Aleman'},
      {id: '8', nombre: 'Golden'},
      {id: '9', nombre: 'Snawser'},
      {id: '10', nombre: 'Mestizo'}
    ];

    this.emitirDataMascotaSubs = this._mascotaService.$dataMascota.subscribe(rs => this.dataMascota = rs);
    
    this.confirmarEsEditarSubs = this._mascotaService.$esEditar.subscribe(rs => this.esEditar = rs);
    if(this.esEditar) {
      this.loadMascotaForm(this.dataMascota);
    }
  }

  ngOnDestroy(): void {
    this.confirmarEsEditarSubs?.unsubscribe();
    this.emitirDataMascotaSubs?.unsubscribe();
  }

  buildForm(){
    this.form = this.formBuilder.group({
      id: [{value: '', disabled: false}],
      nombre: [{value: '', disabled: false}, [Validators.required]],
      raza: [{value: '', disabled: false}, [Validators.required]],
      edad: [{value: '', disabled: false}, [Validators.required]],
      peso: [{value: '', disabled: false}, [Validators.required]],
    });
  }

  loadMascotaForm(mascota: Mascota) {
    this.form.controls['nombre'].patchValue(mascota.nombre);
    this.form.controls['raza'].patchValue(mascota.raza);
    this.form.controls['edad'].patchValue(mascota.edad);
    this.form.controls['peso'].patchValue(mascota.peso);
   
  }

  cancelar(){
    this.router.navigateByUrl("/home/mascota").then();
  }

  registrarMascota(){
    if(this.form.invalid){
      this.form.markAllAsTouched();

    }else{
      let body = this.bodyMascota();

      this._declaracionService.registrarMascota(body).subscribe( rs => {      
        this.router.navigateByUrl("/home/mascota").then();
      });
    }
  }

  actualizarMascota(){
    if(this.form.invalid){
      this.form.markAllAsTouched();

    }else{
      let body = this.bodyMascota();  
      this._declaracionService.actualizarMascota(body, this.dataMascota.idMascota || '').subscribe( rs => {      
        this.router.navigateByUrl("/home/mascota").then();
      });
    }
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


  bodyMascota(): Mascota{
    return {
      nombre: this.form.get('nombre')?.value,
      raza: this.form.get('raza')?.value,
      edad: this.form.get('edad')?.value,
      peso: this.form.get('peso')?.value,
      indEliminado: 0
    } as Mascota
  }
  
}
