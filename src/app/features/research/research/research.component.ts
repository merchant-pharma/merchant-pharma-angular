import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMicroscope, faFlask, faDna, faCapsules, faAtom, faChartLine } from '@fortawesome/free-solid-svg-icons';

interface ResearchArea {
  icon: any;
  title: string;
  description: string;
  projects: string[];
  wowDelay: string;
}

interface Achievement {
  figure: string;
  label: string;
  wowDelay: string;
}

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  researchAreas: ResearchArea[] = [
    {
      icon: faMicroscope,
      title: 'Drug Discovery & Development',
      description: 'Research in novel drug candidates and delivery systems.',
      projects: [
        'Novel drug delivery systems',
        'Natural product research',
        'Drug formulation studies'
      ],
      wowDelay: '0.1s'
    },
    {
      icon: faFlask,
      title: 'Pharmaceutical Analysis',
      description: 'Advanced analytical techniques for drug analysis.',
      projects: [
        'Method development',
        'Quality control',
        'Stability studies'
      ],
      wowDelay: '0.3s'
    },
    {
      icon: faDna,
      title: 'Pharmacogenomics',
      description: 'Study of genetic factors affecting drug responses.',
      projects: [
        'Genetic polymorphism studies',
        'Personalized medicine research',
        'Biomarker identification'
      ],
      wowDelay: '0.5s'
    }
  ];

  achievements: Achievement[] = [
    {
      figure: '50+',
      label: 'Research Publications',
      wowDelay: '0.1s'
    },
    {
      figure: '25+',
      label: 'Ongoing Projects',
      wowDelay: '0.3s'
    },
    {
      figure: '10+',
      label: 'Research Collaborations',
      wowDelay: '0.5s'
    },
    {
      figure: '15+',
      label: 'Patents Filed',
      wowDelay: '0.7s'
    }
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}
