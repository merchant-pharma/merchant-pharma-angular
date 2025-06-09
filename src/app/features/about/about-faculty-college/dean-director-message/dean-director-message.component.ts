import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-dean-director-message',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './dean-director-message.component.html',
  styleUrls: ['./dean-director-message.component.css']
})
export class DeanDirectorMessageComponent implements OnInit {
  deanMessage = {
    intro: 'Welcome to Merchant Pharmacy College, Mehsana - A center of excellence in pharmaceutical education.',
    body: `As the Principal of Merchant Pharmacy College, I am proud to lead an institution that combines academic excellence with practical learning. Our college, established in 2022, is committed to nurturing future pharmacists who will contribute significantly to healthcare advancement in Gujarat and beyond.
           We focus on providing quality education through modern teaching methodologies, state-of-the-art laboratories, and strong industry connections. Our faculty members are dedicated to mentoring students and fostering innovation in pharmaceutical sciences.
           At Merchant Pharmacy College, we believe in holistic development, combining theoretical knowledge with practical skills, research opportunities, and industry exposure. Our goal is to produce competent pharmacists who are ready to meet the challenges of the healthcare sector.`,
    name: 'Dr. Rajesh Patel'
  };
  
  coreValues = [
    'Excellence in Pharmaceutical Education',
    'Innovation in Research & Development',
    'Industry-Academia Collaboration',
    'Ethical Practice & Professionalism',
    'Community Healthcare Service'
  ];
  
  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}