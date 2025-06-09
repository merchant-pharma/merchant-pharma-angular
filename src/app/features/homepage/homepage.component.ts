import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { DynamicBannerComponent } from './dynamic-banner/dynamic-banner.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { EventsNewsComponent } from './events-news/events-news.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { ProgramsOverviewComponent } from './programs-overview/programs-overview.component';
import { FacultySpotlightComponent } from './faculty-spotlight/faculty-spotlight.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [DynamicBannerComponent, HighlightsComponent, WhyChooseUsComponent, EventsNewsComponent, TestimonialComponent, CallToActionComponent, ProgramsOverviewComponent, FacultySpotlightComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}