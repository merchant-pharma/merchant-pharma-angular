import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FacultyMember } from '../../models/FacultyMember';
import { facultyFeatureKey, FacultyState } from './faculty.reducer';

export const selectFacultyState = createFeatureSelector<FacultyState>(facultyFeatureKey);

export const selectAllFaculties = createSelector(
  selectFacultyState,
  (state) => state.faculties
);

export const selectFacultyLoading = createSelector(
  selectFacultyState,
  (state) => state.loading
);

export const selectFacultyError = createSelector(
  selectFacultyState,
  (state) => state.error
);

export const selectSelectedFaculty = createSelector(
  selectFacultyState,
  (state) => state.selectedFaculty
);