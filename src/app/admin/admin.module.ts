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
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaymentComponent } from './payment/payment.component';
import { ModifyComponent } from './modify/modify.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';


@NgModule({
  declarations: [
    AdminComponent,
    NavComponent,
    LandingPageComponent,
    AddUserComponent,
    PaymentComponent,
    ModifyComponent,
    EditModalComponent,
    DeleteModalComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    NgxSpinnerModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
