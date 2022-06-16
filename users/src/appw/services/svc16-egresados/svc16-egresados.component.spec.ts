import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc16EGRESADOSComponent } from './svc16-egresados.component';

describe('Svc16EGRESADOSComponent', () => {
  let component: Svc16EGRESADOSComponent;
  let fixture: ComponentFixture<Svc16EGRESADOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc16EGRESADOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc16EGRESADOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
