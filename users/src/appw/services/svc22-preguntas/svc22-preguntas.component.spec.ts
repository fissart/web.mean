import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc22PREGUNTASComponent } from './svc22-preguntas.component';

describe('Svc22PREGUNTASComponent', () => {
  let component: Svc22PREGUNTASComponent;
  let fixture: ComponentFixture<Svc22PREGUNTASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc22PREGUNTASComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc22PREGUNTASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
