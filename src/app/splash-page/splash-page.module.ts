import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashPageRoutingModule } from './splash-page-routing.module';
import { SplashComponent } from './splash/splash.component';


@NgModule({
  declarations: [SplashComponent],
  imports: [
    CommonModule,
    SplashPageRoutingModule
  ]
})
export class SplashPageModule { }
