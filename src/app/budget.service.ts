import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Budget } from './budget';


@Injectable({
  providedIn: 'root'
})



export class BudgetService {
  
  private baseUrl: string;
  private addUrl: string;
  private suppUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = "http://localhost:8080/elements",
    this.addUrl = "http://localhost:8080/add",
    this.suppUrl = "http://localhost:8080/supprimer"

  }

  public getBudgets(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.baseUrl);
  }
  public save(budget: Budget) {
    return this.http.post<Budget>(this.addUrl, budget);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.suppUrl}/${id}`, { responseType: 'text'});
  }

  // public supp(id: number) {
  //   return this.http.post<Number>(this.suppUrl, id);
  // }
}
