import * as dotp from 'dot-prop-immutable-chain';
import { CommonActions, CommonActionTypes } from '@actions';
import { User } from '@core';

export interface CommonState {
  currentUser: User;
  isLoggedIn: boolean;
  authentication: {
    token: string;
  };
}

export const initialState: CommonState = {
  currentUser: null,
  isLoggedIn: false,
  authentication: { token: null }
};

export function CommonReducer(
  state = initialState,
  action: CommonActions
): CommonState {
  switch (action.type) {
    case CommonActionTypes.RegisterNewUserSuccess:
    case CommonActionTypes.LoginSuccess: {
      const { user, token } = action.payload;

      return dotp(state)
        .set('currentUser', user)
        .set('isLoggedIn', true)
        .set('authentication.token', token)
        .value();
    }
    case CommonActionTypes.LogoutSuccess: {
      return initialState;
    }
    default:
      return state;
  }
}
