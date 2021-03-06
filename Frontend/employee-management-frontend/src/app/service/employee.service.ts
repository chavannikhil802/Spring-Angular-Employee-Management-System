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

  //Sevice to get Employe By Id for displaying data in Update Employee Form
  // Passing EMployee Id as a parameter in the URL
  getEmployeeById(id : number) : Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  // Service to Update Employee
  updateEmployee(id : number, employee : Employee) : Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, employee);
  }

  // Service to Delte Employee
  deleteEmployee(id : number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
