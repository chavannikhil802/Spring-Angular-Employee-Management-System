import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // employees will be used to display the data in employee-list.component.html
  employees: Employee[];

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();

    // this.employees = [{
    //   "id" : 1,
    //   "firstName" : "Nikhil",
    //   "lastName" : "Chavan",
    //   "emailId" : "nikhil@gmail.com"
    // },
    // {
    //   "id" : 2,
    //   "firstName" : "Neha",
    //   "lastName" : "Chavan",
    //   "emailId" : "neha@gmail.com"
    // },
    // {
    //   "id" : 3,
    //   "firstName" : "Narendra",
    //   "lastName" : "Chavan",
    //   "emailId" : "narendra@gmail.com"
    // }];
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

}
