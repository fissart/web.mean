import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsejoestudiantilComponent } from './consejoestudiantil.component';

describe('ConsejoestudiantilComponent', () => {
  let component: ConsejoestudiantilComponent;
  let fixture: ComponentFixture<ConsejoestudiantilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsejoestudiantilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsejoestudiantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
