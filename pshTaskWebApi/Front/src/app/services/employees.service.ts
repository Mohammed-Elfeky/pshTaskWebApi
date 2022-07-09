import { Inject, Injectable } from '@angular/core';
import { Employee, EmployeePost } from '../models/Employee';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { AuthStateService } from './auth-state.service';
import { baseDependencyId, baseUrl } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url!: string;
  token!:string;
  constructor(
    private httpclient: HttpClient,
    private authStateService:AuthStateService,
    @Inject(baseDependencyId) private base:baseUrl
    ) {
    this.url=base.base+"/Employee";  
    this.token=this.authStateService.token.value
  }
  
  getAllEmployee(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(this.url,{ headers:{"Authorization":`Bearer ${this.token}`}})
  }
  
  getEmployee(id: number): Observable<Employee> {
    return this.httpclient.get<Employee>(`${this.url}/${id}`,{ headers:{"Authorization":`Bearer ${this.token}`}})
  }
  
  addEmployee(employee: EmployeePost): Observable<Employee> {
    return this.httpclient.post<Employee>(this.url, employee,{ headers:{"Authorization":`Bearer ${this.token}`}})
  }
  
  editEmployee(employee: EmployeePost, id: number): Observable<number> {
    return this.httpclient.put<number>(`${this.url}/${id}`, employee,{ headers:{"Authorization":`Bearer ${this.token}`}})
  }
  
  deleteEmployee(id: number): Observable<number> {
    return this.httpclient.delete<number>(`${this.url}/${id}`,{ headers:{"Authorization":`Bearer ${this.token}`}})
  }
}
