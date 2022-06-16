import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component14PREComponent } from './component14-pre.component';

describe('Component14PREComponent', () => {
  let component: Component14PREComponent;
  let fixture: ComponentFixture<Component14PREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component14PREComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component14PREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
