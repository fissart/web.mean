import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component8APGComponent } from './component8-ap-g.component';

describe('Component8APGComponent', () => {
  let component: Component8APGComponent;
  let fixture: ComponentFixture<Component8APGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component8APGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component8APGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
