import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component18DOCUMENTOSComponent } from './component18-documentos.component';

describe('Component18DOCUMENTOSComponent', () => {
  let component: Component18DOCUMENTOSComponent;
  let fixture: ComponentFixture<Component18DOCUMENTOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component18DOCUMENTOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component18DOCUMENTOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
