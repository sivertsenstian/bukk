import * as dotp from 'dot-prop-immutable-chain';
import { UserActions, UserActionTypes } from '@actions';
import { User, Game, LOAD } from '@core';

export interface UserState {
  loading: { entity: LOAD; games: LOAD };
  entity: User;
  games: Game[];
}

export const initialUserState: UserState = {
  loading: { entity: LOAD.Init, games: LOAD.Init },
  entity: null,
  games: []
};

export function UserReducer(
  state = initialUserState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.LoadUser: {
      return dotp(state)
        .set('loading.entity', LOAD.Busy)
        .value();
    }
    case UserActionTypes.LoadUserSuccess: {
      return dotp(state)
        .set('entity', action.payload)
        .set('loading.entity', LOAD.Success)
        .value();
    }
    case UserActionTypes.LoadUserGames: {
      return dotp(state)
        .set('loading.games', LOAD.Busy)
        .value();
    }
    case UserActionTypes.LoadUserGamesSuccess: {
      return dotp(state)
        .set('games', action.payload)
        .set('loading.games', LOAD.Success)
        .value();
    }
    case UserActionTypes.UpdateUserField: {
      const [path, value] = action.payload;
      return dotp(state)
        .set(`entity.${path}`, value)
        .value();
    }
    default:
      return state;
  }
}
