import { Routes } from '@angular/router';
import { pagenotfoundComponent, waytopayidComponent, waytopaymainComponent } from '../utils/functions';
import { waytopaycreateComponent } from '../utils/functions/way-to-pay';

export const routes: Routes = [
  { path: '', loadComponent: waytopaymainComponent },
  { path: 'detail/:id', loadComponent: waytopayidComponent },
  { path: 'create', loadComponent: waytopaycreateComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  // { path: '**', loadComponent: pagenotfoundComponent },
];
