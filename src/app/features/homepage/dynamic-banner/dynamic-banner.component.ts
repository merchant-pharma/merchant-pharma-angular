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
      image: 'img/Merchant.jpg',
      subtitle: 'Latest News',
      title: 'Admissions Open for 2025-2026',
      description: 'Secure your future in pharmacy. Apply now for our undergraduate and postgraduate programs.',
    },
    {
      image: 'img/Merchant.jpg',
      subtitle: 'Announcements',
      title: 'Webinar on Pharmaceutical Innovations',
      description: 'Join our expert panel discussion on the latest advancements in pharmaceutical research.',
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