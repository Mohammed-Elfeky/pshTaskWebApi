import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseDependencyId, baseUrl } from '../app.module';
import { Login } from '../models/Login';
import { Token } from '../models/Token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url!: string;
  constructor(private httpclient: HttpClient,@Inject(baseDependencyId) private base:baseUrl) {
    this.url=base.base;
  }


  SignIn(form: Login): Observable<Token> {
    return this.httpclient.post<Token>(`${this.url}/User/signIn`, form)
  }
}
