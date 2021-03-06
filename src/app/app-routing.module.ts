import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes = [
{path: '', redirectTo: '/splash', pathMatch: 'full'}, 
{path: 'formula', loadChildren: () => import('./formula/formula.module').then(m => m.FormulaModule)},
{path: '**', component: PageNotFoundComponent}, 

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
