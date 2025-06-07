import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgwWowService } from 'ngx-wow';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelopeOpen = faEnvelopeOpen;

  contactInfo = {
    address: 'Merchant Pharmacy College, Mehsana, Gujarat, India',
    phone: '+91 97237 06169',
    email: 'info@merchantpharmacy.edu.in',
    workingHours: 'Monday - Saturday: 9:00 AM - 5:00 PM',
    admissionHours: 'Monday - Friday: 10:00 AM - 4:00 PM',
    googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.1234567890123!2d72.12345678901234!3d23.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA3JzI0LjUiTiA3MsKwMDcnMjQuNSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin'
  };

  departments = [
    { name: 'Pharmacy', email: 'pharmacy@merchantpharmacy.edu.in' },
    { name: 'Admissions', email: 'admissions@merchantpharmacy.edu.in' },
    { name: 'Placements', email: 'placements@merchantpharmacy.edu.in' },
    { name: 'Student Affairs', email: 'studentaffairs@merchantpharmacy.edu.in' }
  ];

  socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#' },
    { icon: 'fab fa-instagram', url: '#' },
    { icon: 'fab fa-youtube', url: '#' },
    { icon: 'fab fa-linkedin-in', url: '#' }
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }

  onSubmit(): void {
    // Handle form submission
    console.log('Form submitted:', this.formData);
    // Add your form submission logic here
  }

  getWhatsAppUrl(): string {
    return 'https://wa.me/' + this.contactInfo.phone.replace(/[^0-9]/g, '');
  }
}