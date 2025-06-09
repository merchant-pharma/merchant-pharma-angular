import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarAlt, faBell } from '@fortawesome/free-solid-svg-icons';

interface EventNewsItem {
  type: 'event' | 'news';
  icon: any;
  title: string;
  date: string;
  description: string;
  link?: string;
}

@Component({
  selector: 'app-events-news',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  template: `
    <div class="container-fluid py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center px-3">Events & News</h6>
          <h1 class="mb-5">Stay Updated with MPC</h1>
        </div>
        <div class="row g-4 justify-content-center">
          @for (item of eventsNews; track $index; let i = $index) {
            <div class="col-lg-6 wow fadeInUp" [attr.data-wow-delay]="(i * 0.2 + 0.1) + 's'">
              <div class="event-news-item d-flex align-items-start p-4 rounded-lg h-100">
                <div class="icon-container me-4 flex-shrink-0">
                  <fa-icon [icon]="item.icon" class="fa-3x"></fa-icon>
                </div>
                <div class="flex-grow-1">
                  <h5 class="mb-2">{{ item.title }}</h5>
                  <p class="text-muted mb-2"><fa-icon [icon]="faCalendarAlt" class="me-2"></fa-icon>{{ item.date }}</p>
                  <p class="mb-0">{{ item.description }}</p>
                  @if (item.link) {
                    <a [routerLink]="[item.link]" class="read-more-link mt-2">Read More <i class="fa fa-arrow-right ms-2"></i></a>
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

    .event-news-item {
      border: 1px solid var(--maroon-light);
      box-shadow: 0 4px 15px rgba(var(--maroon-rgb), 0.1);
      background-color: #fff;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .event-news-item:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 25px rgba(var(--maroon-rgb), 0.25);
    }

    .icon-container {
      background-color: var(--maroon);
      color: white;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 4px 10px rgba(var(--maroon-rgb), 0.2);
    }

    .event-news-item h5 {
      color: var(--maroon-dark);
      font-weight: bold;
    }

    .event-news-item p {
      color: var(--text-dark-grey);
    }

    .read-more-link {
      color: var(--maroon);
      font-weight: bold;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .read-more-link:hover {
      color: var(--maroon-dark);
    }
  `]
})
export class EventsNewsComponent implements OnInit {
  faCalendarAlt = faCalendarAlt;
  faBell = faBell;

  eventsNews: EventNewsItem[] = [
    {
      type: 'news',
      icon: faBell,
      title: 'Admissions Open for B.Pharm 2025-26',
      date: 'October 26, 2024',
      description: 'Applications are now open for the Bachelor of Pharmacy program for the academic year 2025-26. Apply early to secure your spot!',
      link: '/admission/apply'
    },
    {
      type: 'event',
      icon: faCalendarAlt,
      title: 'Annual Pharma Fest 2024',
      date: 'November 15, 2024',
      description: 'Join us for our annual pharmaceutical festival featuring guest lectures, workshops, and student competitions.',
      link: '/events/pharma-fest-2024'
    },
    {
      type: 'news',
      icon: faBell,
      title: 'Research Paper Published by Faculty',
      date: 'September 20, 2024',
      description: 'Dr. Priya Sharma from our Pharmacology department published a groundbreaking research paper in the Journal of Pharmaceutical Sciences.',
      link: '/news/research-publication'
    },
    {
      type: 'event',
      icon: faCalendarAlt,
      title: 'Industry-Academia Conclave',
      date: 'December 5, 2024',
      description: 'An exclusive event bringing together leading industry experts and academicians to discuss the future of pharmacy education.',
      link: '/events/industry-conclave'
    }
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
} 