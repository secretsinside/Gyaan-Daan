import { Component, OnInit } from '@angular/core';
import { CONFIG, CONSTANT } from '../app.config';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  config: any;
  constant: any;

  sideNavOpen: boolean;
  isMobileDevice: boolean;
  contentWindow: String;
  studentSideOptions: String[];

  constructor(private deviceService: DeviceDetectorService) {
    this.config = CONFIG;
    this.constant = CONSTANT;

    this.sideNavOpen = true;
    this.isMobileDevice = this.deviceService.isMobile();
    this.contentWindow = this.constant.student.DASHBOARD;
    this.studentSideOptions = [];
  }

  ngOnInit(): void {

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

}
