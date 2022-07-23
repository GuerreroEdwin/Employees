import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscarComponent } from './pages/buscar/buscar.component';
import { EmpComponent } from './pages/emp/emp.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent},
  { path: 'listado', component: ListadoComponent},
  { path: ':id', component: EmpComponent},
  { path: 'buscar', component: BuscarComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
