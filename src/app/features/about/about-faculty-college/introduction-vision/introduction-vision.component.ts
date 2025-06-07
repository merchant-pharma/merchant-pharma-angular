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
  introductionText: string = `We are proud to introduce the merchant pharmacy college. A center of academic excellence and innovation dedicated to shaping the future of pharmaceutical sciences.  Merchant pharmacy college is managed by merchant charitable trust, established in the year of 2022 affiliated from Gujarat Technological University and permitted by Pharmacy Council of India.  
                              At merchant pharmacy college we believe in a student-centered approach to education. Our experienced faculty, modern laboratories, and collaborative learning environment ensure that every student receives a well-rounded education grounded in both science and compassion.  
                              As we embark on this exciting chapter, we invite students, faculty, healthcare professionals, and partners to join us in building a healthier future one discovery, one prescription, and one patient at a time.`;

  visionStatement: string = "To be a leader in pharmaceutical education, research, and service empowering future pharmacists to innovate, advocate, and elevate health outcomes in communities worldwide."

  missionStatement:string=' The mission of our College of Pharmacy is to educate and empower future pharmacists to be leaders in patient-centered care, research, and community service. We are committed to advancing the pharmacy profession through innovation, ethical practice, and life-long learning, while addressing the health needs of diverse populations with compassion and excellence.'

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}