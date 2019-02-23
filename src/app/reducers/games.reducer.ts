import { GamesActions, GamesActionTypes } from '@actions';
import { LOAD, Game } from '@core';

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
      const games = action.payload;
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
