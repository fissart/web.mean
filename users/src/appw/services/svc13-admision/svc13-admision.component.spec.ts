import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc13ADMISIONComponent } from './svc13-admision.component';

describe('Svc13ADMISIONComponent', () => {
  let component: Svc13ADMISIONComponent;
  let fixture: ComponentFixture<Svc13ADMISIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc13ADMISIONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc13ADMISIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
