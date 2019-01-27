import { Action } from '@ngrx/store';

export enum GameActionTypes {
  SampleAction = '[Game] Sample'
}

export class SampleAction implements Action {
  readonly type = GameActionTypes.SampleAction;

  constructor() {}
}

export type GameActions = SampleAction;
