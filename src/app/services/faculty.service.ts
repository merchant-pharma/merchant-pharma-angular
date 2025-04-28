import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { FacultyMember } from '../models/FacultyMember';
@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private apiUrl = '/api/faculty'; // Replace with your actual API endpoint

  // constructor(private http: HttpClient) {}

  getFaculty(): Observable<FacultyMember[]> {
    // In a real application, you'd fetch this from an API
    // return this.http.get<FacultyMember[]>(this.apiUrl);
    return of([
      { id: '1', name: 'Dr. Alice Johnson', photoUrl: '/img/team-1.jpg', role: 'Professor', department: 'Pharmaceutical Chemistry', qualifications: 'Ph.D. in Organic Chemistry', publications: ['Journal of Organic Chemistry', 'Tetrahedron Letters'], socialLinks: { facebook: '#', twitter: '#' } },
      { id: '2', name: 'Dr. Bob Williams', photoUrl: '/img/team-2.jpg', role: 'Head of Department', department: 'Pharmaceutics', qualifications: 'Ph.D. in Pharmaceutics', publications: ['International Journal of Pharmaceutics'], socialLinks: { linkedin: '#' } },
      { id: '3', name: 'Dr. Carol Davis', photoUrl: '/img/team-3.jpg', role: 'Assistant Professor', department: 'Pharmacology', qualifications: 'Ph.D. in Pharmacology', publications: ['British Journal of Pharmacology'], socialLinks: { instagram: '#' } },
      { id: '4', name: 'Dr. David Garcia', photoUrl: '/img/team-4.jpg', role: 'Professor', department: 'Pharmaceutical Analysis', qualifications: 'Ph.D. in Analytical Chemistry', publications: ['Analytical Chemistry'], socialLinks: { facebook: '#', linkedin: '#' } },
      { id: '5', name: 'Dr. Eve Rodriguez', photoUrl: '/img/team-1.jpg', role: 'Assistant Professor', department: 'Pharmaceutics', qualifications: 'M.Pharm', publications: ['European Journal of Pharmaceutics and Biopharmaceutics'], socialLinks: { twitter: '#' } },
      { id: '6', name: 'Dr. Frank Martinez', photoUrl: '/img/team-2.jpg', role: 'Professor', department: 'Pharmaceutical Chemistry', qualifications: 'Ph.D. in Medicinal Chemistry', publications: ['Journal of Medicinal Chemistry'], socialLinks: { instagram: '#', linkedin: '#' } },
      // Add more faculty members with social links
    ]);
  }

  getFacultyById(id: string): Observable<FacultyMember | undefined> {
    return this.getFaculty().pipe(
      map((faculty: FacultyMember[]) => faculty.find(f => f.id === id))
    );
  }
}