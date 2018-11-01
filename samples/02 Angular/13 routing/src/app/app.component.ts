import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true
})
export class AppComponent {
  title = 'app';

  constructor(private appService: AppService) {
  }

  gotoAbout($event) {
    // store.dispatch(gotoAbout());

    this.appService.gotoAbout();

    $event.preventDefault();
  }
}
