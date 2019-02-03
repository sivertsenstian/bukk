import { Action } from '@ngrx/store';
import { GameId, Game } from '../models';

export enum GameActionTypes {
  InitGame = '[Game] Init Game',
  LoadGame = '[Game] Load Game',
  LoadGameSuccess = '[Game][Success] Load Game',
  NewGame = '[Game] Init',
  UpdateGame = '[Game] Update',
  CreateGame = '[Game] Create',
  CreateGameSuccess = '[Game][Success] Create'
}

export class NewGame implements Action {
  readonly type = GameActionTypes.NewGame;

  constructor() {}
}

export class CreateGame implements Action {
  readonly type = GameActionTypes.CreateGame;

  constructor(public payload: Game) {}
}

export class CreateGameSuccess implements Action {
  readonly type = GameActionTypes.CreateGameSuccess;

  constructor(public payload: Game) {}
}

export class InitGame implements Action {
  readonly type = GameActionTypes.InitGame;

  constructor(public payload: GameId) {}
}

export class LoadGame implements Action {
  readonly type = GameActionTypes.LoadGame;

  constructor(public payload: GameId) {}
}

export class UpdateGame implements Action {
  readonly type = GameActionTypes.UpdateGame;

  constructor(public payload: any) {}
}

export class LoadGameSuccess implements Action {
  readonly type = GameActionTypes.LoadGameSuccess;

  constructor(public payload: Game) {}
}

export type GameActions =
  | InitGame
  | LoadGame
  | LoadGameSuccess
  | NewGame
  | UpdateGame
  | CreateGame
  | CreateGameSuccess;
