import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { httpInterceptor } from '../shared/interceptor';
import { CreateProfileComponent } from './component/create-profile/create-profile.component';
import { FormsModule } from '@angular/forms';
import { AddEducationComponent } from './component/add-education/add-education.component';
import { AddExperienceComponent } from './component/add-experience/add-experience.component';

@NgModule({
  declarations: [CreateProfileComponent, AddEducationComponent, AddExperienceComponent],
  imports: [CommonModule, ProfileRoutingModule, HttpClientModule, FormsModule],
  providers: [ProfileService, httpInterceptor],
})
export class ProfileModule {}
