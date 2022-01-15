import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  constructor(private http: HttpClient) { }

  loginUser(req: any): Observable<any> {
    let url: any = environment.loginUrl;
    return this.http.post(url, req);
  }
}
