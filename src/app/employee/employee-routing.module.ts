import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeByIdComponent } from './pages/employee-by-id/employee-by-id.component';



const routes: Routes = [
  
  { path: 'employee', component: EmployeesComponent},
  { path: 'employee/:id', component: EmployeeByIdComponent},
  { path: '**', redirectTo: 'employee' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
