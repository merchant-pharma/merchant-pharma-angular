import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFlask, faBookOpen, faPaw, faMicroscope,faBuilding,faChalkboardTeacher,faUtensils,faFutbol,faBed } from '@fortawesome/free-solid-svg-icons';
import { LaboratoryAreaComponent } from "./laboratory-area/laboratory-area.component";

@Component({
  selector: 'app-infrastructure-facilities',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FontAwesomeModule, LaboratoryAreaComponent],
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
  
  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}