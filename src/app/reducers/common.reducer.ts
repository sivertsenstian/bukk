import { CommonActions, CommonActionTypes } from '../actions/common.actions';

export interface CommonState {
  name: string;
}

export const initialState: CommonState = {
  name: 'test'
};

export function CommonReducer(
  state = initialState,
  action: CommonActions
): CommonState {
  switch (action.type) {
    case CommonActionTypes.SampleAction:
      return { ...state, name: 'jensen' };
    default:
      return state;
  }
}
