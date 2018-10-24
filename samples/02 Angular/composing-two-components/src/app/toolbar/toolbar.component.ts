import { Component, OnInit } from '@angular/core';
import {appService} from '../app.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  filterStr: string;

  constructor() { }

  ngOnInit() {
  }

  filter() {
    appService.runFilter(this.filterStr);
  }

  refresh() {
    appService.refreshContacts();
  }
}
