import * as dotp from 'dot-prop-immutable-chain';
import { Injectable } from '@angular/core';
import { GameId } from '../models';
import { CollectionReference, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
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
    console.log(`GETTING ${id}`);
    return this.games.doc(id).get();
  }

  getAll() {
    return this.games.get();
  }
}
