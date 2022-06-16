import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc5CONSEJOESTUDIANTILComponent } from './svc5-consejoestudiantil.component';

describe('Svc5CONSEJOESTUDIANTILComponent', () => {
  let component: Svc5CONSEJOESTUDIANTILComponent;
  let fixture: ComponentFixture<Svc5CONSEJOESTUDIANTILComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc5CONSEJOESTUDIANTILComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc5CONSEJOESTUDIANTILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
