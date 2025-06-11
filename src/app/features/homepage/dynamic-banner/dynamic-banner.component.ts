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
    .banner-container {
      width: 100%;
      overflow: hidden;
    }

    .banner-slide {
      height: 800px;
    }

    .banner-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr;
      height: 100%;
      background: #fff;
    }

    .banner-image {
      position: relative;
      overflow: hidden;
      height: 100%;
    }

    .banner-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.5s ease;
    }

    .banner-slide:hover .banner-image img {
      transform: scale(1.05);
    }

    .banner-content {
      display: flex;
      align-items: center;
      padding: 3rem;
      position: relative;
      overflow: hidden;
      height: 100%;
    }

    .content-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .blur-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(20px) brightness(0.7);
      transform: scale(1.1);
      transition: all 0.5s ease;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%);
      backdrop-filter: blur(5px);
    }

    .content-wrapper {
      max-width: 90%;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .content-badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: maroon;
      color: white;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .banner-title {
      font-size: clamp(2rem, 3.5vw, 3rem);
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      position: relative;
      padding-left: 1rem;
    }

    .title-line {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: maroon;
      border-radius: 2px;
    }

    .banner-description {
      font-size: clamp(1.1rem, 1.8vw, 1.3rem);
      color: #495057;
      line-height: 1.6;
      margin-bottom: 2.5rem;
      position: relative;
      padding-left: 1rem;
    }

    .banner-features {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      margin-bottom: 2.5rem;
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: #495057;
      font-size: 1rem;
      background: rgba(255, 255, 255, 0.9);
      padding: 0.75rem;
      border-radius: 4px;
      backdrop-filter: blur(5px);
    }

    .feature-item i {
      color: maroon;
      font-size: 1.2rem;
    }

    .banner-button {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 2rem;
      background-color: maroon;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .banner-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: 0.5s;
    }

    .banner-button:hover::before {
      left: 100%;
    }

    .banner-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      color: white;
    }

    .banner-button i {
      transition: transform 0.3s ease;
      font-size: 1.2rem;
    }

    .banner-button:hover i {
      transform: translateX(4px);
    }

    @media (max-width: 991px) {
      .banner-grid {
        grid-template-columns: 1fr;
      }

      .banner-slide {
        height: auto;
      }

      .banner-image {
        height: 500px;
      }

      .banner-content {
        padding: 2.5rem 1.5rem;
      }

      .content-wrapper {
        max-width: 100%;
      }

      .banner-features {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 576px) {
      .banner-image {
        height: 400px;
      }

      .banner-content {
        padding: 2rem 1rem;
      }

      .banner-title {
        font-size: 1.75rem;
      }

      .banner-description {
        font-size: 1.1rem;
      }

      .content-badge {
        font-size: 0.75rem;
        padding: 0.4rem 0.8rem;
      }

      .feature-item {
        padding: 0.5rem;
      }

      .banner-button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
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