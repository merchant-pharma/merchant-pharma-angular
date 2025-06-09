import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgwWowService } from 'ngx-wow';
import { trigger, transition, style, animate } from '@angular/animations';

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
    <div class="container-xxl py-5" [@fadeInUp]>
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center px-3" style="color: maroon;">Academic Leadership</h6>
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
                  <h6 class="mb-2" style="color: maroon;">{{ leader.position }}</h6>
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
            <div class="leadership-card bg-light rounded p-4">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-graduation-cap" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Academic Leadership Responsibilities</h4>
              </div>
              <div class="row g-4">
                @for (responsibility of responsibilities; track $index) {
                  <div class="col-md-6">
                    <div class="d-flex align-items-start mb-3">
                      <i class="fas fa-check-circle me-2 mt-1" style="color: maroon;"></i>
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
  `,
  styles: [`
    .team-item {
      transition: .5s;
      box-shadow: 0 0 45px rgba(128, 0, 0, 0.07);
      border: 1px solid rgba(128, 0, 0, 0.1);
    }
    .team-item:hover {
      transform: translateY(-10px);
    }
    .team-item img {
      transition: .5s;
    }
    .team-item:hover img {
      transform: scale(1.1);
    }
    .leadership-card {
      border: 1px solid rgba(128, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    .leadership-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 15px rgba(128, 0, 0, 0.1);
    }
    .section-title {
      position: relative;
      display: inline-block;
      text-transform: uppercase;
    }
    .section-title::before {
      position: absolute;
      content: "";
      width: 45px;
      height: 2px;
      top: 50%;
      left: -55px;
      margin-top: -1px;
      background: maroon;
    }
    .section-title::after {
      position: absolute;
      content: "";
      width: 45px;
      height: 2px;
      top: 50%;
      right: -55px;
      margin-top: -1px;
      background: maroon;
    }
    @media (max-width: 768px) {
      .section-title::before,
      .section-title::after {
        width: 30px;
      }
      .section-title::before {
        left: -40px;
      }
      .section-title::after {
        right: -40px;
      }
    }
  `],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AcademicLeadershipComponent implements OnInit {
  academicLeaders: Leader[] = [
    {
      name: 'Dr. Rajesh Patel',
      position: 'Principal',
      qualification: 'Ph.D. in Pharmaceutical Sciences',
      experience: '20+ years in academia',
      specialization: 'Pharmaceutical Research & Development',
      imageUrl: 'img/team-1.jpg'
    },
    {
      name: 'Dr. Priya Shah',
      position: 'Head of Department',
      qualification: 'Ph.D. in Pharmacology',
      experience: '15+ years in research',
      specialization: 'Drug Discovery & Development',
      imageUrl: 'img/team-2.jpg'
    },
    {
      name: 'Dr. Amit Desai',
      position: 'Director of Academics',
      qualification: 'Ph.D. in Pharmaceutical Technology',
      experience: '18+ years in industry & academia',
      specialization: 'Pharmaceutical Innovation & Patents',
      imageUrl: 'img/team-3.jpg'
    }
  ];

  responsibilities: string[] = [
    'Overseeing B.Pharm curriculum development and implementation',
    'Managing research programs and industry collaborations',
    'Ensuring quality assurance in pharmaceutical education',
    'Leading faculty development initiatives',
    'Coordinating with PCI and GTU for academic compliance',
    'Supervising student mentorship programs',
    'Developing academic policies and procedures',
    'Managing research grants and projects'
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}
