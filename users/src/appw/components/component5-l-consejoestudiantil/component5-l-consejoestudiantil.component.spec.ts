import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component5LCONSEJOESTUDIANTILComponent } from './component5-l-consejoestudiantil.component';

describe('Component5LCONSEJOESTUDIANTILComponent', () => {
  let component: Component5LCONSEJOESTUDIANTILComponent;
  let fixture: ComponentFixture<Component5LCONSEJOESTUDIANTILComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component5LCONSEJOESTUDIANTILComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component5LCONSEJOESTUDIANTILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
