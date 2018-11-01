import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyClassDirective } from './my-class.directive';
import {MyIfDirective} from "./myIf";

@NgModule({
  declarations: [
    AppComponent,
    MyClassDirective,
    MyIfDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
