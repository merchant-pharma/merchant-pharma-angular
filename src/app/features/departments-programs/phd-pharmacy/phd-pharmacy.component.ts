import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-phd-pharmacy',
  standalone: true,
  imports: [],
  templateUrl: './phd-pharmacy.component.html',
  styleUrls: ['./phd-pharmacy.component.css']
})
export class PhdPharmacyComponent implements OnInit {
  eligibility: string = 'Master’s degree in Pharmacy with a minimum percentage/CGPA';
  researchAreas: string[] = [
    'Pharmaceutical Chemistry',
    'Pharmacology and Toxicology',
    'Pharmaceutics and Biopharmaceutics',
    'Pharmacognosy and Natural Products',
    'Pharmaceutical Analysis',
    // Add more research areas
  ];
  admissionProcessLink: string = '/admissions/phd'; // Replace with actual link

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}