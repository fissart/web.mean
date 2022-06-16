import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc7APPComponent } from './svc7-ap-p.component';

describe('Svc7APPComponent', () => {
  let component: Svc7APPComponent;
  let fixture: ComponentFixture<Svc7APPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc7APPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc7APPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
