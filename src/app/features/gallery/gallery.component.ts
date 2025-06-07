import { Component } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

interface GallerySection{
  imageUrls: string[];
  name:string;
  desc:string;
  wowDelay: string;
}

interface ActivitiySection{
  imageUrls: string[];
  name:string;
  wowDelay: string;
}

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  listGallery: GallerySection[] = [
    {
      imageUrls: [
        '/PHARMACOLOGY1.jpg',
        '/PHARMACOLOGY2.jpg',
      ],
      name: 'PHARMACOLOGY',
      desc: 'Studies drug actions, side effects, and toxicology.',
      wowDelay: '0.1s'
    },
    {
      imageUrls: [
        '/PHARMACEUTICS1.jpg',
        '/PHARMACEUTICS2.jpg',
      ],
      name: 'PHARMACEUTICS',
      desc: ' Focuses on drug formulation, manufacturing, and delivery.',
      wowDelay: '0.3s'
    },
    {
      imageUrls: [
        '/PHARMACOGNOSY1.jpg',
        '/PHARMACOGNOSY2.jpg',
      ],
      name: 'PHARMACOGNOSY',
      desc: ' Deals with natural drugs from plants, animals, and minerals.',
      wowDelay: '0.5s'
    },
    {
      imageUrls: [
        '/PHARMACEUTICALCHEMISTRY1.jpg',
        '/PHARMACEUTICALCHEMISTRY2.jpg',
      ],
      name: 'PHARMACEUTICAL CHEMISTRY',
      desc: ' Includes medicinal chemistry, drug synthesis, and analysis.',
      wowDelay: '0.7s'
    },
    {
      imageUrls: [
        '/lib1.jpg',
        '/lib2.jpg',
      ],
      name: 'LIBRARY',
      desc: ' They will find plenty of books in the library ahead of their syllabus and academic session. Different types of books on different subjects will make the thing more interesting by increasing their knowledge. Library gives students a chance to learn more and improve their confidence in dealing with their studies. There are 2500 books on our institute',
      wowDelay: '0.7s'
    },
  ];

  listEvents:ActivitiySection[]=[
    {
      imageUrls:[
        '/teach1.jpg',
        '/teach2.jpg',
        '/teach3.jpg',
        '/teach4.jpg'
      ],
      name:'Teacher’s day',
      wowDelay: '0.1s'
    },
    {
      imageUrls:[
        '/pharma1.jpg',
        '/pharma2.jpg',
      ],
      name:'Pharmacist’s day',
       wowDelay: '0.3s'
    },
    {
      imageUrls:[
        '/abh1.jpg',
        '/abh2.jpg',
        '/abh3.jpg',
      ],
      name:'Swachhata Abhiyan',
       wowDelay: '0.5s'
    },
    {
      imageUrls:[
        '/env1.jpg',
        '/env2.jpg',
      ],
      name:'Environment day',
       wowDelay: '0.7s'
    },
    {
      imageUrls:[
        '/sports1.jpg',
        '/sports2.jpg',
        '/sports3.jpg',
        '/sports4.jpg',
      ],
      name:'Sports week',
       wowDelay: '0.9s'
    },
  ]
  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}
