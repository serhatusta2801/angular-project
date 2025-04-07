import { Routes } from '@angular/router';

export const routes: Routes = [
  {
   path:'',
    children: [
      {
        path: 'playground',
        loadChildren: () => import('./playground/route'),
      }
    ]
  }
];
