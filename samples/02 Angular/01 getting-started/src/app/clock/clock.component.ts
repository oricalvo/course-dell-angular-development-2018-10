import { Component, OnInit } from '@angular/core';
import {createLogger} from '../logger';

const log = createLogger("ClockComponent");

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time: Date;
  intervalId: any;

  constructor() {
    this.time = new Date();
  }

  ngOnInit() {
    log("ngOnInit");

    this.intervalId = setInterval(()=> {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    log("ngOnDestroy");

    if(this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
