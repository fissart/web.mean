import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc17EVENTOSComponent } from './svc17-eventos.component';

describe('Svc17EVENTOSComponent', () => {
  let component: Svc17EVENTOSComponent;
  let fixture: ComponentFixture<Svc17EVENTOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc17EVENTOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc17EVENTOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
