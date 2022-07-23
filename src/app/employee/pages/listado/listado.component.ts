import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';
import { Employee } from 'src/app/interfaces/employee.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: []
})
export class ListadoComponent implements OnInit {

  res!: Employee[];

  constructor( private employeeService: EmployeeService) {}
 

  ngOnInit(): void {

    // this.employeeService.getEmployees()
    //   .subscribe( employees=>{console.log(employees);});

    this.employeeService.getEmployees()
    .subscribe( responseApi => {this.res = responseApi.data;
      console.log(this.res);
    },(error: HttpErrorResponse) => {
      console.log(error.status);
    });

  }

      
}
