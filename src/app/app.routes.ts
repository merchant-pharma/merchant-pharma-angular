import { Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { AboutComponent } from './features/about/about.component';
import { TestimonialComponent } from './features/testimonial/testimonial.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { IntroductionVisionComponent } from './features/about/about-faculty-college/introduction-vision/introduction-vision.component';
import { DeanDirectorMessageComponent } from './features/about/about-faculty-college/dean-director-message/dean-director-message.component';
import { HistoryMilestonesComponent } from './features/about/about-faculty-college/history-milestones/history-milestones.component';
import { DepartmentsProgramsComponent } from './features/departments-programs/departments-programs.component';
import { BPharmComponent } from './features/departments-programs/b-pharm/b-pharm.component';
import { PharmDComponent } from './features/departments-programs/pharm-d/pharm-d.component';
import { FacultyProfilesComponent } from './features/faculty-profiles/faculty-profiles.component';
import { FacultyProfileDetailsComponent } from './features/faculty-profile-details/faculty-profile-details.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { AcademicLeadershipComponent } from './features/about/academic-leadership/academic-leadership.component';
import { RecognitionComponent } from './features/about/recognition/recognition.component';
import { SkillDevelopmentComponent } from './features/about/skill-development/skill-development.component';
import { NssComponent } from './features/campus/nss/nss.component';
import { StudentClubsComponent } from './features/campus/student-clubs/student-clubs.component';
import { ResearchComponent } from './features/research/research/research.component';
import { AboutFacultyCollegeComponent } from './features/about/about-faculty-college/about-faculty-college.component';
import { GoverningBodyComponent } from './features/about/governing-body/governing-body.component';
import { CommitteesComponent } from './features/about/committees/committees.component';
import { GreenInitiativesComponent } from './features/about/green-initiatives/green-initiatives.component';
import { ResearchDevelopmentComponent } from './features/about/research-development/research-development.component';
import { EntrepreneurshipComponent } from './features/about/entrepreneurship/entrepreneurship.component';
import { IqacComponent } from './features/about/iqac/iqac.component';
import { GrievanceRedressalComponent } from './features/about/grievance-redressal/grievance-redressal.component';
import { AntiRaggingComponent } from './features/about/anti-ragging/anti-ragging.component';
import { WomensDevelopmentComponent } from './features/about/womens-development/womens-development.component';
import { TransportationComponent } from './features/transportation/transportation.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent, pathMatch: 'full' },
    {
        path: 'about',
        component: AboutComponent,
        children: [
          { path: '', component: AboutFacultyCollegeComponent },
          { path: 'introduction-vision', component: IntroductionVisionComponent },
          { path: 'dean-message', component: DeanDirectorMessageComponent },
          { path: 'history-milestones', component: HistoryMilestonesComponent },
          { path: 'recognition', component: RecognitionComponent },
          { path: 'green-initiatives', component: GreenInitiativesComponent },
          { path: 'research-development', component: ResearchDevelopmentComponent },
          { path: 'entrepreneurship', component: EntrepreneurshipComponent },
          { path: 'skill-development', component: SkillDevelopmentComponent },
          { path: 'iqac', component: IqacComponent },
          { path: 'grievance', component: GrievanceRedressalComponent },
          { path: 'anti-ragging', component: AntiRaggingComponent },
          { path: 'womens-cell', component: WomensDevelopmentComponent },
          { path: 'governing-body', component: GoverningBodyComponent },
          { path: 'academic-leadership', component: AcademicLeadershipComponent },
          { path: 'committees', component: CommitteesComponent }
        ]
    },
    {
      path: 'departments',
      component: DepartmentsProgramsComponent,
      children: [
        { path: 'b-pharm', component: BPharmComponent },
        { path: 'pharm-d', component: PharmDComponent },
        { path: '', redirectTo: 'b-pharm', pathMatch: 'full' }
      ]
    },
    { path: 'testimonial', component: TestimonialComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'faculty', component: FacultyProfilesComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'faculty', component: FacultyProfileDetailsComponent },
    { path: 'nss', component: NssComponent },
    { path: 'clubs', component: StudentClubsComponent },
    { path: 'research', component: ResearchComponent },
    { path: 'transportation', component: TransportationComponent }
];
