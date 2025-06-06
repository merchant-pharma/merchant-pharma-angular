import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-iqac',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5" [@fadeInUp]>
      <h2 class="text-center mb-4">Internal Quality Assurance Cell (IQAC)</h2>
      <div class="row g-4">
        <div class="col-lg-6" [@slideIn]="{value: '', params: {delay: '0ms'}}">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">Quality Initiatives</h4>
              <p class="card-text">
                Our IQAC works towards maintaining and enhancing quality standards:
              </p>
              <ul>
                <li [@listAnimation]="'in'">Academic Quality Assurance</li>
                <li [@listAnimation]="'in'">Faculty Development Programs</li>
                <li [@listAnimation]="'in'">Student Feedback System</li>
                <li [@listAnimation]="'in'">Quality Audits</li>
                <li [@listAnimation]="'in'">Best Practices Implementation</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-6" [@slideIn]="{value: '', params: {delay: '200ms'}}">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">Quality Parameters</h4>
              <p class="card-text">
                Key areas of quality enhancement:
              </p>
              <ul>
                <li [@listAnimation]="'in'">Curriculum Development</li>
                <li [@listAnimation]="'in'">Teaching-Learning Process</li>
                <li [@listAnimation]="'in'">Research & Innovation</li>
                <li [@listAnimation]="'in'">Infrastructure & Learning Resources</li>
                <li [@listAnimation]="'in'">Student Support & Progression</li>
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
export class IqacComponent {} 