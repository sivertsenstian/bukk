import { Action } from '@ngrx/store';
import { User } from '../models';

export enum UsersActionTypes {
  LoadUsers = '[Users] Load Users',
  LoadUsersSuccess = '[Users][Success] Load Users'
}

export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LoadUsers;

  constructor() {}
}

export class LoadUsersSuccess implements Action {
  readonly type = UsersActionTypes.LoadUsersSuccess;

  constructor(public payload: User[]) {}
}

export type UsersActions = LoadUsers | LoadUsersSuccess;
