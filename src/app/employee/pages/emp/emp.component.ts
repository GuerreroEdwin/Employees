
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Employee } from 'src/app/interfaces/employee.interface';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: []
})
export class EmpComponent  {

 
  // res!: Employee;

  // constructor( private activatedRoute: ActivatedRoute,
  //              private heroesService: EmployeeService,
  //              private router: Router ) { }

  // ngOnInit(): void {

  //   this.activatedRoute.params
  //     .pipe(
  //       switchMap( ({ id }) => this.heroesService.getEmployeePorId(id) )
  //     ).subscribe( responseApi => { 
  //       this.res = responseApi;
  //       console.log(this.res);
  //     }
  //     ,(error: HttpErrorResponse) => {
  //       console.log(error.status);
  //     });

  // }

  // regresar() {
  //   this.router.navigate(['/employee/home']);
  // }
}
