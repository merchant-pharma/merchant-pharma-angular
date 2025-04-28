import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

interface ContactInfo {
  officeAddress: string;
  mobileNumber: string;
  emailAddress: string;
  googleMapsEmbedUrl: string;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelopeOpen = faEnvelopeOpen;

  contactDetails: ContactInfo = {
    officeAddress: '123 Street, New York, USA',
    mobileNumber: '+012 345 67890',
    emailAddress: 'info@example.com',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3023.601837986997!2d-74.0774149!3d40.730586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd144a2a9a8496961!2sHTMLCodex!5e0!3m2!1sen!2sus!4v1679687346090!5m2!1sen!2sus' // Replace with your actual embed URL
  };

  contactForm!: FormGroup;

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      // In a real application, you would handle form submission logic here
      console.log('Form submitted:', this.contactForm.value);
      alert('Form submission is currently simulated. Integrate with a backend service to make it functional.');
      // Optionally reset the form after submission:
      // this.contactForm.reset();
    } else {
      // Trigger validation to show errors
      this.markAllAsTouched();
    }
  }

  markAllAsTouched(): void {
    Object.keys(this.contactForm.controls).forEach(controlName => {
      this.contactForm.controls[controlName].markAsTouched();
    });
  }

  get nameControl() { return this.contactForm.get('name'); }
  get emailControl() { return this.contactForm.get('email'); }
  get subjectControl() { return this.contactForm.get('subject'); }
  get messageControl() { return this.contactForm.get('message'); }
}