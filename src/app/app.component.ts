
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NavbarComponent } from "./features/navbar/navbar.component";
import { FooterComponent } from './features/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CarouselModule, 
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'merchant-pharmacy';
  slides = [
    {
      image: '/img/carousel-1.jpg',
      subtitle: 'Best Online Courses',
      title: 'The Best Online Learning Platform',
      description: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.'
    },
    {
      image: '/img/carousel-2.jpg',
      subtitle: 'Best Online Courses',
      title: 'Get Educated Online From Your Home',
      description: 'Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus.'
    }
  ];
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  
}
