import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

interface Slide {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

@Component({
  selector: 'app-banner-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbCarouselModule],
  template: `
    <div class="container-fluid p-0 mb-5">
      <div class="owl-carousel header-carousel position-relative">
        <ngb-carousel [showNavigationArrows]="true" [showNavigationIndicators]="true" [interval]="5000">
          @for (slide of slides; track $index) {
            <ng-template ngbSlide>
              <div class="carousel-item">
                <img class="w-100" [src]="slide.image" [alt]="slide.title">
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div class="p-3" style="max-width: 900px;">
                    <h1 class="display-3 text-white mb-md-4">{{ slide.title }}</h1>
                    <p class="fs-5 text-white mb-md-4">{{ slide.description }}</p>
                    <a [routerLink]="[slide.buttonLink]" class="btn btn-lg px-4 py-3 me-sm-3" 
                       style="background-color: maroon; border-color: maroon; color: white;">
                      {{ slide.buttonText }}
                    </a>
                  </div>
                </div>
              </div>
            </ng-template>
          }
        </ngb-carousel>
      </div>
    </div>
  `,
  styles: [`
    .carousel-item {
      position: relative;
      height: 100vh;
      min-height: 500px;
      background: no-repeat center center scroll;
      background-size: cover;
    }
    .carousel-item::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
    .carousel-caption {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      z-index: 1;
    }
    .carousel-caption h1 {
      font-size: 3.5rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .carousel-caption p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }
    .carousel-caption .btn {
      font-weight: 600;
      text-transform: uppercase;
      padding: 12px 30px;
      border-radius: 0;
      transition: all 0.3s;
    }
    .carousel-caption .btn:hover {
      background-color: #800000;
      border-color: #800000;
      transform: translateY(-3px);
    }
    :host ::ng-deep .carousel-control-prev-icon,
    :host ::ng-deep .carousel-control-next-icon {
      background-color: maroon;
      padding: 20px;
      border-radius: 50%;
    }
    :host ::ng-deep .carousel-indicators button {
      background-color: maroon;
      border: 2px solid white;
    }
    :host ::ng-deep .carousel-indicators button.active {
      background-color: white;
      border-color: maroon;
    }
    @media (max-width: 768px) {
      .carousel-caption h1 {
        font-size: 2.5rem;
      }
      .carousel-caption p {
        font-size: 1rem;
      }
    }
  `]
})
export class BannerCarouselComponent implements OnInit {
  slides: Slide[] = [
    {
      image: 'assets/img/carousel-1.jpg',
      title: 'Welcome to Merchant Pharmacy College',
      description: 'Excellence in Pharmaceutical Education and Research',
      buttonText: 'Explore Programs',
      buttonLink: '/programs'
    },
    {
      image: 'assets/img/carousel-2.jpg',
      title: 'State-of-the-Art Infrastructure',
      description: 'Advanced Laboratories and Research Facilities',
      buttonText: 'View Facilities',
      buttonLink: '/about/infrastructure'
    },
    {
      image: 'assets/img/carousel-3.jpg',
      title: 'Industry-Ready Education',
      description: '100% Placement Support and Industry Collaborations',
      buttonText: 'Apply Now',
      buttonLink: '/admission/apply'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
} 