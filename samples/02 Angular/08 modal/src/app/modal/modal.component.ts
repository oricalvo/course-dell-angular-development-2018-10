import {
  Component,
  ComponentFactoryResolver,
  HostBinding,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ModalRef, ModalService} from "../modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild("marker", {read: ViewContainerRef}) marker: ViewContainerRef;
  @HostBinding("class.opened") opened: boolean = false;
  lastModalRef: ModalRef<any>;

  constructor(modalService: ModalService, private cfr: ComponentFactoryResolver) {
    console.log("ModalComponent", ModalComponent);

    modalService.instance = this;
  }

  ngOnInit() {
    console.log("marker", this.marker);
  }

  show<T>(componentType: any): ModalRef<T> {
    const factory = this.cfr.resolveComponentFactory(componentType);

    const compRef: any = this.marker.createComponent(factory);

    this.opened = true;

    const modalRef = new ModalRef<T>(compRef);
    this.lastModalRef = modalRef;

    return modalRef;
  }

  close(okOrCancel: boolean) {
    if(this.lastModalRef) {
      this.lastModalRef.resolve(okOrCancel);
      this.opened = false;
      this.lastModalRef.compRef.destroy();
      this.lastModalRef = null;
    }
  }
}
