export interface Contact {
  id: number;
  name: string;
  counter: number;
}

export interface AppState {
  contacts: Contact[];
  originalContacts: Contact[];
  filter: string;
}

export const appStore: AppState = {
  originalContacts: [
    {"id": 1, "name": "Ori", counter: 0},
    {"id": 2, "name": "Roni", counter: 0},
    {"id": 3, "name": "Udi", counter: 0}
  ],
  contacts: [],
  filter: "",
};

appStore.contacts = appStore.originalContacts;

