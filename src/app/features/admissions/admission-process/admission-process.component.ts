import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-admission-process',
  standalone: true,
  imports: [],
  templateUrl: './admission-process.component.html',
  styleUrls: ['./admission-process.component.css']
})
export class AdmissionProcessComponent implements OnInit {
  admissionSteps: string[] = [
    'Step 1: Register Online - Visit our admissions portal and create an account.',
    'Step 2: Fill the Application Form - Provide all required personal and academic details.',
    'Step 3: Upload Documents - Scan and upload the necessary documents as listed.',
    'Step 4: Application Fee Payment - Pay the non-refundable application fee online.',
    'Step 5: Entrance Examination/Interview - Appear for the scheduled entrance exam or interview (if applicable).',
    'Step 6: Merit List and Provisional Admission - Check the merit list for provisional admission status.',
    'Step 7: Document Verification - Attend the document verification process with original documents.',
    'Step 8: Fee Payment (Admission Confirmation) - Pay the admission fee to confirm your seat.',
    'Step 9: Orientation Program - Attend the orientation program before the commencement of classes.',
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}