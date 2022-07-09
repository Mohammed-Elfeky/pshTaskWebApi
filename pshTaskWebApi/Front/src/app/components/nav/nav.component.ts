import { Component, OnInit } from '@angular/core';
import { AuthStateService } from 'src/app/services/auth-state.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authStateService:AuthStateService) { }
  tokenn!:string;
  ngOnInit(): void {
    this.authStateService.token.subscribe(data=>{
      this.tokenn=data
    })
  }

  signOut(){
    this.authStateService.removeToken()
  }

}
