import { Component, OnInit } from '@angular/core';
import { CONFIG, CONSTANT } from 'src/app/app.config';
import { LoginSignupService } from '../login-signup-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  config: any;
  constant: any;
  hide: boolean;
  userEmail: String;
  userPassword: String;
  isUserStudent: Boolean;
  isUserVolunteer: Boolean;

  invalidEmail: Boolean;
  emailErrorMsg: String;
  invalidPassword: Boolean;
  passwordErrorMsg: String;
  invalidUserType: Boolean;

  constructor(private loginSignupService: LoginSignupService,
    private router: Router) { 
    this.userEmail = "";
    this.userPassword = "";
    this.hide = true;
    this.isUserStudent = false;
    this.isUserVolunteer = false;
    this.config = CONFIG;
    this.constant = CONSTANT;

    this.invalidEmail = false;
    this.emailErrorMsg = this.constant.emailError.required;
    this.invalidPassword = false;
    this.passwordErrorMsg = this.constant.passwordError.required;
    this.invalidUserType = false;
  }

  ngOnInit(): void {
  }

  onBlur(event: any, fieldName: String): void {
    console.log("Student : " + this.isUserStudent + " and Volunteer: " + this.isUserVolunteer);
    if(fieldName === 'email') {
      this.userEmail = event.target.value;
      if(this.userEmail === ""){
        this.invalidEmail = true;
        this.emailErrorMsg = this.constant.emailError.required;
      }else if(!this.userEmail.match(this.config.emailPattern)){
        this.invalidEmail = true;
        this.emailErrorMsg = this.constant.emailError.invalidPattern;
      }else {
        this.invalidEmail = false;
      }
      
    }
    if(fieldName === "password") {
      this.userPassword = event.target.value;
      if(this.userPassword === "") {
        this.invalidPassword = true;
        this.passwordErrorMsg = this.constant.passwordError.required;
      }else if(this.userPassword.length < this.config.password.minLength){
        this.invalidPassword = true;
        this.passwordErrorMsg = this.constant.passwordError.minLength;
        this.passwordErrorMsg = this.passwordErrorMsg.replace("<x>", this.config.password.minLength);
      }else if(this.userPassword.length > this.config.password.maxLength){
        this.invalidPassword = true;
        this.passwordErrorMsg = this.constant.passwordError.maxLength;
        this.passwordErrorMsg = this.passwordErrorMsg.replace("<x>", this.config.password.maxLength);
      }else{
        this.invalidPassword = false;
      }
    }
  }

  submitForm(): void {
    if(this.isFormValid()) {
      let request = this.prepareRequest();
      console.log(request);
      
      if(this.isUserStudent){
        this.router.navigate(["/student"], {
          state: {
            "userEmail": this.userEmail,
            "userType": 'student'
          }
        });
      }else{
        this.router.navigate(["/volunteer"], {
          state: {
            "userEmail": this.userEmail,
            "userType": 'volunteer'
          }
        });
      }
    
      this.loginSignupService.loginUser(request).subscribe(
        (data: any) => {

        },
        (error: any) => {

        }
      )
    }
  }

  prepareRequest(): any {
    return {
      "email" : this.userEmail,
      "password": this.userPassword,
      "student" : this.isUserStudent,
      "volunteer" : this.isUserVolunteer
    }
  }

  isFormValid(): Boolean {
    if(this.userEmail === "" || this.invalidEmail){
      this.invalidEmail = true;
      return false;
    }
    if(this.userPassword === "" || this.invalidPassword){
      this.invalidPassword = true;
      return false;
    }
    if(!this.isUserStudent && !this.isUserVolunteer){
      this.invalidUserType = true;
      return false;
    }

    return true;
  }

}
