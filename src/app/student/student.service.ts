import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import RequestData from 'src/stubs/requestStatus.json';
import StudentData from 'src/stubs/studentDetail.json';
import VolunteerData from 'src/stubs/volunteer.json'
import StudentTimeSlot from 'src/stubs/timeSlotStudent.json';

var requestStatus = RequestData;
var studentDetail = StudentData;
var studenTimeSlot = StudentTimeSlot;
var volunteerData = VolunteerData;

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  public getRequestStatus(): Observable<any> {
    return of(requestStatus);
  }

  public getUserDetail(userEmail: String, userType: string): Observable<any> {
    if(userType === 'student'){
      return of(studentDetail);
    }else{
      return of(volunteerData);
    }
  }

  public getPreferredSlots(userEmail: String): Observable<any> {
    return of(studenTimeSlot);
  }
}
