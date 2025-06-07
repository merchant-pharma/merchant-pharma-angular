import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface QuickLink {
  label: string;
  routerLink: string;
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
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  quickLinks: QuickLink[] = [
    { label: 'About College', routerLink: '/about' },
    { label: 'Contact Us', routerLink: '/contact' },
    { label: 'Admission', routerLink: '/admission' },
    { label: 'Departments', routerLink: '/departments' },
    { label: 'Infrastructure', routerLink: '/infrastructure' }
  ];

  galleryImages: GalleryImage[] = [
    { imageUrl: '/img/campus-1.jpg', altText: 'College Campus' },
    { imageUrl: '/img/lab-1.jpg', altText: 'Pharmacy Lab' },
    { imageUrl: '/img/classroom-1.jpg', altText: 'Classroom' },
    { imageUrl: '/img/event-1.jpg', altText: 'College Event' },
    { imageUrl: '/img/library-1.jpg', altText: 'Library' },
    { imageUrl: '/img/campus-2.jpg', altText: 'College Building' }
  ];

  socialLinks: SocialLink[] = [
    { iconClass: 'fab fa-whatsapp', url: 'https://wa.me/919723706169' },
    { iconClass: 'fab fa-facebook-f', url: '#' },
    { iconClass: 'fab fa-instagram', url: '#' },
    { iconClass: 'fab fa-youtube', url: '#' },
    { iconClass: 'fab fa-linkedin-in', url: '#' }
  ];

  siteName: string = 'Merchant Pharmacy College';

  footerMenuLinks: QuickLink[] = [
    { label: 'Home', routerLink: '/' },
    { label: 'Courses', routerLink: '/courses' },
    { label: 'Faculty', routerLink: '/faculty' },
    { label: 'Gallery', routerLink: '/gallery' }
  ];

  contactInfo = {
    address: 'Merchant Pharmacy College, Mehsana, Gujarat, India',
    phone: '+91 97237 06169',
    email: 'info@merchantpharmacy.edu.in'
  };

  newsletterText: string = 'Stay updated with our latest news, events, and admission updates.';
  newsletterButtonLabel: string = 'Subscribe';

  constructor(private wowService: NgwWowService) {}

  getWhatsAppUrl(): string {
    return 'https://wa.me/' + this.contactInfo.phone.replace(/[^0-9]/g, '');
  }

  ngOnInit(): void {
    this.wowService.init();
  }
}