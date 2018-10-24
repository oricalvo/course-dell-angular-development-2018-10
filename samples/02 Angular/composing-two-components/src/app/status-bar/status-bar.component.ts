import { Component, OnInit } from '@angular/core';
import {appStore} from '../appStore';
import {appService} from '../app.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get count() {
    return appStore.contacts.length;
  }

  get total() {
    return appStore.originalContacts.length;
  }
}
