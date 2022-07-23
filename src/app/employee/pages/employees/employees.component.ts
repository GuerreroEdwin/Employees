import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee.interface';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  res!: Employee[];

  constructor( private employeeService: EmployeeService) {}
 

  ngOnInit(): void {

    this.employeeService.getEmployees()
    .subscribe( responseApi => { this.res = responseApi.data;
      console.log(this.res);
    },(error: HttpErrorResponse) => {
      console.log(error.status);
    });

  }
}
