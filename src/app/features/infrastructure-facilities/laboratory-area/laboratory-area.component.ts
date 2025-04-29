import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgwWowService } from 'ngx-wow';
import { Subject, takeUntil } from 'rxjs';

interface GalleryImage {
  url: string;
  alt: string;
  wowDelay: string;
}

@Component({
  selector: 'app-laboratory-area',
  imports: [CommonModule],
  templateUrl: './laboratory-area.component.html',
  styleUrl: './laboratory-area.component.css'
})

export class LaboratoryAreaComponent implements OnInit, OnDestroy {
  wowService = inject(NgwWowService);
  private ngUnsubscribe = new Subject<void>();
  laboratoryImages: GalleryImage[] = [
    { url: '/img/infrastructure/lab-1.jpg', alt: 'Laboratory Image 1', wowDelay: '' },
    { url: '/img/infrastructure/lab-2.jpg', alt: 'Laboratory Image 2', wowDelay: '' },
    { url: '/img/infrastructure/lab-3.jpg', alt: 'Laboratory Image 3', wowDelay: '' },
    { url: '/img/infrastructure/lab-4.jpg', alt: 'Laboratory Image 4', wowDelay: '' },
    { url: '/img/infrastructure/lab-5.jpg', alt: 'Laboratory Image 5', wowDelay: '' },
    { url: '/img/infrastructure/lab-6.jpg', alt: 'Laboratory Image 6', wowDelay: '' },
    // Add more image data here
  ];

  ngOnInit(): void {
    this.wowService.init();
    this.calculateWowDelays();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  calculateWowDelays(): void {
    this.laboratoryImages.forEach((image, index) => {
      image.wowDelay = `${(index % 4 + 0.2) * 0.2}s`;
    });
  }
}