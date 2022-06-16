import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component22PREGUNTASComponent } from './component22-preguntas.component';

describe('Component22PREGUNTASComponent', () => {
  let component: Component22PREGUNTASComponent;
  let fixture: ComponentFixture<Component22PREGUNTASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component22PREGUNTASComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component22PREGUNTASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
