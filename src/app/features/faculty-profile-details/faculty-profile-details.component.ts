import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Observable, Subject, takeUntil } from 'rxjs';
import { FacultyMember } from '../../models/FacultyMember';
import * as FacultySelectors  from '../../stores/facultyStore/faculty.selectors';
import * as FacultyActions   from '../../stores/facultyStore/faculty.actions';
import { Store } from '@ngrx/store';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-faculty-profile-details',
  standalone: true,
  imports: [NgIf,CommonModule],
  templateUrl: './faculty-profile-details.component.html',
  styleUrls: ['./faculty-profile-details.component.css']
})
export class FacultyProfileDetailsComponent implements OnInit, OnDestroy {
  facultyMember: FacultyMember | undefined;
  
  private ngUnsubscribe = new Subject<void>();
  route: ActivatedRoute=inject(ActivatedRoute);
  store: Store=inject(Store);
  wowService: NgwWowService=inject(NgwWowService);

  faculty$!: Observable<FacultyMember | null>;
  loading$: Observable<boolean> | undefined;
  error$: Observable<any> | undefined;
  private unsubscribe$ = new Subject<void>();
  facultyId: string | null = null;
  
  constructor(){
    this.faculty$ = this.store.select(FacultySelectors.selectSelectedFaculty);
    this.loading$ = this.store.select(FacultySelectors.selectFacultyLoading);
    this.error$ = this.store.select(FacultySelectors.selectFacultyError);
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.unsubscribe$)).subscribe(params => {
      this.facultyId = params.get('id');
      if (this.facultyId) {
        this.store.dispatch(FacultyActions.loadFaculty({ id: this.facultyId ? parseInt(this.facultyId) : 0 }));
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}