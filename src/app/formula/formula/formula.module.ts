import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulaRoutingModule } from './formula-routing.module';
import { FormulaComponent } from './formula.component';
import { FormulaFormComponent } from '../formula-form/formula-form.component';
import { FormulaPageComponent } from '../formula-page/formula-page.component';


@NgModule({
  declarations: [
    FormulaComponent, 
    FormulaFormComponent, 
    FormulaPageComponent
  ],
  imports: [
    CommonModule,
    FormulaRoutingModule
  ]
})
export class FormulaModule { }
