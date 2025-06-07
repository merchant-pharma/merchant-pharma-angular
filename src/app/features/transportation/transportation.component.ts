import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface BusRoute {
  place: string;
  fareWholeSemester: number;
  farePerMonth: number;
}

@Component({
  selector: 'app-transportation',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent {
  faCheckCircle = faCheckCircle;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;

  busRoutes: BusRoute[] = [
    { place: 'Palanpur', fareWholeSemester: 6800, farePerMonth: 1150 },
    { place: 'Siddhpur', fareWholeSemester: 4100, farePerMonth: 700 },
    { place: 'Unjha', fareWholeSemester: 2700, farePerMonth: 450 },
    { place: 'Bhandu', fareWholeSemester: 2400, farePerMonth: 400 },
    { place: 'Vijapur', fareWholeSemester: 4500, farePerMonth: 750 },
    { place: 'Kukarwada', fareWholeSemester: 2700, farePerMonth: 450 },
    { place: 'Vasai', fareWholeSemester: 2700, farePerMonth: 450 },
    { place: 'Dabhla', fareWholeSemester: 2400, farePerMonth: 400 },
    { place: 'Patan', fareWholeSemester: 6000, farePerMonth: 1000 },
    { place: 'Chanasma', fareWholeSemester: 3600, farePerMonth: 600 },
    { place: 'Dhinoj', fareWholeSemester: 3000, farePerMonth: 500 },
    { place: 'Panchot', fareWholeSemester: 2100, farePerMonth: 350 },
    { place: 'Narol', fareWholeSemester: 10000, farePerMonth: 1700 },
    { place: 'Adalaj', fareWholeSemester: 6500, farePerMonth: 1100 },
    { place: 'Chhatral', fareWholeSemester: 4100, farePerMonth: 700 },
    { place: 'Nandasan', fareWholeSemester: 3800, farePerMonth: 650 },
    { place: 'Jagudan', fareWholeSemester: 3500, farePerMonth: 600 },
    { place: 'Mehsana', fareWholeSemester: 1700, farePerMonth: 300 },
    { place: 'Visnagar', fareWholeSemester: 1700, farePerMonth: 300 }
  ];
} 