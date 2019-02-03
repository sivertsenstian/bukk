import { GameActions, GameActionTypes } from '../actions/game.actions';
import { Game, LOAD, GameEntity, GameType, GameResult } from '../models';
import dotp from 'dot-prop-immutable-chain';

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
      return dotp(state)
        .set('entity', action.payload)
        .set('loading.entity', LOAD.Success)
        .value();
    }
    case GameActionTypes.NewGame: {
      const entity = new GameEntity();
      entity.type = GameType.Rapid;
      entity.online = true;
      return dotp(state)
        .set('entity', entity)
        .value();
    }
    case GameActionTypes.UpdateGame: {
      const {
        payload: [path, val]
      } = action;
      return dotp(state)
        .set(`entity.${path}`, val)
        .value();
    }
    default:
      return state;
  }
}
