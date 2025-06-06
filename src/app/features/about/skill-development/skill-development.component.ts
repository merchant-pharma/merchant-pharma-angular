import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgwWowService } from 'ngx-wow';

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
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">Skill Development</h6>
          <h1 class="mb-5">Enhancing Professional Skills</h1>
        </div>

        <div class="row g-4">
          @for (program of skillPrograms; track $index) {
            <div class="col-lg-4 col-md-6 wow fadeInUp" [attr.data-wow-delay]="0.1 * ($index + 1) + 's'">
              <div class="service-item rounded h-100 p-4">
                <div class="d-flex align-items-center mb-4">
                  <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                    <i class="{{ program.icon }} text-white fs-4"></i>
                  </div>
                  <h5 class="mb-0 ms-3">{{ program.title }}</h5>
                </div>
                <p class="mb-3">{{ program.description }}</p>
                <p class="mb-3"><strong>Duration:</strong> {{ program.duration }}</p>
                <h6 class="mb-3">Key Benefits:</h6>
                <ul class="list-unstyled">
                  @for (benefit of program.benefits; track $index) {
                    <li class="mb-2">
                      <i class="fas fa-check-circle text-primary me-2"></i>
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
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-4">Industry Partnerships</h4>
                <div class="row g-4">
                  @for (partner of industryPartners; track $index) {
                    <div class="col-md-6">
                      <div class="d-flex align-items-start mb-3">
                        <i class="fas fa-building text-primary me-2 mt-1"></i>
                        <p class="mb-0">{{ partner }}</p>
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
export class SkillDevelopmentComponent implements OnInit {
  skillPrograms: SkillProgram[] = [
    {
      title: 'Pharmaceutical Manufacturing',
      description: 'Hands-on training in pharmaceutical manufacturing processes and GMP practices.',
      duration: '6 months',
      benefits: [
        'Practical manufacturing experience',
        'GMP certification',
        'Industry exposure',
        'Job placement assistance'
      ],
      icon: 'fas fa-industry'
    },
    {
      title: 'Clinical Research',
      description: 'Comprehensive training in clinical trials and research methodologies.',
      duration: '3 months',
      benefits: [
        'Research protocol development',
        'Data analysis skills',
        'Clinical trial management',
        'Regulatory compliance training'
      ],
      icon: 'fas fa-microscope'
    },
    {
      title: 'Quality Control',
      description: 'Advanced training in pharmaceutical quality control and analysis.',
      duration: '4 months',
      benefits: [
        'Analytical techniques',
        'Quality management systems',
        'Documentation practices',
        'Laboratory safety'
      ],
      icon: 'fas fa-check-double'
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
