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
    { label: 'Departments', routerLink: '/departments' }
  ];

  galleryImages: GalleryImage[] = [
    { imageUrl: 'img/campus-1.jpg', altText: 'College Campus' },
    { imageUrl: 'img/lab-1.jpg', altText: 'Pharmacy Lab' },
    { imageUrl: 'img/classroom-1.jpg', altText: 'Classroom' },
    { imageUrl: 'img/event-1.jpg', altText: 'College Event' },
    { imageUrl: 'img/library-1.jpg', altText: 'Library' },
    { imageUrl: 'img/campus-2.jpg', altText: 'College Building' }
  ];

  socialLinks: SocialLink[] = [
    { iconClass: 'fab fa-whatsapp', url: 'https://wa.me/919723706169' },
    { iconClass: 'fab fa-facebook-f', url: 'https://www.facebook.com/merchantayurved/' },
    { iconClass: 'fab fa-instagram', url: 'https://www.instagram.com/_merchant_campus?igsh=d3V4aHZ2ZGY2b2s2' },
    { iconClass: 'fab fa-youtube', url: 'https://www.youtube.com/@merchanteducationcampus8683' },
    { iconClass: 'fab fa-linkedin-in', url: '#' }
  ];

  siteName: string = 'Merchant Pharmacy College';

  footerMenuLinks: QuickLink[] = [
    { label: 'Home', routerLink: '/' },
    { label: 'Faculty', routerLink: '/faculty' },
    { label: 'Gallery', routerLink: '/gallery' }
  ];

  contactInfo = {
    address: 'No 9, JCQW+XW9 Radhe Vijay Garden, Basana College Campus, Basna, Chitrodipura, Gujarat 384001',
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