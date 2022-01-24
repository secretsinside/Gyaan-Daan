import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {MatDialog} from '@angular/material/dialog';
import { TimeSlotModal } from 'src/util/time-slot-modal/time-slot-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetail: any;
  userEmail: any;
  slots: any;
  days: any[];

  constructor(private studentService: StudentService,
    private matDialog: MatDialog) {
    this.userEmail = "";
    this.days = [];

    // following has to be service call
    this.slots = "";
  }

  ngOnInit(): void {

    this.studentService.getUserDetail(this.userEmail).subscribe(
      (data: any) => {
        this.userDetail = data.responseInfo;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.studentService.getPreferredSlots(this.userDetail.name).subscribe(
      (data: any) => {
        this.slots = data.responseInfo;
        console.log(this.slots);
      },
      (error: any) => {
        console.log(error);
      }
    );

    for(let k in this.slots) {
      this.days.push(k);
    }
  }

  removeSlot(day: any, slot: any): void {
    this.slots[day].splice(slot, 1);

  }

  addSlot(day: any): void {
    const dialogRef = this.matDialog.open(TimeSlotModal,
      {
        data: {
          "value" : this.slots[day]}
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      console.log(this.slots)
    });
  }

}