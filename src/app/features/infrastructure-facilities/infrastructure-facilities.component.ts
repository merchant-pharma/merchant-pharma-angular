import { Component, inject, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFlask, faBookOpen, faPaw, faMicroscope,faBuilding,faChalkboardTeacher,faUtensils,faFutbol,faBed } from '@fortawesome/free-solid-svg-icons';
import { LaboratoryAreaComponent } from "./laboratory-area/laboratory-area.component";
import { AdministrativeAreaComponent } from "./administrative-area/administrative-area.component";
import { LectureHallComponent } from "./lecture-hall/lecture-hall.component";
import { LibraryAreaComponent } from "./library-area/library-area.component";
import { CanteenComponent } from "./canteen/canteen.component";
import { PlaygroundComponent } from "./playground/playground.component";
import { HostelComponent } from "./hostel/hostel.component";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-infrastructure-facilities',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FontAwesomeModule, LaboratoryAreaComponent, AdministrativeAreaComponent, LectureHallComponent, LibraryAreaComponent, CanteenComponent, PlaygroundComponent, HostelComponent],
  templateUrl: './infrastructure-facilities.component.html',
  styleUrls: ['./infrastructure-facilities.component.css']
})
export class InfrastructureFacilitiesComponent implements OnInit {
  faFlask = faFlask;
  faBookOpen = faBookOpen;
  faPaw = faPaw;
  faMicroscope = faMicroscope;
  faBuilding=faBuilding;
  faChalkboardTeacher=faChalkboardTeacher;
  faUtensils=faUtensils;
  faFutbol=faFutbol;
  faBed=faBed;

   route: ActivatedRoute=inject(ActivatedRoute)
   viewportScroller: ViewportScroller=inject(ViewportScroller)
  
  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
    this.route.fragment.subscribe(fragment => {
      if (fragment) {       
        setTimeout(() => this.viewportScroller.scrollToAnchor(fragment), 100);
      }
    });
  }
}