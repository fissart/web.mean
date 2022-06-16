import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc18DOCUMENTOSComponent } from './svc18-documentos.component';

describe('Svc18DOCUMENTOSComponent', () => {
  let component: Svc18DOCUMENTOSComponent;
  let fixture: ComponentFixture<Svc18DOCUMENTOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc18DOCUMENTOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc18DOCUMENTOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
