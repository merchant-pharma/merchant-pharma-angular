import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-entrepreneurship',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5" [@fadeInUp]>
      <h2 class="text-center mb-4">Entrepreneurship Cell</h2>
      <div class="row g-4">
        <div class="col-lg-6" [@slideIn]="{value: '', params: {delay: '0ms'}}">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">Entrepreneurship Development</h4>
              <p class="card-text">
                Our E-Cell nurtures entrepreneurial spirit through various initiatives:
              </p>
              <ul>
                <li [@listAnimation]="'in'">Startup Incubation Support</li>
                <li [@listAnimation]="'in'">Mentorship Programs</li>
                <li [@listAnimation]="'in'">Business Plan Competitions</li>
                <li [@listAnimation]="'in'">Industry Connect Sessions</li>
                <li [@listAnimation]="'in'">Innovation Workshops</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-6" [@slideIn]="{value: '', params: {delay: '200ms'}}">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">Resources & Support</h4>
              <p class="card-text">
                We provide comprehensive support for aspiring entrepreneurs:
              </p>
              <ul>
                <li [@listAnimation]="'in'">Funding Guidance</li>
                <li [@listAnimation]="'in'">Technical Support</li>
                <li [@listAnimation]="'in'">Networking Opportunities</li>
                <li [@listAnimation]="'in'">Legal & IP Support</li>
                <li [@listAnimation]="'in'">Market Research Assistance</li>
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
    ]),
    trigger('listAnimation', [
      transition('void => in', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('400ms {{delay}} ease-out', 
          style({ opacity: 1, transform: 'translateX(0)' })
        )
      ])
    ])
  ]
})
export class EntrepreneurshipComponent {} 