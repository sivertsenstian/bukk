import { GameActions, GameActionTypes } from '../actions/game.actions';
import { Game, LOAD, GameEntity, GameType, GameResult } from '../models';

export interface GameState {
  loading: { entity: LOAD; games: LOAD };
  entity: Game;
}

export const initialState: GameState = {
  loading: { entity: LOAD.Init, games: LOAD.Init },
  entity: null
};

export function GameReducer(
  state = initialState,
  action: GameActions
): GameState {
  switch (action.type) {
    case GameActionTypes.LoadGameSuccess: {
      const loading = state.loading;
      return {
        ...state,
        entity: action.payload,
        loading: { ...loading, entity: LOAD.Success }
      };
    }
    case GameActionTypes.NewGame: {
      const entity = new GameEntity();
      entity.type = GameType.Rapid;
      return { ...initialState, entity };
    }
    default:
      return state;
  }
}
