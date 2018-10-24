import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule, NgZone} from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(appRef: ApplicationRef) {
    const originalTick = appRef.tick;
    let counter = 0;

    appRef.tick = function() {
      console.log("CHANGE DETECTION:", ++counter);
      originalTick.apply(this, arguments);
    }
  }
}
