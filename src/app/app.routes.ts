import { Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { AboutComponent } from './features/about/about.component';
import { TeamComponent } from './features/team/team.component';
import { TestimonialComponent } from './features/testimonial/testimonial.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { PopularCoursesComponent } from './features/popular-courses/popular-courses.component';
import { IntroductionVisionComponent } from './features/about/about-faculty-college/introduction-vision/introduction-vision.component';
import { DeanDirectorMessageComponent } from './features/about/about-faculty-college/dean-director-message/dean-director-message.component';
import { HistoryMilestonesComponent } from './features/about/about-faculty-college/history-milestones/history-milestones.component';
import { DepartmentsProgramsComponent } from './features/departments-programs/departments-programs.component';
import { BPharmComponent } from './features/departments-programs/b-pharm/b-pharm.component';
import { MPharmComponent } from './features/departments-programs/m-pharm/m-pharm.component';
import { PharmDComponent } from './features/departments-programs/pharm-d/pharm-d.component';
import { PhdPharmacyComponent } from './features/departments-programs/phd-pharmacy/phd-pharmacy.component';
import { AdmissionsComponent } from './features/admissions/admissions.component';
import { AdmissionProcessComponent } from './features/admissions/admission-process/admission-process.component';
import { ImportantDatesComponent } from './features/admissions/important-dates/important-dates.component';
import { FeesStructureComponent } from './features/admissions/fees-structure/fees-structure.component';
import { ScholarshipInfoComponent } from './features/admissions/scholarship-info/scholarship-info.component';
import { DocumentsRequiredComponent } from './features/admissions/documents-required/documents-required.component';
import { OnlineApplicationFormComponent } from './features/admissions/online-application-form/online-application-form.component';
import { FacultyProfilesComponent } from './features/faculty-profiles/faculty-profiles.component';
import { FacultyProfileDetailsComponent } from './features/faculty-profile-details/faculty-profile-details.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent, pathMatch: 'full' }, // Home
    {
        path: 'about',
        component: AboutComponent,
        children: [
          { path: '', redirectTo: 'introduction-vision', pathMatch: 'full' }, // Default subpage
          { path: 'introduction-vision', component: IntroductionVisionComponent },
          { path: 'dean-message', component: DeanDirectorMessageComponent },
          { path: 'history-milestones', component: HistoryMilestonesComponent },
        ]
    },
    {
      path: 'departments',
      component: DepartmentsProgramsComponent, // The container component
      children: [
        { path: 'b-pharm', component: BPharmComponent },
        { path: 'm-pharm', component: MPharmComponent },
        { path: 'pharm-d', component: PharmDComponent },
        { path: 'phd-pharmacy', component: PhdPharmacyComponent },
        { path: '', redirectTo: 'b-pharm', pathMatch: 'full' }, // Optional: default child route
      ],
    },
    {
      path: 'admissions',
      component: AdmissionsComponent,
      children: [
        { path: 'process', component: AdmissionProcessComponent },
        { path: 'important-dates', component: ImportantDatesComponent },
        { path: 'fees-structure', component: FeesStructureComponent },
        { path: 'scholarship-info', component: ScholarshipInfoComponent },
        { path: 'documents-required', component: DocumentsRequiredComponent },
        { path: 'apply-online', component: OnlineApplicationFormComponent },
        { path: '', redirectTo: 'process', pathMatch: 'full' }, // Default child route
      ],
    },
    { path: 'team', component: TeamComponent }, // Our Team + Introduction & Vision
    { path: 'testimonial', component: TestimonialComponent }, // Testimonial + Dean's Message
    { path: 'courses', component: PopularCoursesComponent }, // Courses
    { path: 'contact', component: ContactUsComponent }, // Contact
    { path: 'faculty', component: FacultyProfilesComponent }, // Route for the faculty list
    { path: 'faculty/:id', component: FacultyProfileDetailsComponent }, // Route for individual faculty details
   
];
