import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc15STDComponent } from './svc15-std.component';

describe('Svc15STDComponent', () => {
  let component: Svc15STDComponent;
  let fixture: ComponentFixture<Svc15STDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc15STDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc15STDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
