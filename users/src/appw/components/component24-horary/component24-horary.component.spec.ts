import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component24HORARYComponent } from './component24-horary.component';

describe('Component24HORARYComponent', () => {
  let component: Component24HORARYComponent;
  let fixture: ComponentFixture<Component24HORARYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component24HORARYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component24HORARYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
