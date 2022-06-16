import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc12BIBLIOTECAComponent } from './svc12-biblioteca.component';

describe('Svc12BIBLIOTECAComponent', () => {
  let component: Svc12BIBLIOTECAComponent;
  let fixture: ComponentFixture<Svc12BIBLIOTECAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc12BIBLIOTECAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc12BIBLIOTECAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
