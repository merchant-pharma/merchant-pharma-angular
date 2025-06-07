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
  // testimonials: TestimonialData[] = [
  //   {
  //     imageUrl: 'img/testimonial-1.jpg',
  //     clientName: 'Client One',
  //     profession: 'Web Developer',
  //     quote: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
  //   },
  //   {
  //     imageUrl: 'img/testimonial-2.jpg',
  //     clientName: 'Client Two',
  //     profession: 'Graphic Designer',
  //     quote: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
  //   },
  //   {
  //     imageUrl: 'img/testimonial-3.jpg',
  //     clientName: 'Client Three',
  //     profession: 'Video Editor',
  //     quote: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
  //   },
  //   {
  //     imageUrl: 'img/testimonial-4.jpg',
  //     clientName: 'Client Four',
  //     profession: 'Marketing Manager',
  //     quote: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
  //   }
  //   // Add more testimonials here
  // ];

  testimonials: TestimonialData[] = [
    {
      imageUrl: 'img/testimonial-1.jpg',
      clientName: 'Dr. Sneha Mehta',
      profession: 'Alumni, Clinical Pharmacist',
      quote: 'The rigorous academic training and hands-on exposure at this college helped me secure a position in one of the top hospitals in India. I’m proud to be a graduate of this institution.',
    },
    {
      imageUrl: 'img/testimonial-2.jpg',
      clientName: 'Mr. Rohan Patel',
      profession: 'Final Year B.Pharm Student',
      quote: 'From state-of-the-art laboratories to experienced faculty, everything here fosters learning and innovation. The mentorship I received has shaped my career.',
    },
    {
      imageUrl: 'img/testimonial-3.jpg',
      clientName: 'Mrs. Poonam Shah',
      profession: 'Parent of a Pharm.D Student',
      quote: 'I’m highly satisfied with the education and safety standards of this college. My daughter is thriving academically and personally.',
    },
    {
      imageUrl: 'img/testimonial-4.jpg',
      clientName: 'Dr. Amit Chavda',
      profession: 'Guest Lecturer, Industrial Pharmacy',
      quote: 'As an industry professional, I find the curriculum very relevant and future-ready. Students here are well-prepared for real-world pharmaceutical challenges.',
    },
    {
      imageUrl: 'img/testimonial-5.jpg',
      clientName: 'Ms. Aditi Verma',
      profession: 'M.Pharm Graduate',
      quote: 'Participating in international research conferences and receiving publication support during my PG studies gave me a head-start in the field of pharma research.',
    }
  ];
  
  testimonialCarouselOptions: OwlOptions = {
    loop: true,
    center: true,
    margin: 24,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
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