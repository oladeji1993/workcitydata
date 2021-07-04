import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { Auth2Component } from './auth2/auth2.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
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
    path: "auth",
    component: AuthComponent
  },

  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "register2",
    component: Register2Component,
    canActivate: [AuthGuard]
  },
  {
    path: "auth2",
    component: Auth2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
