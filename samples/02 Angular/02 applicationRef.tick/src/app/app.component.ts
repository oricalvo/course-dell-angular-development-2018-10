import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  contacts = [];

  constructor(private http: HttpClient) {
    const data = [
        {"id": 1, "name": "Ori"},
        {"id": 2, "name": "Roni"},
        {"id": 3, "name": "Udi"}
    ];

    for(let i=0; i<3333; i++) {
      for(let j=0; j<data.length; j++) {
        this.contacts.push({
          ... data[j]
        });
      }
    }
  }

  change() {
    // this.title = "XXX";

    this.http.get("/assets/contacts.json").toPromise();

    // setTimeout(function() {
    // }, 0);
    //
    // setTimeout(function() {
    // }, 0);
    //
    // setTimeout(function() {
    // }, 0);
    //
    // setTimeout(function() {
    // }, 0);
    //
    // setTimeout(function() {
    // }, 0);
  }
}
