import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Createprofile } from '../../model/createprofile';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent implements OnInit {
  createProfile: Createprofile = new Createprofile();
  error: any = {};

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {}

  createProfileSubmit() {
    //console.log(JSON.stringify(this.createProfile));
    this.profileService.createProfile(this.createProfile).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        //navigate to dashboard
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        //handle the error
        // console.log(JSON.stringify(err));
        if (this.error == null) this.error = err.error;
        else this.error = err;
        // this.error = err.error;
      }
    );
  }
}
