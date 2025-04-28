import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

interface ImportantDate {
  event: string;
  date: string;
}

@Component({
  selector: 'app-important-dates',
  standalone: true,
  imports: [],
  templateUrl: './important-dates.component.html',
  styleUrls: ['./important-dates.component.css']
})
export class ImportantDatesComponent implements OnInit {
  dates: ImportantDate[] = [
    { event: 'Application Start Date', date: 'May 15, 2025' },
    { event: 'Last Date for Application', date: 'July 10, 2025' },
    { event: 'Entrance Examination (if applicable)', date: 'July 25 - July 26, 2025' },
    { event: 'Declaration of Merit List', date: 'August 5, 2025' },
    { event: 'Document Verification', date: 'August 10 - August 12, 2025' },
    { event: 'Last Date for Fee Payment', date: 'August 20, 2025' },
    { event: 'Commencement of Classes', date: 'September 1, 2025' },
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}