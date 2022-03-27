import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {

  budgets!: Budget[];
  budget!: Budget;

  
  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private budgetService: BudgetService)
         {
          this.budget = new Budget();
          
  }

  ngOnInit() {
    this.budgetService.getBudgets().subscribe(data => {
      this.budgets = data;
    });
  }
  onSupp(id: number){
      this.budgetService.delete(id).subscribe(result =>
        this.ngOnInit());
    }

    
  

  

}
