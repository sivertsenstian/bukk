import { UserActions, UserActionTypes } from '../actions/user.actions';
import { User, Game, LOAD } from '../models';

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
      const loading = state.loading;
      return {
        ...state,
        loading: { ...loading, entity: LOAD.Busy }
      };
    }
    case UserActionTypes.LoadUserSuccess: {
      const loading = state.loading;
      return {
        ...state,
        entity: action.payload,
        loading: { ...loading, entity: LOAD.Success }
      };
    }
    //FIXME: Something something
    case UserActionTypes.LoadUserGames: {
      const loading = state.loading;
      return {
        ...state,
        loading: { ...loading, games: LOAD.Busy }
      };
    }
    case UserActionTypes.LoadUserGamesSuccess: {
      const loading = state.loading;
      return {
        ...state,
        games: action.payload,
        loading: { ...loading, games: LOAD.Success }
      };
    }
    default:
      return state;
  }
}
