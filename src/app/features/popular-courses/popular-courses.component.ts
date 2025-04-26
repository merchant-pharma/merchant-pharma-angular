// import { Component, OnInit } from '@angular/core';
// import { NgwWowService } from 'ngx-wow';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faStar, faUserTie, faClock, faUser } from '@fortawesome/free-solid-svg-icons';

// @Component({
//   selector: 'app-popular-courses',
//   imports: [FontAwesomeModule],
//   templateUrl: './popular-courses.component.html',
//   styleUrl: './popular-courses.component.css'
// })
// export class PopularCoursesComponent implements OnInit {
//   faStar = faStar;
//   faUserTie = faUserTie;
//   faClock = faClock;
//   faUser = faUser;

//   constructor(private wowService: NgwWowService) {}

//   ngOnInit(): void {
//     this.wowService.init();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faUserTie, faClock, faUser } from '@fortawesome/free-solid-svg-icons';

interface Course {
  imageUrl: string;
  price: string;
  rating: number;
  title: string;
  instructor: string;
  duration: string;
  students: string;
}

@Component({
  selector: 'app-popular-courses',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './popular-courses.component.html', // Separate HTML template
  styleUrls: ['./popular-courses.component.css']
})
export class PopularCoursesComponent implements OnInit {
  faStar = faStar;
  faUserTie = faUserTie;
  faClock = faClock;
  faUser = faUser;

  courses: Course[] = [
    {
      imageUrl: '/img/course-1.jpg',
      price: '$149.00',
      rating: 5,
      title: 'Web Design & Development Course for Beginners',
      instructor: 'John Doe',
      duration: '1.49 Hrs',
      students: '30 Students'
    },
    {
      imageUrl: '/img/course-2.jpg',
      price: '$149.00',
      rating: 5,
      title: 'Graphic Design Fundamentals',
      instructor: 'Jane Smith',
      duration: '2.15 Hrs',
      students: '45 Students'
    },
    {
      imageUrl: '/img/course-3.jpg',
      price: '$199.00',
      rating: 4,
      title: 'Advanced Video Editing Techniques',
      instructor: 'Peter Jones',
      duration: '3.00 Hrs',
      students: '22 Students'
    }
    // You can add more course objects here
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}