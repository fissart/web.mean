import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component10TESISComponent } from './component10-tesis.component';

describe('Component10TESISComponent', () => {
  let component: Component10TESISComponent;
  let fixture: ComponentFixture<Component10TESISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component10TESISComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component10TESISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
