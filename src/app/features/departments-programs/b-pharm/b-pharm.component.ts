import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-b-pharm',
  standalone: true,
  imports: [],
  templateUrl: './b-pharm.component.html',
  styleUrls: ['./b-pharm.component.css']
})
export class BPharmComponent implements OnInit {
  courseDuration: string = '4 Years';
  eligibility: string = '10+2 with Physics, Chemistry, and Biology/Mathematics';
  curriculumOutline: string[] = [
    'Pharmaceutical Chemistry',
    'Pharmaceutics',
    'Pharmacology',
    'Pharmacognosy',
    'Pharmaceutical Analysis',
    // Add more curriculum topics
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }

  applyNow(): void {
    // Implement your apply now logic here (e.g., redirect to admission page)
    window.location.href = '/apply/b-pharm'; // Replace with your actual link
  }
}