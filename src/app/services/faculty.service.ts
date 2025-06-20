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
    { id: 1, name: 'Dr.Laxman Prajapati', designation: 'Principal', specialization: '', contactNumber: '', joiningDate: new Date(''), email: 'laxchem@rediffmail.com' },
    { id: 2, name: 'Dr.Bhoomi M. Patel', designation: 'Asso.Proff.', specialization: '', contactNumber: '', joiningDate: new Date(''), email: 'bhoomi16692@gmail.com' },
    { id: 3, name: 'Patel Khushbu V.', designation: 'Asst.Proff.', specialization: '', contactNumber: '', joiningDate: new Date(''), email: 'khushbuv4979@gmail.com' },
    { id: 4, name: 'Patel Mit Jitendrakumar', designation: 'Asst.Proff.', specialization: '', contactNumber: '', joiningDate: new Date(''), email: 'mit444p@gmail.com' },
    { id: 5, name: 'Patel Kunjan Harshdbhai', designation: 'Asst.Proff.', specialization: '', contactNumber: '', joiningDate: new Date(''), email: 'kunjanpatel6944@gmail.com' },
    { id: 6, name: 'Patel Ruchitkumar Vishnubhai', designation: 'Asst.Proff.', specialization: '', contactNumber: '', joiningDate: new Date(''), email: 'ruchitpatel316@gmail.com' },
    { id: 7, name: 'Patel Riya Pareshkumar', designation: 'Asst.Proff.', specialization: '', contactNumber: '', joiningDate: new Date(''), email: 'riyapatel6336@gmail.com' },
    { id: 8, name: 'Patel kena Gauravbhai', designation: 'Asst.Proff.', specialization: '', contactNumber: '', joiningDate: new Date(''), email: '' },
    { id: 9, name: 'Ravi M. Pethani', designation: 'Asst.Proff.', specialization: '', contactNumber: '', joiningDate: new Date(''), email: 'ravipethani1776@gmail.com' },
    { id: 10, name: 'Jayswal J. Parth', designation: 'Asst.Proff.', specialization: '', contactNumber: '', joiningDate: new Date(''), email: 'parthjayswal0645@gmail.com' },
    { id: 11, name: 'Kushal A.Saini', designation: 'Asst.Proff.', specialization: '', contactNumber: '', joiningDate: new Date(''), email: 'sainikushal87@gmail.com' },
    { id: 12, name: 'PATEL MOSAM P.', designation: 'Asst.Proff.', specialization: '', contactNumber: '', joiningDate: new Date(''), email: 'mosampatel2112@gmail.com' },
    { id: 13, name: 'PRAJAPATI DHRUV S.', designation: 'Asst.Proff.', specialization: '', contactNumber: '', joiningDate: new Date(''), email: 'dhruvprajapati6650@gmail.com' },
    { id: 14, name: 'PATEL HAPPYKUMAR R.', designation: 'Asst.Proff.', specialization: '', contactNumber: '', joiningDate: new Date(''), email: 'happypatel3570@gamil.com' },
    { id: 15, name: 'PATEL MESHVA R.', designation: 'Asst.Proff.', specialization: '', contactNumber: '', joiningDate: new Date(''), email: 'patelmeshva99@gmail.com' },
    { id: 16, name: 'Patel Yash', designation: 'Asst.Proff.', specialization: '', contactNumber: '', joiningDate: new Date(''), email: 'yashpatel9756@gmail.com' },
    { id: 17, name: 'Patel Naiya', designation: 'Asst.Proff.', specialization: '', contactNumber: '', joiningDate: new Date(''), email: 'naiyapatel4841@gmail.com' }
  ];

  getAllFaculties(): Observable<FacultyMember[]> {
    return of(this.mockFacultyList);
  }

  getFacultyById(id: number): Observable<FacultyMember> {
    const faculty = this.mockFacultyList.find(f => f.id === id)!;
    return of(faculty);
  }
  
}
