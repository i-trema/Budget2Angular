import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { BudgetService } from './budget.service';

@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent,
    BudgetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
