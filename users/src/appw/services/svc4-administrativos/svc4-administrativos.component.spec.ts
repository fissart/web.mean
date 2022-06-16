import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc4ADMINISTRATIVOSComponent } from './svc4-administrativos.component';

describe('Svc4ADMINISTRATIVOSComponent', () => {
  let component: Svc4ADMINISTRATIVOSComponent;
  let fixture: ComponentFixture<Svc4ADMINISTRATIVOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc4ADMINISTRATIVOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc4ADMINISTRATIVOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
