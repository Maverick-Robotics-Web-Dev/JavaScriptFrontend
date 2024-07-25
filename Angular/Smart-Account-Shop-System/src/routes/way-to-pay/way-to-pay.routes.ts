import { Routes } from '@angular/router';
import { createComponent, detailComponent, mainComponent, updateComponent } from '@shared/utils/lazy-load-component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: mainComponent,
    // data:{animation:'main'}
  },
  {
    path: 'detail/:id',
    loadComponent: detailComponent,
    // data:{animation:''}
  },
  {
    path: 'create',
    loadComponent: createComponent,
    // data:{animation:''}
  },
  {
    path: 'update/:id',
    loadComponent: updateComponent,
    // data:{animation:''}
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  // { path: '**', loadComponent: pagenotfoundComponent },
];
