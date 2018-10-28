import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import {AdminModule, MY_TOKEN} from "./admin/admin.module";
import {MyService, MyServiceEx} from "./my.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
  ],
  providers: [
    // MyService,
    // {provide: MY_TOKEN, useClass: MyServiceEx}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    console.log("AppModule.injector", injector);
  }
}
