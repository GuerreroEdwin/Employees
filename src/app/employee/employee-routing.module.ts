import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeByIdComponent } from './pages/employee-by-id/employee-by-id.component';



const routes: Routes = [
  
  { path: '', component: EmployeesComponent},
  { path: ':id', component: EmployeeByIdComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
