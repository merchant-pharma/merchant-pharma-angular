import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent implements OnInit {
  callToActionText: string = 'Ready to Shape the Future of Pharmacy?';
  applyNowButtonLabel: string = 'Apply Now';
  contactUsButtonLabel: string = 'Contact Us';
  applyNowLink: string = '/apply'; // Replace with your actual apply now link
  contactUsLink: string = '/contact'; // Replace with your actual contact us link

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}