import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulaComponent } from './formula.component';
import { FormulaFormComponent } from './formula-form/formula-form.component';

const routes: Routes = [{ path: 'formula/:formulaId', component: FormulaComponent }, {path: 'form', component: FormulaFormComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulaRoutingModule { }
