import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component25SILABOSComponent } from './component25-silabos.component';

describe('Component25SILABOSComponent', () => {
  let component: Component25SILABOSComponent;
  let fixture: ComponentFixture<Component25SILABOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component25SILABOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component25SILABOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
