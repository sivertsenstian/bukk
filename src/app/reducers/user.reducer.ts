import { UserActions, UserActionTypes } from '../actions/user.actions';

export interface UserState {
  name: string;
}

export const initialState: UserState = {
  name: 'test'
};

export function UserReducer(
  state = initialState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.SampleAction:
      return { ...state, name: 'jensen' };
    default:
      return state;
  }
}
