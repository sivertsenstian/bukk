import { Action } from '@ngrx/store';

export enum CommonActionTypes {
  SampleAction = '[Common] Sample'
}

export class SampleAction implements Action {
  readonly type = CommonActionTypes.SampleAction;

  constructor() {}
}

export type CommonActions = SampleAction;
