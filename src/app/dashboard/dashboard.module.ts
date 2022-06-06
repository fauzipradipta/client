import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileService } from '../profile/services/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptor } from '../shared/interceptor';
import { DashboardActionComponent } from './component/dashboard-action/dashboard-action.component';
import { DisplayExpComponent } from './component/display-exp/display-exp.component';
import { DisplayEduComponent } from './component/display-edu/display-edu.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardActionComponent,
    DisplayExpComponent,
    DisplayEduComponent,
  ],
  imports: [CommonModule, HttpClientModule, DashboardRoutingModule],
  providers: [ProfileService, httpInterceptor],
})
export class DashboardModule {}
