import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { MainLayoutComponent } from 'shared';
//import { AuthGuard } from './auth';

export const routes: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    //component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'client',
        loadChildren: './client/client.module#ClientModule'
      },
      {
        path: 'confirmation',
        loadChildren: './confirmation/confirmation.module#ConfirmationModule'
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ],
    //canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]);
