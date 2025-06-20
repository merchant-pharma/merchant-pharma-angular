import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBook, faArrowRight, faPills, faDna } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgbDropdownModule, 
    NgbCollapseModule,
    FontAwesomeModule, 
    CommonModule, 
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styles: [`
    .navbar {
      padding: 0;
    }

    .navbar-brand {
      padding: 15px 30px;
    }

    .navbar-nav {
      padding: 0;
    }

    .nav-item {
      padding: 0;
    }

    .nav-link {
      padding: 25px 15px;
      white-space: nowrap;
    }

    .about-menu {
      width: 800px;
      max-height: 80vh;
      overflow-y: auto;
      overflow-x: hidden;
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
    }

    .programs-menu {
      width: 400px;
      max-height: 80vh;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .program-card {
      background: #fff;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .program-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .program-card .dropdown-item {
      padding: 1.5rem;
      border-radius: 8px;
    }

    .program-card .dropdown-item:hover {
      background-color: rgba(128, 0, 0, 0.05);
    }

    .program-icon {
      width: 50px;
      height: 50px;
      background: rgba(128, 0, 0, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
    }

    .program-icon i {
      font-size: 1.5rem;
    }

    .program-details h5 {
      color: maroon;
      font-weight: 600;
    }

    .program-details p {
      font-size: 0.9rem;
    }

    .program-details small {
      font-size: 0.8rem;
    }

    .programs-menu .dropdown-item {
      padding: 10px 15px;
      border-radius: 4px;
      margin-bottom: 2px;
    }

    .programs-menu .dropdown-item small {
      font-size: 0.85em;
      opacity: 0.8;
    }

    .programs-menu .dropdown-item:hover {
      background-color: rgba(6, 187, 204, 0.1);
      transform: translateX(5px);
    }

    .programs-menu .dropdown-header {
      border-bottom: 1px solid rgba(0,0,0,0.1);
      padding-bottom: 8px;
    }
    
    @media (max-width: 991.98px) {
      .about-menu,
      .programs-menu {
        width: 100%;
        position: static;
        transform: none;
      }

      .navbar-brand {
        padding: 10px 15px;
      }

      .nav-link {
        padding: 10px 15px;
      }

      .dropdown-menu {
        border: none;
        box-shadow: none;
      }

      .row {
        flex-direction: column;
      }

      .col-md-4,
      .col-md-6 {
        width: 100%;
        margin-bottom: 1rem;
      }

      .programs-menu .dropdown-item {
        padding: 8px 10px;
      }

      .program-card {
        margin: 0.5rem 0;
      }

      .program-card .dropdown-item {
        padding: 1rem;
      }
    }
    
    .about-menu::-webkit-scrollbar,
    .programs-menu::-webkit-scrollbar {
      width: 5px;
    }
    
    .about-menu::-webkit-scrollbar-track,
    .programs-menu::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    .about-menu::-webkit-scrollbar-thumb,
    .programs-menu::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }
    
    .about-menu::-webkit-scrollbar-thumb:hover,
    .programs-menu::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    .dropdown-header {
      color: #06BBCC;
      font-weight: 600;
      padding: 8px 16px;
      margin-top: 8px;
    }

    .dropdown-item {
      padding: 8px 16px;
      color: #555;
      transition: all 0.3s;
      white-space: normal;
    }

    .dropdown-item:hover {
      color: #06BBCC;
      background-color: rgba(6, 187, 204, 0.1);
      padding-left: 22px;
    }

    .dropdown-menu {
      border: none;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    @media (min-width: 992px) {
      .dropdown:hover .dropdown-menu {
        display: block;
      }
    }
  `]
})
export class NavbarComponent {
  faBook = faBook;
  faArrowRight = faArrowRight;
  faDna = faDna;
  navbarCollapsed = true;
  activeDropdown: string | null = null;

  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  toggleDropdown(event: Event, dropdownName: string) {
    event.stopPropagation();
    if (this.activeDropdown === dropdownName) {
      this.activeDropdown = null;
    } else {
      this.activeDropdown = dropdownName;
    }
  }

  closeNavbar() {
    this.navbarCollapsed = true;
    this.activeDropdown = null;
  }

  // Close dropdowns when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!(event.target as HTMLElement).closest('.dropdown')) {
      this.activeDropdown = null;
    }
  }
}
