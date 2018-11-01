import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {APP_STORE_PROVIDER, AppStore} from "./appStore";
import {appInit} from "./thunks";
import { LoadingComponent } from './loading/loading.component';

export function appInitializerFactory(appStore: AppStore) {
  return async function appInitializer() {
    appStore.dispatch(appInit());
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    APP_STORE_PROVIDER,
    {provide: APP_INITIALIZER, useFactory: appInitializerFactory, deps: [AppStore], multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
