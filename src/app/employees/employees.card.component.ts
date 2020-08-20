import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-employee',
  templateUrl: './employees.card.component.html',
  styleUrls: ['./employees.card.component.scss']
})
export class EmployeesCardComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees= employees);
  }

  add(firstName: string): void {
    firstName = firstName.trim();
    if (!firstName) { return; }
    this.employeeService.addEmployee({ firstName } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService.deleteEmployee(employee).subscribe();
  }

}
