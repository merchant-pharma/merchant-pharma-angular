import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NgwWowService } from 'ngx-wow';

interface Slide {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}

@Component({
  selector: 'app-dynamic-banner',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselModule],
  templateUrl: './dynamic-banner.component.html',
  styles: [`
    .carousel-item {
      position: relative;
      height: 100vh;
      min-height: 500px;
      max-height: 800px;
    }

    .carousel-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
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
      background: rgba(0, 0, 0, 0.5);
      padding: 20px;
    }

    .carousel-caption h1 {
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 700;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .carousel-caption p {
      font-size: clamp(1rem, 2vw, 1.25rem);
      margin-bottom: 2rem;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .carousel-caption .btn {
      font-size: clamp(0.875rem, 1.5vw, 1rem);
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      transition: all 0.3s ease;
    }

    .carousel-caption .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
      .carousel-item {
        height: 70vh;
        min-height: 400px;
      }

      .carousel-caption {
        padding: 15px;
      }

      .carousel-caption .container {
        padding: 0 15px;
      }
    }

    @media (max-width: 576px) {
      .carousel-item {
        height: 60vh;
        min-height: 350px;
      }

      .carousel-caption h1 {
        margin-bottom: 0.5rem;
      }

      .carousel-caption p {
        margin-bottom: 1rem;
      }

      .carousel-caption .btn {
        padding: 0.5rem 1rem;
      }
    }
  `]
})
export class DynamicBannerComponent {
  slides: Slide[] = [
    {
      title: 'Welcome to Merchant Pharmacy College',
      description: 'Excellence in Pharmaceutical Education and Research',
      imageUrl: 'img/Merchant.jpg',
      buttonText: 'Learn More',
      buttonLink: '/about'
    },
    {
      title: 'State-of-the-Art Facilities',
      description: 'Modern Laboratories and Research Centers',
      imageUrl: 'img/carosel-1.webp',
      buttonText: 'Explore Campus',
      buttonLink: '/campus'
    },
    {
      title: 'Industry-Ready Education',
      description: 'Preparing Future Pharmaceutical Leaders',
      imageUrl: 'img/carosel-3.webp',
      buttonText: 'Our Programs',
      buttonLink: '/programs'
    },
    {
      title: 'Research Excellence',
      description: 'Innovative Research in Pharmaceutical Sciences',
      imageUrl: 'img/carosel-4.webp',
      buttonText: 'Research',
      buttonLink: '/research'
    },
    {
      title: 'Placement Success',
      description: 'Building Careers in Pharmaceutical Industry',
      imageUrl: 'img/carosel-5.webp',
      buttonText: 'Placements',
      buttonLink: '/placements'
    }
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 700,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 1
      }
    },
    nav: true
  };

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}