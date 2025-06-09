import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface Committee {
  name: string;
  description: string;
  members: string[];
  responsibilities: string[];
}

@Component({
  selector: 'app-committees',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-xxl py-5" [@fadeInUp]>
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center px-3" style="color: maroon;">Committees</h6>
          <h1 class="mb-5">Our Institutional Committees</h1>
        </div>

        <div class="row g-4">
          @for (committee of committees; track $index) {
            <div class="col-lg-6 col-md-6 wow fadeInUp" [attr.data-wow-delay]="0.1 * ($index + 1) + 's'">
              <div class="committee-item bg-light rounded h-100 p-4">
                <div class="d-flex align-items-center mb-4">
                  <div class="rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px; background-color: maroon;">
                    <i class="fa fa-users text-white fs-4"></i>
                  </div>
                  <div class="ms-3">
                    <h5 class="mb-0" style="color: maroon;">{{ committee.name }}</h5>
                    <p class="mb-0 text-muted small">{{ committee.description }}</p>
                  </div>
                </div>
                
                <div class="mb-3">
                  <h6 class="mb-2" style="color: maroon;">Committee Members:</h6>
                  <ul class="list-unstyled">
                    @for (member of committee.members; track $index) {
                      <li class="mb-1">
                        <i class="fa fa-user-circle me-2" style="color: maroon;"></i>
                        {{ member }}
                      </li>
                    }
                  </ul>
                </div>

                <div>
                  <h6 class="mb-2" style="color: maroon;">Key Responsibilities:</h6>
                  <ul class="list-unstyled">
                    @for (responsibility of committee.responsibilities; track $index) {
                      <li class="mb-1">
                        <i class="fa fa-check-circle me-2" style="color: maroon;"></i>
                        {{ responsibility }}
                      </li>
                    }
                  </ul>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .committee-item {
      transition: .5s;
      box-shadow: 0 0 45px rgba(128, 0, 0, 0.07);
      border: 1px solid rgba(128, 0, 0, 0.1);
    }
    .committee-item:hover {
      transform: translateY(-5px);
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
    .list-unstyled li {
      transition: .3s;
      padding: 4px 0;
    }
    .list-unstyled li:hover {
      padding-left: 8px;
      color: maroon;
    }
    .list-unstyled li i {
      transition: .3s;
    }
    .list-unstyled li:hover i {
      transform: scale(1.2);
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
export class CommitteesComponent implements OnInit {
  committees: Committee[] = [
    {
      name: 'Academic Committee',
      description: 'Oversees academic planning and curriculum development for B.Pharm program',
      members: [
        'Dr. Rajesh Patel (Chairman)',
        'Dr. Priya Shah',
        'Dr. Amit Desai'
      ],
      responsibilities: [
        'B.Pharm curriculum development and review',
        'Academic calendar planning',
        'Quality assurance in pharmaceutical education',
        'Student performance monitoring'
      ]
    },
    {
      name: 'Research Committee',
      description: 'Promotes and monitors pharmaceutical research activities',
      members: [
        'Dr. Meera Patel (Chairperson)',
        'Dr. Suresh Kumar',
        'Dr. Neha Shah'
      ],
      responsibilities: [
        'Pharmaceutical research project approval',
        'Research grant management',
        'Research ethics compliance',
        'Industry collaboration coordination'
      ]
    },
    {
      name: 'Anti-Ragging Committee',
      description: 'Ensures a safe and ragging-free campus environment',
      members: [
        'Dr. Amit Shah (Chairman)',
        'Prof. Ravi Kumar',
        'Ms. Priya Desai'
      ],
      responsibilities: [
        'Prevention of ragging activities',
        'Student grievance handling',
        'Campus safety monitoring',
        'Regular hostel inspections'
      ]
    },
    {
      name: 'Placement Committee',
      description: 'Facilitates student placements and career development in pharmaceutical sector',
      members: [
        'Dr. Kiran Patel (Chairman)',
        'Mr. Rahul Mehta',
        'Ms. Sneha Shah'
      ],
      responsibilities: [
        'Pharmaceutical industry liaison',
        'Placement drives coordination',
        'Career counseling for pharmacy students',
        'Internship program management'
      ]
    }
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
} 