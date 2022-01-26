import { Component, OnInit } from '@angular/core';
import { CONSTANT } from '../app.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  notificationMessage: string;
  notification: boolean;
  notificationType: string;
  constant: any;

  constructor() {
    this.notificationMessage = "";
    this.notification = false;
    this.notificationType = "";
    this.constant = CONSTANT;
  }

  ngOnInit(): void {

    if(history?.state?.status === "logout") {
      this.notificationMessage = this.constant.logoutMessage;
      this.notification = true;
      this.notificationType = "success";
    }
  }

  closeNotification(): void {
    this.notification = false;
    this.notificationMessage = "";
  }

}
