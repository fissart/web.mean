import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc1MVComponent } from './svc1-mv.component';

describe('Svc1MVComponent', () => {
  let component: Svc1MVComponent;
  let fixture: ComponentFixture<Svc1MVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc1MVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc1MVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
