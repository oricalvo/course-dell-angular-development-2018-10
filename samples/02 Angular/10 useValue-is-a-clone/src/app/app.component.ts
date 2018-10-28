import {Component, Inject} from '@angular/core';
import {MyService} from "./my.service";
import {MY_TOKEN} from "./admin/admin.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(@Inject(MY_TOKEN) myService: MyService) {
    console.log("myService", myService);
  }
}
