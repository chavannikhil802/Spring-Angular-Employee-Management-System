import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient : HttpClient) { }

  // Method to fetch the list of Employees from the database
  getEmployeesList() : Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  //Service Method to create a new Employee
  createEmployee(employee : Employee) : Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`,employee);
  }
}
