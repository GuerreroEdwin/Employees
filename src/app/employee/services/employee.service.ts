import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { environment } from 'src/environments/environment';
import { ResponseEdwin } from 'src/app/interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getEmployees(): Observable <ResponseEdwin> {
    return this.http.get<ResponseEdwin>(`${this.baseUrl}s`);
  }

  getEmployeePorId( id: number ):Observable<ResponseEdwin> {
    return this.http.get<ResponseEdwin>(`${ this.baseUrl }/${ id }`);
  }
 

  // getSugerencias( termino: string ): Observable<ResponseEdwin> {
  //   return this.http.get<ResponseEdwin>(`${ this.baseUrl }/employees?q=${ termino }&_limit=6`);
  // }

}
