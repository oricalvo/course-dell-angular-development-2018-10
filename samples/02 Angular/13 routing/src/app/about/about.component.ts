import { Component, OnInit } from '@angular/core';
import {appStore} from "../appStore";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get title() {
    return appStore.aboutTitle;
  }
}
