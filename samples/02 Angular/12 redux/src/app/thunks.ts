import {Contact} from "./appState";
import {SET_CONTACTS, SET_LOADING} from "./actions";

export function appInit() {
  console.log("appInit");

  return async (dispatch) => {
    await delay(1500);

    dispatch(setContacts([
      {id: 1, name: "Ori"},
      {id: 2, name: "Roni"},
    ]));
  }
}

export function setContacts(contacts: Contact[]) {
  console.log("setContacts", contacts);

  return {
    type: SET_CONTACTS,
    contacts,
  };
}

export function setLoading(loading: boolean) {
  console.log("setLoading", loading);

  return {
    type: SET_LOADING,
    loading,
  };
}

export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function reload() {
  console.log("reload");

  return async (dispatch) => {
    await delay(1000);

    dispatch(setContacts([
      {id: 1, name: "Ori"},
      {id: 2, name: "Roni"},
      {id: 3, name: "Udi"},
    ]));
  }
}
