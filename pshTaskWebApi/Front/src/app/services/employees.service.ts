import { Injectable } from '@angular/core';
import { Employee, EmployeePost } from '../models/Employee';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url: string = "http://localhost:60309/api/Employee"
  constructor(private httpclient: HttpClient) { }
  getAllEmployee(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(this.url)
  }
  getEmployee(id: number): Observable<Employee> {
    return this.httpclient.get<Employee>(`${this.url}/${id}`)
  }
  addEmployee(employee: EmployeePost): Observable<Employee> {
    return this.httpclient.post<Employee>(this.url, employee)
  }
  editEmployee(employee: EmployeePost, id: number): Observable<number> {
    return this.httpclient.put<number>(`${this.url}/${id}`, employee)
  }
  deleteEmployee(id: number): Observable<number> {
    return this.httpclient.delete<number>(`${this.url}/${id}`)
  }
}
