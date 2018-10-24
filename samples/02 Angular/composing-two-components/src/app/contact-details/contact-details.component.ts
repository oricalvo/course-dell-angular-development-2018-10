import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../appStore';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input() contact: Contact;

  constructor() { }

  ngOnInit() {
    console.log("ContactDetailsComponent.ngOnInit");
  }

  ngOnDestroy() {
    console.log("ContactDetailsComponent.ngOnDestroy");
  }

  dec() {
    --this.contact.counter;
  }

  inc() {
    ++this.contact.counter;
  }
}
