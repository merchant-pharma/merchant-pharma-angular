import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGraduationCap, faFlask, faPrescriptionBottleAlt } from '@fortawesome/free-solid-svg-icons';

interface Program {
  icon: any;
  title: string;
  shortDescription: string;
  link: string;
}

@Component({
  selector: 'app-programs-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  template: `
    <div class="container-fluid py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center px-3">Our Programs</h6>
          <h1 class="mb-5">Explore Our Academic Offerings</h1>
        </div>
        <div class="row g-4 justify-content-center">
          @for (program of programs; track $index; let i = $index) {
            <div class="col-lg-4 col-md-6 wow fadeInUp" [attr.data-wow-delay]="(i * 0.2 + 0.1) + 's'">
              <div class="program-item card h-100 rounded-lg text-center">
                <div class="card-body d-flex flex-column">
                  <div class="program-icon mb-4 mx-auto d-flex justify-content-center align-items-center rounded-circle">
                    <fa-icon [icon]="program.icon" class="fa-3x"></fa-icon>
                  </div>
                  <h5 class="mb-3">{{ program.title }}</h5>
                  <p class="mb-3">{{ program.shortDescription }}</p>
                  <div class="mt-auto">
                    <a [routerLink]="[program.link]" class="btn btn-program py-2 px-4 rounded-pill">Learn More</a>
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

    .program-item {
      border: 1px solid var(--maroon-light);
      box-shadow: 0 4px 15px rgba(var(--maroon-rgb), 0.1);
      background-color: #fff;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .program-item:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 25px rgba(var(--maroon-rgb), 0.25);
    }

    .program-icon {
      width: 90px;
      height: 90px;
      background-color: var(--maroon);
      color: white;
      font-size: 2.2rem;
      margin-bottom: 20px;
      box-shadow: 0 4px 10px rgba(var(--maroon-rgb), 0.2);
    }

    .program-item h5 {
      color: var(--maroon-dark);
      font-weight: bold;
    }

    .program-item p {
      color: var(--text-dark-grey);
    }

    .btn-program {
      background-color: var(--maroon);
      color: white;
      border: 1px solid var(--maroon);
      transition: background-color 0.3s ease, border-color 0.3s ease;
    }

    .btn-program:hover {
      background-color: var(--maroon-dark);
      border-color: var(--maroon-dark);
    }
  `]
})
export class ProgramsOverviewComponent implements OnInit {
  programs: Program[] = [
    {
      icon: faGraduationCap,
      title: 'Bachelor of Pharmacy (B.Pharm)',
      shortDescription: 'A comprehensive undergraduate program preparing students for diverse roles in the pharmaceutical industry.',
      link: '/programs/b-pharm'
    }
  ];

  constructor(private wowService: NgwWowService) { }

  ngOnInit(): void {
    this.wowService.init();
  }
} 