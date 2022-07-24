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
        console.log('Edwinsssssssssssssssssss'+urlApi);
        }
        ,(error: HttpErrorResponse) => {
          console.log(error.status);
         }
        );
      
      // this.activatedRoute.params
      //   .subscribe(({id}) => console.log('Edwin haaaaaaaaaa = '+id) )
      
      // const id = this.activatedRoute.snapshot.paramMap.get('id'); 
      // this.employeeService
      //   .getEmployeePorId(id)
      //   .subscribe((employees) => {
      //     console.log(employees)

      // { this.activatedRoute.paramMap
      //   .subscribe(params => { this.employees = params.get("id") }) }

      // constructor(route: ActivatedRoute) {
      //   const id: Observable<string> = route.params.pipe(map(p => p.id));
      //   const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
      //   // route.data incluye tanto `data` como` resolve`
      //   const user = route.data.pipe(map(d => d.user));
  }

}
