import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewMainComponent } from './view-main/view-main.component';

const routes: Routes = [
  {
    path: '',
    component: ViewMainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
