import { Component } from '@angular/core';

@Component({
  selector: 'app-anti-ragging',
  standalone: true,
  imports: [],
  template: `
    <div class="container py-5">
      <h2 class="text-center mb-4" style="color: maroon;">Anti-Ragging Cell</h2>
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title" style="color: maroon;">Zero Tolerance Policy</h4>
              <p class="card-text">
                Our commitment to maintaining a ragging-free campus:
              </p>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  24/7 Anti-Ragging Helpline
                </li>
                <li class="mb-2">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Regular Awareness Programs
                </li>
                <li class="mb-2">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Strict Disciplinary Action
                </li>
                <li class="mb-2">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Student Mentoring System
                </li>
                <li class="mb-2">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Regular Campus Monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title" style="color: maroon;">Prevention Measures</h4>
              <p class="card-text">
                Comprehensive anti-ragging measures:
              </p>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Anti-Ragging Squad
                </li>
                <li class="mb-2">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  CCTV Surveillance
                </li>
                <li class="mb-2">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Regular Hostel Inspections
                </li>
                <li class="mb-2">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Student Counseling
                </li>
                <li class="mb-2">
                  <i class="fas fa-check-circle me-2" style="color: maroon;"></i>
                  Parent-Faculty Coordination
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid rgba(128, 0, 0, 0.2);
      transition: all 0.3s ease;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 15px rgba(128, 0, 0, 0.1);
    }
    .card-title {
      border-bottom: 2px solid rgba(128, 0, 0, 0.1);
      padding-bottom: 10px;
    }
    li {
      transition: transform 0.3s ease;
    }
    li:hover {
      transform: translateX(10px);
    }
    li i {
      transition: transform 0.3s ease;
    }
    li:hover i {
      transform: scale(1.2);
    }
  `]
})
export class AntiRaggingComponent {} 