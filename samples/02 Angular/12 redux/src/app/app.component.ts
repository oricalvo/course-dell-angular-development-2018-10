import {Component} from '@angular/core';
import {AppStore} from "./appStore";
import {reload} from "./thunks";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appStore: AppStore) {
    console.log("appStore", appStore);
  }

  get contacts() {
    return this.appStore.getState().contacts;
  }

  reload() {
    this.appStore.dispatch(reload())
  }
}
