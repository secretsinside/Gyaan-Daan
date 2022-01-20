import { Component, OnInit } from '@angular/core';
import { CONSTANT } from 'src/app/app.config';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {

  constant: any;
  subjects: String[];
  classes: String[];
  selectedSubject: String;
  selectedClass: String;

  invalidSubject: boolean;
  invalidClass: boolean;
  subjectDropdownError: String;
  classDropdownError: String;


  constructor() {

    this.constant = CONSTANT;

    this.subjects = [];
    this.classes = [];
    this.selectedSubject = "";
    this.selectedClass = "";

    this.invalidSubject = false;
    this.invalidClass = false;
    this.subjectDropdownError = "";
    this.classDropdownError = "";

  }

  ngOnInit(): void {
    for(let k in this.constant.subjects) {
      this.subjects.push(k);
    }
    this.subjects.sort();

    this.classes = this.constant.classes;
  }

  submitForm(): void {
    
  }

}
