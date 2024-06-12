import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { WayToPayMainComponent } from '../pages/business/way_to_pa/way-to-pay-main/way-to-pay-main.component';
import { WayToPayIdComponent } from '../pages/business/way_to_pa/way-to-pay-id/way-to-pay-id.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'way-to-pay', component: WayToPayMainComponent },
  { path: 'way-to-pay/:id', component: WayToPayIdComponent },
];
