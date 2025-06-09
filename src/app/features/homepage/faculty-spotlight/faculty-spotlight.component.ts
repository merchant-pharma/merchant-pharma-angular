import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEnvelope,
  faPhone,
  faGlobe,
  faUserTie
} from '@fortawesome/free-solid-svg-icons';

interface FacultyMember {
  name: string;
  designation: string;
  specialization: string;
  image: string;
  email: string;
  phone: string;
  researchLink?: string;
}

@Component({
  selector: 'app-faculty-spotlight',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  template: `
    <div class="container-fluid py-5 bg-light">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center px-3">Faculty Spotlight</h6>
          <h1 class="mb-5">Meet Our Esteemed Faculty</h1>
        </div>
        <div class="row g-4 justify-content-center">
          @for (faculty of facultyMembers; track $index; let i = $index) {
            <div class="col-lg-4 col-md-6 wow fadeInUp" [attr.data-wow-delay]="(i * 0.2 + 0.1) + 's'">
              <div class="faculty-card card h-100 rounded-lg text-center">
                <div class="card-body d-flex flex-column align-items-center">
                  <img class="img-fluid rounded-circle mb-3" [src]="faculty.image" [alt]="faculty.name">
                  <h5 class="mb-1">{{ faculty.name }}</h5>
                  <p class="text-maroon fw-bold mb-2">{{ faculty.designation }}</p>
                  <p class="text-muted mb-3">{{ faculty.specialization }}</p>
                  <div class="contact-info mb-4">
                    <a [href]="'mailto:' + faculty.email" class="d-block text-maroon"><fa-icon [icon]="faEnvelope" class="me-2"></fa-icon>{{ faculty.email }}</a>
                    <a [href]="'tel:' + faculty.phone" class="d-block text-maroon"><fa-icon [icon]="faPhone" class="me-2"></fa-icon>{{ faculty.phone }}</a>
                  </div>
                  @if (faculty.researchLink) {
                    <div class="mt-auto">
                      <a [routerLink]="[faculty.researchLink]" class="btn btn-maroon py-2 px-4 rounded-pill">View Research</a>
                    </div>
                  }
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
      display: none;
    }

    .faculty-card {
      border: 1px solid var(--maroon-light);
      box-shadow: 0 4px 15px rgba(var(--maroon-rgb), 0.1);
      background-color: #fff;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .faculty-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 25px rgba(var(--maroon-rgb), 0.25);
    }

    .faculty-card img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border: 4px solid var(--maroon);
      padding: 3px;
    }

    .faculty-card h5 {
      color: var(--maroon-dark);
      font-weight: bold;
    }

    .faculty-card p {
      color: var(--text-dark-grey);
    }

    .contact-info a {
      color: var(--maroon);
      text-decoration: none;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.3s ease;
    }

    .contact-info a:hover {
      color: var(--maroon-dark);
    }

    .btn-maroon {
      background-color: var(--maroon);
      color: white;
      border: 1px solid var(--maroon);
      transition: background-color 0.3s ease, border-color 0.3s ease;
    }

    .btn-maroon:hover {
      background-color: var(--maroon-dark);
      border-color: var(--maroon-dark);
    }
  `]
})
export class FacultySpotlightComponent implements OnInit {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faGlobe = faGlobe;
  faUserTie = faUserTie;

  facultyMembers: FacultyMember[] = [
    {
      name: 'Dr. Rajesh Patel',
      designation: 'Principal & Professor',
      specialization: 'Pharmaceutical Chemistry, Drug Design',
      image: 'assets/img/faculty-1.jpg',
      email: 'rajesh.patel@mpcollege.org',
      phone: '+91 98765 43210',
      researchLink: '/faculty/rajesh-patel'
    },
    {
      name: 'Dr. Priya Sharma',
      designation: 'Head of Department, Pharmacology',
      specialization: 'Pharmacology, Clinical Research',
      image: 'assets/img/faculty-2.jpg',
      email: 'priya.sharma@mpcollege.org',
      phone: '+91 91234 56789',
      researchLink: '/faculty/priya-sharma'
    },
    {
      name: 'Dr. Amit Desai',
      designation: 'Professor, Pharmaceutics',
      specialization: 'Formulation Development, Nanotechnology',
      image: 'assets/img/faculty-3.jpg',
      email: 'amit.desai@mpcollege.org',
      phone: '+91 90123 45678',
      researchLink: '/faculty/amit-desai'
    },
    {
      name: 'Dr. Neha Singh',
      designation: 'Associate Professor, Pharmacognosy',
      specialization: 'Herbal Drug Technology, Natural Products',
      image: 'assets/img/faculty-4.jpg',
      email: 'neha.singh@mpcollege.org',
      phone: '+91 99887 76655',
      researchLink: '/faculty/neha-singh'
    }
  ];

  constructor(private wowService: NgwWowService) { }

  ngOnInit(): void {
    this.wowService.init();
  }
} 