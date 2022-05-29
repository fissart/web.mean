import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosacademicosComponent } from './eventosacademicos.component';

describe('EventosacademicosComponent', () => {
  let component: EventosacademicosComponent;
  let fixture: ComponentFixture<EventosacademicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosacademicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosacademicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
