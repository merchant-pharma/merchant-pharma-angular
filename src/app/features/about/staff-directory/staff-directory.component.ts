import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FacultyMember {
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
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-12">
          <h2 class="mb-4">Faculty Directory</h2>
          <div class="table-responsive">
            <table class="table table-bordered table-striped">
              <thead class="table-primary">
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
  `,
  styles: [`
    .table {
      margin-bottom: 0;
    }

    .table th {
      font-weight: 600;
      text-align: center;
      vertical-align: middle;
    }

    .table td {
      vertical-align: middle;
    }

    .table-primary {
      background-color: var(--primary) !important;
      color: white;
    }

    .table-striped tbody tr:nth-of-type(odd) {
      background-color: rgba(0, 0, 0, 0.02);
    }

    .table-bordered {
      border: 1px solid #dee2e6;
    }

    .table-bordered th,
    .table-bordered td {
      border: 1px solid #dee2e6;
    }

    @media (max-width: 768px) {
      .table-responsive {
        border: 0;
      }
      
      .table th,
      .table td {
        white-space: nowrap;
      }
    }
  `]
})
export class StaffDirectoryComponent {
  facultyMembers: FacultyMember[] = [
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
} 