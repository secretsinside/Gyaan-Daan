import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() notification: EventEmitter<any>;


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

    this.notification = new EventEmitter();

  }

  ngOnInit(): void {
    for(let k in this.constant.subjects) {
      this.subjects.push(k);
    }
    this.subjects.sort();

    this.classes = this.constant.classes;
  }

  sendRequest(): void {
    this.notification.emit({
      status: 'success',
      requestId: '123455'
    });

    this.cleanForm();
  }

  cleanForm(): void {
    this.selectedSubject = "";
    this.selectedClass = "";
  }

}
