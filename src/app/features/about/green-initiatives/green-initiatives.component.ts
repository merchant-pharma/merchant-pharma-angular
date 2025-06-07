import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-green-initiatives',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5" [@fadeInUp]>
      <h2 class="text-center mb-4">Green Initiatives</h2>
      <div class="row g-4">
        <div class="col-lg-6" [@slideIn]="{value: '', params: {delay: '0ms'}}">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">Sustainable Campus</h4>
              <p class="card-text">
                Our commitment to environmental sustainability is reflected in various green initiatives across the campus:
              </p>
              <ul>
                <li>Solar Power Generation</li>
                <li>Rainwater Harvesting</li>
                <li>Waste Management</li>
                <li>Green Building Practices</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-6" [@slideIn]="{value: '', params: {delay: '200ms'}}">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">Environmental Programs</h4>
              <p class="card-text">
                We actively promote environmental awareness through:
              </p>
              <ul>
                <li>Tree Plantation Drives</li>
                <li>Environmental Awareness Campaigns</li>
                <li>Eco-friendly Campus Initiatives</li>
                <li>Student Environmental Clubs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('{{delay}} 600ms ease-out', 
          style({ opacity: 1, transform: 'translateX(0)' })
        )
      ])
    ])
  ]
})
export class GreenInitiativesComponent {} 