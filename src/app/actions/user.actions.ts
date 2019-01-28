import { Action } from '@ngrx/store';
import { User, Game, UserId } from '../models';

export enum UserActionTypes {
  InitUser = '[User] Init User',
  LoadUser = '[User] Load User',
  LoadUserSuccess = '[User][Success] Load User',
  LoadUserGames = '[User] Load UserGames',
  LoadUserGamesSuccess = '[User][Success] Load UserGames'
}

export class InitUser implements Action {
  readonly type = UserActionTypes.InitUser;

  constructor(public payload: UserId) {}
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.LoadUser;

  constructor(public payload: UserId) {}
}

export class LoadUserSuccess implements Action {
  readonly type = UserActionTypes.LoadUserSuccess;

  constructor(public payload: User) {}
}

export class LoadUserGames implements Action {
  readonly type = UserActionTypes.LoadUserGames;

  constructor(public payload: UserId) {}
}

export class LoadUserGamesSuccess implements Action {
  readonly type = UserActionTypes.LoadUserGamesSuccess;

  constructor(public payload: Game[]) {}
}

export type UserActions =
  | InitUser
  | LoadUser
  | LoadUserSuccess
  | LoadUserGames
  | LoadUserGamesSuccess;
