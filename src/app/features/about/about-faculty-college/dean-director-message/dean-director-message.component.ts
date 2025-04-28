import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-dean-director-message',
  standalone: true,
  imports: [],
  templateUrl: './dean-director-message.component.html',
  styleUrls: ['./dean-director-message.component.css']
})
export class DeanDirectorMessageComponent implements OnInit {
  deanDirectorName: string = 'Dr. [Dean/Director Name]';
  deanDirectorDesignation: string = 'Dean / Director, Faculty / College of Pharmacy';
  message: string = `It is with immense pride and enthusiasm that I welcome you to the Faculty / College of Pharmacy. 
    In this era of rapid advancements in pharmaceutical sciences and healthcare, our college stands at the forefront 
    of providing quality education and fostering groundbreaking research. We are committed to equipping our students 
    with the knowledge, skills, and ethical values necessary to excel as pharmacy professionals and contribute meaningfully 
    to patient care and pharmaceutical innovation. We encourage you to explore the opportunities available here and 
    become part of our vibrant and dedicated community.`;

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}