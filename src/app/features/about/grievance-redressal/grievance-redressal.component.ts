import { Component } from '@angular/core';

@Component({
  selector: 'app-grievance-redressal',
  standalone: true,
  imports: [],
  template: `
    <div class="container py-5">
      <h2 class="text-center mb-4">Grievance Redressal Cell</h2>
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">Grievance Handling</h4>
              <p class="card-text">
                Our Grievance Redressal Cell ensures fair and timely resolution of grievances:
              </p>
              <ul>
                <li>Student Grievances</li>
                <li>Faculty & Staff Grievances</li>
                <li>Academic Issues</li>
                <li>Administrative Issues</li>
                <li>Infrastructure Related Concerns</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">Process & Timeline</h4>
              <p class="card-text">
                Systematic approach to grievance resolution:
              </p>
              <ul>
                <li>Online Grievance Submission</li>
                <li>Acknowledgment within 24 hours</li>
                <li>Investigation & Review</li>
                <li>Resolution within 7 working days</li>
                <li>Appeal Process if needed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class GrievanceRedressalComponent {} 