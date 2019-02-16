import { LOAD, GameResult, GameType } from '../../src/app/models';
import {
  UserReducer,
  initialUserState,
  UserState
} from '../../src/app/reducers';

import {
  InitUser,
  LoadUser,
  LoadUserSuccess,
  LoadUserGames,
  LoadUserGamesSuccess
} from '../../src/app/actions';

const testData = {
  id: 'TEST_USER_ID',
  user: {
    id: 'TEST_USER_ID',
    avatar: 'http://www.some-avatar.com/1.jpg',
    email: 'test@usertest.com',
    lichessAccount: 'test@lichessaccount.org',
    rating: 1337
  },
  games: [
    {
      id: 'TEST_GAME_1',
      date: new Date(),
      white: 'TEST_USER_WHITE',
      black: 'TEST_USER_BLACK',
      result: GameResult.White,
      online: true,
      type: GameType.Blitz
    },

    {
      id: 'TEST_GAME_2',
      date: new Date(),
      white: 'TEST_USER_WHITE',
      black: 'TEST_USER_BLACK',
      result: GameResult.Black,
      online: false,
      type: GameType.Classic
    }
  ]
};

const resultOf = (actions): UserState =>
  actions.reduce(UserReducer, initialUserState);

test('Initial state', () => {
  expect(initialUserState.loading).toEqual({
    entity: LOAD.Init,
    games: LOAD.Init
  });
  expect(initialUserState.entity).toBeNull();
  expect(initialUserState.games).toEqual([]);
});

test('ACTION: InitUser', () => {
  expect(resultOf([new InitUser(testData.id)])).toEqual(initialUserState);
});

test('ACTION: LoadUser', () => {
  const nextState = resultOf([new LoadUser(testData.id)]);

  expect(nextState.loading.entity).toEqual(LOAD.Busy);
});

test('ACTION: LoadUserSuccess', () => {
  const nextState = resultOf([new LoadUserSuccess(testData.user)]);

  expect(nextState.loading.entity).toEqual(LOAD.Success);
  expect(nextState.entity).toEqual(testData.user);
});

test('ACTION: LoadUserGamesSuccess', () => {
  const nextState = resultOf([new LoadUserGamesSuccess(testData.games)]);

  expect(nextState.loading.games).toEqual(LOAD.Success);
  expect(nextState.games).toEqual(testData.games);
});
