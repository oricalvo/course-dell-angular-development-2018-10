import {Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ClockComponent} from "./clock/clock.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("marker", {read: ViewContainerRef}) marker: ViewContainerRef;
  compRef: ComponentRef<ClockComponent>;

  constructor(private cfr: ComponentFactoryResolver) {
  }

  ngOnInit() {
    console.log("marker", this.marker);
  }

  create() {
    if(this.compRef) {
      this.compRef.destroy();
      this.compRef = null;
    }

    const factory = this.cfr.resolveComponentFactory(ClockComponent);

    this.compRef = this.marker.createComponent(factory);
  }
}
