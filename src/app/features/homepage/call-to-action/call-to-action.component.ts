import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container-fluid bg-maroon my-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-7">
            <div class="section-title text-start">
              <h6 class="text-white text-uppercase mb-3">Admissions Open</h6>
              <h1 class="display-3 text-white mb-0">Enroll Now for the Upcoming Academic Year!</h1>
            </div>
            <p class="text-white mb-4">Merchant Pharmacy College is now accepting applications for the upcoming academic year. Take the first step towards a rewarding career in pharmaceutical sciences. Explore our programs, faculty, and state-of-the-art facilities.</p>
            <a routerLink="/admission/apply" class="btn btn-light py-md-3 px-md-5 me-3">Apply Now</a>
            <a routerLink="/contact" class="btn btn-outline-light py-md-3 px-md-5">Contact Us</a>
          </div>
          <div class="col-lg-5">
            <!-- You can add an image or other content here if desired -->
            <!-- <img class="img-fluid w-100 h-100" src="assets/img/cta-image.jpg" alt="Apply Now"> -->
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      --maroon: #800000;
      --maroon-dark: #600000;
    }

    .bg-maroon {
      background-color: var(--maroon);
    }

    .section-title h6 {
      position: relative;
      display: inline-block;
      text-transform: uppercase;
      margin-bottom: 10px;
      padding-right: 20px;
    }

    .section-title h6::before {
      position: absolute;
      content: "";
      width: 45px;
      height: 2px;
      top: 50%;
      right: -55px;
      margin-top: -1px;
      background: white;
    }

    .btn-light {
      color: var(--maroon) !important;
      background-color: white !important;
      border-color: white !important;
    }

    .btn-light:hover {
      background-color: #f0f0f0 !important;
      border-color: #f0f0f0 !important;
    }

    .btn-outline-light {
      color: white !important;
      border-color: white !important;
    }

    .btn-outline-light:hover {
      background-color: white !important;
      color: var(--maroon) !important;
    }
  `]
})
export class CallToActionComponent implements OnInit {

  constructor(private wowService: NgwWowService) { }

  ngOnInit(): void {
    this.wowService.init();
  }
}