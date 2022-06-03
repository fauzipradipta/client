import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { httpInterceptor } from '../shared/interceptor';
import { CreateProfileComponent } from './component/create-profile/create-profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateProfileComponent],
  imports: [CommonModule, ProfileRoutingModule, HttpClientModule, FormsModule],
  providers: [ProfileService, httpInterceptor],
})
export class ProfileModule {}
