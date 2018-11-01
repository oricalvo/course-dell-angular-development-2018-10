import {Action} from "redux";
import {AppState} from "./appState";
import {SET_CONTACTS, SET_LOADING} from "./actions";

export function rootReducer(state: AppState, action): AppState {
  if(action.type == SET_CONTACTS) {
    return {
      ... state,
      contacts: action.contacts,
    }
  }
  else if(action.type == SET_LOADING) {
    return {
      ...state,
      loading: action.loading,
    }
  }

  return state;
}
