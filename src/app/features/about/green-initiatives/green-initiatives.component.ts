import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-green-initiatives',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-xxl py-5" [@fadeInUp]>
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3" style="color: maroon;">Green Campus</h6>
          <h1 class="mb-5">Environmental Initiatives</h1>
        </div>

        <div class="row g-4">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="initiative-item bg-light rounded p-4 h-100">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-leaf" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Sustainable Campus</h4>
              </div>
              <p class="mb-4">Our commitment to environmental sustainability is reflected in various green initiatives across the campus:</p>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="fas fa-solar-panel me-2" style="color: maroon;"></i>
                  Solar Power Generation - 100kW capacity
                </li>
                <li class="mb-3">
                  <i class="fas fa-water me-2" style="color: maroon;"></i>
                  Rainwater Harvesting System
                </li>
                <li class="mb-3">
                  <i class="fas fa-recycle me-2" style="color: maroon;"></i>
                  Waste Segregation & Management
                </li>
                <li class="mb-3">
                  <i class="fas fa-building me-2" style="color: maroon;"></i>
                  Energy-Efficient Building Design
                </li>
                <li class="mb-3">
                  <i class="fas fa-bolt me-2" style="color: maroon;"></i>
                  LED Lighting Across Campus
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="initiative-item bg-light rounded p-4 h-100">
              <div class="d-flex align-items-center mb-4">
                <i class="fas fa-seedling" style="color: maroon; font-size: 2rem;"></i>
                <h4 class="mb-0 ms-3" style="color: maroon;">Environmental Programs</h4>
              </div>
              <p class="mb-4">We actively promote environmental awareness through various programs:</p>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="fas fa-tree me-2" style="color: maroon;"></i>
                  Annual Tree Plantation Drive
                </li>
                <li class="mb-3">
                  <i class="fas fa-users me-2" style="color: maroon;"></i>
                  Green Campus Club Activities
                </li>
                <li class="mb-3">
                  <i class="fas fa-graduation-cap me-2" style="color: maroon;"></i>
                  Environmental Education Programs
                </li>
                <li class="mb-3">
                  <i class="fas fa-hand-holding-heart me-2" style="color: maroon;"></i>
                  Community Clean-up Campaigns
                </li>
                <li class="mb-3">
                  <i class="fas fa-recycle me-2" style="color: maroon;"></i>
                  E-waste Management Program
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .initiative-item {
      border: 1px solid rgba(128, 0, 0, 0.2);
      transition: all 0.3s ease;
    }
    .initiative-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 15px rgba(128, 0, 0, 0.1);
    }
    .initiative-item i {
      transition: transform 0.3s ease;
    }
    .initiative-item:hover i {
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
export class GreenInitiativesComponent {
  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
} 