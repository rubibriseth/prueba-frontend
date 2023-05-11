import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoHistorialVacunasComponent } from './listado-historial-vacunas.component';

describe('ListadoHistorialVacunasComponent', () => {
  let component: ListadoHistorialVacunasComponent;
  let fixture: ComponentFixture<ListadoHistorialVacunasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoHistorialVacunasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoHistorialVacunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
