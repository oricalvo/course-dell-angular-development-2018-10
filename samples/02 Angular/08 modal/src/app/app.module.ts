import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { ModalComponent } from './modal/modal.component';
import {ModalService} from "./modal.service";

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDeleteComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ModalService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmDeleteComponent,
  ]
})
export class AppModule { }
