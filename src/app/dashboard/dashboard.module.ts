import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
//import { SharedModule } from 'shared';
//import { ClientCardOwnerNamePipe } from './dashboard-page/client-list/client-card/client-card-owner-name.pipe';
//import { ClientCardComponent } from './dashboard-page/client-list/client-card/client-card.component';
//import { ClientListComponent } from './dashboard-page/client-list/client-list.component';
//import { AsOfDatePipe } from './dashboard-page/dashboard-header/as-of-date/as-of-date-pipe.pipe';
//import { AsOfDateComponent } from './dashboard-page/dashboard-header/as-of-date/as-of-date.component';
//import { DashboardHeaderComponent } from './dashboard-page/dashboard-header/dashboard-header.component';
//import { RequestersStatsComponent } from './dashboard-page/dashboard-header/requesters-stats/requesters-stats.component';
//import { UserLogoComponent } from './dashboard-page/dashboard-header/user-logo/user-logo.component';
//import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
//import { DashboardSearchComponent } from './dashboard-page/dashboard-search/dashboard-search.component';
//import { routes } from './dashboard.routing';
//import { store } from './dashboard.store';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    //FontAwesomeModule,
    //NgbDropdownModule,
    //SharedModule,
    FormsModule,
    //...store,
    //routes
  ],
  declarations: [
    //ClientCardComponent,
    //ClientListComponent,
    //DashboardHeaderComponent,
    //DashboardSearchComponent,
    //ClientCardOwnerNamePipe,
    //DashboardPageComponent,
    //AsOfDateComponent,
    //UserLogoComponent,
    //RequestersStatsComponent,
    //AsOfDatePipe
  ],
  providers: [DatePipe]
})
export class DashboardModule {}
