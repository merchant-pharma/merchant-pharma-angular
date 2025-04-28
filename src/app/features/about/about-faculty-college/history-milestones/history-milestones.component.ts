import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

interface Milestone {
  year: string;
  description: string;
}

@Component({
  selector: 'app-history-milestones',
  standalone: true,
  imports: [],
  templateUrl: './history-milestones.component.html',
  styleUrls: ['./history-milestones.component.css']
})
export class HistoryMilestonesComponent implements OnInit {
  historyText: string = `The Faculty / College of Pharmacy has a rich history dating back to [Founding Year]. 
    Established with the vision of [Founding Vision/Goal], we have grown to become a leading institution in 
    pharmaceutical education and research in the region. Over the years, we have achieved significant 
    milestones that reflect our commitment to excellence and innovation.`;

  milestones: Milestone[] = [
    { year: '[Year 1]', description: '[Milestone 1 Description - e.g., Establishment of the first B.Pharm program]' },
    { year: '[Year 2]', description: '[Milestone 2 Description - e.g., Commencement of M.Pharm programs in specialized areas]' },
    { year: '[Year 3]', description: '[Milestone 3 Description - e.g., Establishment of research collaborations with pharmaceutical industries]' },
    { year: '[Year 4]', description: '[Milestone 4 Description - e.g., Accreditation by relevant pharmacy councils]' },
    // Add more milestones
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}