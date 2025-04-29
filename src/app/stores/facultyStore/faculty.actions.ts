import { createAction, props } from '@ngrx/store';
import { FacultyMember } from '../../models/FacultyMember';

export const loadFaculties = createAction('[Faculty] Load Faculties');
export const loadFacultiesSuccess = createAction(
  '[Faculty] Load Faculties Success',
  props<{ faculties: FacultyMember[] }>()
);
export const loadFacultiesFailure = createAction(
  '[Faculty] Load Faculties Failure',
  props<{ error: any }>()
);

export const loadFaculty = createAction('[Faculty] Load Faculty', props<{ id: number }>());
export const loadFacultySuccess = createAction(
  '[Faculty] Load Faculty Success',
  props<{ faculty: FacultyMember }>()
);
export const loadFacultyFailure = createAction(
  '[Faculty] Load Faculty Failure',
  props<{ error: any }>()
);