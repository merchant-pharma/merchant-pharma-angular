import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

interface DocumentCategory {
  title: string;
  documents: string[];
}

@Component({
  selector: 'app-documents-required',
  standalone: true,
  imports: [],
  templateUrl: './documents-required.component.html',
  styleUrls: ['./documents-required.component.css']
})
export class DocumentsRequiredComponent implements OnInit {
  requiredDocuments: DocumentCategory[] = [
    {
      title: 'Basic Academic Documents',
      documents: [
        'Class 10th Mark Sheet and Certificate (Original and 2 self-attested copies)',
        'Class 12th Mark Sheet and Certificate (Original and 2 self-attested copies)',
        'Qualifying Degree Mark Sheets (all semesters/years) and Provisional/Degree Certificate (Original and 2 self-attested copies) - for PG and Ph.D. applicants',
      ],
    },
    {
      title: 'Identification and Address Proof',
      documents: [
        'Aadhar Card/Passport/Driving License/Voter ID (Original and 2 self-attested copies)',
        'Address Proof (if different from the above ID) (Self-attested copy)',
      ],
    },
    {
      title: 'Other Relevant Documents',
      documents: [
        'Transfer Certificate/Migration Certificate (Original)',
        'Character Certificate from the previous institution (Original)',
        'Caste Certificate (if applicable, self-attested copy)',
        'Income Certificate (if applying for EWS scholarship, original)',
        'Passport size photographs (4 recent copies)',
      ],
    },
  ];
  importantInstructions: string[] = [
    'Please carry the original documents for verification during the admission process.',
    'Ensure that all photocopies are self-attested.',
    'Additional documents may be required based on the specific program.',
    'Keep a scanned copy of all documents for online application and future reference.',
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}