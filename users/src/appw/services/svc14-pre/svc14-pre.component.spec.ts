import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc14PREComponent } from './svc14-pre.component';

describe('Svc14PREComponent', () => {
  let component: Svc14PREComponent;
  let fixture: ComponentFixture<Svc14PREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc14PREComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc14PREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
