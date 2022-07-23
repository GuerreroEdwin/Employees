import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';

import { ImagePipe } from './pipe/image.pipe';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeByIdComponent } from './pages/employee-by-id/employee-by-id.component';


@NgModule({
  declarations: [
    ImagePipe,
    EmployeesComponent,
    EmployeeByIdComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
