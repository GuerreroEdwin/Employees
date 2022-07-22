import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeTargetaComponent } from './components/employee-targeta/employee-targeta.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ImagePipe } from './pipe/image.pipe';


@NgModule({
  declarations: [
    EmployeeTargetaComponent,
    BuscarComponent,
    HomeComponent,
    ListadoComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
