import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeAreaComponent } from './administrative-area.component';

describe('AdministrativeAreaComponent', () => {
  let component: AdministrativeAreaComponent;
  let fixture: ComponentFixture<AdministrativeAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrativeAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrativeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
