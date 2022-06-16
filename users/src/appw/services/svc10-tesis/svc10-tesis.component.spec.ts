import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc10TESISComponent } from './svc10-tesis.component';

describe('Svc10TESISComponent', () => {
  let component: Svc10TESISComponent;
  let fixture: ComponentFixture<Svc10TESISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc10TESISComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc10TESISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
