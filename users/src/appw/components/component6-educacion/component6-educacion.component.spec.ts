import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component6EDUCACIONComponent } from './component6-educacion.component';

describe('Component6EDUCACIONComponent', () => {
  let component: Component6EDUCACIONComponent;
  let fixture: ComponentFixture<Component6EDUCACIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component6EDUCACIONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component6EDUCACIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
