import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Employee, ResponseApi, ResponseApiById } from 'src/app/interfaces/employee.interface';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-by-id',
  templateUrl: './employee-by-id.component.html',
  styleUrls: ['./employee-by-id.component.css']
})
export class EmployeeByIdComponent implements OnInit {

 
  employees!: Employee;

  constructor( private _activatedRoute: ActivatedRoute,
               private _employeeService: EmployeeService,
               private _route: Router ) { }

  ngOnInit(): void {
   

      this._activatedRoute.params
      .pipe(
        switchMap ( ({id}) => this._employeeService.getEmployeePorId(id) )).
      subscribe( urlApi => { 
        this.employees = urlApi.data;
        console.log('Edwin'+urlApi);
        }
        ,(error: HttpErrorResponse) => {
          console.log(error.status);
         }
        );
      
  }

}
