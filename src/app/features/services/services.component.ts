import { Component, OnInit, OnDestroy } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGraduationCap, faGlobe, faHome, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs';
// Import WOW.js and its initialization function


@Component({
  selector: 'app-services',
  imports: [FontAwesomeModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit, OnDestroy {
  faGraduationCap = faGraduationCap;
  faGlobe = faGlobe;
  faHome = faHome;
  faBookOpen = faBookOpen;

  private wowSubscription: Subscription | null = null;

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init(); // Initialize ngx-wow
    this.wowSubscription = this.wowService.itemRevealed$.subscribe((item: HTMLElement) => {
      // You can optionally do something when an element is revealed
      // console.log('Element revealed:', item);
    });
  }

  ngOnDestroy(): void {
    if (this.wowSubscription) {
      this.wowSubscription.unsubscribe();
    }
  }
}