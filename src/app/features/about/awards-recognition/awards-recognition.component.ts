import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrophy, faMedal, faStar, faAward } from '@fortawesome/free-solid-svg-icons';

interface Award {
  icon: any;
  title: string;
  year: string;
  description: string;
}

interface Achievement {
  figure: string;
  label: string;
}

@Component({
  selector: 'app-awards-recognition',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './awards-recognition.component.html',
  styleUrls: ['./awards-recognition.component.css']
})
export class AwardsRecognitionComponent implements OnInit {
  awards: Award[] = [
    {
      icon: faTrophy,
      title: 'Best Pharmacy College Award',
      year: '2023',
      description: 'Awarded by the State Pharmacy Council for excellence in pharmaceutical education'
    },
    {
      icon: faMedal,
      title: 'Research Excellence Award',
      year: '2022',
      description: 'Recognition for outstanding research contributions in pharmaceutical sciences'
    },
    {
      icon: faStar,
      title: 'Innovation in Education',
      year: '2022',
      description: 'Award for implementing innovative teaching methodologies'
    },
    {
      icon: faAward,
      title: 'Best Infrastructure Award',
      year: '2021',
      description: 'Recognition for state-of-the-art facilities and infrastructure'
    }
  ];

  achievements: Achievement[] = [
    {
      figure: '95%',
      label: 'Placement Rate'
    },
    {
      figure: '50+',
      label: 'Research Papers'
    },
    {
      figure: '100+',
      label: 'Industry Partners'
    },
    {
      figure: '25+',
      label: 'Awards Won'
    }
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
} 