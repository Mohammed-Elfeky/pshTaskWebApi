import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseDependencyId, baseUrl } from '../app.module';
import { Department } from '../models/Department';
import { AuthStateService } from './auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  url!: string;
  token!:string;

  constructor(
    private httpclient: HttpClient
    ,private authStateService:AuthStateService,
    @Inject(baseDependencyId) private base:baseUrl
    ) {
    this.url=base.base+"/Department";  
    this.authStateService.token.subscribe(data=>this.token=data)
  }
  getAllDepartments(): Observable<Department[]> {
    return this.httpclient.get<Department[]>(this.url,{ headers:{"Authorization":`Bearer ${this.token}`}})
  }
}
