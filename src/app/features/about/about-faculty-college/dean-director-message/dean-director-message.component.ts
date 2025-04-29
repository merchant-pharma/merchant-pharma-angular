import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-dean-director-message',
  standalone: true,
  imports: [ CommonModule,FontAwesomeModule],
  templateUrl: './dean-director-message.component.html',
  styleUrls: ['./dean-director-message.component.css']
})
export class DeanDirectorMessageComponent implements OnInit {
  deanMessage = {
    intro: 'Welcome to our institution, where tradition meets innovation.',
    body: 'As the Dean, I take pride in our commitment to excellence, inclusivity, and lifelong learning. Our faculty and students are at the heart of a vibrant academic community.',
    name: 'Dr. A.K. Sharma'
  };
  
  coreValues = [
    'Integrity and Ethics',
    'Excellence in Teaching',
    'Inclusive Learning Environment',
    'Community Engagement',
    'Innovation and Research'
  ];
  
  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}