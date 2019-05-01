import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {User} from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) {

  }
  registerUser(user: User) {
      return this.firestore.collection('users').add(user);
  }
}
