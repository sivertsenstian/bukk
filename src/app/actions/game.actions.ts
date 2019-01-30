import { Action } from '@ngrx/store';
import { GameId, Game } from '../models';

export enum GameActionTypes {
  InitGame = '[Game] Init Game',
  LoadGame = '[Game] Load Game',
  LoadGameSuccess = '[Game][Success] Load Game',
  NewGame = '[NewGame] Init'
}

export class NewGame implements Action {
  readonly type = GameActionTypes.NewGame;

  constructor() {}
}

export class InitGame implements Action {
  readonly type = GameActionTypes.InitGame;

  constructor(public payload: GameId) {}
}

export class LoadGame implements Action {
  readonly type = GameActionTypes.LoadGame;

  constructor(public payload: GameId) {}
}

export class LoadGameSuccess implements Action {
  readonly type = GameActionTypes.LoadGameSuccess;

  constructor(public payload: Game) {}
}

export type GameActions = InitGame | LoadGame | LoadGameSuccess | NewGame;
