import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from 'src/stubs/requestStatus.json';

var requestStatus = data;

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  public getRequestStatus(): Observable<any> {
    return of(requestStatus);
  }
}
