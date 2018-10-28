import {ComponentRef, Injectable} from '@angular/core';
import {ModalComponent} from "./modal/modal.component";

// @Injectable({
//   providedIn: 'root'
// })
export class ModalService {
  instance: ModalComponent;

  constructor() { }

  show<T>(componentType): ModalRef<T> {
    return this.instance.show<T>(componentType);
  }

  close(okOrCancel: boolean) {
    this.instance.close(okOrCancel);
  }
}

export class ModalRef<T> {
  promise;
  resolve;
  reject;

  constructor(public compRef: ComponentRef<T>) {
    this.promise = new Promise((resolve, reject)=> {
      this.resolve = resolve;
      this.reject = reject;
    });
  }

  get instance(): T {
    return this.compRef.instance;
  }

  waitForClose(): Promise<boolean> {
    return <any>this.promise;
  }
}

