import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1MVComponent } from './component1-mv.component';

describe('Component1MVComponent', () => {
  let component: Component1MVComponent;
  let fixture: ComponentFixture<Component1MVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component1MVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1MVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
