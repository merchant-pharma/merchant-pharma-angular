// import { inject, Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { FacultyMember } from '../models/FacultyMember';
// import { environment } from '../../environments/environment';
// @Injectable({
//   providedIn: 'root',
// })
// export class FacultyService {
//   private apiUrl = environment.apiUrl + '/Faculty';
//   http: HttpClient=inject(HttpClient);

//   getAllFaculties(): Observable<FacultyMember[]> {
//     return this.http.get<FacultyMember[]>(`${this.apiUrl}/GetAll`);
//   }

//   getFacultyById(id: number): Observable<FacultyMember> {
//     return this.http.get<FacultyMember>(`${this.apiUrl}/GetById/${id}`);
//   }
// }

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FacultyMember } from '../models/FacultyMember';

@Injectable({
  providedIn: 'root',
})
export class FacultyService {

  private mockFacultyList: FacultyMember[] = [
    { id: 1, name: 'Dr. Laxmanbhai Prajapati', designation: 'Principal', specialization: 'Pharma Chemistry', contactNumber: '9427340043', joiningDate: new Date('2024-12-01') },
    { id: 2, name: 'Dr. Bhoomi Patel', designation: 'Associate Professor', specialization: 'Quality Assurance', contactNumber: '8460474756', joiningDate: new Date('2025-02-01') },
    { id: 3, name: 'Khushbu Patel', designation: 'Assistant Professor', specialization: 'Quality Assurance', contactNumber: '9714760662', joiningDate: new Date('2023-02-01') },
    { id: 4, name: 'Kruti Bhatt', designation: 'Assistant Professor', specialization: 'Pharma Ceutics', contactNumber: '8238490510', joiningDate: new Date('2024-03-01') },
    { id: 5, name: 'Zalak Patel', designation: 'Assistant Professor', specialization: 'Quality Assurance', contactNumber: '9426305041', joiningDate: new Date('2023-09-11') },
    { id: 6, name: 'Apurva Barot', designation: 'Assistant Professor', specialization: 'Pharma Cology', contactNumber: '9428386883', joiningDate: new Date('2024-08-05') },
    { id: 7, name: 'Kena Patel', designation: 'Assistant Professor', specialization: 'Pharma Chemistry', contactNumber: '9537674637', joiningDate: new Date('2024-06-01') },
    { id: 8, name: 'Mit Patel', designation: 'Assistant Professor', specialization: 'Pharma Ceutics', contactNumber: '9727193410', joiningDate: new Date('2025-02-15') },
    { id: 9, name: 'Ruchit Patel', designation: 'Assistant Professor', specialization: 'Quality Assurance', contactNumber: '9974155132', joiningDate: new Date('2025-02-17') },
    { id: 10, name: 'Riya Patel', designation: 'Assistant Professor', specialization: 'Pharma Cology', contactNumber: '9265223007', joiningDate: new Date('2025-02-17') },
    { id: 11, name: 'Kunjan Patel', designation: 'Assistant Professor', specialization: 'Quality Assurance', contactNumber: '9586281205', joiningDate: new Date('2025-02-24') },
    { id: 12, name: 'Kushal Saini', designation: 'Assistant Professor', specialization: 'Pharma Ceutics', contactNumber: '9427672857', joiningDate: new Date('2025-03-10') },
    { id: 13, name: 'Parth Jayswal', designation: 'Assistant Professor', specialization: 'Pharma Ceutics', contactNumber: '9327833287', joiningDate: new Date('2025-03-03') },
    { id: 14, name: 'Ravi Pathani', designation: 'Assistant Professor', specialization: 'Pharma Ceutics', contactNumber: '7984402132', joiningDate: new Date('2025-03-15') },
  ];

  getAllFaculties(): Observable<FacultyMember[]> {
    return of(this.mockFacultyList);
  }

  getFacultyById(id: number): Observable<FacultyMember> {
    const faculty = this.mockFacultyList.find(f => f.id === id)!;
    return of(faculty);
  }
  
}
