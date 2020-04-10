import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserService } from './user/services/user-service.service';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ViewsRoutingModule } from './views-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { FlexLayoutModule } from '@angular/flex-layout';
//Material
import {
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatCardModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule,
  MatDialogModule,
  MatFormFieldModule
} from '@angular/material';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    ProductsComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    UserDetailComponent,
    UserEditComponent,
    HomeComponent
  ],
  imports: [
    ViewsRoutingModule,
    CommonModule,
    FormsModule,
    // Material
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [
    UserService
  ]
})
export class ViewsModule { }
