import { Routes } from '@angular/router';
import {
  pagenotfoundComponent,
  waytopaycreateComponent,
  waytopayidComponent,
  waytopaymainComponent,
  waytopayupdateComponent,
} from '../utils/functions';

export const routes: Routes = [
  { path: '', loadComponent: waytopaymainComponent },
  { path: 'create', loadComponent: waytopaycreateComponent },
  { path: 'detail/:id', loadComponent: waytopayidComponent },
  { path: 'editar/:id', loadComponent: waytopayupdateComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  // { path: '**', loadComponent: pagenotfoundComponent },
];
