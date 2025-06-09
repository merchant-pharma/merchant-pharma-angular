import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface StaffMember {
  srNo: number;
  name: string;
  designation: string;
  specialization: string;
  contactNo: string;
  joiningDate: string;
}

@Component({
  selector: 'app-staff-directory',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-xxl py-5" [@fadeInUp]>
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center px-3" style="color: maroon;">Staff Directory</h6>
          <h1 class="mb-5">Our Faculty & Staff</h1>
        </div>

        <div class="row g-5">
          <div class="col-lg-12">
            <div class="table-responsive">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>SR. NO</th>
                    <th>FACULTY NAME</th>
                    <th>DESIGNATION</th>
                    <th>SPECIALIZATION</th>
                    <th>CONTACT NO.</th>
                    <th>JOINING DATE</th>
                  </tr>
                </thead>
                <tbody>
                  @for (faculty of facultyMembers; track faculty.srNo) {
                    <tr>
                      <td>{{ faculty.srNo }}</td>
                      <td>{{ faculty.name }}</td>
                      <td>{{ faculty.designation }}</td>
                      <td>{{ faculty.specialization }}</td>
                      <td>{{ faculty.contactNo }}</td>
                      <td>{{ faculty.joiningDate }}</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .table {
      margin-bottom: 0;
      border-color: rgba(128, 0, 0, 0.1);
    }

    .table th {
      font-weight: 600;
      text-align: center;
      vertical-align: middle;
      background-color: maroon !important;
      color: white !important;
      border-color: rgba(128, 0, 0, 0.2) !important;
    }

    .table td {
      vertical-align: middle;
      border-color: rgba(128, 0, 0, 0.1);
    }

    .table-striped tbody tr:nth-of-type(odd) {
      background-color: rgba(128, 0, 0, 0.02);
    }

    .table-striped tbody tr:hover {
      background-color: rgba(128, 0, 0, 0.05);
      transition: background-color 0.3s ease;
    }

    .section-title {
      position: relative;
      display: inline-block;
      text-transform: uppercase;
    }

    .section-title::before {
      position: absolute;
      content: "";
      width: 45px;
      height: 2px;
      top: 50%;
      left: -55px;
      margin-top: -1px;
      background: maroon;
    }

    .section-title::after {
      position: absolute;
      content: "";
      width: 45px;
      height: 2px;
      top: 50%;
      right: -55px;
      margin-top: -1px;
      background: maroon;
    }

    @media (max-width: 768px) {
      .section-title::before,
      .section-title::after {
        width: 30px;
      }
      .section-title::before {
        left: -40px;
      }
      .section-title::after {
        right: -40px;
      }
      .table-responsive {
        border: 0;
      }
      .table th,
      .table td {
        white-space: nowrap;
      }
    }
  `],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class StaffDirectoryComponent implements OnInit {
  facultyMembers: StaffMember[] = [
    {
      srNo: 1,
      name: 'Dr. Laxmanbhai Prajapati',
      designation: 'Principal',
      specialization: 'Pharma Chemistry',
      contactNo: '9427340043',
      joiningDate: '01/12/2024'
    },
    {
      srNo: 2,
      name: 'Dr. Bhoomi Patel',
      designation: 'Associate Professor',
      specialization: 'Quality Assurance',
      contactNo: '8460474756',
      joiningDate: '01/02/2025'
    },
    {
      srNo: 3,
      name: 'Khushbu Patel',
      designation: 'Assistant Professor',
      specialization: 'Quality Assurance',
      contactNo: '9714760662',
      joiningDate: '01/02/2023'
    },
    {
      srNo: 4,
      name: 'Kruti Bhatt',
      designation: 'Assistant Professor',
      specialization: 'Pharma Ceutics',
      contactNo: '8238490510',
      joiningDate: '01/03/2024'
    },
    {
      srNo: 5,
      name: 'Zalak Patel',
      designation: 'Assistant Professor',
      specialization: 'Quality Assurance',
      contactNo: '9426305041',
      joiningDate: '11/09/2023'
    },
    {
      srNo: 6,
      name: 'Apurva Barot',
      designation: 'Assistant Professor',
      specialization: 'Pharma Cology',
      contactNo: '9428386883',
      joiningDate: '05/08/2024'
    },
    {
      srNo: 7,
      name: 'Kena Patel',
      designation: 'Assistant Professor',
      specialization: 'Pharma Chemistry',
      contactNo: '9537674637',
      joiningDate: '01/06/2024'
    },
    {
      srNo: 8,
      name: 'Mit Patel',
      designation: 'Assistant Professor',
      specialization: 'Pharma Ceutics',
      contactNo: '9727193410',
      joiningDate: '15/02/2025'
    },
    {
      srNo: 9,
      name: 'Ruchit Patel',
      designation: 'Assistant Professor',
      specialization: 'Quality Assurance',
      contactNo: '9974155132',
      joiningDate: '17/02/2025'
    },
    {
      srNo: 10,
      name: 'Riya Patel',
      designation: 'Assistant Professor',
      specialization: 'Pharma Cology',
      contactNo: '9265223007',
      joiningDate: '17/02/2025'
    },
    {
      srNo: 11,
      name: 'Kunjan Patel',
      designation: 'Assistant Professor',
      specialization: 'Quality Assurance',
      contactNo: '9586281205',
      joiningDate: '24/02/2025'
    },
    {
      srNo: 12,
      name: 'Kushal Saini',
      designation: 'Assistant Professor',
      specialization: 'Pharma Ceutics',
      contactNo: '9427672857',
      joiningDate: '10/03/2025'
    },
    {
      srNo: 13,
      name: 'Parth Jayswal',
      designation: 'Assistant Professor',
      specialization: 'Pharma Ceutics',
      contactNo: '9327833287',
      joiningDate: '03/03/2025'
    },
    {
      srNo: 14,
      name: 'Ravi Pathani',
      designation: 'Assistant Professor',
      specialization: 'Pharma Ceutics',
      contactNo: '7984402132',
      joiningDate: '15/03/2025'
    }
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
} 