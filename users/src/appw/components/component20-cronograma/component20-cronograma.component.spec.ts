import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component20CRONOGRAMAComponent } from './component20-cronograma.component';

describe('Component20CRONOGRAMAComponent', () => {
  let component: Component20CRONOGRAMAComponent;
  let fixture: ComponentFixture<Component20CRONOGRAMAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component20CRONOGRAMAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component20CRONOGRAMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
