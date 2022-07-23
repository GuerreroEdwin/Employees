import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employee/pages/employees/employees.component';

const routes: Routes = [
  {path: 'list-employees',component: EmployeesComponent},
  {path: 'employee/:id',component: EmployeesComponent},
  {path: '**', pathMatch:'full', redirectTo: 'list-employees'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
