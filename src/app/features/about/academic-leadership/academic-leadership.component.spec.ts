import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicLeadershipComponent } from './academic-leadership.component';

describe('AcademicLeadershipComponent', () => {
  let component: AcademicLeadershipComponent;
  let fixture: ComponentFixture<AcademicLeadershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicLeadershipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
