import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './frame/nav/nav.component';
import { FooterComponent } from './frame/footer/footer.component';
import { EmployeesComponent } from './employee/pages/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent, 
    FooterComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
