import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc23MESADEPARTESComponent } from './svc23-mesadepartes.component';

describe('Svc23MESADEPARTESComponent', () => {
  let component: Svc23MESADEPARTESComponent;
  let fixture: ComponentFixture<Svc23MESADEPARTESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc23MESADEPARTESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc23MESADEPARTESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
