import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

interface Category {
  imageUrl: string;
  title: string;
  courseCount: number;
  wowDelay: string;
  isLarge?: boolean; // We might not need this anymore if layout is uniform
}

@Component({
  selector: 'app-course-categories',
  standalone: true,
  imports: [],
  templateUrl: './course-categories.component.html',
  styleUrls: ['./course-categories.component.css']
})
export class CourseCategoriesComponent implements OnInit {
  categories: Category[] = [
    { imageUrl: '/img/cat-1.jpg', title: 'Web Design', courseCount: 49, wowDelay: '0.1s' },
    { imageUrl: '/img/cat-2.jpg', title: 'Graphic Design', courseCount: 49, wowDelay: '0.3s' },
    { imageUrl: '/img/cat-3.jpg', title: 'Video Editing', courseCount: 49, wowDelay: '0.5s' },
    { imageUrl: '/img/cat-4.jpg', title: 'Online Marketing', courseCount: 49, wowDelay: '0.7s' }
    // Add more categories here if needed
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}