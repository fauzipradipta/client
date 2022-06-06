import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Createprofile } from '../model/createprofile';
import { Education } from 'src/app/model/education';
import { Experience } from 'src/app/model/experience';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  api = './api/profile';

  constructor(private httpClient: HttpClient) {}
  getProfile(): Observable<any> {
    return this.httpClient.get(this.api);
  }

  createProfile(profile: Createprofile): Observable<any> {
    return this.httpClient.post(this.api, profile);
  }

  createExperience(experience: Experience): Observable<any> {
    return this.httpClient.post('/api/profile/experience', experience);
  }
  createEducation(education: Education): Observable<any> {
    return this.httpClient.post('/api/profile/education', education);
  }
}
