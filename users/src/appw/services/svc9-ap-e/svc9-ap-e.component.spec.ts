import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc9APEComponent } from './svc9-ap-e.component';

describe('Svc9APEComponent', () => {
  let component: Svc9APEComponent;
  let fixture: ComponentFixture<Svc9APEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc9APEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc9APEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
