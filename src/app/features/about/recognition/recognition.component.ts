import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgwWowService } from 'ngx-wow';

interface Recognition {
  title: string;
  authority: string;
  year: string;
  description: string;
  icon: string;
}

interface Approval {
  name: string;
  description: string;
  validityPeriod: string;
  icon: string;
}

@Component({
  selector: 'app-recognition',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">Recognition & Approvals</h6>
          <h1 class="mb-5">Our Achievements & Accreditations</h1>
        </div>

        <!-- Recognitions Section -->
        <div class="row g-4 mb-5">
          @for (recognition of recognitions; track $index) {
            <div class="col-lg-4 col-md-6 wow fadeInUp" [attr.data-wow-delay]="0.1 * ($index + 1) + 's'">
              <div class="service-item rounded h-100 p-4">
                <div class="d-flex align-items-center mb-4">
                  <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                    <i class="{{ recognition.icon }} text-white fs-4"></i>
                  </div>
                  <div class="ms-3">
                    <h5 class="mb-0">{{ recognition.title }}</h5>
                    <small class="text-muted">{{ recognition.year }}</small>
                  </div>
                </div>
                <p class="mb-2"><strong>Authority:</strong> {{ recognition.authority }}</p>
                <p class="mb-0">{{ recognition.description }}</p>
              </div>
            </div>
          }
        </div>

        <!-- Approvals Section -->
        <div class="text-center wow fadeInUp mt-5" data-wow-delay="0.1s">
          <h2 class="mb-5">Statutory Approvals</h2>
        </div>
        <div class="row g-4">
          @for (approval of approvals; track $index) {
            <div class="col-lg-6 col-md-6 wow fadeInUp" [attr.data-wow-delay]="0.1 * ($index + 1) + 's'">
              <div class="bg-light rounded p-4 h-100">
                <div class="d-flex align-items-center mb-4">
                  <div class="bg-white rounded-circle d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                    <i class="{{ approval.icon }} text-primary fs-4"></i>
                  </div>
                  <div class="ms-3">
                    <h5 class="mb-0">{{ approval.name }}</h5>
                    <small class="text-muted">Validity: {{ approval.validityPeriod }}</small>
                  </div>
                </div>
                <p class="mb-0">{{ approval.description }}</p>
              </div>
            </div>
          }
        </div>

        <!-- Quality Standards Section -->
        <div class="row mt-5">
          <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-4">Quality Standards & Certifications</h4>
                <div class="row g-4">
                  @for (standard of qualityStandards; track $index) {
                    <div class="col-md-6">
                      <div class="d-flex align-items-start mb-3">
                        <i class="fas fa-certificate text-primary me-2 mt-1"></i>
                        <p class="mb-0">{{ standard }}</p>
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
    .service-item {
      box-shadow: 0 0 45px rgba(0, 0, 0, .08);
      transition: .5s;
    }
    .service-item:hover {
      transform: translateY(-10px);
    }
  `]
})
export class RecognitionComponent implements OnInit {
  recognitions: Recognition[] = [
    {
      title: 'Excellence in Pharmacy Education',
      authority: 'National Board of Accreditation',
      year: '2023',
      description: 'Recognized for outstanding contribution to pharmacy education and research.',
      icon: 'fas fa-award'
    },
    {
      title: 'Research Excellence',
      authority: 'State Research Council',
      year: '2022',
      description: 'Awarded for significant contributions in pharmaceutical research.',
      icon: 'fas fa-microscope'
    },
    {
      title: 'Best Infrastructure',
      authority: 'Education Excellence Awards',
      year: '2022',
      description: 'Recognized for state-of-the-art facilities and modern infrastructure.',
      icon: 'fas fa-building'
    }
  ];

  approvals: Approval[] = [
    {
      name: 'Pharmacy Council of India (PCI)',
      description: 'Approved for B.Pharm, M.Pharm, and Pharm.D programs with highest grade.',
      validityPeriod: '2023-2028',
      icon: 'fas fa-check-circle'
    },
    {
      name: 'AICTE Approval',
      description: 'All technical programs approved with excellent rating.',
      validityPeriod: '2023-2024',
      icon: 'fas fa-university'
    },
    {
      name: 'UGC Recognition',
      description: 'Recognized under Section 2(f) and 12(B) of UGC Act.',
      validityPeriod: 'Permanent',
      icon: 'fas fa-graduation-cap'
    },
    {
      name: 'ISO Certification',
      description: 'ISO 9001:2015 certified for quality management systems.',
      validityPeriod: '2022-2025',
      icon: 'fas fa-certificate'
    }
  ];

  qualityStandards: string[] = [
    'WHO-GMP Compliance Certification',
    'NABL Accredited Laboratories',
    'NBA Accreditation for UG & PG Programs',
    'NIRF Ranked Institution',
    'NAAC "A" Grade Accreditation',
    'DST-FIST Funded Research Facilities'
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}
