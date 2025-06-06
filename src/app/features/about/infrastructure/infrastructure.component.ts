import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFlask, faBook, faLaptop, faHospital, faBed, faUtensils, faFutbol, faWifi } from '@fortawesome/free-solid-svg-icons';

interface Facility {
  icon: any;
  name: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent implements OnInit {
  facilities: Facility[] = [
    {
      icon: faFlask,
      name: 'Laboratories',
      description: 'State-of-the-art laboratories equipped with modern instruments',
      features: [
        'Pharmaceutical Analysis Lab',
        'Pharmacology Lab',
        'Pharmaceutics Lab',
        'Research Lab'
      ]
    },
    {
      icon: faBook,
      name: 'Library',
      description: 'Well-stocked library with digital resources',
      features: [
        'Digital Library Section',
        'Reading Halls',
        'E-Journal Access',
        'Reference Section'
      ]
    },
    {
      icon: faLaptop,
      name: 'Computer Center',
      description: 'Modern computer lab with high-speed internet',
      features: [
        'High-end Computers',
        'Software Training',
        'Internet Facility',
        'Digital Learning Resources'
      ]
    },
    {
      icon: faHospital,
      name: 'Medical Room',
      description: 'On-campus medical facility for emergency care',
      features: [
        'First Aid Facility',
        'Medical Consultation',
        'Emergency Services',
        'Health Awareness Programs'
      ]
    },
    {
      icon: faBed,
      name: 'Hostels',
      description: 'Separate hostels for boys and girls',
      features: [
        'AC Rooms Available',
        '24x7 Security',
        'Mess Facility',
        'Recreation Areas'
      ]
    },
    {
      icon: faUtensils,
      name: 'Cafeteria',
      description: 'Hygienic and spacious cafeteria',
      features: [
        'Healthy Food Options',
        'Clean Environment',
        'Seating Capacity 200+',
        'Multiple Food Counters'
      ]
    },
    {
      icon: faFutbol,
      name: 'Sports Facilities',
      description: 'Indoor and outdoor sports facilities',
      features: [
        'Indoor Games Room',
        'Outdoor Sports Ground',
        'Gym Equipment',
        'Professional Coaching'
      ]
    },
    {
      icon: faWifi,
      name: 'Wi-Fi Campus',
      description: 'Complete Wi-Fi enabled campus',
      features: [
        'High-speed Internet',
        'Campus-wide Coverage',
        'Secure Network',
        'IT Support'
      ]
    }
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
} 