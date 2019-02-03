import { Injectable } from '@angular/core';
import { GetGame, GetGames, AddGame } from '../faker';
import { GameId, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor() {}

  add(game) {
    return AddGame(game);
  }

  getById(id: GameId) {
    return GetGame(id);
  }

  getAll() {
    return GetGames();
  }
}
