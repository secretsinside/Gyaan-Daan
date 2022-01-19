import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetail: any;
  userEmail: any;

  constructor(private studentService: StudentService) {
    this.userEmail = "";
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
  }

}
