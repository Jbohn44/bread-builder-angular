import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashPageComponent } from './splash-page/splash-page/splash-page.component';


const routes = [{path: '', component: SplashPageComponent}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
