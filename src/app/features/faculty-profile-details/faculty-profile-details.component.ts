import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subject, takeUntil } from 'rxjs';
import { FacultyMember } from '../../models/FacultyMember';
import { FacultyService } from '../../services/faculty.service';

@Component({
  selector: 'app-faculty-profile-details',
  standalone: true,
  imports: [],
  templateUrl: './faculty-profile-details.component.html',
  styleUrls: ['./faculty-profile-details.component.css']
})
export class FacultyProfileDetailsComponent implements OnInit, OnDestroy {
  facultyMember: FacultyMember | undefined;
  facultyId: string | null = null;
  private ngUnsubscribe = new Subject<void>();
  route: ActivatedRoute=inject(ActivatedRoute);
  facultyService: FacultyService=inject(FacultyService);
  wowService: NgwWowService=inject(NgwWowService);
 

  ngOnInit(): void {
    this.wowService.init();
    this.route.paramMap.pipe(takeUntil(this.ngUnsubscribe)).subscribe(params => {
      this.facultyId = params.get('id');
      if (this.facultyId) {
        this.loadFacultyDetails(this.facultyId);
      }
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  loadFacultyDetails(id: string): void {
    this.facultyService.getFacultyById(id).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (data) => {
        this.facultyMember = data;
      },
      (error) => {
        console.error('Error loading faculty details:', error);
      }
    );
  }
}