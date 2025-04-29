import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as FacultyActions from './faculty.actions';
import { FacultyMember } from '../../models/FacultyMember';
import { FacultyService } from '../../services/faculty.service';

@Injectable()
export class FacultyEffects {

  actions$: Actions=inject(Actions);
  facultyService: FacultyService=inject(FacultyService);

  loadFaculties$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FacultyActions.loadFaculties),
      mergeMap(() =>
        this.facultyService.getAllFaculties().pipe(
          map((faculties: FacultyMember[]) => FacultyActions.loadFacultiesSuccess({ faculties })),
          catchError((error) => of(FacultyActions.loadFacultiesFailure({ error })))
        )
      )
    )
  );

  loadFaculty$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FacultyActions.loadFaculty),
      mergeMap((action) =>
        this.facultyService.getFacultyById(action.id).pipe(
          map((faculty: FacultyMember) => FacultyActions.loadFacultySuccess({ faculty })),
          catchError((error) => of(FacultyActions.loadFacultyFailure({ error })))
        )
      )
    )
  );  
}