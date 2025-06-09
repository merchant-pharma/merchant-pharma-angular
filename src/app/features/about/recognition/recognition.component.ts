import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3" style="color: maroon;">Recognition & Approvals</h6>
          <h1 class="mb-5">Our Accreditations</h1>
        </div>

        <div class="row g-4 mb-5">
          @for (recognition of recognitions; track $index) {
            <div class="col-lg-4 col-md-6 wow fadeInUp" [attr.data-wow-delay]="0.1 * ($index + 1) + 's'">
              <div class="recognition-item bg-light rounded p-4">
                <div class="d-flex align-items-center mb-3">
                  <i [class]="recognition.icon" style="color: maroon; font-size: 2rem;"></i>
                  <div class="ms-3">
                    <h5 class="mb-0" style="color: maroon;">{{ recognition.title }}</h5>
                    <small class="text-muted">{{ recognition.authority }} ({{ recognition.year }})</small>
                  </div>
                </div>
                <p class="mb-0">{{ recognition.description }}</p>
              </div>
            </div>
          }
        </div>

        <div class="text-center wow fadeInUp" data-wow-delay="0.3s">
          <h2 class="mb-5" style="color: maroon;">Current Approvals</h2>
        </div>

        <div class="row g-4">
          @for (approval of approvals; track $index) {
            <div class="col-lg-6 col-md-6 wow fadeInUp" [attr.data-wow-delay]="0.1 * ($index + 1) + 's'">
              <div class="approval-item bg-light rounded p-4">
                <div class="d-flex align-items-center mb-3">
                  <i [class]="approval.icon" style="color: maroon; font-size: 2rem;"></i>
                  <div class="ms-3">
                    <h5 class="mb-0" style="color: maroon;">{{ approval.name }}</h5>
                    <small class="text-muted">Valid until: {{ approval.validityPeriod }}</small>
                  </div>
                </div>
                <p class="mb-0">{{ approval.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .recognition-item, .approval-item {
      border: 1px solid rgba(128, 0, 0, 0.2);
      transition: all 0.3s ease;
    }
    .recognition-item:hover, .approval-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 15px rgba(128, 0, 0, 0.1);
    }
    i {
      transition: transform 0.3s ease;
    }
    .recognition-item:hover i, .approval-item:hover i {
      transform: scale(1.2);
    }
    .section-title {
      position: relative;
      display: inline-block;
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
  `]
})
export class RecognitionComponent implements OnInit {
  recognitions: Recognition[] = [
    {
      title: 'GTU Affiliation',
      authority: 'Gujarat Technological University',
      year: '2022',
      description: 'Full affiliation for B.Pharm program with recognition for academic excellence and infrastructure standards',
      icon: 'fas fa-award'
    },
    {
      title: 'PCI Approval',
      authority: 'Pharmacy Council of India',
      year: '2022',
      description: 'Approval for B.Pharm program with recognition of our state-of-the-art laboratories and qualified faculty',
      icon: 'fas fa-certificate'
    },
    {
      title: 'Merchant Charitable Trust',
      authority: 'Gujarat State',
      year: '2022',
      description: 'Recognition as a premier pharmacy institution with focus on quality education and research',
      icon: 'fas fa-medal'
    },
    {
      title: 'Industry Collaboration',
      authority: 'Pharmaceutical Industry',
      year: '2023',
      description: 'Partnerships with leading pharmaceutical companies for training and research',
      icon: 'fas fa-handshake'
    },
    {
      title: 'Research Excellence',
      authority: 'GTU Research Center',
      year: '2023',
      description: 'Recognition for innovative research in pharmaceutical sciences',
      icon: 'fas fa-microscope'
    },
    {
      title: 'Student Development',
      authority: 'Gujarat State',
      year: '2023',
      description: 'Recognition for excellence in student development and placement',
      icon: 'fas fa-user-graduate'
    }
  ];

  approvals: Approval[] = [
    {
      name: 'B.Pharm Program',
      description: 'Approved by PCI and affiliated with GTU, offering comprehensive pharmaceutical education with modern curriculum and practical training',
      validityPeriod: '2025',
      icon: 'fas fa-graduation-cap'
    },
    {
      name: 'Research Center',
      description: 'Approved by GTU for pharmaceutical research with focus on drug development and formulation studies',
      validityPeriod: '2025',
      icon: 'fas fa-flask'
    },
    {
      name: 'Laboratory Facilities',
      description: 'Approved by PCI for practical training with modern equipment and safety standards',
      validityPeriod: '2025',
      icon: 'fas fa-vial'
    },
    {
      name: 'Industry Training',
      description: 'Approved collaboration with pharmaceutical industries for student internships and research projects',
      validityPeriod: '2025',
      icon: 'fas fa-industry'
    }
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}
