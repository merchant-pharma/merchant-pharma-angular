import { Component } from '@angular/core';

@Component({
  selector: 'app-anti-ragging',
  standalone: true,
  imports: [],
  template: `
    <div class="container py-5">
      <h2 class="text-center mb-4">Anti-Ragging Cell</h2>
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">Zero Tolerance Policy</h4>
              <p class="card-text">
                Our commitment to maintaining a ragging-free campus:
              </p>
              <ul>
                <li>24/7 Anti-Ragging Helpline</li>
                <li>Regular Awareness Programs</li>
                <li>Strict Disciplinary Action</li>
                <li>Student Mentoring System</li>
                <li>Regular Campus Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">Prevention Measures</h4>
              <p class="card-text">
                Comprehensive anti-ragging measures:
              </p>
              <ul>
                <li>Anti-Ragging Squad</li>
                <li>CCTV Surveillance</li>
                <li>Regular Hostel Inspections</li>
                <li>Student Counseling</li>
                <li>Parent-Faculty Coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AntiRaggingComponent {} 