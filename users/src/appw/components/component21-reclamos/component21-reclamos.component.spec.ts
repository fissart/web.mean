import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component21RECLAMOSComponent } from './component21-reclamos.component';

describe('Component21RECLAMOSComponent', () => {
  let component: Component21RECLAMOSComponent;
  let fixture: ComponentFixture<Component21RECLAMOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component21RECLAMOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component21RECLAMOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
