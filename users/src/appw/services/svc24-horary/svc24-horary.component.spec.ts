import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc24HORARYComponent } from './svc24-horary.component';

describe('Svc24HORARYComponent', () => {
  let component: Svc24HORARYComponent;
  let fixture: ComponentFixture<Svc24HORARYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc24HORARYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc24HORARYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
