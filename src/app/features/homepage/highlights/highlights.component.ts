import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrophy, faMedal, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Highlight {
  title: string;
  value: string;
  icon: any; // Font Awesome Icon
  link?: string;
}

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {
  faTrophy = faTrophy;
  faMedal = faMedal;
  faCertificate = faCertificate;

  highlights: Highlight[] = [
    {
      title: 'Top Ranking',
      value: '#1 in Gujarat (NIRF 2024)',
      icon: faTrophy,
      link: '/rankings' // Optional link
    },
    {
      title: 'Accredited Programs',
      value: 'PCI, NAAC A++',
      icon: faCertificate,
      link: '/accreditation'
    },
    {
      title: 'Research Excellence',
      value: 'Awarded for Innovation',
      icon: faMedal,
      link: '/research'
    },
    // Add more highlights
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}