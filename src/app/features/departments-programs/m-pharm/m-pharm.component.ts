import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

interface Specialization {
  name: string;
  duration: string;
  eligibility: string;
  applyLink: string;
}

@Component({
  selector: 'app-m-pharm',
  standalone: true,
  imports: [],
  templateUrl: './m-pharm.component.html',
  styleUrls: ['./m-pharm.component.css']
})
export class MPharmComponent implements OnInit {
  specializations: Specialization[] = [
    {
      name: 'Pharmaceutics',
      duration: '2 Years',
      eligibility: 'B.Pharm',
      applyLink: '/apply/m-pharm-pharmaceutics' // Replace with actual link
    },
    {
      name: 'Pharmacology',
      duration: '2 Years',
      eligibility: 'B.Pharm',
      applyLink: '/apply/m-pharm-pharmacology' // Replace with actual link
    },
    // Add more specializations
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}