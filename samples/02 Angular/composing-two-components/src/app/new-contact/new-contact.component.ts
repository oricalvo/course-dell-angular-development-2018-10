import { Component, OnInit } from '@angular/core';
import {appService} from '../app.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  name: string;

  constructor() { }

  ngOnInit() {
  }

  add() {
    appService.addContact(this.name);
  }
}
