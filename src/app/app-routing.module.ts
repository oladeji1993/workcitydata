import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcesspassComponent } from './acesspass/acesspass.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { Auth2Component } from './auth2/auth2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "", 
    component:HomeComponent
  },

  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "login",
    component: AuthComponent
  },

  {
    path: "accesspass",
    component: AcesspassComponent
  },

  {
    path: "signup",
    component: Auth2Component
  },

  { path: 'admin', 
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  canActivate: [AuthGuard]
},
  
{ path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
