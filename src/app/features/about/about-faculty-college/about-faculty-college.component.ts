import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { IntroductionVisionComponent } from './introduction-vision/introduction-vision.component';
import { DeanDirectorMessageComponent } from './dean-director-message/dean-director-message.component';
import { HistoryMilestonesComponent } from './history-milestones/history-milestones.component';

@Component({
  selector: 'app-about-faculty-college',
  standalone: true,
  imports: [IntroductionVisionComponent, DeanDirectorMessageComponent, HistoryMilestonesComponent],
  templateUrl: './about-faculty-college.component.html',
  styleUrls: ['./about-faculty-college.component.css']
})
export class AboutFacultyCollegeComponent implements OnInit {
  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}