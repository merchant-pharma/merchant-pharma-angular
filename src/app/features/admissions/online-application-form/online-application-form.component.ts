import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgwWowService } from 'ngx-wow';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-online-application-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './online-application-form.component.html',
  styleUrl: './online-application-form.component.css'
})
export class OnlineApplicationFormComponent implements OnInit {
  applicationForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private wowService: NgwWowService) {
    this.applicationForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      program: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Example: 10-digit phone number
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]], // Example: 6-digit postal code
      terms: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {
    this.wowService.init();
  }

  get f() { return this.applicationForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.applicationForm.invalid) {
      return;
    }

    // Handle form submission logic here (e.g., send data to backend)
    console.log('Application Form Data:', this.applicationForm.value);
    alert('Application submitted successfully!');
    this.applicationForm.reset();
    this.submitted = false;
  }
}