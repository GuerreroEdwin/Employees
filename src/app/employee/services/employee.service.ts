import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { environment } from 'src/environments/environment';
import { ResponseApi, ResponseApiById } from 'src/app/interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getEmployees(): Observable <ResponseApi> {
    return this.http.get<ResponseApi>(`${this.baseUrl}/employees`);
  }

  getEmployeePorId( id: number ):Observable <ResponseApiById> {
    return this.http.get<ResponseApiById>(`${this.baseUrl}/employee/${id}`);
  }

}
