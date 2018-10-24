import {appStore} from './appStore';
import {ApplicationRef} from '@angular/core';

class AppService {
  @Activity()
  runFilter(filter: string) {
    appStore.filter = filter;
    appStore.contacts = this.calcFilteredContacts();
  }

  @Activity()
  addContact(name: string) {
    if(!name) {
      throw new Error("Must specify non empty name");
    }

    const contact = {
      id: -1,
      name,
      counter: 0,
    };

    appStore.originalContacts.splice(0,0,contact);
    appStore.originalContacts.push(contact);
  }

  @Activity()
  refreshContacts() {
    appStore.originalContacts = appStore.contacts = [
      {"id": 4, "name": "Ori", counter: 0},
      {"id": 5, "name": "Roni", counter: 0},
      {"id": 6, "name": "Udi", counter: 0}
    ];
  }

  private calcFilteredContacts() {
    // return appStore.originalContacts;
    return appStore.originalContacts.filter(c => c.name.indexOf(appStore.filter)!=-1);;
  }
}

function Activity() {
  return function(target, desc) {
    const original = target[desc];

    target[desc] = function() {
      console.log("Activity", desc);

      const retVal = original.apply(this, arguments);

      const appRef:ApplicationRef = window["appRef"];
      appRef.tick();

      return retVal;
    }

    return original;
  }
}

export const appService: AppService = new AppService();
