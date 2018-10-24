import { Component } from '@angular/core';

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
    const modalRef: ModalRef = this.modalService.show(ConfirmDeleteComponent);
    modalRef.instance.contact = contact;
    if(await modalRef.waitForClose()) {
      this.contacts.splice(index, 1);
    }
  }
}

interface Contact {
    id: number;
    name: string;
}

