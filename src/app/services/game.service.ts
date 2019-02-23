import * as dotp from 'dot-prop-immutable-chain';
import { Injectable } from '@angular/core';
import { CollectionReference, AngularFirestore } from '@angular/fire/firestore';
import { GameId } from '@core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games: CollectionReference;
  users: CollectionReference;

  constructor(private db: AngularFirestore) {
    this.games = this.db.collection('games').ref;
    this.users = this.db.collection('users').ref;
  }

  //TODO: Fix this
  add(game) {
    let newGame = dotp(game)
      .set('white', this.users.doc(game.white))
      .set('black', this.users.doc(game.black))
      .value();
    return this.games.add(newGame);
  }

  getById(id: GameId) {
    return this.games.doc(id).get();
  }

  getAll() {
    return this.games.get();
  }
}
