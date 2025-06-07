import { Component } from '@angular/core';

@Component({
  selector: 'app-womens-development',
  standalone: true,
  imports: [],
  template: `
    <div class="container py-5">
      <h2 class="text-center mb-4">Women Development Cell</h2>
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">Empowerment Initiatives</h4>
              <p class="card-text">
                Our Women Development Cell focuses on empowerment and growth:
              </p>
              <ul>
                <li>Leadership Development Programs</li>
                <li>Skill Enhancement Workshops</li>
                <li>Career Guidance Sessions</li>
                <li>Entrepreneurship Support</li>
                <li>Health & Wellness Programs</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">Support Services</h4>
              <p class="card-text">
                Comprehensive support system for women:
              </p>
              <ul>
                <li>Counseling Services</li>
                <li>Safety & Security Measures</li>
                <li>Grievance Resolution</li>
                <li>Mentorship Programs</li>
                <li>Research Opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class WomensDevelopmentComponent {} 