import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { DynamicBannerComponent } from './dynamic-banner/dynamic-banner.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [DynamicBannerComponent, HighlightsComponent, CallToActionComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}