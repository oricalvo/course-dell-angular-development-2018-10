import { Component, OnInit } from '@angular/core';
import {AppStore} from "../appStore";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private appStore: AppStore) { }

  ngOnInit() {
  }

  get loading() {
    return this.appStore.getState().loading;
  }

}
