import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc25SILABOSComponent } from './svc25-silabos.component';

describe('Svc25SILABOSComponent', () => {
  let component: Svc25SILABOSComponent;
  let fixture: ComponentFixture<Svc25SILABOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc25SILABOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc25SILABOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
