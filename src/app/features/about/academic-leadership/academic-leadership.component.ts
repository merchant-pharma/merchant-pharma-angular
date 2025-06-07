import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgwWowService } from 'ngx-wow';

interface Leader {
  name: string;
  position: string;
  qualification: string;
  experience: string;
  specialization: string;
  imageUrl: string;
}

@Component({
  selector: 'app-academic-leadership',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">Academic Leadership</h6>
          <h1 class="mb-5">Our Academic Leaders</h1>
        </div>

        <div class="row g-4">
          @for (leader of academicLeaders; track $index) {
            <div class="col-lg-4 col-md-6 wow fadeInUp" [attr.data-wow-delay]="0.1 * ($index + 1) + 's'">
              <div class="team-item bg-light rounded overflow-hidden">
                <div class="overflow-hidden">
                  <img [src]="leader.imageUrl" class="img-fluid w-100" [alt]="leader.name">
                </div>
                <div class="text-center p-4">
                  <h5 class="mb-2">{{ leader.name }}</h5>
                  <h6 class="text-primary mb-2">{{ leader.position }}</h6>
                  <p class="mb-2"><strong>Qualification:</strong> {{ leader.qualification }}</p>
                  <p class="mb-2"><strong>Experience:</strong> {{ leader.experience }}</p>
                  <p class="mb-0"><strong>Specialization:</strong> {{ leader.specialization }}</p>
                </div>
              </div>
            </div>
          }
        </div>

        <div class="row mt-5">
          <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-4">Academic Leadership Responsibilities</h4>
                <div class="row g-4">
                  @for (responsibility of responsibilities; track $index) {
                    <div class="col-md-6">
                      <div class="d-flex align-items-start mb-3">
                        <i class="fas fa-check-circle text-primary me-2 mt-1"></i>
                        <p class="mb-0">{{ responsibility }}</p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .team-item img {
      transition: .5s;
    }
    .team-item:hover img {
      transform: scale(1.1);
    }
  `]
})
export class AcademicLeadershipComponent implements OnInit {
  academicLeaders: Leader[] = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Dean of Academic Affairs',
      qualification: 'Ph.D. in Pharmaceutical Sciences',
      experience: '20+ years in academia',
      specialization: 'Pharmaceutical Research & Development',
      imageUrl: 'img/team-1.jpg'
    },
    {
      name: 'Dr. Priya Sharma',
      position: 'Head of Research',
      qualification: 'Ph.D. in Pharmacology',
      experience: '15+ years in research',
      specialization: 'Drug Discovery & Development',
      imageUrl: 'img/team-2.jpg'
    },
    {
      name: 'Dr. Amit Patel',
      position: 'Director of Innovation',
      qualification: 'Ph.D. in Pharmaceutical Technology',
      experience: '18+ years in industry & academia',
      specialization: 'Pharmaceutical Innovation & Patents',
      imageUrl: 'img/team-3.jpg'
    }
  ];

  responsibilities: string[] = [
    'Curriculum development and implementation',
    'Research program supervision',
    'Quality assurance in education',
    'Faculty development initiatives',
    'Industry-academia collaboration',
    'Student mentorship programs',
    'Academic policy formulation',
    'Research grant management'
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}
