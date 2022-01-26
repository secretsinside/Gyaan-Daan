import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

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

  seePendingRequest: boolean;
  acceptedRequest: any;
  hideNotification: boolean;
  pendingRequest: any;

  constructor(private studentService: StudentService) {
    this.seeRequestStatus = false;
    this.notification = false;
    this.notificationType = "";
    this.notificationMessage = "";
    this.hideNotification = false;
    this.seePendingRequest = false;
  }

  ngOnInit(): void {
    if(this.userDetail.userType === 'volunteer'){
      this.studentService.getAcceptedRequest(this.userDetail.email).subscribe(
        (data: any) => {
          this.acceptedRequest = data.responseInfo;
        },
        (error: any) => {
          console.log(error);
        }
      )
    }
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

  openPendingRequestWindow(): void {
    this.hideNotification = true;
    this.studentService.getEligibleRequest(this.userDetail.email).subscribe(
      (data: any) => {
        this.pendingRequest = data.responseInfo;
        this.seePendingRequest = true;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  openAcceptedRequestWindow(): void {
    this.seePendingRequest = false;
  }

  rejectRequest(event: any, requestId: any): void {
    if(event.target.innerText == 'cancel') {
      this.pendingRequest = this.pendingRequest.filter((e: any)=> {
        return (e.requestId != requestId);
      });
    }else{
      this.pendingRequest = this.pendingRequest.filter((e: any)=> {
        return (e.requestId != requestId);
      });
    }
  }

}
