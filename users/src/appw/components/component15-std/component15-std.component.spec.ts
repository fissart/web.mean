import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component15STDComponent } from './component15-std.component';

describe('Component15STDComponent', () => {
  let component: Component15STDComponent;
  let fixture: ComponentFixture<Component15STDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component15STDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component15STDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
