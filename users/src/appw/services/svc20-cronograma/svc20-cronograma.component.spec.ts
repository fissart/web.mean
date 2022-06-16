import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svc20CRONOGRAMAComponent } from './svc20-cronograma.component';

describe('Svc20CRONOGRAMAComponent', () => {
  let component: Svc20CRONOGRAMAComponent;
  let fixture: ComponentFixture<Svc20CRONOGRAMAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Svc20CRONOGRAMAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Svc20CRONOGRAMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
