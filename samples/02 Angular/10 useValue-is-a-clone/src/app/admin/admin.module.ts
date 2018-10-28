import {InjectionToken, NgModule, Injector} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyService} from "../my.service";
import {HttpClient} from "@angular/common/http";

export const MY_TOKEN = new InjectionToken("MY_TOKEN");

// const myService = new MyService();
const myService = {
  id: 1,
  name: "Ori",
  address: {},
};

export function myServiceFactory() {
  return myService;
}

myService.address["self"] = myService;

console.log("myService", myService);

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    // MyService,
    {provide: MY_TOKEN, useFactory: myServiceFactory},
  ]
})
export class AdminModule {
  constructor(injector: Injector) {
    console.log("AdminModule.injector", injector);
  }
}
