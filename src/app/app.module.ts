import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppHeader} from './Header/header.component'
import {AppForm} from './form/form.component'
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppForm,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
