import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureHallComponent } from './lecture-hall.component';

describe('LectureHallComponent', () => {
  let component: LectureHallComponent;
  let fixture: ComponentFixture<LectureHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LectureHallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LectureHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
