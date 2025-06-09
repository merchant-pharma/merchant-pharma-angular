import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgwWowService } from 'ngx-wow';
import { trigger, transition, style, animate } from '@angular/animations';

interface SkillProgram {
  title: string;
  description: string;
  duration: string;
  benefits: string[];
  icon: string;
}

@Component({
  selector: 'app-skill-development',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-xxl py-5" [@fadeInUp]>
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3" style="color: maroon;">Skill Development</h6>
          <h1 class="mb-5">Enhancing Professional Competencies</h1>
        </div>

        <div class="row g-4">
          @for (program of skillPrograms; track $index) {
            <div class="col-lg-4 col-md-6 wow fadeInUp" [attr.data-wow-delay]="0.1 * ($index + 1) + 's'">
              <div class="skill-item bg-light rounded p-4">
                <div class="d-flex align-items-center mb-3">
                  <i [class]="program.icon" style="color: maroon; font-size: 2rem;"></i>
                  <div class="ms-3">
                    <h5 class="mb-0" style="color: maroon;">{{ program.title }}</h5>
                    <small class="text-muted">Duration: {{ program.duration }}</small>
                  </div>
                </div>
                <p class="mb-3">{{ program.description }}</p>
                <h6 class="mb-2" style="color: maroon;">Key Benefits:</h6>
                <ul class="list-unstyled">
                  @for (benefit of program.benefits; track $index) {
                    <li class="mb-2">
                      <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                      {{ benefit }}
                    </li>
                  }
                </ul>
              </div>
            </div>
          }
        </div>

        <div class="row mt-5">
          <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
            <div class="skill-item bg-light rounded p-4">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-handshake" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Industry Partnerships</h4>
              </div>
              <div class="row g-4">
                @for (partner of industryPartners; track $index) {
                  <div class="col-md-6">
                    <div class="d-flex align-items-start mb-3">
                      <i class="fas fa-building me-2 mt-1" style="color: maroon;"></i>
                      <p class="mb-0">{{ partner }}</p>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.4s">
            <div class="skill-item bg-light rounded p-4">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-chart-line" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Skill Development Achievements</h4>
              </div>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="achievement-item">
                    <h5 style="color: maroon;">Placement Success</h5>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        85% Placement Rate in Top Pharmaceutical Companies
                      </li>
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        50+ Industry Partners for Training & Placement
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="achievement-item">
                    <h5 style="color: maroon;">Skill Enhancement</h5>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        1000+ Students Trained in Industry Skills
                      </li>
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        25+ Skill Development Workshops Conducted
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .skill-item {
      border: 1px solid rgba(128, 0, 0, 0.2);
      transition: all 0.3s ease;
    }
    .skill-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 15px rgba(128, 0, 0, 0.1);
    }
    .skill-item i {
      transition: transform 0.3s ease;
    }
    .skill-item:hover i {
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
    li {
      transition: transform 0.3s ease;
    }
    li:hover {
      transform: translateX(10px);
    }
    .achievement-item {
      padding: 1rem;
      border-radius: 8px;
      background: rgba(128, 0, 0, 0.05);
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
export class SkillDevelopmentComponent implements OnInit {
  skillPrograms: SkillProgram[] = [
    {
      title: 'Technical Skills Enhancement',
      description: 'Comprehensive training in pharmaceutical technology and laboratory techniques',
      duration: '6 Months',
      benefits: [
        'Advanced laboratory techniques',
        'Modern equipment operation',
        'Quality control procedures',
        'GMP compliance training',
        'Pharmaceutical analysis methods'
      ],
      icon: 'fas fa-flask'
    },
    {
      title: 'Soft Skills Development',
      description: 'Training in communication, leadership, and professional ethics',
      duration: '3 Months',
      benefits: [
        'Effective communication skills',
        'Team leadership training',
        'Professional ethics',
        'Problem-solving abilities',
        'Time management skills'
      ],
      icon: 'fas fa-users'
    },
    {
      title: 'Industry Readiness Program',
      description: 'Preparation for pharmaceutical industry roles and responsibilities',
      duration: '4 Months',
      benefits: [
        'Industry best practices',
        'Regulatory compliance',
        'Project management',
        'Career guidance',
        'Interview preparation'
      ],
      icon: 'fas fa-industry'
    }
  ];

  industryPartners: string[] = [
    'Sun Pharmaceuticals - Training and internship programs',
    'Cipla Ltd. - Advanced manufacturing practices',
    'Dr. Reddy\'s Laboratories - Research collaboration',
    'Zydus Cadila - Quality control training',
    'Lupin Limited - Industrial exposure programs',
    'Biocon - Biotechnology training'
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}
