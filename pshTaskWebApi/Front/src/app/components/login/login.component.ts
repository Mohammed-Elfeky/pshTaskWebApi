import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { startWithNumber } from 'src/app/CustomValidators/startWithNumber';
import { AuthStateService } from 'src/app/services/auth-state.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  submitted: boolean = false;
  signInServerError!:string;

  constructor(private authService: AuthService,private authStateService:AuthStateService,private router:Router) { }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    })
  }

  thisInputIsNotValidAndFormSubmitted(controlName: string) {
    return this.submitted && this.loginForm.controls[controlName].errors
  }

  whensubmit(){
    this.submitted=true;
    if(this.loginForm.valid){
      this.login()
    }
  }


  login(){
    this.authService.SignIn({
      userName:this.loginForm.controls["userName"].value,
      password:this.loginForm.controls["password"].value
    }).subscribe(
      data=>{
        this.authStateService.setToken(data.token)
        this.router.navigate(["/show"])
      },
      err=>this.signInServerError=err.error
      )
  }


}
