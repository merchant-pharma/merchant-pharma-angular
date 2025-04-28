import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

interface QuickLink {
  label: string;
  url: string;
}

interface GalleryImage {
  imageUrl: string;
  altText: string;
}

interface SocialLink {
  iconClass: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  quickLinks: QuickLink[] = [
    { label: 'About Us', url: '#' },
    { label: 'Contact Us', url: '#' },
    { label: 'Privacy Policy', url: '#' },
    { label: 'Terms & Condition', url: '#' },
    { label: 'FAQs & Help', url: '#' }
  ];

  galleryImages: GalleryImage[] = [
    { imageUrl: '/img/course-1.jpg', altText: '' },
    { imageUrl: '/img/course-2.jpg', altText: '' },
    { imageUrl: '/img/course-3.jpg', altText: '' },
    { imageUrl: '/img/course-2.jpg', altText: '' },
    { imageUrl: '/img/course-3.jpg', altText: '' },
    { imageUrl: '/img/course-1.jpg', altText: '' }
  ];

  socialLinks: SocialLink[] = [
    { iconClass: 'fab fa-twitter', url: '#' },
    { iconClass: 'fab fa-facebook-f', url: '#' },
    { iconClass: 'fab fa-youtube', url: '#' },
    { iconClass: 'fab fa-linkedin-in', url: '#' }
  ];

  siteName: string = 'Your Site Name';
  designedByLink: string = 'https://htmlcodex.com';
  designedByName: string = 'HTML Codex';
  distributedByLink: string = 'https://themewagon.com';
  distributedByName: string = 'ThemeWagon';

  footerMenuLinks: QuickLink[] = [
    { label: 'Home', url: '#' },
    { label: 'Cookies', url: '#' },
    { label: 'Help', url: '#' },
    { label: 'FQAs', url: '#' }
  ];

  contactInfo = {
    address: '123 Street, New York, USA',
    phone: '+012 345 67890',
    email: 'info@example.com'
  };

  newsletterText: string = 'Dolor amet sit justo amet elitr clita ipsum elitr est.';
  newsletterButtonLabel: string = 'SignUp';

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}