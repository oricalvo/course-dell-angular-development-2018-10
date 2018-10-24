import {Component, Injector, OnInit, Optional} from '@angular/core';
import {DialogService} from "../dialog/dialog.component";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  // constructor(injector: Injector) {
  //   console.log("ClockComponent.ctor");
  //
  //   const service = injector.get(DialogService, null);
  //   console.log("service", service);
  // }

  constructor(@Optional() dialogService: DialogService) {
    console.log("ClockComponent.ctor", dialogService);

    // const service = injector.get(DialogService, null);
    // console.log("service", service);
  }
  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("ClockComponent.ngOnDestroy");
  }
}
