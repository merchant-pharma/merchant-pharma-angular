import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { provideStoreDevtools } from '@ngrx/store-devtools'; 
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';
import { provideStore } from '@ngrx/store';
import { facultyFeatureKey, facultyReducer } from './stores/facultyStore/faculty.reducer';
import { provideEffects } from '@ngrx/effects';
import { FacultyEffects } from './stores/facultyStore/faculty.effects';
import { environment } from '../environments/environment';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    CarouselModule,
    NgwWowModule,
    provideStore({ [facultyFeatureKey]: facultyReducer }), // Register your reducers
    provideEffects([FacultyEffects]), // Register your effects
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
    })
  ]
  
};
