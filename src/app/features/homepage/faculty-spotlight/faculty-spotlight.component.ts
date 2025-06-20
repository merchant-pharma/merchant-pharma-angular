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
                  <div class="faculty-initials-circle mb-3">{{ faculty.name.charAt(0) }}</div>
                  <h5 class="mb-1">{{ faculty.name }}</h5>
                  <p class="text-maroon fw-bold mb-2">{{ faculty.designation }}</p>
                  <p class="text-muted mb-3">{{ faculty.specialization }}</p>
                  <div class="contact-info mb-4">
                    @if (faculty.email) {
                      <a [href]="'mailto:' + faculty.email" class="d-block text-maroon"><fa-icon [icon]="faEnvelope" class="me-2"></fa-icon>{{ faculty.email }}</a>
                    }
                    @if (faculty.phone) {
                      <a [href]="'tel:' + faculty.phone" class="d-block text-maroon"><fa-icon [icon]="faPhone" class="me-2"></fa-icon>{{ faculty.phone }}</a>
                    }
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

    .faculty-initials-circle {
      width: 120px;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #800000;
      color: #fff;
      font-size: 2.5rem;
      font-weight: bold;
      border-radius: 50%;
      margin: 0 auto 1rem auto;
      box-shadow: 0 2px 8px rgba(128,0,0,0.10);
    }
  `]
})
export class FacultySpotlightComponent implements OnInit {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faGlobe = faGlobe;
  faUserTie = faUserTie;

  facultyMembers: FacultyMember[] = [
    { name: 'Dr. Laxman Prajapati', designation: 'Principal', specialization: '', email: 'laxchem@rediffmail.com', phone: '9427340043' },
    { name: 'Dr. Bhoomi M. Patel', designation: 'Associate Professor', specialization: '', email: 'bhoomi16692@gmail.com', phone: '8460474756' },
    { name: 'Patel Khushbu V.', designation: 'Assistant Professor', specialization: '', email: 'khushbuv4979@gmail.com', phone: '9714760662' },
    { name: 'Patel Mit Jitendrakumar', designation: 'Assistant Professor', specialization: '', email: 'mit444p@gmail.com', phone: '9727193410' },
    { name: 'Patel Kunjan Harshdbhai', designation: 'Assistant Professor', specialization: '', email: 'kunjanpatel6944@gmail.com', phone: '9586281205' },
    { name: 'Patel Ruchitkumar Vishnubhai', designation: 'Assistant Professor', specialization: '', email: 'ruchitpatel316@gmail.com', phone: '9974155132' },
    { name: 'Patel Riya Pareshkumar', designation: 'Assistant Professor', specialization: '', email: 'riyapatel6336@gmail.com', phone: '9265223007' },
    { name: 'Patel Kena Gauravbhai', designation: 'Assistant Professor', specialization: '', email: '', phone: '9537674637' },
    { name: 'Ravi M. Pethani', designation: 'Assistant Professor', specialization: '', email: 'ravipethani1776@gmail.com', phone: '7984402132' },
    { name: 'Jayswal J. Parth', designation: 'Assistant Professor', specialization: '', email: 'parthjayswal0645@gmail.com', phone: '9327833287' },
    { name: 'Kushal A. Saini', designation: 'Assistant Professor', specialization: '', email: 'sainikushal87@gmail.com', phone: '9427672857' },
    { name: 'Patel Mosam P.', designation: 'Assistant Professor', specialization: '', email: 'mosampatel2112@gmail.com', phone: '' },
    { name: 'Prajapati Dhruv S.', designation: 'Assistant Professor', specialization: '', email: 'dhruvprajapati6650@gmail.com', phone: '' },
    { name: 'Patel Happykumar R.', designation: 'Assistant Professor', specialization: '', email: 'happypatel3570@gamil.com', phone: '' },
    { name: 'Patel Meshva R.', designation: 'Assistant Professor', specialization: '', email: 'patelmeshva99@gmail.com', phone: '' },
    { name: 'Patel Yash', designation: 'Assistant Professor', specialization: '', email: 'yashpatel9756@gmail.com', phone: '' },
    { name: 'Patel Naiya', designation: 'Assistant Professor', specialization: '', email: 'naiyapatel4841@gmail.com', phone: '' }
  ];

  constructor(private wowService: NgwWowService) { }

  ngOnInit(): void {
    this.wowService.init();
  }
} 