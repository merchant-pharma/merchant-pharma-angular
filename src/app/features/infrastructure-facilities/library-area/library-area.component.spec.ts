import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAreaComponent } from './library-area.component';

describe('LibraryAreaComponent', () => {
  let component: LibraryAreaComponent;
  let fixture: ComponentFixture<LibraryAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
