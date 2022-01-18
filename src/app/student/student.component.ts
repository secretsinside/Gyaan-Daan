import { Component, OnInit } from '@angular/core';
import { CONSTANT } from '../app.config';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constant: any;

  sideNavOpen: boolean;
  isMobileDevice: boolean;
  contentWindow: String;
  studentSideOptions: String[];

  constructor() {
    this.constant = CONSTANT;

    this.sideNavOpen = true;
    this.isMobileDevice = false;
    this.contentWindow = this.constant.student.DASHBOARD;
    this.studentSideOptions = [];
  }

  ngOnInit(): void {

    for(let k in this.constant.student) {
      this.studentSideOptions.push(this.constant.student[k]);
    }
    
  }

}
