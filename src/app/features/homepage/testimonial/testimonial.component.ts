import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgwWowService } from 'ngx-wow';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
}

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div class="container-fluid py-5 bg-light">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center px-3">Testimonials</h6>
          <h1 class="mb-5">What Our Students Say</h1>
        </div>
        <div class="row g-4 justify-content-center">
          @for (testimonial of testimonials; track $index; let i = $index) {
            <div class="col-lg-4 col-md-6 wow fadeInUp" [attr.data-wow-delay]="(i * 0.2 + 0.1) + 's'">
              <div class="testimonial-item card h-100 rounded-lg">
                <div class="card-body d-flex flex-column">
                  <div class="d-flex align-items-center mb-4">
                    <div class="faculty-initials-circle me-3">{{ testimonial.name.charAt(0) }}</div>
                    <div class="flex-grow-1">
                      <h5 class="mb-1">{{ testimonial.name }}</h5>
                      <span>{{ testimonial.position }}</span>
                      <small class="d-block text-muted">{{ testimonial.company }}</small>
                    </div>
                  </div>
                  <div class="testimonial-text flex-grow-1">
                    <fa-icon [icon]="faQuoteLeft" class="mb-2"></fa-icon>
                    <p class="mb-0">{{ testimonial.quote }}</p>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      --maroon: #800000;
      --maroon-light: #a04040;
      --maroon-dark: #600000;
      --text-dark-grey: #444;
      --maroon-rgb: 128, 0, 0;
    }

    .testimonial-item {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 15px rgba(var(--maroon-rgb), 0.1);
      border: 1px solid var(--maroon-light);
      background-color: #fff;
    }

    .testimonial-item:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 25px rgba(var(--maroon-rgb), 0.25);
    }

    .testimonial-item img {
      width: 90px;
      height: 90px;
      object-fit: cover;
      border: 4px solid var(--maroon);
      padding: 3px;
    }

    .testimonial-text fa-icon {
      color: var(--maroon);
      font-size: 2.5rem; 
      margin-right: 10px;
    }

    .testimonial-text p {
      font-style: italic;
      line-height: 1.6;
      color: var(--text-dark-grey);
    }

    .text-maroon {
      color: var(--maroon) !important;
    }

    .border-maroon {
      border-color: var(--maroon) !important;
    }

    .border-maroon-thick {
      border-color: var(--maroon) !important;
      border-width: 4px !important;
    }

    .section-title {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--maroon);
      border: 2px solid var(--maroon);
      padding: 8px 20px;
      border-radius: 5px;
      text-transform: uppercase;
      display: inline-block;
      margin-bottom: 20px;
      background-color: #fff;
    }

    .section-title::before,
    .section-title::after {
      display: none; /* Hide default lines as border is used */
    }

    .testimonial-item h5,
    .testimonial-item span {
      color: var(--maroon);
      font-weight: 600;
    }

    .testimonial-item small {
      color: #777;
    }

    .faculty-initials-circle {
      width: 90px;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #800000;
      color: #fff;
      font-size: 2rem;
      font-weight: bold;
      border-radius: 50%;
      margin-right: 1rem;
      box-shadow: 0 2px 8px rgba(128,0,0,0.10);
    }
  `]
})
export class TestimonialComponent implements OnInit {
  faQuoteLeft = faQuoteLeft;
  
  testimonials: Testimonial[] = [
    {
      name: 'Dr. Anjali Singh',
      position: 'B.Pharm Alumna (2020)',
      company: 'Senior Pharmacist at Apollo Hospitals',
      image: 'assets/img/testimonial-1.jpg',
      quote: 'Merchant Pharmacy College provided me with a robust foundation in pharmaceutical sciences. The dedicated faculty and practical learning environment were instrumental in shaping my career in hospital pharmacy.'
    },
   
    {
      name: 'Pooja Verma',
      position: 'B.Pharm Graduate (2023)',
      company: 'Product Specialist at Mankind Pharma',
      image: 'assets/img/testimonial-3.jpg',
      quote: 'The holistic education and strong industry connections at Merchant Pharmacy College helped me secure a challenging role. I appreciate the emphasis on soft skills and professional development that prepared me for the corporate world.'
    },
    {
      name: 'Siddharth Rao',
      position: 'B.Pharm Alumnus (2021)',
      company: 'Quality Assurance Executive at Cipla',
      image: 'assets/img/testimonial-4.jpg',
      quote: 'The comprehensive curriculum and state-of-the-art labs at MPC equipped me with the practical knowledge needed for quality assurance. The college\'s reputation opened doors to leading pharmaceutical companies.'
    }
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
} 