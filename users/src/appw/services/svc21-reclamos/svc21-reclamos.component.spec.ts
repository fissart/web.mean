import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc21RECLAMOSComponent } from './svc21-reclamos.component';

describe('Svc21RECLAMOSComponent', () => {
  let component: Svc21RECLAMOSComponent;
  let fixture: ComponentFixture<Svc21RECLAMOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc21RECLAMOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc21RECLAMOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
