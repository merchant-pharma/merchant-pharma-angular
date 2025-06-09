import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgwWowService } from 'ngx-wow';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-iqac',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-xxl py-5" [@fadeInUp]>
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3" style="color: maroon;">Internal Quality Assurance Cell (IQAC)</h6>
          <h1 class="mb-5">Ensuring Excellence in Education</h1>
        </div>

        <div class="row g-4">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="iqac-item bg-light rounded p-4 h-100">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-chart-line" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Quality Initiatives</h4>
              </div>
              <p class="mb-4">Our IQAC works towards maintaining and enhancing quality standards:</p>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Academic Quality Assurance
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Faculty Development Programs
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Student Feedback System
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Quality Audits
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Best Practices Implementation
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="iqac-item bg-light rounded p-4 h-100">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-tasks" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Quality Parameters</h4>
              </div>
              <p class="mb-4">Key areas of quality enhancement:</p>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Curriculum Development
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Teaching-Learning Process
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Research & Innovation
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Infrastructure & Learning Resources
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Student Support & Progression
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.4s">
            <div class="iqac-item bg-light rounded p-4">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-award" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Quality Achievements</h4>
              </div>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="achievement-item">
                    <h5 style="color: maroon;">Accreditations</h5>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        NAAC 'A' Grade Accreditation
                      </li>
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        ISO 9001:2015 Certification
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="achievement-item">
                    <h5 style="color: maroon;">Quality Metrics</h5>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        95% Student Satisfaction Rate
                      </li>
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        100% Faculty Qualification Compliance
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
    .iqac-item {
      border: 1px solid rgba(128, 0, 0, 0.2);
      transition: all 0.3s ease;
    }
    .iqac-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 15px rgba(128, 0, 0, 0.1);
    }
    .iqac-item i {
      transition: transform 0.3s ease;
    }
    .iqac-item:hover i {
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
export class IqacComponent implements OnInit {
  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
} 