import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavComponent } from './nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    NavComponent,
    LandingPageComponent,
    AddUserComponent,
    UpdateDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    NgxSpinnerModule,
    // NavigationComponent,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
