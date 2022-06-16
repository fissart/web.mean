import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component4LADMINISTRATIVOSComponent } from './component4-l-administrativos.component';

describe('Component4LADMINISTRATIVOSComponent', () => {
  let component: Component4LADMINISTRATIVOSComponent;
  let fixture: ComponentFixture<Component4LADMINISTRATIVOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component4LADMINISTRATIVOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component4LADMINISTRATIVOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
