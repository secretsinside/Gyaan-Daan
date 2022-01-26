import { Component } from '@angular/core';

import * as Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // userAuthenticated: boolean;
  title = 'Gyaan-Daan';

  url = 'http://localhost:9090/notifications/';
  client: any;
  greeting: any;

  constructor() {
    // this.userAuthenticated = false;
    this.connection();
  }

  connection(){
    let ws = new SockJS(this.url);
    this.client = Stomp.over(ws);
    let that = this;

    this.client.connect({userId: "sagarika.nangia@gmail.com"}, function(frame: any) {
      that.client.subscribe("/queue/volunteer/sagarika.nangia@gmail.com/notification", (message: any) => {
        console.log(message);
        if(message.body) {
          that.greeting = message.body;
		  //$(".msg").append(this.greeting)
		  $(".msg").html(that.greeting)
        }
      });
    });
  }
}
