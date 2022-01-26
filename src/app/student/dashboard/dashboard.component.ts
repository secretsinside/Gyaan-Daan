import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() userDetail: any;
  @Input() constant: any;

  seeRequestStatus: boolean;
  notification: boolean;
  notificationType: string;
  notificationMessage: string;

  constructor() {
    this.seeRequestStatus = false;
    this.notification = false;
    this.notificationType = "";
    this.notificationMessage = "";
  }

  ngOnInit(): void {
  }

  raiseNotification(event: any): void {
    this.notificationMessage = this.constant.newRequest[event.status];
    this.notificationType = event.status;
    this.notification = true;
  }

  closeNotification(): void {
    this.notification = false;
    this.notificationMessage = "";
  }

}
