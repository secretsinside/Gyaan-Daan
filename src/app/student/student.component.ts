import { Component, OnInit } from '@angular/core';
import { CONFIG, CONSTANT } from '../app.config';
import { DeviceDetectorService } from 'ngx-device-detector';

import { StudentService } from './student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  config: any;
  constant: any;

  userDetail: any;
  userEmail: string;
  userType: string;

  sideNavOpen: boolean;
  isMobileDevice: boolean;
  contentWindow: String;
  studentSideOptions: String[];

  constructor(private deviceService: DeviceDetectorService,
    private studentService: StudentService,
    private router: Router) {
    this.config = CONFIG;
    this.constant = CONSTANT;

    this.userEmail = history.state.userEmail;
    this.userType = history.state.userType;

    this.sideNavOpen = true;
    this.isMobileDevice = this.deviceService.isMobile();
    this.contentWindow = this.constant.student.DASHBOARD;
    this.studentSideOptions = [];
  }

  ngOnInit(): void {

    console.log("hello email is ", this.userType);

    this.studentService.getUserDetail(this.userEmail, this.userType).subscribe(
      (data: any) => {
        this.userDetail = data.responseInfo;
      },
      (error: any) => {
        console.log(error);
      }
    );

    for(let k in this.constant.student) {
      this.studentSideOptions.push(this.constant.student[k]);
    }

    this.sideNavOpen = this.isMobileDevice ? false : true;
    
  }

  openSideNav(): void {
    this.sideNavOpen = true;
  }

  closeSideNav() {
    this.sideNavOpen = this.isMobileDevice ? false : true;
  }

  onResize(event: any) {
    this.setSidenavToggleAble(event.target.innerWidth);
  }

  setSidenavToggleAble(width: number){
    if(width < this.config.mobileWidth){
      this.isMobileDevice = true;
    }else{
      this.isMobileDevice = false;
      this.sideNavOpen = true;
    }
  }

  logout(): void {
    this.router.navigate(["/login"], {
      state: {
        "userId": this.userEmail,
        "status": "logout"
      }
    });
  }

}
