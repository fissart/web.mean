import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component26NOTASComponent } from './component26-notas.component';

describe('Component26NOTASComponent', () => {
  let component: Component26NOTASComponent;
  let fixture: ComponentFixture<Component26NOTASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component26NOTASComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component26NOTASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
