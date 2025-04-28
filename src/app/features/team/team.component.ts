import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

interface Instructor {
  imageUrl: string;
  name: string;
  designation: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  wowDelay: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  instructors: Instructor[] = [
    {
      imageUrl: '/img/team-1.jpg',
      name: 'Instructor One',
      designation: 'Web Developer',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      },
      wowDelay: '0.1s'
    },
    {
      imageUrl: '/img/team-2.jpg',
      name: 'Instructor Two',
      designation: 'Graphic Designer',
      socialLinks: {
        twitter: '#'
      },
      wowDelay: '0.3s'
    },
    {
      imageUrl: '/img/team-3.jpg',
      name: 'Instructor Three',
      designation: 'Video Editor',
      socialLinks: {
        facebook: '#',
        instagram: '#'
      },
      wowDelay: '0.5s'
    },
    {
      imageUrl: '/img/team-4.jpg',
      name: 'Instructor Four',
      designation: 'Marketing Specialist',
      socialLinks: {
        facebook: '#'
      },
      wowDelay: '0.7s'
    }
    // Add more instructors here
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}