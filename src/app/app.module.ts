import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppHeader} from './Header/header.component';
import {AppForm} from './form/form.component';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { UserModule } from '../user/user.module';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
class Book {
    constructor(public title) { }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    environment,
    AngularFireModule.initializeApp(environment.firebase, 'fcc-book-trading'),
    FormsModule,
    UserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
    public books: FirebaseListObservable<Book[]>;
    constructor(db: AngularFireDatabase) {
        this.books = db.list('/books');
    }
}
