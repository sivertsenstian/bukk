import { Injectable } from '@angular/core';
import { GetGame, GetGames } from '../faker';
import { GameId } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor() {}

  getById(id: GameId) {
    return GetGame(id);
  }

  getAll() {
    return GetGames();
  }
}
