import { Component } from '@angular/core';
import {ClockComponent} from "./clock/clock.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  remove() {
    dialogService.show(ClockComponent);
  }
}
