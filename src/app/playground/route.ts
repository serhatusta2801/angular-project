import {Route} from '@angular/router';

const ROUTES:Route[]=[
  {
    path:'',
    title:'Playground',
    loadComponent:() => import('./playground.component')
  }
]

export default ROUTES;
