import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component7APPComponent } from './component7-ap-p.component';

describe('Component7APPComponent', () => {
  let component: Component7APPComponent;
  let fixture: ComponentFixture<Component7APPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component7APPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component7APPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
