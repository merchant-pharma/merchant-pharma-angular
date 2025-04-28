import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-introduction-vision',
  standalone: true,
  imports: [],
  templateUrl: './introduction-vision.component.html',
  styleUrl: './introduction-vision.component.css'
})
export class IntroductionVisionComponent implements OnInit {
  introductionText: string = `Welcome to the esteemed Faculty / College of Pharmacy at [Your University/Institution Name]. 
    We are dedicated to excellence in pharmaceutical education, research, and service, preparing future leaders 
    and innovators for the dynamic healthcare landscape. Our commitment lies in fostering a learning environment 
    that nurtures critical thinking, ethical practice, and a passion for advancing pharmaceutical sciences.`;

  visionStatement: string = `Our vision is to be a globally recognized center of excellence in pharmaceutical education and research, 
    contributing significantly to the health and well-being of society through innovation, discovery, and the 
    development of highly competent pharmacy professionals.`;

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}