import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import {FormsModule} from '@angular/forms';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContactListComponent,
    StatusBarComponent,
    NewContactComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(appRef: ApplicationRef) {
    window["appRef"] = appRef;
  }
}
