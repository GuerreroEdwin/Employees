import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ImagePipe } from './pipe/image.pipe';
import { HomeComponent } from './pages/home/home.component';
import { EmpComponent } from './pages/emp/emp.component';


@NgModule({
  declarations: [
    BuscarComponent,
    ListadoComponent,
    ImagePipe,
    HomeComponent,
    EmpComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
