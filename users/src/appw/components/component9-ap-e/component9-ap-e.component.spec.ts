import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component9APEComponent } from './component9-ap-e.component';

describe('Component9APEComponent', () => {
  let component: Component9APEComponent;
  let fixture: ComponentFixture<Component9APEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component9APEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component9APEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
