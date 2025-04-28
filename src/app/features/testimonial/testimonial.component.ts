import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NgwWowService } from 'ngx-wow';

interface TestimonialData {
  imageUrl: string;
  clientName: string;
  profession: string;
  quote: string;
}

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  testimonials: TestimonialData[] = [
    {
      imageUrl: '/img/testimonial-1.jpg',
      clientName: 'Client One',
      profession: 'Web Developer',
      quote: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
    },
    {
      imageUrl: '/img/testimonial-2.jpg',
      clientName: 'Client Two',
      profession: 'Graphic Designer',
      quote: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
    },
    {
      imageUrl: '/img/testimonial-3.jpg',
      clientName: 'Client Three',
      profession: 'Video Editor',
      quote: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
    },
    {
      imageUrl: '/img/testimonial-4.jpg',
      clientName: 'Client Four',
      profession: 'Marketing Manager',
      quote: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
    }
    // Add more testimonials here
  ];

  testimonialCarouselOptions: OwlOptions = {
    loop: true,
    center: true,
    margin: 24,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  };

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}