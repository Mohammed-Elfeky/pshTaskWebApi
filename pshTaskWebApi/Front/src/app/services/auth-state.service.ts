import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  token = new BehaviorSubject<string>("")

  constructor(private router: Router) {
    const storageToken = localStorage.getItem("token")
    if (storageToken) {
      this.token.next(storageToken)
    }
  }

  setToken(tokenParam: string) {
    localStorage.setItem("token", tokenParam)
    this.token.next(tokenParam)
  }

  removeToken() {
    localStorage.removeItem("token")
    this.token.next("")
    this.router.navigate(["/login"])
  }

}
