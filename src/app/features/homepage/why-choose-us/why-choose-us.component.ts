import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgwWowService } from 'ngx-wow';
import {
  faGraduationCap,
  faFlask,
  faBuilding,
  faUsers,
  faAward,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';

interface Feature {
  icon: any;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div class="container-fluid py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center px-3">Why Choose Us?</h6>
          <h1 class="mb-5">Reasons to Join Merchant Pharmacy College</h1>
        </div>
        <div class="row g-4">
          @for (feature of features; track $index; let i = $index) {
            <div class="col-lg-4 col-md-6 wow fadeInUp" [attr.data-wow-delay]="(i * 0.2 + 0.1) + 's'">
              <div class="feature-item bg-light p-4 rounded-lg text-center h-100">
                <div class="feature-icon mb-4 d-flex justify-content-center align-items-center rounded-circle mx-auto">
                  <fa-icon [icon]="feature.icon" class="fa-3x"></fa-icon>
                </div>
                <h5 class="mb-3">{{ feature.title }}</h5>
                <p class="mb-0">{{ feature.description }}</p>
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

    .feature-item {
      border: 1px solid var(--maroon-light);
      box-shadow: 0 4px 15px rgba(var(--maroon-rgb), 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background-color: #fff;
    }

    .feature-item:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 25px rgba(var(--maroon-rgb), 0.25);
    }

    .feature-icon {
      width: 100px;
      height: 100px;
      background-color: var(--maroon);
      color: white;
      font-size: 2.5rem;
      margin-bottom: 25px;
      box-shadow: 0 4px 10px rgba(var(--maroon-rgb), 0.2);
    }

    .feature-item h5 {
      color: var(--maroon-dark);
      font-weight: bold;
    }

    .feature-item p {
      color: var(--text-dark-grey);
    }

    :host {
      --maroon-rgb: 128, 0, 0;
    }
  `]
})
export class WhyChooseUsComponent implements OnInit {
  features: Feature[] = [
    {
      icon: faGraduationCap,
      title: 'Academic Excellence',
      description: 'Renowned faculty, rigorous curriculum, and a focus on practical learning ensure top-tier pharmaceutical education.'
    },
    {
      icon: faFlask,
      title: 'Advanced Laboratories',
      description: 'State-of-the-art labs equipped with modern instruments for hands-on research and experimental learning.'
    },
    {
      icon: faBuilding,
      title: 'Modern Infrastructure',
      description: 'A sprawling campus with contemporary facilities, including smart classrooms, a digital library, and comfortable hostels.'
    },
    {
      icon: faUsers,
      title: 'Industry Connections',
      description: 'Strong ties with leading pharmaceutical companies for internships, placements, and collaborative research projects.'
    },
    {
      icon: faAward,
      title: 'Recognized Excellence',
      description: 'Accredited programs and national recognition for our commitment to quality education and innovation.'
    },
    {
      icon: faHandshake,
      title: 'Holistic Development',
      description: 'Beyond academics, we focus on extracurricular activities, sports, and community engagement for overall student growth.'
    }
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
} 