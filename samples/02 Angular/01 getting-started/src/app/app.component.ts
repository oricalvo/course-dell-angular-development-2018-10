import { Component } from '@angular/core';
import {createLogger} from './logger';

const log = createLogger("AppComponent");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];
  showClock: boolean;

  constructor() {
    log("ctor");

    this.contacts = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
      {"id": 3, "name": "Udi"}
    ];

    this.showClock = true;
  }

  toggle() {
    this.showClock = !this.showClock;
  }
}

interface Contact {
    id: number;
    name: string;
}

