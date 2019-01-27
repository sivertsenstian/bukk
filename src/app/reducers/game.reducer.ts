import { GameActions, GameActionTypes } from '../actions/game.actions';

export interface GameState {
  name: string;
}

export const initialState: GameState = {
  name: 'test'
};

export function GameReducer(
  state = initialState,
  action: GameActions
): GameState {
  switch (action.type) {
    case GameActionTypes.SampleAction:
      return { ...state, name: 'jensen' };
    default:
      return state;
  }
}
