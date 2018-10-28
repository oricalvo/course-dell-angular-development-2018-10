import { Component } from '@angular/core';
import {ConfirmDeleteComponent} from "./confirm-delete/confirm-delete.component";
import {ModalRef, ModalService} from "./modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];

  constructor(private modalService: ModalService) {
    this.contacts = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
      {"id": 3, "name": "Udi"}
    ];
  }

  async remove(contact: Contact, index: number) {
    const modalRef = this.modalService.show<ConfirmDeleteComponent>(ConfirmDeleteComponent);
    modalRef.instance.contact = contact;
    if(await modalRef.waitForClose()) {
      this.contacts.splice(index, 1);
    }
  }
}

export interface Contact {
    id: number;
    name: string;
}

