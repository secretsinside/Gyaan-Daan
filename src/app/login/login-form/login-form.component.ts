import { Component, OnInit } from '@angular/core';
import { CONFIG } from 'src/app/app.config';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  config: any;
  hide: boolean;
  userEmail: String;
  userPassword: String;
  isUserStudent: Boolean;
  isUserVolunteer: Boolean;

  invalidEmail: Boolean;

  constructor() { 
    this.userEmail = "";
    this.userPassword = "";
    this.hide = true;
    this.isUserStudent = false;
    this.isUserVolunteer = false;
    this.config = CONFIG;

    this.invalidEmail = false;
  }

  ngOnInit(): void {
  }

  onBlur(event: any, fieldName: String): void {
    console.log("Student : " + this.isUserStudent + " and Volunteer: " + this.isUserVolunteer);
    if(fieldName === 'email') {
      this.userEmail = event.target.value;
      if(!this.userEmail.match(this.config.emailPattern)){
        this.invalidEmail = true;
      }else {
        this.invalidEmail = false;
      }
      
    }
    if(fieldName === "password") {
      this.userPassword = event.target.value;
    }
  }

  submitForm(): void {    
    let request = this.prepareRequest();
    console.log(request);
  }

  prepareRequest(): any {
    return {
      "email" : this.userEmail,
      "password": this.userPassword,
      "student" : this.isUserStudent,
      "volunteer" : this.isUserVolunteer
    }
  }

}
