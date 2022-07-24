import { HttpClientModule } from '@angular/common/http';
import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './frame/nav/nav.component';
import { FooterComponent } from './frame/footer/footer.component';
import { EmployeesComponent } from './employee/pages/employees/employees.component';
import { EmployeeByIdComponent } from './employee/pages/employee-by-id/employee-by-id.component';
import { AsyncPipe } from '@angular/common';
import { ImagePipe } from './employee/pipe/image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent, 
    FooterComponent,
    EmployeesComponent,
    EmployeeByIdComponent,
    ImagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
