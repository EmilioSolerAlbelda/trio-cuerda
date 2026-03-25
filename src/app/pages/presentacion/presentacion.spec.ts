import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentacionComponent } from './presentacion';

describe('Presentacion', () => {
  let component: PresentacionComponent;
  let fixture: ComponentFixture<PresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
