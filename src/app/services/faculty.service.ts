import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacultyMember } from '../models/FacultyMember';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class FacultyService {
  private apiUrl = environment.apiUrl + '/Faculty';
  http: HttpClient=inject(HttpClient);

  getAllFaculties(): Observable<FacultyMember[]> {
    return this.http.get<FacultyMember[]>(`${this.apiUrl}/GetAll`);
  }

  getFacultyById(id: number): Observable<FacultyMember> {
    return this.http.get<FacultyMember>(`${this.apiUrl}/GetById/${id}`);
  }
}