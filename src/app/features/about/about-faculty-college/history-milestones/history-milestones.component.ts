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
  historyText: string = 'Our institution was founded in 1990 with a commitment to academic excellence and community service.';
  
  milestones: string[] = [
    '1990: Established as a premier academic institution.',
    '2000: Expanded to offer graduate programs.',
    '2010: Opened a new campus to accommodate growing enrollment.',
    '2015: Introduced online courses for global accessibility.',
    '2020: Ranked among the top institutions in the country.'
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}