import * as dotp from 'dot-prop-immutable-chain';
import { CommonActions, CommonActionTypes } from '../actions/common.actions';
import { User } from '../models';

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

      console.log('LOGIN SUCCESS');
      console.log(user);

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
