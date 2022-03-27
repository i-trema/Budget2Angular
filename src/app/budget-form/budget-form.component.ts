import { Component } from '@angular/core';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent {

  budget!: Budget;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private budgetService: BudgetService) {
          this.budget = new Budget();
         }


  onSubmit(){
    this.budgetService.save(this.budget).subscribe(result =>
      this.goToBudgetList());
  }

  goToBudgetList(){
    this.router.navigate(['/budgets']);
  }

}
