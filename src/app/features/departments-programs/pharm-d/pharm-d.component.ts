import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-pharm-d',
  standalone: true,
  imports: [],
  templateUrl: './pharm-d.component.html',
  styleUrls: ['./pharm-d.component.css']
})
export class PharmDComponent implements OnInit {
  courseDuration: string = '6 Years (5 Years Academic + 1 Year Internship)';
  eligibility: string = '10+2 with Physics, Chemistry, and Biology';
  curriculumOutline: string[] = [
    'Human Anatomy and Physiology',
    'Pharmaceutical Biochemistry',
    'Pathophysiology',
    'Pharmacotherapeutics',
    'Clinical Pharmacy',
    // Add more curriculum topics
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }

  applyNow(): void {
    window.location.href = '/apply/pharm-d'; // Replace with your actual link
  }
}