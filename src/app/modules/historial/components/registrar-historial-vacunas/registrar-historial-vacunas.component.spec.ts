import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarHistorialVacunasComponent } from './registrar-historial-vacunas.component';

describe('RegistrarHistorialVacunasComponent', () => {
  let component: RegistrarHistorialVacunasComponent;
  let fixture: ComponentFixture<RegistrarHistorialVacunasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarHistorialVacunasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarHistorialVacunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
