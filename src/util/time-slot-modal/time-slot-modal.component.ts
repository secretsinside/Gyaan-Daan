import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'time-slot-modal',
  templateUrl: './time-slot-modal.component.html',
  styleUrls: ['./time-slot-modal.component.css']
})
export class TimeSlotModal implements OnInit {

  fromTime: any;
  toTime: any;
  invalidTime: boolean;

  constructor(public dialogRef: MatDialogRef<TimeSlotModal>,
    @Inject(MAT_DIALOG_DATA) public data: {value: String[]}) {
      this.invalidTime = false;
    }

  ngOnInit(): void {
  }

  onBlur(event: any, field: String): void {
    if(field == 'fromTime') {
      this.fromTime = event.target.value;
    }

    if(field == 'toTime') {
      this.toTime = event.target.value;
    }
  }

  addTime(): void {
    if(this.isValidInput()){
      this.data.value.push(this.fromTime + "-" + this.toTime);
      this.dialogRef.close(this.data.value);
    }
  }

  isValidInput(): boolean {
    if(this.fromTime == "" || this.toTime == ""){
      this.invalidTime = true;
      return false;
    }
    return true;
  }
}
