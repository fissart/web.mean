import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosinstitucionalesComponent } from './documentosinstitucionales.component';

describe('DocumentosinstitucionalesComponent', () => {
  let component: DocumentosinstitucionalesComponent;
  let fixture: ComponentFixture<DocumentosinstitucionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosinstitucionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosinstitucionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
