import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { UserId, Email } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: CollectionReference;
  games: CollectionReference;

  constructor(private db: AngularFirestore) {
    this.users = this.db.collection('users').ref;
    this.games = this.db.collection('games').ref;
  }

  add(email: Email) {
    return this.users.add({
      email,
      rating: 1500,
      lichess_account: null
    });
  }

  getById(id: UserId) {
    return this.users.where('id', '==', id).get();
  }

  getByEmail(email: string) {
    return this.users.where('email', '==', email).get();
  }

  getAllGamesForUserById(id: UserId) {
    console.log('GETALLGAMESFORUSERANDSTUFF');
    console.log(id);
    return [
      this.games.where('white', '==', id).get(),
      this.games.where('black', '==', id).get()
    ];
  }

  getAll() {
    return this.users.get();
  }
}
