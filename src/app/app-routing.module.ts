import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcesspassComponent } from './acesspass/acesspass.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { Auth2Component } from './auth2/auth2.component';
import { HomeComponent } from './home/home.component';
import { Register2Component } from './register2/register2.component';

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
    path: "register2",
    component: Register2Component,
    canActivate: [AuthGuard]
  },
  {
    path: "signup",
    component: Auth2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
