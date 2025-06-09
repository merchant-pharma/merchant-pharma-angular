import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface Member {
  name: string;
  position: string;
  qualification: string;
  imageUrl: string;
}

@Component({
  selector: 'app-governing-body',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-xxl py-5" [@fadeInUp]>
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center px-3" style="color: maroon;">Governing Body</h6>
          <h1 class="mb-5">Our Leadership Team</h1>
        </div>

        <div class="row g-4">
          @for (member of members; track $index) {
            <div class="col-lg-3 col-md-6 wow fadeInUp" [attr.data-wow-delay]="0.1 * ($index + 1) + 's'">
              <div class="team-item bg-light rounded">
                <div class="overflow-hidden">
                  <img [src]="member.imageUrl" class="img-fluid" [alt]="member.name">
                </div>
                <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
                  <div class="bg-light d-flex justify-content-center pt-2 px-1" style="width: 90%;">
                    <a class="btn btn-sm-square mx-1" href="" style="background-color: maroon; border-color: maroon; color: white;"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-sm-square mx-1" href="" style="background-color: maroon; border-color: maroon; color: white;"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-sm-square mx-1" href="" style="background-color: maroon; border-color: maroon; color: white;"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div class="text-center p-4">
                  <h5 class="mb-0">{{ member.name }}</h5>
                  <small style="color: maroon;">{{ member.position }}</small>
                  <p class="mt-2 mb-0 small text-muted">{{ member.qualification }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .team-item {
      transition: .5s;
      box-shadow: 0 0 45px rgba(128, 0, 0, 0.07);
      border: 1px solid rgba(128, 0, 0, 0.1);
    }
    .team-item:hover {
      transform: translateY(-10px);
    }
    .team-item img {
      transition: .5s;
    }
    .team-item:hover img {
      transform: scale(1.1);
    }
    .team-item .btn {
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 35px;
      transition: .5s;
    }
    .team-item .btn:hover {
      color: maroon;
      background: #FFFFFF !important;
    }
    .section-title {
      position: relative;
      display: inline-block;
      text-transform: uppercase;
    }
    .section-title::before {
      position: absolute;
      content: "";
      width: 45px;
      height: 2px;
      top: 50%;
      left: -55px;
      margin-top: -1px;
      background: maroon;
    }
    .section-title::after {
      position: absolute;
      content: "";
      width: 45px;
      height: 2px;
      top: 50%;
      right: -55px;
      margin-top: -1px;
      background: maroon;
    }
    @media (max-width: 768px) {
      .section-title::before,
      .section-title::after {
        width: 30px;
      }
      .section-title::before {
        left: -40px;
      }
      .section-title::after {
        right: -40px;
      }
    }
  `],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class GoverningBodyComponent implements OnInit {
  members: Member[] = [
    {
      name: 'Dr. Rajesh Patel',
      position: 'Chairman',
      qualification: 'Ph.D. in Pharmaceutical Sciences',
      imageUrl: 'img/team-1.jpg'
    },
    {
      name: 'Dr. Priya Shah',
      position: 'Vice Chairman',
      qualification: 'Ph.D. in Pharmacology',
      imageUrl: 'img/team-2.jpg'
    },
    {
      name: 'Mr. Amit Desai',
      position: 'Secretary',
      qualification: 'M.Pharm, MBA',
      imageUrl: 'img/team-3.jpg'
    },
    {
      name: 'Dr. Meera Patel',
      position: 'Member',
      qualification: 'Ph.D. in Pharmaceutical Chemistry',
      imageUrl: 'img/team-4.jpg'
    }
  ];

  constructor(private wowService: NgwWowService) {}

  ngOnInit(): void {
    this.wowService.init();
  }
} 