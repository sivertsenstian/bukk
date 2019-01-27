import { Action } from '@ngrx/store';

export enum UserActionTypes {
  SampleAction = '[User] Sample'
}

export class SampleAction implements Action {
  readonly type = UserActionTypes.SampleAction;

  constructor() {}
}

export type UserActions = SampleAction;
