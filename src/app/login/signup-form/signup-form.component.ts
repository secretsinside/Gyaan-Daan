import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { CONFIG, CONSTANT } from 'src/app/app.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  config: any;
  constant: any;

  userEmail: String;
  userPassword: String;
  userConfirmPassword: String;
  userDOB: any;
  isUserStudent: Boolean;
  isUserVolunteer: Boolean;
  invalidUserType: Boolean;


  invalidEmail: Boolean;
  invalidPassword: Boolean;
  invalidConfirmPassword: Boolean;

  emailErrorMsg: String;
  passwordErrorMsg: String;
  confirmPasswordErrorMsg: String;

  hidePassword: Boolean;
  hideConfirmPassword: Boolean;

  constructor(private router: Router) {
    this.config = CONFIG;
    this.constant = CONSTANT;
    this.userEmail = "";
    this.userPassword = "";
    this.userConfirmPassword = "";
    this.userDOB = "";
    this.isUserStudent = false;
    this.isUserVolunteer = false;
    this.invalidUserType = false;
    
    this.invalidEmail = false;
    this.invalidPassword = false;
    this.invalidConfirmPassword = false;

    this.emailErrorMsg = "";
    this.passwordErrorMsg = "";
    this.confirmPasswordErrorMsg = "";

    this.hidePassword = true;
    this.hideConfirmPassword = true;
  }

  ngOnInit(): void {
  }

  onBlur(event: any, fieldName: String): void {
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

    if(fieldName === "confirmPassword") {
      this.userConfirmPassword = event.target.value;
      if(this.userConfirmPassword === "") {
        this.invalidConfirmPassword = true;
        this.confirmPasswordErrorMsg = this.constant.passwordError.required;
      }else if(this.userConfirmPassword.length < this.config.password.minLength){
        this.invalidConfirmPassword = true;
        this.confirmPasswordErrorMsg = this.constant.passwordError.minLength;
        this.confirmPasswordErrorMsg = this.confirmPasswordErrorMsg.replace("<x>", this.config.password.minLength);
      }else if(this.userConfirmPassword.length > this.config.password.maxLength){
        this.invalidConfirmPassword = true;
        this.confirmPasswordErrorMsg = this.constant.passwordError.maxLength;
        this.confirmPasswordErrorMsg = this.confirmPasswordErrorMsg.replace("<x>", this.config.password.maxLength);
      }else if(this.userPassword != this.userConfirmPassword){
        this.invalidConfirmPassword = true;
        this.confirmPasswordErrorMsg = this.constant.passwordError.confirmPasswordNotMatching;
      }
      else{
        this.invalidConfirmPassword = false;
      }      
    }
  }

  handleDate(event: MatDatepickerInputEvent<Date>): void {
    this.userDOB = event.value;
  }

  submitForm(): void {
    this.router.navigate(['/student']);
  }

}
