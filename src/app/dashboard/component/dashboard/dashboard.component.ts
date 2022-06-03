import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../profile/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private profileService: ProfileService) {}
  error: any = {};

  //1st object is created then constructor will be called the ngOnInit will be called
  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      () => {},
      (err) => {
        console.log(JSON.stringify(err));
        this.error = err.error;
      }
    );
  }
}
