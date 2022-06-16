import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component12BIBLIOTECAComponent } from './component12-biblioteca.component';

describe('Component12BIBLIOTECAComponent', () => {
  let component: Component12BIBLIOTECAComponent;
  let fixture: ComponentFixture<Component12BIBLIOTECAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component12BIBLIOTECAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component12BIBLIOTECAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
