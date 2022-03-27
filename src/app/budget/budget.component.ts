import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Budget } from '../budget';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  
  budgets!: Budget[];
  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.budgetService.getBudgets().subscribe((data: Budget[]) => {
      console.log(data);
      this.budgets = data;
    });
  }

}
