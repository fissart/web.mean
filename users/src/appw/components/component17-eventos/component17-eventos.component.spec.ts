import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component17EVENTOSComponent } from './component17-eventos.component';

describe('Component17EVENTOSComponent', () => {
  let component: Component17EVENTOSComponent;
  let fixture: ComponentFixture<Component17EVENTOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component17EVENTOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component17EVENTOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
