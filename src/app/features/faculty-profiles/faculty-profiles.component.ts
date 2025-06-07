import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import * as FacultySelectors  from '../../stores/facultyStore/faculty.selectors';
import * as FacultyActions   from '../../stores/facultyStore/faculty.actions';
import { FacultyMember } from '../../models/FacultyMember';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faculty-profiles',
  templateUrl: './faculty-profiles.component.html',
  styleUrls: ['./faculty-profiles.component.css'],
  imports:[RouterLink,CommonModule]
})
export class FacultyProfilesComponent implements OnInit, OnDestroy {
  faculties$: Observable<FacultyMember[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store) {
    this.faculties$ = this.store.select(FacultySelectors.selectAllFaculties);
    this.loading$ = this.store.select(FacultySelectors.selectFacultyLoading);
    this.error$ = this.store.select(FacultySelectors.selectFacultyError);
  }

  ngOnInit(): void {
    this.store.dispatch(FacultyActions.loadFaculties());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}