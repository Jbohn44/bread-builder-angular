import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page/splash-page.component';
import { FormulaPageComponent } from './formula/formula-page/formula-page.component';
import { FormulaFormComponent } from './formula/formula-form/formula-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    FormulaPageComponent,
    FormulaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
