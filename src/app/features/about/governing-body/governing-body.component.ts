import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { CommonModule } from '@angular/common';

interface Member {
  name: string;
  position: string;
  qualification: string;
  imageUrl: string;
}

@Component({
  selector: 'app-governing-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './governing-body.component.html',
  styleUrls: ['./governing-body.component.css']
})
export class GoverningBodyComponent implements OnInit {
  members: Member[] = [
    {
      name: 'Dr. Rajesh Patel',
      position: 'Chairman',
      qualification: 'Ph.D. in Pharmaceutical Sciences',
      imageUrl: '/img/team-1.jpg'
    },
    {
      name: 'Dr. Priya Shah',
      position: 'Vice Chairman',
      qualification: 'Ph.D. in Pharmacology',
      imageUrl: '/img/team-2.jpg'
    },
    {
      name: 'Mr. Amit Desai',
      position: 'Secretary',
      qualification: 'M.Pharm, MBA',
      imageUrl: '/img/team-3.jpg'
    },
    {
      name: 'Dr. Meera Patel',
      position: 'Member',
      qualification: 'Ph.D. in Pharmaceutical Chemistry',
      imageUrl: '/img/team-4.jpg'
    }
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
} 