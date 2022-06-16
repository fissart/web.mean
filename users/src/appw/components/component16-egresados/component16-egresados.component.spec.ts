import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component16EGRESADOSComponent } from './component16-egresados.component';

describe('Component16EGRESADOSComponent', () => {
  let component: Component16EGRESADOSComponent;
  let fixture: ComponentFixture<Component16EGRESADOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component16EGRESADOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component16EGRESADOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
