import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // employees will be used to display the data in employee-list.component.html
  employees: Employee[];

  constructor() { }

  ngOnInit(): void {
    this.employees = [{
      "id" : 1,
      "firstName" : "Nikhil",
      "lastName" : "Chavan",
      "emailId" : "nikhil@gmail.com"
    },
    {
      "id" : 2,
      "firstName" : "Neha",
      "lastName" : "Chavan",
      "emailId" : "neha@gmail.com"
    },
    {
      "id" : 3,
      "firstName" : "Narendra",
      "lastName" : "Chavan",
      "emailId" : "narendra@gmail.com"
    }];
  }

}
