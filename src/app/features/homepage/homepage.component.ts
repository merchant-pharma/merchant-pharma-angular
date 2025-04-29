import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { DynamicBannerComponent } from './dynamic-banner/dynamic-banner.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { CourseCategoriesComponent } from "../course-categories/course-categories.component";
import { PopularCoursesComponent } from "../popular-courses/popular-courses.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { TeamComponent } from "../team/team.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [DynamicBannerComponent, HighlightsComponent, CourseCategoriesComponent, PopularCoursesComponent, TestimonialComponent, TeamComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}