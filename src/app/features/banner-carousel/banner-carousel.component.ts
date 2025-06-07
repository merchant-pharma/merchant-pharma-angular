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
  selector: 'app-banner-carousel', // Choose an appropriate selector
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.css']
})
export class BannerCarouselComponent implements OnInit {
  slides: Slide[] = [
    {
      image: 'img/carousel-1.jpg',
      subtitle: 'First Slide Subtitle',
      title: 'First Slide Title',
      description: 'First slide description goes here.',
    },
    {
      image: 'img/carousel-2.jpg',
      subtitle: 'Second Slide Subtitle',
      title: 'Second Slide Title',
      description: 'Second slide description goes here.',
    },
    // Add more slides as needed
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000, // Adjust as needed (milliseconds)
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