import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgwWowService } from 'ngx-wow';

interface Milestone {
  year: string;
  description: string;
}

@Component({
  selector: 'app-history-milestones',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3" style="color: maroon;">Our Journey</h6>
          <h1 class="mb-5">History & Milestones</h1>
        </div>

        <div class="row g-4">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="history-content bg-light rounded p-4 h-100">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-history" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Our History</h4>
              </div>
              <p class="mb-0">{{ historyText }}</p>
            </div>
          </div>

          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="milestones-content bg-light rounded p-4 h-100">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-trophy" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Key Milestones</h4>
              </div>
              <div class="timeline">
                @for (milestone of milestones; track $index) {
                  <div class="timeline-item">
                    <div class="timeline-marker" style="background-color: maroon;"></div>
                    <div class="timeline-content">
                      <h6 class="mb-1" style="color: maroon;">{{ milestone.year }}</h6>
                      <p class="mb-0">{{ milestone.description }}</p>
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
    .history-content,
    .milestones-content {
      border: 1px solid rgba(128, 0, 0, 0.2);
      transition: all 0.3s ease;
    }
    .history-content:hover,
    .milestones-content:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 15px rgba(128, 0, 0, 0.1);
    }
    .history-content i,
    .milestones-content i {
      transition: transform 0.3s ease;
    }
    .history-content:hover i,
    .milestones-content:hover i {
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
    .timeline {
      position: relative;
      padding-left: 30px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background: rgba(128, 0, 0, 0.2);
    }
    .timeline-item {
      position: relative;
      padding-bottom: 20px;
    }
    .timeline-marker {
      position: absolute;
      left: -34px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 0 0 2px maroon;
    }
    .timeline-content {
      padding-left: 15px;
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
  `]
})
export class HistoryMilestonesComponent {
  historyText = 'Merchant Pharmacy College, Mehsana, was established in 2022 with a vision to provide quality pharmaceutical education in Gujarat. The college was founded by Merchant Charitable Trust with the aim of creating a center of excellence in pharmaceutical education and research. Since its inception, the college has been committed to providing state-of-the-art facilities and quality education to aspiring pharmacists.';

  milestones: Milestone[] = [
    {
      year: '2022',
      description: 'Establishment of Merchant Pharmacy College, Mehsana'
    },
    {
      year: '2022',
      description: 'Affiliation with Gujarat Technological University'
    },
    {
      year: '2022',
      description: 'Approval from Pharmacy Council of India'
    },
    {
      year: '2023',
      description: 'Establishment of Research & Development Center'
    },
    {
      year: '2023',
      description: 'Launch of Industry-Academia Collaboration Program'
    },
    {
      year: '2024',
      description: 'Introduction of Advanced Pharmaceutical Research Programs'
    }
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}