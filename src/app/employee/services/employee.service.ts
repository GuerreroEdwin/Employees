import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { environment } from 'src/environments/environment';
import { ResponseApi } from 'src/app/interfaces/employee.interface';
import { Employee } from '../../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getEmployees(): Observable <ResponseApi> {
    return this.http.get<ResponseApi>(`${this.baseUrl}s`);
  }

  getEmployeePorId( id: Employee ):Observable<Employee> {
    return this.http.get<Employee>(`${ this.baseUrl }/${ id }`);
  }

}
