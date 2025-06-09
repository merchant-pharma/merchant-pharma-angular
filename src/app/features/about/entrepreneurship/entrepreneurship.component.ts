import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-entrepreneurship',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-xxl py-5" [@fadeInUp]>
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3" style="color: maroon;">Entrepreneurship Cell</h6>
          <h1 class="mb-5">Nurturing Innovation & Business Leadership</h1>
        </div>

        <div class="row g-4">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="entrepreneurship-item bg-light rounded p-4 h-100">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-lightbulb" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Entrepreneurship Development</h4>
              </div>
              <p class="mb-4">Our E-Cell nurtures entrepreneurial spirit through various initiatives:</p>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="fas fa-rocket me-2" style="color: maroon;"></i>
                  Startup Incubation Support
                </li>
                <li class="mb-3">
                  <i class="fas fa-users me-2" style="color: maroon;"></i>
                  Mentorship Programs
                </li>
                <li class="mb-3">
                  <i class="fas fa-trophy me-2" style="color: maroon;"></i>
                  Business Plan Competitions
                </li>
                <li class="mb-3">
                  <i class="fas fa-handshake me-2" style="color: maroon;"></i>
                  Industry Connect Sessions
                </li>
                <li class="mb-3">
                  <i class="fas fa-cogs me-2" style="color: maroon;"></i>
                  Innovation Workshops
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="entrepreneurship-item bg-light rounded p-4 h-100">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-tools" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Resources & Support</h4>
              </div>
              <p class="mb-4">We provide comprehensive support for aspiring entrepreneurs:</p>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="fas fa-money-bill-wave me-2" style="color: maroon;"></i>
                  Funding Guidance
                </li>
                <li class="mb-3">
                  <i class="fas fa-laptop-code me-2" style="color: maroon;"></i>
                  Technical Support
                </li>
                <li class="mb-3">
                  <i class="fas fa-network-wired me-2" style="color: maroon;"></i>
                  Networking Opportunities
                </li>
                <li class="mb-3">
                  <i class="fas fa-gavel me-2" style="color: maroon;"></i>
                  Legal & IP Support
                </li>
                <li class="mb-3">
                  <i class="fas fa-chart-line me-2" style="color: maroon;"></i>
                  Market Research Assistance
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.4s">
            <div class="entrepreneurship-item bg-light rounded p-4">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-chart-bar" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Success Stories</h4>
              </div>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="success-item">
                    <h5 style="color: maroon;">Startup Ventures</h5>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        5+ Successful Pharmacy Startups
                      </li>
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        3+ Healthcare Technology Ventures
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="success-item">
                    <h5 style="color: maroon;">Achievements</h5>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        State-level Business Plan Awards
                      </li>
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        National Innovation Recognition
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
    .entrepreneurship-item {
      border: 1px solid rgba(128, 0, 0, 0.2);
      transition: all 0.3s ease;
    }
    .entrepreneurship-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 15px rgba(128, 0, 0, 0.1);
    }
    .entrepreneurship-item i {
      transition: transform 0.3s ease;
    }
    .entrepreneurship-item:hover i {
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
    .success-item {
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
export class EntrepreneurshipComponent {
  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
} 