import { createReducer, on } from '@ngrx/store';
import * as FacultyActions from './faculty.actions';
import { FacultyMember } from '../../models/FacultyMember';

export const facultyFeatureKey = 'faculties';

export interface FacultyState {
  faculties: FacultyMember[];
  loading: boolean;
  error: any;
  selectedFaculty: FacultyMember | null;
}

export const initialState: FacultyState = {
  faculties: [],
  loading: false,
  error: null,
  selectedFaculty: null,
};

export const facultyReducer = createReducer(
  initialState,
  on(FacultyActions.loadFaculties, (state) => ({ ...state, loading: true, error: null })),
  on(FacultyActions.loadFacultiesSuccess, (state, { faculties }) => ({
    ...state,
    faculties: faculties.map(faculty => ({ ...faculty, joiningDate: new Date(faculty.joiningDate) })),
    loading: false,
  })),
  on(FacultyActions.loadFacultiesFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(FacultyActions.loadFaculty, (state) => ({ ...state, loading: true, error: null, selectedFaculty: null })),
  on(FacultyActions.loadFacultySuccess, (state, { faculty }) => ({
    ...state,
    selectedFaculty: { ...faculty, joiningDate: new Date(faculty.joiningDate) },
    loading: false,
  })),
  on(FacultyActions.loadFacultyFailure, (state, { error }) => ({ ...state, loading: false, error, selectedFaculty: null })),
);
