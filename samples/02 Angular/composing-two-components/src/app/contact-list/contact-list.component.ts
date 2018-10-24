import { Component, OnInit } from '@angular/core';
import {appStore, Contact} from '../appStore';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  get contacts(): Contact[] {
    return appStore.contacts;
  }

  trackByFn(index, item) {
    return index;
  }
}

