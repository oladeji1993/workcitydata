import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination'; 


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
    FormsModule,
    // NavigationComponent,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
