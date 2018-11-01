import {
  Directive,
  ElementRef,
  Input,
  KeyValueDiffer,
  KeyValueDiffers,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class MyIfDirective {
  marker: ViewContainerRef;

  constructor(template: TemplateRef<any>) {
    console.log("templateXXX", template);
  }

  run() {
    this.marker.createEmbeddedView()
  }
}
