import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-past-request',
  templateUrl: './past-request.component.html',
  styleUrls: ['./past-request.component.css']
})
export class PastRequestComponent implements OnInit {

  requestStatus: any;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getRequestStatus().subscribe(
      (data: any) => {
        this.requestStatus = data.responseInfo ? data.responseInfo : "";
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
