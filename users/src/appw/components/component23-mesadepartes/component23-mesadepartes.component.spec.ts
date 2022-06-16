import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component23MESADEPARTESComponent } from './component23-mesadepartes.component';

describe('Component23MESADEPARTESComponent', () => {
  let component: Component23MESADEPARTESComponent;
  let fixture: ComponentFixture<Component23MESADEPARTESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component23MESADEPARTESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component23MESADEPARTESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
