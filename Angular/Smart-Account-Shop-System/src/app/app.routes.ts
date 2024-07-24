import { Routes } from '@angular/router';
import { waytopayRoutes } from '@routes/way-to-pay';
import { dashboarComponent, homeAdminComponent, homeComponent, loginComponent } from '@shared/utils/lazy-load-component';

export const routes: Routes = [
  { path: '', loadComponent: homeComponent },
  { path: 'login', loadComponent: loginComponent },
  {
    path: 'admin',
    loadComponent: dashboarComponent,
    children: [
      { path: '', loadComponent: homeAdminComponent },
      { path: 'way-to-pay', loadChildren: waytopayRoutes },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
