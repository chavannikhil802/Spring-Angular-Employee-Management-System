import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id : number;
  employee = new Employee();

  constructor(private employeeService : EmployeeService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {

    // Code to display the Employee details in the Update Employee Form

    // Using ActivatedRoute to fetch the id parameter from the URL
    this.id = this.route.snapshot.params['id'];
    // Fetching the data for the id
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    },
    error => console.log(error));
  }

  navigate() {
    this.router.navigate(['employees']);
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.navigate();
    },
    error => console.log(error));
  }
}
