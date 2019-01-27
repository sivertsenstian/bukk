import { Action } from '@ngrx/store';
import { Game } from '../models';

export enum GamesActionTypes {
  LoadGames = '[Games] Load Games',
  LoadGamesSuccess = '[Games][Success] Load Games'
}

export class LoadGames implements Action {
  readonly type = GamesActionTypes.LoadGames;

  constructor() {}
}

export class LoadGamesSuccess implements Action {
  readonly type = GamesActionTypes.LoadGamesSuccess;

  constructor(public payload: Game[]) {}
}

export type GamesActions = LoadGames | LoadGamesSuccess;
