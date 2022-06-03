import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../users/services/auth.service';
import { Createprofile } from '../../model/createprofile';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent implements OnInit {
  createProfile: Createprofile = new Createprofile();
  error: any = {};

  constructor() {}

  ngOnInit(): void {}

  createProfileSubmit() {
    console.log(JSON.stringify(this.createProfile));
  }
}
