import { Component, OnInit } from '@angular/core';
import {Contact} from "../app.component";
import {ModalService} from "../modal.service";

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {
  contact: Contact;

  constructor(private modalService: ModalService) {
    console.log("ConfirmDeleteComponent.ctor");
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("ConfirmDeleteComponent.ngOnDestroy");
  }

  ok() {
    this.modalService.close(true);
  }

  cancel() {
    this.modalService.close(false);
  }
}
