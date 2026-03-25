import { ComponentFixture, TestBed } from '@angular/core/testing';

// 1. Importamos el nombre real de la clase
import { GaleriaComponent } from './galeria';

describe('Galeria', () => {
  // 2 y 3. Actualizamos las variables
  let component: GaleriaComponent;
  let fixture: ComponentFixture<GaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 4. Actualizamos el import del módulo
      imports: [GaleriaComponent],
    }).compileComponents();

    // 5. Actualizamos la creación del componente
    fixture = TestBed.createComponent(GaleriaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
