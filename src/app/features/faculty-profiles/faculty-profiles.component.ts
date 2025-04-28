import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FacultyMember } from '../../models/FacultyMember';
import { FacultyService } from '../../services/faculty.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faculty-profiles',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule,ReactiveFormsModule,CommonModule],
  templateUrl: './faculty-profiles.component.html',
  styleUrls: ['./faculty-profiles.component.css']
})
export class FacultyProfilesComponent implements OnInit, OnDestroy {
  facultyMembers: FacultyMember[] = [];
  filteredFacultyMembers: FacultyMember[] = [];
  departments: string[] = [];
  roles: string[] = [];
  filterForm: FormGroup;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  private ngUnsubscribe = new Subject<void>();
  wowService: NgwWowService=inject(NgwWowService);
  facultyService: FacultyService=inject(FacultyService);
  fb: FormBuilder=inject(FormBuilder);
  constructor(
    // private wowService: NgwWowService,
    // private facultyService: FacultyService,
    // private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      department: ['all'],
      role: ['all'],
    });
  }

  ngOnInit(): void {
    this.wowService.init();
    this.loadFacultyData();
    this.setupFilterFormListener();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  loadFacultyData(): void {
    this.facultyService.getFaculty().pipe(takeUntil(this.ngUnsubscribe)).subscribe({
      next:(data) => {
        this.facultyMembers = data;
        this.filteredFacultyMembers = [...this.facultyMembers];
        this.extractFilters();
        this.applyFilters();
      },
      error:(error) => {
        console.error('Error loading faculty data:', error);
      }
    }
      
    );
  }

  extractFilters(): void {
    this.departments = ['all', ...new Set(this.facultyMembers.map(faculty => faculty.department))];
    this.roles = ['all', ...new Set(this.facultyMembers.map(faculty => faculty.role))];
  }

  setupFilterFormListener(): void {
    this.filterForm.valueChanges.pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.applyFilters();
    });
  }

  applyFilters(): void {
    const departmentFilter = this.filterForm.get('department')?.value;
    const roleFilter = this.filterForm.get('role')?.value;

    this.filteredFacultyMembers = this.facultyMembers.filter((faculty) => {
      const departmentMatch = departmentFilter === 'all' || faculty.department === departmentFilter;
      const roleMatch = roleFilter === 'all' || faculty.role === roleFilter;
      return departmentMatch && roleMatch;
    });
  }

  get departmentControl() {
    return this.filterForm.get('department');
  }

  get roleControl() {
    return this.filterForm.get('role');
  }

  getWowDelay(index: number): string {
    return `${(index % 3 + 1) * 0.1}s`;
  }
}