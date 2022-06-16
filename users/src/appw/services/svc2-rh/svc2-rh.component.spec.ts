import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc2RHComponent } from './svc2-rh.component';

describe('Svc2RHComponent', () => {
  let component: Svc2RHComponent;
  let fixture: ComponentFixture<Svc2RHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc2RHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc2RHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
