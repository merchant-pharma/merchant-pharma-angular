import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgwWowService } from 'ngx-wow';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-grievance-redressal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-xxl py-5" [@fadeInUp]>
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3" style="color: maroon;">Grievance Redressal Cell</h6>
          <h1 class="mb-5">Ensuring Fair Resolution</h1>
        </div>

        <div class="row g-4">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="grievance-item bg-light rounded p-4 h-100">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-handshake" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Grievance Handling</h4>
              </div>
              <p class="mb-4">Our Grievance Redressal Cell ensures fair and timely resolution of grievances:</p>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Student Grievances
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Faculty & Staff Grievances
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Academic Issues
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Administrative Issues
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Infrastructure Related Concerns
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="grievance-item bg-light rounded p-4 h-100">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-tasks" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Process & Timeline</h4>
              </div>
              <p class="mb-4">Systematic approach to grievance resolution:</p>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Online Grievance Submission
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Acknowledgment within 24 hours
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Investigation & Review
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Resolution within 7 working days
                </li>
                <li class="mb-3">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Appeal Process if needed
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.4s">
            <div class="grievance-item bg-light rounded p-4">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-shield-alt" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Our Commitment</h4>
              </div>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="commitment-item">
                    <h5 style="color: maroon;">Confidentiality</h5>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        Secure Grievance Submission
                      </li>
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        Privacy Protection
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="commitment-item">
                    <h5 style="color: maroon;">Fair Resolution</h5>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        Impartial Investigation
                      </li>
                      <li class="mb-2">
                        <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                        Transparent Process
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
    .grievance-item {
      border: 1px solid rgba(128, 0, 0, 0.2);
      transition: all 0.3s ease;
    }
    .grievance-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 15px rgba(128, 0, 0, 0.1);
    }
    .grievance-item i {
      transition: transform 0.3s ease;
    }
    .grievance-item:hover i {
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
    .commitment-item {
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
export class GrievanceRedressalComponent implements OnInit {
  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
} 