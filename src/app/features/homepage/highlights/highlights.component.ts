import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgwWowService } from 'ngx-wow';
import { 
  faGraduationCap, 
  faFlask, 
  faUsers, 
  faAward, 
  faBook, 
  faBuilding 
} from '@fortawesome/free-solid-svg-icons';

interface Highlight {
  icon: any;
  title: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  template: `
    <div class="container-fluid-xxl py-5">
      <div class="container-fluid">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center px-3" style="color: maroon;">Highlights</h6>
          <h1 class="mb-5">Our Key Achievements</h1>
        </div>
        <div class="row g-4 justify-content-center">
          @for (highlight of highlights; track $index; let i = $index) {
            <div class="col-lg-4 col-md-6 wow fadeInUp" [attr.data-wow-delay]="(i * 0.2 + 0.1) + 's'">
              <div class="course-item bg-light h-100">
                <div class="position-relative overflow-hidden d-flex align-items-center justify-content-center" style="min-height: 200px;">
                  <div class="w-100 d-flex justify-content-center position-absolute top-50 start-50 translate-middle">
                    <fa-icon [icon]="highlight.icon" class="fa-3x" style="color: maroon;"></fa-icon>
                  </div>
                </div>
                <div class="text-center p-4">
                  <h5 class="mb-4">{{ highlight.title }}</h5>
                  <p class="mb-0">{{ highlight.value }}</p>
                </div>
                @if (highlight.link) {
                  <div class="d-flex border-top">
                    <a [routerLink]="[highlight.link]" class="btn btn-sm px-3 w-100" style="border-radius: 0; background-color: maroon; border-color: maroon; color: white;">Learn More</a>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .course-item {
      transition: .5s;
      box-shadow: 0 0 45px rgba(128, 0, 0, 0.07);
      border: 1px solid rgba(128, 0, 0, 0.1);
    }
    .course-item:hover {
      transform: translateY(-10px);
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
  `]
})
export class HighlightsComponent implements OnInit {
  highlights: Highlight[] = [
    {
      icon: faGraduationCap,
      title: 'Academic Excellence',
      value: '100% Placement Rate in Pharmaceutical Industry',
      link: '/about/academic-excellence'
    },
    {
      icon: faFlask,
      title: 'Research & Innovation',
      value: '25+ Research Papers Published in SCI Journals',
      link: '/about/research-development'
    },
    {
      icon: faUsers,
      title: 'Expert Faculty',
      value: '15+ Years of Industry Experience',
      link: '/about/staff-directory'
    },
    {
      icon: faAward,
      title: 'Accreditations',
      value: 'NAAC A+ Grade & PCI Approved',
      link: '/about/recognition'
    },
    {
      icon: faBook,
      title: 'Modern Curriculum',
      value: 'Industry-Aligned B.Pharm Program',
      link: '/programs/b-pharm'
    },
    {
      icon: faBuilding,
      title: 'State-of-the-Art Infrastructure',
      value: 'Advanced Labs & Research Facilities',
      link: '/about/infrastructure'
    }
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}