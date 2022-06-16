import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc3AUTORIDADESComponent } from './svc3-autoridades.component';

describe('Svc3AUTORIDADESComponent', () => {
  let component: Svc3AUTORIDADESComponent;
  let fixture: ComponentFixture<Svc3AUTORIDADESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc3AUTORIDADESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc3AUTORIDADESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
