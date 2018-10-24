import {Component, ElementRef, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0;

  constructor(private elementRef: ElementRef<HTMLElement>, private zone: NgZone) {
  }

  run() {
    this.zone.runOutsideAngular(()=> {
      this.elementRef.nativeElement.addEventListener("mousemove", () => {
        // console.log("3rd pary mouse move");
        this.zone.runGuarded(()=> {
          console.log("counter", ++this.counter);
        });
      });
    });
  }
}
