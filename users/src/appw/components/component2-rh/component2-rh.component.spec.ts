import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2RHComponent } from './component2-rh.component';

describe('Component2RHComponent', () => {
  let component: Component2RHComponent;
  let fixture: ComponentFixture<Component2RHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component2RHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component2RHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
