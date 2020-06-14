import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashPageRoutingModule } from './splash-page-routing.module';
import { SplashComponent } from './splash/splash.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';


@NgModule({
  declarations: [SplashComponent, UserComponent, UserLoginComponent, UserSignUpComponent],
  imports: [
    CommonModule,
    SplashPageRoutingModule
  ]
})
export class SplashPageModule { }