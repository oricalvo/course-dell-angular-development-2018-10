import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyService} from "../my.service";

export const MY_TOKEN = new InjectionToken("MY_TOKEN");

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    // MyService,
    {provide: MY_TOKEN, useClass: MyService},
  ]
})
export class AdminModule { }
