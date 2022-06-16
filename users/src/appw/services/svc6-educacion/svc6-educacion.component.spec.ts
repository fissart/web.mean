import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc6EDUCACIONComponent } from './svc6-educacion.component';

describe('Svc6EDUCACIONComponent', () => {
  let component: Svc6EDUCACIONComponent;
  let fixture: ComponentFixture<Svc6EDUCACIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc6EDUCACIONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc6EDUCACIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
