import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, Injectable, Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Http, HttpModule} from "@angular/http";

async function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

function loadConfig(myService: MyService) {
  return async () => {
    console.log("Loading config");
    await delay(1500);
    console.log("Loading config DONE");
  }
}

@Injectable()
class MyService {
  constructor(httpClient: HttpClient) {
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: loadConfig, deps: [MyService], multi: true},
    MyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
