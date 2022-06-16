import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component13ADMISIONComponent } from './component13-admision.component';

describe('Component13ADMISIONComponent', () => {
  let component: Component13ADMISIONComponent;
  let fixture: ComponentFixture<Component13ADMISIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component13ADMISIONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component13ADMISIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
