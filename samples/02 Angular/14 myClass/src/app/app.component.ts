import {Component, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // active: boolean = false;
  @ViewChild("myTemplate") myTemplate: TemplateRef<any>;

  constructor() {
    console.log("myTemplate", this.myTemplate);
  }

  ngOnInit() {
    console.log("myTemplate", this.myTemplate);
  }

  options = {
    active: false,
  }

  noop() {
    // this.active = !this.active;

    // this.options.active = !this.options.active;

    this.options = {
      active: !this.options.active
    }
  }
}
