import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-departments-programs',
  standalone: true,
  imports: [ RouterOutlet],
  templateUrl: './departments-programs.component.html',
  styleUrls: ['./departments-programs.component.css']
})
export class DepartmentsProgramsComponent implements OnInit {
  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
}