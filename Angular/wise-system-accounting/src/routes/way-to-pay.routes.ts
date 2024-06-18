import { Routes } from '@angular/router';
import { waytopayidComponent, waytopaymainComponent } from '../utils/functions/way-to-pay';

export const routes: Routes = [
  { path: 'home', loadComponent: waytopaymainComponent },
  { path: ':id', loadComponent: waytopayidComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' },
  { path: '**', redirectTo: '/home', pathMatch: 'prefix' },
];
