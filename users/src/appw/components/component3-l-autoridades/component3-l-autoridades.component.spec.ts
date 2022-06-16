import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component3LAUTORIDADESComponent } from './component3-l-autoridades.component';

describe('Component3LAUTORIDADESComponent', () => {
  let component: Component3LAUTORIDADESComponent;
  let fixture: ComponentFixture<Component3LAUTORIDADESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component3LAUTORIDADESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component3LAUTORIDADESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
