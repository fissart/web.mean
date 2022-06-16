import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc8APGComponent } from './svc8-ap-g.component';

describe('Svc8APGComponent', () => {
  let component: Svc8APGComponent;
  let fixture: ComponentFixture<Svc8APGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc8APGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc8APGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
