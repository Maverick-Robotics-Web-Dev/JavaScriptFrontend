import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { waytopayRoutes } from '../routes/pages.routes';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'way-to-pay', loadChildren: waytopayRoutes },
];
