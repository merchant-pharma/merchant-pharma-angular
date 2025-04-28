import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

interface Scholarship {
  name: string;
  eligibilityCriteria: string;
  amountOrBenefit: string;
  applicationProcess: string;
}

@Component({
  selector: 'app-scholarship-info',
  standalone: true,
  imports: [],
  templateUrl: './scholarship-info.component.html',
  styleUrls: ['./scholarship-info.component.css']
})
export class ScholarshipInfoComponent implements OnInit {
  availableScholarships: Scholarship[] = [
    {
      name: 'Merit-Based Scholarship',
      eligibilityCriteria: 'Students securing 85% or above in the qualifying examination.',
      amountOrBenefit: 'Up to 25% tuition fee waiver.',
      applicationProcess: 'Apply online through the admissions portal after the declaration of results.'
    },
    {
      name: 'Economically Weaker Section (EWS) Scholarship',
      eligibilityCriteria: 'As per government norms and submission of relevant income certificates.',
      amountOrBenefit: 'Tuition fee concession as per EWS guidelines.',
      applicationProcess: 'Submit the EWS certificate along with the application form.'
    },
    {
      name: 'Minority Scholarship',
      eligibilityCriteria: 'Students belonging to notified minority communities (as per government guidelines).',
      amountOrBenefit: 'Financial assistance as per the respective minority welfare schemes.',
      applicationProcess: 'Apply through the designated government portal and submit proof along with the application.'
    },
    // Add more scholarships
  ];
  generalInstructions: string[] = [
    'Students can apply for scholarships that they are eligible for at the time of admission.',
    'The grant of scholarships is subject to verification of documents and fulfillment of eligibility criteria.',
    'The college reserves the right to modify or discontinue any scholarship without prior notice.',
    'Please refer to the specific scholarship guidelines for detailed terms and conditions.',
  ];
  contactPerson: string = 'Mr. Rohan Sharma (Scholarship Coordinator)';
  contactEmail: string = 'scholarships@pharmacycollege.edu.in';

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}