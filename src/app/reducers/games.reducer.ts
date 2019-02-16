import { GamesActions, GamesActionTypes } from '../actions/games.actions';
import { LOAD, Game } from '../models';

export interface GamesState {
  entities: { [key: number]: Game };
  loading: LOAD;
}

export const initialState: GamesState = {
  entities: {},
  loading: LOAD.Init
};

export function GamesReducer(
  state = initialState,
  action: GamesActions
): GamesState {
  switch (action.type) {
    case GamesActionTypes.LoadGames:
      return { ...state, loading: LOAD.Busy };
    case GamesActionTypes.LoadGamesSuccess:
      console.log(action);
      const games = action.payload;
      console.log(games);
      return {
        ...state,
        entities: games.reduce((r: { [key: number]: Game }, g: Game) => {
          return { ...r, [g.id]: g };
        }, {}),
        loading: LOAD.Success
      };
    default:
      return state;
  }
}
