import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
        },
        {
            path: 'home',
            component: LandingPageComponent
        },
        {
          path: 'add-user',
          component: AddUserComponent
      },

      {
        path: 'update-details',
        component: UpdateDetailsComponent
    },

  //   {
  //     path: 'home',
  //     component: LandingPageComponent
  // },
      //   {
      //     path: 'nav',
      //     component: NavComponent
      // },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
