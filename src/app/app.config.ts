import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideAnimations(),CarouselModule,NgwWowModule]
  
};
