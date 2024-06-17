import { Routes } from '@angular/router';
import { waytopayidComponent, waytopaymainComponent } from '../../../utils/functions/way-to-pay';

export const routes: Routes = [
  { path: '', loadComponent: waytopaymainComponent },
  { path: ':id', loadComponent: waytopayidComponent },
];
