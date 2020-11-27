import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();
  
  // Constructor Injection of EmployeeService and Router
  constructor(private employeeService : EmployeeService,
              private router : Router) { }

  ngOnInit(): void {
  }

  // Method call to save the Employee
  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe( data => {
      console.log(data);
      // Method call to redirect to Employee List Page
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  // Method to redirect to Employee List Page
  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  // When the user clicks Submit button, onSubmit() will execute
  onSubmit() {
    this.saveEmployee();
    console.log(this.employee);
  }

}
