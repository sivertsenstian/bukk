import { CommonReducer } from './common.reducer';
import { UserReducer } from './user.reducer';
import { UsersReducer } from './users.reducer';
import { GameReducer } from './game.reducer';
import { GamesReducer } from './games.reducer';

export const AppState = {
  common: CommonReducer,
  user: UserReducer,
  users: UsersReducer,
  game: GameReducer,
  games: GamesReducer
};

export * from './user.reducer';
