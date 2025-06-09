import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-research-development',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-xxl py-5" [@fadeInUp]>
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3" style="color: maroon;">Research & Development</h6>
          <h1 class="mb-5">Innovation in Pharmaceutical Sciences</h1>
        </div>

        <div class="row g-4">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="research-item bg-light rounded p-4 h-100">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-microscope" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Research Areas</h4>
              </div>
              <p class="mb-4">Our R&D cell focuses on cutting-edge research in pharmaceutical sciences:</p>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="fas fa-pills me-2" style="color: maroon;"></i>
                  Drug Discovery & Development
                </li>
                <li class="mb-3">
                  <i class="fas fa-flask me-2" style="color: maroon;"></i>
                  Pharmaceutical Analysis
                </li>
                <li class="mb-3">
                  <i class="fas fa-vial me-2" style="color: maroon;"></i>
                  Novel Drug Delivery Systems
                </li>
                <li class="mb-3">
                  <i class="fas fa-leaf me-2" style="color: maroon;"></i>
                  Natural Product Research
                </li>
                <li class="mb-3">
                  <i class="fas fa-dna me-2" style="color: maroon;"></i>
                  Pharmaceutical Biotechnology
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="research-item bg-light rounded p-4 h-100">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-cogs" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Research Support</h4>
              </div>
              <p class="mb-4">We provide comprehensive support for research activities:</p>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="fas fa-laptop me-2" style="color: maroon;"></i>
                  Advanced Research Laboratories
                </li>
                <li class="mb-3">
                  <i class="fas fa-money-bill-wave me-2" style="color: maroon;"></i>
                  Research Grants & Funding
                </li>
                <li class="mb-3">
                  <i class="fas fa-handshake me-2" style="color: maroon;"></i>
                  Industry Collaborations
                </li>
                <li class="mb-3">
                  <i class="fas fa-book me-2" style="color: maroon;"></i>
                  Publication Support
                </li>
                <li class="mb-3">
                  <i class="fas fa-file-alt me-2" style="color: maroon;"></i>
                  Patent Filing Assistance
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.4s">
            <div class="research-item bg-light rounded p-4">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-chart-line" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Research Achievements</h4>
              </div>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="achievement-item">
                    <h5 style="color: maroon;">Publications</h5>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        25+ Research Papers in SCI Journals
                      </li>
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        10+ Conference Presentations
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="achievement-item">
                    <h5 style="color: maroon;">Projects</h5>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        5+ Funded Research Projects
                      </li>
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        3+ Industry Collaborations
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
    .research-item {
      border: 1px solid rgba(128, 0, 0, 0.2);
      transition: all 0.3s ease;
    }
    .research-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 15px rgba(128, 0, 0, 0.1);
    }
    .research-item i {
      transition: transform 0.3s ease;
    }
    .research-item:hover i {
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
export class ResearchDevelopmentComponent {
  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
} 