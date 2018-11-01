import {AnyAction, createStore, Dispatch, Reducer, Store, Unsubscribe, applyMiddleware} from "redux";
import {rootReducer} from "./reducers";
import {AppState} from "./appState";
import {InjectionToken} from "@angular/core";
import thunk, {ThunkDispatch} from "redux-thunk";
import {SET_LOADING} from "./actions";

const initialState: AppState = {
  contacts: null,
  loading: false,
};

const loadingMiddleware = store => next => async action => {
  console.log("loadingMiddleware", action);

  const retVal = next(action);

  if(retVal && retVal.then) {
    store.dispatch({
      type: SET_LOADING,
      loading: true,
    });

    const before = performance.now();
    console.log("BEGIN");

    retVal.then(function() {
      const after = performance.now();
      console.log("END " + (after-before));

      store.dispatch({
        type: SET_LOADING,
        loading: false,
      });
    }).catch(err => {
      // store.dispatch({
      //   type: SET_ERROR,
      //   error: err,
      // });
    });
  }
}

export function createAppStore() {
  const store = createStore(rootReducer,
                  initialState,
                  applyMiddleware(loadingMiddleware, thunk));
  return store;
}

// export const APP_STORE = new InjectionToken<any>("APP_STORE");

export abstract class AppStore {
  abstract dispatch: ThunkDispatch<AppState, any, AnyAction>;
  abstract getState(): AppState;
  abstract replaceReducer(nextReducer: Reducer<AppState, AnyAction>): void;
  abstract subscribe(listener: () => void): Unsubscribe;
}

export const APP_STORE_PROVIDER = {
  provide: AppStore,
  useFactory: createAppStore,
}

