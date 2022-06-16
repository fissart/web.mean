import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc19ORGANIGRAMAComponent } from './svc19-organigrama.component';

describe('Svc19ORGANIGRAMAComponent', () => {
  let component: Svc19ORGANIGRAMAComponent;
  let fixture: ComponentFixture<Svc19ORGANIGRAMAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc19ORGANIGRAMAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc19ORGANIGRAMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
