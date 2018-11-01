import {Directive, ElementRef, Input, KeyValueDiffer, KeyValueDiffers} from '@angular/core';

@Directive({
  selector: '[myClass]'
})
export class MyClassDirective {
  @Input("myClass") options: any;
  differ: KeyValueDiffer<string, boolean>;

  constructor(private element: ElementRef, private differs: KeyValueDiffers) {
  }

  ngOnChanges() {
    console.log("ngOnChanges", this.options);

    this.differ = this.differs.find(this.options).create();

    for (let className in this.options) {
      if (this.options[className]) {
        this.element.nativeElement.classList.add(className);
      }
      else {
        this.element.nativeElement.classList.remove(className);
      }
    }
  }

  ngDoCheck() {
    console.log("ngDoCheck");
    const changes = this.differ.diff(this.options);

    if(changes) {
      changes.forEachItem(change => {
        console.log("CHANGE", change);

        if (change.currentValue) {
          this.element.nativeElement.classList.add(change.key);
        }
        else {
          this.element.nativeElement.classList.remove(change.key);
        }
      });
    }
  }
}
