import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AsyncPipe} from "@angular/common";

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

    const x: AsyncPipe
  }

  noop() {
  }

  change() {
    const contact = {
      id: -1,
      name: "XXX"
    };

    const newContacts = this.contacts.slice();
    newContacts.splice(0, 0, contact);
    this.contacts = newContacts;

    // this.title = "XXX";

    // this.http.get("/assets/contacts.json").toPromise();

    // setTimeout(function() {
    // }, 0);
    //
    // setTimeout(function() {yarn st
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
