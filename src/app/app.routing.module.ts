import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BudgetListComponent } from './budget-list/budget-list.component';


const routes: Routes = [
  { path: 'budgets', component: BudgetListComponent },
  { path: 'addbudget', component: BudgetFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }