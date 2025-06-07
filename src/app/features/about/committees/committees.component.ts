import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { CommonModule } from '@angular/common';

interface Committee {
  name: string;
  description: string;
  members: string[];
  responsibilities: string[];
}

@Component({
  selector: 'app-committees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.css']
})
export class CommitteesComponent implements OnInit {
  committees: Committee[] = [
    {
      name: 'Academic Committee',
      description: 'Oversees academic planning and curriculum development',
      members: [
        'Dr. Rajesh Patel (Chairman)',
        'Dr. Priya Shah',
        'Dr. Amit Desai'
      ],
      responsibilities: [
        'Curriculum development and review',
        'Academic calendar planning',
        'Quality assurance in education'
      ]
    },
    {
      name: 'Research Committee',
      description: 'Promotes and monitors research activities',
      members: [
        'Dr. Meera Patel (Chairperson)',
        'Dr. Suresh Kumar',
        'Dr. Neha Shah'
      ],
      responsibilities: [
        'Research project approval',
        'Grant management',
        'Research ethics compliance'
      ]
    },
    {
      name: 'Anti-Ragging Committee',
      description: 'Ensures a ragging-free campus environment',
      members: [
        'Dr. Amit Shah (Chairman)',
        'Prof. Ravi Kumar',
        'Ms. Priya Desai'
      ],
      responsibilities: [
        'Prevention of ragging',
        'Student grievance handling',
        'Campus safety monitoring'
      ]
    },
    {
      name: 'Placement Committee',
      description: 'Facilitates student placements and career development',
      members: [
        'Dr. Kiran Patel (Chairman)',
        'Mr. Rahul Mehta',
        'Ms. Sneha Shah'
      ],
      responsibilities: [
        'Industry liaison',
        'Placement drives coordination',
        'Career counseling'
      ]
    }
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
} 