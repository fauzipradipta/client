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
  profile: any = {};

  //1st object is created then constructor will be called the ngOnInit will be called
  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      (response) => {
        console.log(JSON.stringify(response));
        console.log(response.user.name);
        this.profile = response;
      },
      (err) => {
        console.log(JSON.stringify(err));
        if (err.error !== null) this.error = err.error;
        else this.error = {};
      }
    );
  }

  deleteExperience(expId: string) {
    console.log('In Parent :::::' + expId);
    this.profileService.deleteExperience(expId).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.profile = res;
      },
      (err) => {
        console.log('Error::::', JSON.stringify(err));
        this.profile = null;
      }
    );
  }

  deleteEducation(edId: string) {
    console.log('In parent:::::' + edId);
    this.profileService.deleteEducation(edId).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.profile = res;
      },
      (err) => {
        console.log('Error::::', JSON.stringify(err));
        this.profile = null;
      }
    );
  }
}
