import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component19ORGANIGRAMAComponent } from './component19-organigrama.component';

describe('Component19ORGANIGRAMAComponent', () => {
  let component: Component19ORGANIGRAMAComponent;
  let fixture: ComponentFixture<Component19ORGANIGRAMAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component19ORGANIGRAMAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component19ORGANIGRAMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
