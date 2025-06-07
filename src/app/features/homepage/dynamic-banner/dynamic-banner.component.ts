import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NgwWowService } from 'ngx-wow';

interface Slide {
  image: string;
  subtitle: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-dynamic-banner',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './dynamic-banner.component.html',
  styleUrls: ['./dynamic-banner.component.css']
})
export class DynamicBannerComponent implements OnInit {
  slides: Slide[] = [
    {
      image: 'img/carosel-2.webp',
      subtitle: 'Latest News',
      title: 'Admissions Open for 2025-2026',
      description: 'Secure your future in pharmacy. Apply now for our undergraduate and postgraduate programs.',
    },
    {
      image: 'img/carosel-1.webp',
      subtitle: 'Announcements',
      title: 'Webinar on Pharmaceutical Innovations',
      description: 'Join our expert panel discussion on the latest advancements in pharmaceutical research.',
    },
    {
      image: 'img/carosel-3.webp',
      subtitle: 'Campus Life',
      title: 'Annual Cultural Fest 2025',
      description: 'Experience the vibrant campus life through our cultural events, competitions, and exhibitions.',
    },
    {
      image: 'img/carosel-4.webp',
      subtitle: 'Research',
      title: 'New Research Lab Inauguration',
      description: 'State-of-the-art research facility inaugurated to support groundbreaking pharmaceutical studies.',
    },
    {
      image: 'img/carosel-5.webp',
      subtitle: 'Placement News',
      title: 'Top Recruiters On Campus',
      description: 'Our students are being placed in leading pharma companies. Explore our placement success stories.',
    },
    
  
    // Add more dynamic banner slides
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