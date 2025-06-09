import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgwWowService } from 'ngx-wow';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-womens-development',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-xxl py-5" [@fadeInUp]>
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3" style="color: maroon;">Women Development Cell</h6>
          <h1 class="mb-5">Empowering Women in Pharmacy</h1>
        </div>

        <div class="row g-4">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="wdc-item bg-light rounded p-4 h-100">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-female" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Empowerment Initiatives</h4>
              </div>
              <p class="mb-4">Our Women Development Cell focuses on empowerment and growth:</p>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Leadership Development Programs
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Skill Enhancement Workshops
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Career Guidance Sessions
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Entrepreneurship Support
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Health & Wellness Programs
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="wdc-item bg-light rounded p-4 h-100">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-hands-helping" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Support Services</h4>
              </div>
              <p class="mb-4">Comprehensive support system for women:</p>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Counseling Services
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Safety & Security Measures
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Grievance Resolution
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Mentorship Programs
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Research Opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.4s">
            <div class="wdc-item bg-light rounded p-4">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-star" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Achievements & Impact</h4>
              </div>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="achievement-item">
                    <h5 style="color: maroon;">Student Success</h5>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        85% Placement Rate for Women Graduates
                      </li>
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        15+ Women-led Research Projects
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="achievement-item">
                    <h5 style="color: maroon;">Community Impact</h5>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        Health Awareness Campaigns
                      </li>
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        Women's Health Workshops
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
    .wdc-item {
      border: 1px solid rgba(128, 0, 0, 0.2);
      transition: all 0.3s ease;
    }
    .wdc-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 15px rgba(128, 0, 0, 0.1);
    }
    .wdc-item i {
      transition: transform 0.3s ease;
    }
    .wdc-item:hover i {
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
export class WomensDevelopmentComponent implements OnInit {
  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
} 