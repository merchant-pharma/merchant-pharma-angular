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
  introductionText: string = `Merchant Pharmacy College, Mehsana, established in 2022, is a premier institution dedicated to pharmaceutical education and research. Managed by Merchant Charitable Trust, our college is affiliated with Gujarat Technological University and approved by the Pharmacy Council of India. Located in the heart of Mehsana, Gujarat, we provide state-of-the-art facilities and a conducive learning environment for aspiring pharmacists.
                            Our college boasts modern laboratories, well-equipped classrooms, and a comprehensive library. We focus on practical training, industry exposure, and research opportunities to prepare students for successful careers in pharmacy. Our experienced faculty members are committed to nurturing talent and fostering innovation in pharmaceutical sciences.`;

  visionStatement: string = "To emerge as a center of excellence in pharmaceutical education and research, producing competent pharmacists who contribute to healthcare advancement and pharmaceutical innovation in Gujarat and beyond."

  missionStatement: string = `Our mission is to:
                            • Provide quality pharmaceutical education through innovative teaching methodologies
                            • Foster research and development in pharmaceutical sciences
                            • Develop industry-ready professionals with strong ethical values
                            • Create opportunities for practical learning and skill development
                            • Contribute to healthcare advancement through community service
                            • Maintain high standards of academic excellence and professional competence`;

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}