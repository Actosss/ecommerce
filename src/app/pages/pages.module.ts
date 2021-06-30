import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    RegisterComponent
  ]
})
export class PagesModule { }
