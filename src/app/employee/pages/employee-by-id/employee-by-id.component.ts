import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-by-id',
  templateUrl: './employee-by-id.component.html',
  styleUrls: ['./employee-by-id.component.css']
})
export class EmployeeByIdComponent implements OnInit {

  ngOnInit(): void {}
   // res!: Employee;

  // constructor( private activatedRoute: ActivatedRoute,
  //              private heroesService: EmployeeService,
  //              private router: Router ) { }

  // ngOnInit(): void {

  //   this.activatedRoute.params
  //     .pipe(
  //       switchMap( ({ employee:id }) => this.heroesService.getEmployeePorId(id) )
  //     ).subscribe( responseApi => { 
  //       this.res = responseApi;
  //       console.log(this.res);
  //     }
  //     ,(error: HttpErrorResponse) => {
  //       console.log(error.status);
  //     });

  // }


}
