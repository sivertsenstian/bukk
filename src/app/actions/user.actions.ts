import { Action } from '@ngrx/store';
import { User, Game, UserId } from '@core';

export enum UserActionTypes {
  InitUser = '[User] Init User',
  LoadUser = '[User] Load User',
  LoadUserSuccess = '[User][Success] Load User',
  LoadUserGames = '[User] Load UserGames',
  LoadUserGamesSuccess = '[User][Success] Load UserGames',
  UpdateUserField = '[User] Update Field',
  VerifyLichessAccount = '[User] Verify Lichess Account',
  VerifyLichessAccountSuccess = '[User][Success] Verify Lichess Account',
  VerifyLichessAccountFailure = '[User][Failure] Verify Lichess Account'
}

export class InitUser implements Action {
  readonly type = UserActionTypes.InitUser;

  constructor(public payload: UserId) { }
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.LoadUser;

  constructor(public payload: UserId) { }
}

export class LoadUserSuccess implements Action {
  readonly type = UserActionTypes.LoadUserSuccess;

  constructor(public payload: User) { }
}

export class LoadUserGames implements Action {
  readonly type = UserActionTypes.LoadUserGames;

  constructor(public payload: UserId) { }
}

export class LoadUserGamesSuccess implements Action {
  readonly type = UserActionTypes.LoadUserGamesSuccess;

  constructor(public payload: Game[]) { }
}

export class UpdateUserField implements Action {
  readonly type = UserActionTypes.UpdateUserField;

  constructor(public payload: [string, any]) { }
}

export class VerifyLichessAccount implements Action {
  readonly type = UserActionTypes.VerifyLichessAccount;

  constructor(public payload: string) { }
}

export class VerifyLichessAccountSuccess implements Action {
  readonly type = UserActionTypes.VerifyLichessAccountSuccess;

  constructor(public payload: any) { }
}

export class VerifyLichessAccountFailure implements Action {
  readonly type = UserActionTypes.VerifyLichessAccountFailure;
  readonly error: boolean = true;

  constructor(public payload: any) { }
}

export type UserActions =
  | InitUser
  | LoadUser
  | LoadUserSuccess
  | LoadUserGames
  | LoadUserGamesSuccess
  | UpdateUserField
  | VerifyLichessAccount
  | VerifyLichessAccountSuccess
  | VerifyLichessAccountFailure;
