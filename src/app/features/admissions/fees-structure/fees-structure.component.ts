import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

interface ProgramFee {
  program: string;
  annualFee: string;
  otherCharges?: string;
}

@Component({
  selector: 'app-fees-structure',
  standalone: true,
  imports: [],
  templateUrl: './fees-structure.component.html',
  styleUrls: ['./fees-structure.component.css']
})
export class FeesStructureComponent implements OnInit {
  programFees: ProgramFee[] = [
    { program: 'B.Pharm', annualFee: '₹ 1,20,000', otherCharges: 'Examination Fee: ₹ 5,000 per semester' },
    { program: 'M.Pharm (Pharmaceutics)', annualFee: '₹ 1,50,000', otherCharges: 'Examination & Thesis Fee: ₹ 10,000 per year' },
    { program: 'M.Pharm (Pharmacology)', annualFee: '₹ 1,50,000', otherCharges: 'Examination & Thesis Fee: ₹ 10,000 per year' },
    { program: 'Pharm.D', annualFee: '₹ 1,80,000', otherCharges: 'Examination & Clinical Training Fee: ₹ 12,000 per year' },
    { program: 'Ph.D in Pharmacy', annualFee: '₹ 80,000', otherCharges: 'Research & Thesis Fee: As per university norms' },
  ];
  paymentModes: string[] = [
    'Online Payment (Net Banking, Credit/Debit Card)',
    'Demand Draft (in favor of [College Name], payable at [City])',
    'Bank Transfer (details will be provided)',
  ];
  importantNotes: string[] = [
    'The annual fee is payable at the beginning of each academic year.',
    'Other charges are applicable as mentioned for each program.',
    'Hostel and mess charges are separate and will be provided upon request.',
    'Fees are subject to revision as per the managements decision.',
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}