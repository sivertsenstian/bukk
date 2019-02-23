import { take } from 'lodash';
import { UsersActions, UsersActionTypes } from '@actions';
import { User, LOAD, UserId, Podium } from '@core';

export interface UsersState {
  entities: { [key: number]: User };
  podium: Podium;
  loading: LOAD;
  selectedUserId: UserId | null;
}

export const initialState: UsersState = {
  entities: {},
  podium: { gold: null, silver: null, bronze: null },
  loading: LOAD.Init,
  selectedUserId: null
};

export function UsersReducer(
  state = initialState,
  action: UsersActions
): UsersState {
  switch (action.type) {
    case UsersActionTypes.LoadUsers:
      return { ...state, loading: LOAD.Busy };
    case UsersActionTypes.LoadUsersSuccess:
      const users = action.payload,
        [gold, silver, bronze] = take(
          users.sort((a, b) => b.rating - a.rating),
          3
        );
      return {
        ...state,
        entities: users.reduce((r: { [key: number]: User }, u: User) => {
          return { ...r, [u.id]: u };
        }, {}),
        podium: { gold, silver, bronze },
        loading: LOAD.Success
      };
    default:
      return state;
  }
}
