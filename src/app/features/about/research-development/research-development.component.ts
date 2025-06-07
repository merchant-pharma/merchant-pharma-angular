import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-research-development',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5" [@fadeInUp]>
      <h2 class="text-center mb-4">Research & Development Cell</h2>
      <div class="row g-4">
        <div class="col-lg-6" [@slideIn]="{value: '', params: {delay: '0ms'}}">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">Research Areas</h4>
              <p class="card-text">
                Our R&D cell focuses on cutting-edge research in various pharmaceutical domains:
              </p>
              <ul>
                <li [@listAnimation]="'in'">Drug Discovery and Development</li>
                <li [@listAnimation]="'in'">Pharmaceutical Analysis</li>
                <li [@listAnimation]="'in'">Novel Drug Delivery Systems</li>
                <li [@listAnimation]="'in'">Natural Product Research</li>
                <li [@listAnimation]="'in'">Pharmaceutical Biotechnology</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-6" [@slideIn]="{value: '', params: {delay: '200ms'}}">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">Research Support</h4>
              <p class="card-text">
                We provide comprehensive support for research activities:
              </p>
              <ul>
                <li [@listAnimation]="'in'">State-of-the-art Research Laboratories</li>
                <li [@listAnimation]="'in'">Research Grants and Funding</li>
                <li [@listAnimation]="'in'">Industry Collaborations</li>
                <li [@listAnimation]="'in'">Publication Support</li>
                <li [@listAnimation]="'in'">Patent Filing Assistance</li>
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
export class ResearchDevelopmentComponent {} 