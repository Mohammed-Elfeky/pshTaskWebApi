import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  url: string = "http://localhost:60309/api/Department"
  constructor(private httpclient: HttpClient) { }
  getAllDepartments(): Observable<Department[]> {
    return this.httpclient.get<Department[]>(this.url)
  }
}
