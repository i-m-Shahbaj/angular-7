import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppHeader} from './Header/header.component';
import {AppForm} from './form/form.component';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { UserModule } from '../user/user.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './services/user.service';
class Book {
    constructor(public title) { }
}

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppForm
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'fcc-book-trading'),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
