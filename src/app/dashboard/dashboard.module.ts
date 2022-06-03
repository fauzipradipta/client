import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileService } from '../profile/services/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptor } from '../shared/interceptor';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, HttpClientModule, DashboardRoutingModule],
  providers: [ProfileService, httpInterceptor],
})
export class DashboardModule {}
