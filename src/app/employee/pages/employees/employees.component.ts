import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/employee.interface';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees!: Employee[];

  constructor( private employeeService: EmployeeService,
              private router: Router ) {}
 

  ngOnInit(): void {

    this.employeeService.getEmployees()
    .subscribe( responseApi => { 
      this.employees = responseApi.data;
      console.log(this.employees);
    },
    (error: HttpErrorResponse) => {
      console.log(error.status);
    });

  }

  goEmployeeById(id: number){
    this.router.navigate([`/employee/${id}`])
      console.log("edwin no olvidar pasar id: "+ id );
  }
}
