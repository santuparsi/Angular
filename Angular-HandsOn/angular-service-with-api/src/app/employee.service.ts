import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee_api=environment.employee_api
  constructor(private http:HttpClient) { }
  GetEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.employee_api+'GetAllEmployees')
  }
  GetEmployee(id:number):Observable<Employee>
  {
    return this.http.get<Employee>(this.employee_api+'GetEmployeeById/'+id);
  }
  AddEmployee(item:Employee):Observable<string>
  {
    return this.http.post<string>(this.employee_api+'AddEmployee',item);
  }
  EditEmployee(item:Employee):Observable<string>
  {
    return this.http.put<string>(this.employee_api+'EditEmployee',item);
  }
  DeleteEmployee(id:number):Observable<string>
  {
    return this.http.delete<string>(this.employee_api+'Delete/'+id);
  }
}
