import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employee/pages/employees/employees.component';
import { EmployeeByIdComponent } from './employee/pages/employee-by-id/employee-by-id.component';

const routes: Routes = [
  {path: 'list-employees',component: EmployeesComponent},
  {path: 'employee/:id',component: EmployeeByIdComponent},
  {path: '**', pathMatch:'full', redirectTo: 'list-employees'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
